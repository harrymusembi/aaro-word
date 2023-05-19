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
    // document.getElementById("noteThree").onclick = insertTable;

    // document.getElementById("consolidatedBalance").onclick = consolidatedBalanceProcess;
    // document.getElementById("noteEight").onclick = insertTableNoteEightProcess;
    // document.getElementById("PotraitNoteEight").onclick = changePageOrientationToPotrait;
    // document.getElementById("LandscapeNoteEight").onclick = changePageOrientationToLandscape;
    document.getElementById("noteThree").onclick = function () {
      var selectValue = document.getElementById("select2Icons").value;
      
      insertTable(selectValue);
    };
  }
});




function get_data() {

  const data = {
    "headers": [
      [{
        "code": "Year",
        "codeVector": null,
        "description": "",
        "dimension": "",
        "indentation": 0,
        "span": 1,
        "column": 0
      }, {
        "code": "2023",
        "codeVector": null,
        "description": "",
        "dimension": "Year",
        "indentation": 0,
        "span": 1,
        "column": 1
      }, {
        "code": "2022",
        "codeVector": null,
        "description": "",
        "dimension": "Year",
        "indentation": 0,
        "span": 1,
        "column": 2
      }]
    ],
    "rows": [{
      "header": {
        "code": "5010",
        "codeVector": null,
        "description": "Rented premises",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -18835.1954,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -18749.2282,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5110",
        "codeVector": null,
        "description": "Property costs",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -27274.236,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -23945.4796,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5210",
        "codeVector": null,
        "description": "Hire of plant and machinery",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -7615.68,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -10154.3,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5310",
        "codeVector": null,
        "description": "Energy costs",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -7387.2661,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -4378.9705,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5410",
        "codeVector": null,
        "description": "Consumable equipment and supplies",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -24774.1218,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -21924.2238,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5510",
        "codeVector": null,
        "description": "Repairs and maintenance",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -2898.85,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1252.8062,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5610",
        "codeVector": null,
        "description": "Transport equipment costs",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -21109.4475,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -16813.2712,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5710",
        "codeVector": null,
        "description": "Freight and transportation",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -18683.321,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -19149.2453,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5810",
        "codeVector": null,
        "description": "Travel expenses",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -7761.305,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5910",
        "codeVector": null,
        "description": "Advertising and PR",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "5999",
        "codeVector": null,
        "description": "Operating expenses",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -169614.1928,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -133531.97269999998,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }],
    "inputAvailability": {
      "enabled": false,
      "preValidation": null,
      "rowSpec": null
    },
    "staticAxis": {
      "criteria": [{
        "dimension": "Currency",
        "sort": "SelectionOrder",
        "ascending": true,
        "total": false,
        "reportTotal": false,
        "showCode": true,
        "showDescription": false,
        "exclude": false,
        "selection": [{
          "type": "Member",
          "value": "TSEK",
          "label": ""
        }]
      }, {
        "dimension": "PeriodType",
        "sort": "SelectionOrder",
        "ascending": true,
        "total": false,
        "reportTotal": false,
        "showCode": true,
        "showDescription": false,
        "exclude": false,
        "selection": [{
          "type": "Member",
          "value": "Actual",
          "label": ""
        }]
      }, {
        "dimension": "PeriodIndex",
        "sort": "SelectionOrder",
        "ascending": true,
        "total": false,
        "reportTotal": false,
        "showCode": true,
        "showDescription": false,
        "exclude": false,
        "selection": [{
          "type": "Member",
          "value": "12",
          "label": ""
        }]
      }],
      "expand": [],
      "topN": null,
      "removeEmpty": true,
      "compactLayout": false,
      "expandPaths": [],
      "collapsePaths": []
    }
  };
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

  return tableData;
}

function fetch_data(data) {
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
  
  var selectedStyle = selectValue
  console.log(selectedStyle)
  await Word.run(async (context) => {
    const table = context.document.body.insertTable(data.length, data[0].length, "Start", data);
    table.styleBuiltIn = Word.Style.gridTable4_Accent2;
    // console.log(Word.Style[selectValue])
    // table.styleBuiltIn = Word.Style[selectValue];
 
    await context.sync();

    
    // Iterate through the table rows and cells, changing the font color to black
    // and aligning the second and third columns to the right
    // for (const row of table.rows.items) {
    //   row.cells.load("items");
    //   await context.sync();

    //   for (const [index, cell] of row.cells.items.entries()) {
    //     cell.load("font");
    //     await context.sync();

    //     cell.font.color = 'black'; // Set the font color to black

    //     if (index === 1 || index === 2) { // Check if it's the second or third column
    //       cell.horizontalAlignment = Word.Alignment.right; // Align to the right
    //     }
    //   }
    // }

    // // Synchronize the changes
    // await context.sync();

    // // Synchronize the changes
    // await context.sync();
  });
}