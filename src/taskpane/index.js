/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// import { exit } from "process";

/* global document, Office, Word */

// eslint-disable-next-line office-addins/no-office-initialize
Office.onReady((info) => {
  if (info.host === Office.HostType.Word) {

    document.getElementById("submitReport").onclick = function () {
      var data = '';
      var selectValue = document.getElementById("select2Icons").value;
      var tableTemplateSelect = document.getElementById('reportName').value;

      localStorage.setItem('templateSelected', selectValue);


      console.log(selectValue);
      console.log("tableTemplateSelect");

      const ColumnRadioButtons = document.getElementsByName("columnAlignment");
      let firstColumnAlignment;

      for (const ColumnRadioButton of ColumnRadioButtons) {
        if (ColumnRadioButton.checked) {
          firstColumnAlignment = ColumnRadioButton.value;
          break;
        }
      }

      if (firstColumnAlignment == undefined) {
        firstColumnAlignment = 'left'
      }
      // console.log(firstColumnAlignment);


      const RowRadioButtons = document.getElementsByName("RowAlignment");
      let firstRowAlignment;

      for (const RowRadioButton of RowRadioButtons) {
        if (RowRadioButton.checked) {
          firstRowAlignment = RowRadioButton.value;
          break;
        }
      }

      if (firstRowAlignment == undefined) {
        firstRowAlignment = 'left'
      }
      // console.log(firstRowAlignment);

      let decimalPlace = document.getElementById("decimalPlace").value.trim();
      // console.log(decimalPlace); 
      if (!decimalPlace) {
        decimalPlace = 2
      }

      const apiData = localStorage.getItem('apiData');
      const api_data = JSON.parse(apiData);
      // console.log(api_data)
      let report_data = null;
      if (api_data) {
        report_data = api_data;
        // console.log(report_data);
      }
      //   console.log('tableTemplateSelect -> ' + selectValue);
      insertTable(selectValue, report_data, firstColumnAlignment, firstRowAlignment, decimalPlace, tableTemplateSelect);
      console.log("noteThree Done");
    }

    document.getElementById("refreshReport").onclick = async function () {
      var templateSelected = localStorage.getItem('templateSelected');
      console.log(templateSelected);

      await Word.run(async function (context) {
        // Get the selected table in the document
        var tableRange = context.document.getSelection();
        // console.log(tableRange)
        await context.sync();
        const table = tableRange.parentTable;
        table.load();
        await context.sync();
        // Log the table style
        // Check if a table is selected
        if (tableRange && tableRange.parentTable) {
          // Delete the selected table
          let oldTableStyle = table.style;
          console.log(oldTableStyle)


          //var style = theTable.style;
          console.log("Style:".style);


          var contentControls = tableRange.contentControls;
          console.log(contentControls)
          contentControls.load("items, items/tag");
          await context.sync();

          const contentControl = contentControls.items[0];
          const serializedData = contentControl.tag;
          let {
            tableTemplateSelect,
            selectValue,
            data
          } = JSON.parse(serializedData);

          console.log(tableTemplateSelect)
          console.log(data)
          console.log(selectValue)

          tableRange.parentTable.delete();

          insertTable(selectValue, data, '', '', '', templateSelected);
        } else {
          console.log('No table is selected.');
        }

        return context.sync()
          .then(function () {
            console.log('Selected table deleted.');
          })
          .catch(function (error) {
            console.log('Error: ' + error.message);
          });
      }).catch(function (error) {
        console.log('Error: ' + error.message);
      });

      // data = note3_data();
      // insertTable(selectValue, data, firstColumnAlignment, firstRowAlignment, decimalPlace);

    };


    document.getElementById("TestReport").onclick = getTables;

    // Set up the Word object model proxy.
    document.getElementById("refreshAll").onclick = async function () {
      try {
        await Word.run(async (context) => {
          // Get the tables in the current selection or the entire document.
          const tables = context.document.body.tables;

          console.log(tables)
          // Load the tables and their properties.
          await context.sync();
          tables.load("items");


          // Run the queued commands to execute the operations.
          await context.sync();

          // Process the retrieved tables.
          const contentControls = context.document.contentControls;
          contentControls.load('id');
          await context.sync();

          for (let index = 0; index < tables.items.length; index++) {

            console.log("INDEX:", index);
            const table = tables.items[index];
            
            const originalPosition = await getParagraphBeforeSpecificTable(index);

            const range = table.getRange();
            var line_number = range.load("startLineNumber");

            await context.sync();
            console.log(`Line NO - ${JSON.stringify(line_number)}`);

            // Ensure there is at least one content control associated with the table.
            if (contentControls.items.length > index) {
              // Load properties for synchronization.
              contentControls.items[index].load('tag');
              await context.sync();

              // Retrieve the tag from the content control.
              const tag = contentControls.items[index].tag;
              // Process the tag data.
              const new_data = JSON.parse(tag);

              // // if ( index == 2 ) {
                
                console.log("Original Position:", originalPosition);
              table.delete();
              insertTable(new_data.selectValue, new_data.data, '', '', '', new_data.tableTemplateSelect);
              console.log("Previous Table deleted and New Table inserted");

              // // }

              console.log(`Report Name - ${new_data.tableTemplateSelect}`);
              console.log(`Table ${index + 1} - ${new_data.reportID}`);
              // console.log(`Data - ${JSON.stringify(new_data.data)}`);
              console.log(`Template - ${new_data.selectValue}`);

            } else {
              console.warn(`Content control not found for table ${index + 1}`);
            }
          }
        });
      } catch (error) {
        // Handle errors.
        console.error(error);
      }

    }

  }
});


