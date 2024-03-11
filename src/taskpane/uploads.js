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
  // if (info.host === Office.HostType.Word) {
  //   document.getElementById("templateSubmit").onclick = submitForm;

  //   // document.getElementById("templateSubmit").onclick = function () {
  //   //   console.log('harry')
  //   // };
  // }
});

async function submitForm() {
  const fileInput = document.getElementById("formFile");
  const file = fileInput.files[0];
  console.log(file);

  console.log('harry');

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


    const tableData = [];
    tableData.push(data.headers[0].map(header => header.code));

    for (let row of data.rows) {
      const rowData = [row.header.description];
      if (row.values.length === 0) {
        for (let i = 1; i < data.headers[0].length; i++) {
          rowData.push("");
        }
      } else {
        for (let value of row.values) {

          let val = value.value.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
          rowData.push(val);
        }

      }
      tableData.push(rowData);
    }

    insertTextIntoDocument(tableData);
  }
}

async function insertTextIntoDocument(data) {

  console.log(data)

  await Word.run(async (context) => {
    const table = context.document.body.insertTable(data.length, data[0].length, "Start", data);
    table.styleBuiltIn = Word.Style.gridTable4_Accent5;


    await context.sync();

  });
}