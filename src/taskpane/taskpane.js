/* eslint-disable no-undef */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document, Office, Word */

Office.onReady((info) => {
  if (info.host === Office.HostType.Word) {
    document.getElementById("run").onclick = run;
  }
});

export async function run() {
  return Word.run(async (context) => {
    // /**
    //  * Insert your Word code here
    //  */

    // // insert a paragraph at the end of the document.
    // const paragraph = context.document.body.insertParagraph("AARO SYSTEMS", Word.InsertLocation.end);

    // // change the paragraph color to blue.
    // paragraph.font.color = "blue";

    // create a range object for the document body

    const htmlDiv = document.querySelector("#tableTest");

    const range = context.document.body;

    // add the HTML code to the range
    // range.insertHtml('<div class="card">...</div>', "End");
    range.insertHtml(htmlDiv.outerHTML, "End");

    // create a new paragraph for the link element
    const paragraph = range.insertParagraph("", "Before");

    // add a run for the link element
    const linkRun = paragraph.insertRun();
    linkRun.insertHtml('<script src="./../../assets/vendor/js/helpers.js" type="text/javascript"></script>');

    // load the linkRun object
    context.load(linkRun, "html");

    // execute the queued commands and return a promise
    return context.sync().then(function () {
      console.log("Link element added successfully.");
    });

    // await context.sync();
  });
}

Office.onReady((info) => {
  if (info.host === Office.HostType.Word) {
    document.getElementById("templateSubmit").onclick = submitForm;
  }
});

async function submitForm() {
  const fileInput = document.getElementById("bs-validation-upload-file");
  const file = fileInput.files[0];
  console.log(file);

  if (file) {
    const reader = new FileReader();

    reader.readAsText(file);

    const data = await new Promise((resolve, reject) => {
      reader.onload = () => {
        const jsonData = JSON.parse(reader.result);
        console.log(jsonData);
        resolve(jsonData);
      };

      reader.onerror = () => {
        console.log("Error reading file.");
        reject();
      };
    });
    console.log(data);
    await insertTextIntoDocument(data);
  }
}

async function insertTextIntoDocument(data) {
  return Word.run(async (context) => {
    const headers = data.headers[0];
    const rows = data.rows;
    // Create the table
    const table = context.document.body.insertTable(rows.length + 1, headers.length, Word.InsertLocation.end);

    // Insert the headers
    const cells = table.tableRows.getFirst().getCells();
    for (let i = 0; i < headers.length; i++) {
      cells.items[i].insertText(headers[i].description, Word.InsertLocation.end);
    }

    // Insert the data rows
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const newRow = table.insertRow(Word.InsertLocation.end);
      const newCells = newRow.getCells();

      for (let j = 0; j < row.values.length; j++) {
        newCells.items[j].insertText(row.values[j].value.toString(), Word.InsertLocation.end);
      }
    }

    // Select the table and insert it into the document
    table.select();
    const tableElement = table.getHtml();
    Office.context.document.setSelectedDataAsync(
      tableElement,
      {
        coercionType: Office.CoercionType.Table,
      },
      function (asyncResult) {
        if (asyncResult.status === Office.AsyncResultStatus.Failed) {
          console.error(asyncResult.error.message);
        } else {
          console.log("Table inserted successfully");
        }
      }
    );

    await context.sync();
  });
}

// async function insertTextIntoDocument(data) {
//   return Word.run(async (context) => {
//     const headers = data.headers[0];
//     const rows = data.rows;

//     // Insert the table at the end of the document
//     const table = context.document.body.insertTable(rows.length + 1, headers.length, Word.InsertLocation.end);

//     // Insert the header row
//     const headerRow = table.headerRow;
//     for (let i = 0; i < headers.length; i++) {
//       headerRow.getRange().getTableCells()[i].insertText(headers[i].description, Word.InsertLocation.end);
//     }

//     // Insert the data rows
//     for (let i = 0; i < rows.length; i++) {
//       const rowValues = rows[i].values;
//       const row = table.insertRow(Word.InsertLocation.end);
//       for (let j = 0; j < rowValues.length; j++) {
//         row.getRange().getTableCells()[j].insertText(rowValues[j].value.toString(), Word.InsertLocation.end);
//       }
//     }

//     await context.sync();
//     console.log("Table inserted successfully");
//   });
// }

// async function insertTextIntoDocument(data) {
//   return Word.run(async (context) => {
//     const headers = data.headers[0];
//     const rows = data.rows;
//     const table = context.document.body.insertTable(rows.length + 1, headers.length, Word.InsertLocation.end);
//     const cells = table.tableRows.getFirst().getCells();

//     for (let i = 0; i < headers.length; i++) {
//       cells.items[i].insertText(headers[i].description, Word.InsertLocation.end);
//     }

//     for (let i = 0; i < rows.length; i++) {
//       const row = rows[i];
//       const newRow = table.insertRow(Word.InsertLocation.end);
//       const newCells = newRow.getCells();

//       newCells.items[0].insertText(row.header.description, Word.InsertLocation.end);

//       for (let j = 0; j < row.values.length; j++) {
//         newCells.items[j + 1].insertText(row.values[j].value.toString(), Word.InsertLocation.end);
//       }
//     }

//     await context.sync();
//     console.log("Table inserted successfully");
//   });
// }

// async function insertTextIntoDocument(data) {
//   return Word.run(async (context) => {
//     const headers = data.headers[0];
//     const rows = data.rows;
//     const table = context.document.body.insertTable(rows.length + 1, headers.length, Word.InsertLocation.end);
//     const cells = table.tableRows.getFirst().getCells();

//     for (let i = 0; i < headers.length; i++) {
//       cells.items[i].insertText(headers[i].description, Word.InsertLocation.end);
//     }

//     for (let i = 0; i < rows.length; i++) {
//       const row = rows[i];
//       const newRow = table.insertRow(Word.InsertLocation.end);
//       const newCells = newRow.getCells();

//       newCells.items[0].insertText(row.header.description, Word.InsertLocation.end);

//       for (let j = 0; j < row.values.length; j++) {
//         newCells.items[j + 1].insertText(row.values[j].value.toString(), Word.InsertLocation.end);
//       }
//     }

//     await context.sync();
//     console.log("Table inserted successfully");
//   });
// }