async function getParagraphBeforeSpecificTable(tableIndex) {
  try {
    await Word.run(async (context) => {
      // Get the tables in the document.
      const tables = context.document.body.tables;

      // Load the tables and their properties.
      tables.load("items");
      await context.sync();

      // Get the specific table by its index.
      const specificTable = tables.items[tableIndex];

      // Check if the table has a previous sibling.
      if (!specificTable.hasPreviousSibling()) {
        console.log("No paragraph before the table.");
        return;
      }

      // Get the paragraph before the table.
      const previousParagraph = specificTable.getPreviousSibling();

      // Check if the previous sibling is a paragraph.
      if (!previousParagraph.isParagraphObject) {
        console.log("Previous sibling is not a paragraph.");
        return;
      }

      // Load the paragraph properties.
      previousParagraph.load("text");
      await context.sync();

      // Access the text content of the paragraph.
      const paragraphText = previousParagraph.text;

      // Do something with the paragraph text (e.g., log it).
      console.log("Previous paragraph text:", paragraphText);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function findTableOriginalPosition(tableId) {
  let originalPosition = -1;

  await Word.run(async (context) => {
    const bookmarks = context.document.body.bookmarks;

    // Get all bookmarks
    const paragraphCount = context.document.body.paragraphs.getCount();
    console.log("paragraph Count -" , paragraphCount);
    // Load bookmarks
    bookmarks.load("items");

    // Synchronize and execute the queued commands
    await context.sync();

    // Check if there are bookmarks
    if (bookmarks.items.length > 0) {
      // Iterate through bookmarks to find the one with the specified ID
      for (let i = 0; i < bookmarks.items.length; i++) {
        const bookmark = bookmarks.items[i];
        bookmark.load("tag, paragraphs");
      }

      // Synchronize and execute the queued commands
      await context.sync();

      // Iterate through bookmarks to find the one with the specified ID
      for (let i = 0; i < bookmarks.items.length; i++) {
        const bookmark = bookmarks.items[i];

        if (bookmark.tag && bookmark.tag.includes(tableId)) {
          originalPosition = bookmark.paragraphs.getFirst().index;
          break;
        }
      }
    } else {
      console.warn("No bookmarks found.");
    }
  });

  return originalPosition;
}


async function findTableByIndexAndGetPosition(tableIndex) {
  try {
    let originalPosition = -1;

    await Word.run(async (context) => {
      const body = context.document.body;
      const paragraphs = body.paragraphs;

      // Load the paragraphs and tables for synchronization
      paragraphs.load("items");
      const tables = body.tables;
      tables.load("items");
      await context.sync();


      if (tableIndex >= 0 && tableIndex < tables.items.length) {
        const targetTable = tables.items[tableIndex];
        const targetTableRange = targetTable.getRange();
        console.log("TABLE ITEMS:", tables.items.length);
        // Iterate through the paragraphs to find the original position
        for (let i = 0; i < paragraphs.items.length; i++) {
          const paragraph = paragraphs.items[i];
          const paragraphRange = paragraph.getRange();

          await context.sync();

          console.log("paragraph start:", paragraphRange.start);
          console.log("paragraph end:", paragraphRange.end);

          console.log("targetTableRange start:", targetTableRange.start);
          console.log("targetTableRange end:", targetTableRange.start);


          // Check if the start position of the table range is within the paragraph range
          if (targetTableRange.start >= paragraphRange.start && targetTableRange.start <= paragraphRange.end) {
            originalPosition = i;
            break;
          }
        }

        console.log("Original Position:", originalPosition);
      }
      // Check if the table index is within the bounds
      if (tableIndex >= 0 && tableIndex < tables.items.length) {
        const targetTable = tables.items[tableIndex];

        // Iterate through the paragraphs to find the original position
        for (let i = 0; i < paragraphs.items.length; i++) {

          const paragraph = paragraphs.items[i];

          // Check if the range of the paragraph intersects with the range of the target table
          if (targetTable.getRange().start >= paragraph.getRange().start && targetTable.getRange().end <= paragraph.getRange().end) {
            originalPosition = i;
            break;
          }
        }

        console.log("Original Position:", originalPosition);
      } else {
        console.warn("Table index is out of bounds.");
      }

      // Synchronize and execute the queued commands
      await context.sync();
    });


  } catch (error) {
    // Handle errors
    console.error(error);
    return -1; // Return a default value indicating an error
  }
}



async function getTables() {
  try {
    await Word.run(async (context) => {
      // Get the tables in the current selection or the entire document.
      const tables = context.document.body.tables;

      console.log(tables)
      // Load the tables and their properties.
      await context.sync();
      tables.load("items");
      // Run the queued commands to execute the operations.
      await context.sync();
      // Process the retrieved tables.
      const contentControls = context.document.contentControls;
      contentControls.load('id');
      await context.sync();
      for (let index = 0; index < tables.items.length; index++) {
        const table = tables.items[index];
        // Ensure there is at least one content control associated with the table.
        if (contentControls.items.length > index) {
          // Load properties for synchronization.
          contentControls.items[index].load('tag');
          await context.sync();
          // Retrieve the tag from the content control.
          const tag = contentControls.items[index].tag;

          // console.log('Tag from Content Control:', tag);
          // Process the tag data.
          const new_data = JSON.parse(tag);
          console.log(`Report Name - ${new_data.tableTemplateSelect}`);
          console.log(`Table ${index + 1} - ${new_data.reportID}`);
          console.log(`Data - ${JSON.stringify(new_data.data)}`);
          console.log(`Template - ${new_data.selectValue}`);
        } else {
          console.warn(`Content control not found for table ${index + 1}`);
        }
      }
    });
  } catch (error) {
    // Handle errors.
    console.error(error);
  }
}

// Event handler for document selection changes.
async function onSelectionChanged(eventArgs) {
  // Do something when the selection changes, if needed.
}

async function tableEdit() {
  return Word.run(async function (context) {
    var range = context.document.getSelection();

    console.log(range);
    range.font.color = "black";
    range.load("text");

    const tableCollection = context.document.body.tables;
    tableCollection.load("items");
    await context.sync();
    const firstTable = tableCollection.items[0];

    const rows = firstTable.rows;
    rows.load("items");
    await context.sync();

    // Load the cells for each row, starting from the second row (index 1)

    console.log(rows.items.length);
    // Apply the alignment to each cell, starting from the second cell (index 1) in each row
    for (let i = 1; i < rows.items.length; i++) {
      const row = rows.items[i];

      // Load cells for each row
      const cells = row.cells;
      cells.load("items/horizontalAlignment");
      await context.sync();

      // Start from the second cell (index 1)
      for (let j = 1; j < cells.items.length; j++) {
        cells.items[j].horizontalAlignment = Word.Alignment.right;
      }
    }
    await context.sync();

    return context.sync().then(function () {
      console.log('The selected text was "' + range.text + '".');
    });
  });
}
let trackedContentControls = [];

async function insertTable(
  selectValue,
  data,
  firstColumnAlignment,
  firstRowAlignment,
  decimalPlace,
  tableTemplateSelect
) {
  let templateSelected = localStorage.getItem('templateSelected');

  console.log('decimal places ' + decimalPlace)
  console.log('decimal places ' + templateSelected)
  // console.log('first Column Alignment ' + firstColumnAlignment)
  // console.log('first Row Alignment ' + firstRowAlignment)
  const tableData = [];

  // Extract headers
  for (let i = 0; i < data.headers.length; i++) {
    const headers = data.headers[i].map((header) => header.code || '');
    tableData.push(headers);
  }

  console.log(data)
  // Extract rows
  for (let row of data.rows) {
    const rowData = [row[0]]; // Assuming the first element in 'row' is the header

    // If there are no values, fill the row with empty strings
    if (row.length === 1) {
      for (let i = 1; i < tableData[0].length; i++) {
        rowData.push('');
      }
    } else {
      // Otherwise, add the values to the row
      for (let i = 1; i < row.length; i++) {
        let val = row[i].toLocaleString(undefined, {
          minimumFractionDigits: decimalPlace,
          maximumFractionDigits: decimalPlace,
        });
        rowData.push(val);
      }
    }

    tableData.push(rowData);
  }

  // var table_style = document.getElementById("select2Icons").val;

  // console.log([selectValue, data, firstColumnAlignment, firstRowAlignment, decimalPlace,
  //   tableTemplateSelect
  // ])



  await Word.run(async (context) => {
    try {
      trackedContentControls = [];
      const table = context.document.body.insertTable(tableData.length, tableData[0].length, "end", tableData);
      let contentControl = table.insertContentControl();
      let node_selected = localStorage.getItem('node_selected');
      let report = JSON.parse(node_selected);
      let reportID = report.id;

      const serializedData = JSON.stringify({
        tableTemplateSelect,
        selectValue,
        data,
        reportID
      });

      await context.sync();
      if (contentControl) {
        contentControl.tag = serializedData;
        // context.trackedObjects.add(contentControl);


        // Track the content control using context.trackedObjects.add()
        await context.sync();
        // trackedContentControls.push({ trackedContent: contentControl});

      } else {
        console.error("Failed to insert content control.");
      }

      await context.sync();
      console.log(serializedData)
      //   table.styleBuiltIn = Word.Style['gridTable5Dark_Accent5'];
      table.styleBuiltIn = Word.Style[selectValue];
      table.styleFirstRow = false;



      // console.log('Report id:', reportID);
      // table.id = reportID;

      // const body = context.document.body;
      // const marker = body.insertContentControl();
      // marker.tag = "TableMarker";
      // marker.title = "Marker";
      // marker.insertText(`TableID:${reportID}`, "start");
      // Now load and set alignment for cells
      const bookmark = table.insertBookmark(`TableBookmark_${reportID}`, "end");
      await context.sync();
      const rows = table.rows;
      rows.load('items');
      await context.sync();

      // Load the cells for each row, starting from the second row (index 1)
      for (let i = 0; i < rows.items.length; i++) {
        const row = rows.items[i];

        // Load cells for each row
        const cells = row.cells;
        cells.load('items/horizontalAlignment');
        await context.sync();

        if (firstColumnAlignment != 'left') {
          cells.items[0].horizontalAlignment = Word.Alignment.center;
        }
        await context.sync();
        // Start from the second cell (index 1)
        for (let j = 1; j < cells.items.length; j++) {
          cells.items[j].horizontalAlignment = Word.Alignment.right;
        }

      }
      await context.sync();
      console.log(tableTemplateSelect);
      console.log(contentControl);
      console.log('contentControl ' + contentControl);

      if (!contentControl.isNullObject) {
        // Load the content control tag.
        contentControl.load("tag");
        await context.sync();

        // Parse the tag data.
        const tags = JSON.parse(contentControl.tag);

        // Log the table ID and tag data.
        console.log(`Table ID: ${table.id}`);
        console.log("Content Control Tag:", tags);
      }
      await context.sync();


    } catch (error) {
      console.error("Error:", error);
    }


  });
}

function stringifySafe(obj, depth = 5) {
  const cache = new WeakSet();

  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value) || depth === 0) return '[Circular]';

      cache.add(value);
    }

    return value;
  });
}

async function getDimensions(dimension) {

  var tkn = localStorage.getItem('aaroWebToken');
  console.log(tkn);

  const url = "https://aaro-web.test/api/v1/reports/report/dimensions/" + dimension;

  console.log(url);
  const headers = {
    'Authorization': tkn,
  };

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${tkn}`
    }
  });

  if (response.ok) {
    const data = await response.json();
    // Process the response data here
    console.log('DIMENSIONS ' + stringifySafe(data));
    return data;
  } else {
    console.error('API request failed');
  }

}