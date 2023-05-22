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
      var selectValue = document.getElementById("select2Icons").value;
      var tableTemplateSelect = document.getElementById('tableSelect').value;
      console.log("joe");
      console.log(tableTemplateSelect);
      if (tableTemplateSelect == 'noteThree') {
        insertTable(selectValue);
        console.log("noteThree");
        return 'noteThree';
      } else if (selectValue == 'noteEight') {
        console.log("noteEight");
        return 'noteEight';
      } else if (selectValue == 'noteFive') {
        insertTable5(selectValue);
        console.log("noteFive");
        return 'noteFive';
      } else {
        return 'Default output';
      }    

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
  
  
  var selectedStyle = selectValue;
  console.log(selectedStyle);
}



async function insertTable(selectValue) {

  const data = get_data();

  var table_style = document.getElementById("select2Icons").val;

  console.log(table_style)

  await Word.run(async (context) => {
    const table = context.document.body.insertTable(data.length, data[0].length, "Start", data);
    table.styleBuiltIn = Word.Style.gridTable4_Accent5;
    
    table.rows.load("items");
    await context.sync();

    // Iterate through the table rows and cells, changing the font color to black
    // and aligning the second and third columns to the right
    for (const row of table.rows.items) {
      row.cells.load("items");
      await context.sync();

      for (const [index, cell] of row.cells.items.entries()) {
        cell.load("font");
        await context.sync();

        cell.font.color = 'black'; // Set the font color to black

        if (index === 1 || index === 2) { // Check if it's the second or third column
          cell.horizontalAlignment = Word.Alignment.right; // Align to the right
        }
      }
    }

    // Synchronize the changes
    await context.sync();

    // Synchronize the changes
    await context.sync();
  });
}


async function insertTable5(selectValue) {

  const data = {
    "headers": [
      [{
        "code": "",
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
        "code": "ASSETS",
        "codeVector": null,
        "description": "",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "1099",
        "codeVector": null,
        "description": "Immaterial assets",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2784370.284099999,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2722491.656499999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1199",
        "codeVector": null,
        "description": "Land and buildings",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 3672367.8959,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 3553843.8897999995,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1299",
        "codeVector": null,
        "description": "Tangible fixed assets",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 4938422.7688,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 4710700.190399999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1399",
        "codeVector": null,
        "description": "Financial fixed assets",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1227453.1841000002,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 7719189.613299999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1499",
        "codeVector": null,
        "description": "Inventories and prod/work in progress",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 530428.7646,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1023793.2161,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1599",
        "codeVector": null,
        "description": "Accounts receivable",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 5476167.5607,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2439469.66,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1699",
        "codeVector": null,
        "description": "Other current receivables",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 624037.702,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1849449.3997,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1799",
        "codeVector": null,
        "description": "Prepaid expenses and accrued income",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 863263.0499999999,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2311087.4335000003,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1899",
        "codeVector": null,
        "description": "Short-term investments",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 240438.24000000002,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 879121.29,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1999",
        "codeVector": null,
        "description": "Cash and bank",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 8839193.112200001,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 6166926.1796,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1TA",
        "codeVector": null,
        "description": "TOTAL ASSETS",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2.919614256240001E7,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 3.3376072528900005E7,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "LIABILITIES",
        "codeVector": null,
        "description": "",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2081",
        "codeVector": null,
        "description": "Share capital",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 5000.3515,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 5000.3515,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2082",
        "codeVector": null,
        "description": "Unregistered share capital",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2085",
        "codeVector": null,
        "description": "Revaluation reserve",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -42636.839,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -42636.839,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2086",
        "codeVector": null,
        "description": "Statutory reserve",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -19137.7374,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -19137.7374,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2087",
        "codeVector": null,
        "description": "Equity share, associated companies",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -1066.6447000000007,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -11850.144799999998,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "20RE",
        "codeVector": null,
        "description": "Restricted equity",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -64971.891,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -64430.51509999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2091",
        "codeVector": null,
        "description": "Retained profit",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1356545.3476,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 918665.3622,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2094",
        "codeVector": null,
        "description": "Own shares",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2096",
        "codeVector": null,
        "description": "Reserves (not IS)",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 280.0,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 280.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2097",
        "codeVector": null,
        "description": "Share premium reserve",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2099",
        "codeVector": null,
        "description": "Net income",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 299857.7942,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 419490.7998999998,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "20UE",
        "codeVector": null,
        "description": "Unrestricted equity",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1878792.5190999997,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1563028.4264,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "20SE",
        "codeVector": null,
        "description": "EQUITY",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1813820.6280999999,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1498597.9113000007,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2100",
        "codeVector": null,
        "description": "Minority interest",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 81599.3391,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 84842.6517,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2199",
        "codeVector": null,
        "description": "Untaxed reserves",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 0.0,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 0.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2299",
        "codeVector": null,
        "description": "Provisions",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 182568.1147,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 908241.5651000001,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2399",
        "codeVector": null,
        "description": "Long-term liabilities",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 303540.8893,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2444254.8075,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2499",
        "codeVector": null,
        "description": "Current liabilities to cred inst, cust and suppl",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2244564.9480999997,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1716403.7736000002,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2599",
        "codeVector": null,
        "description": "Income tax liability",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 223704.0,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 413639.15,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2699",
        "codeVector": null,
        "description": "VAT and excise duty",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2799",
        "codeVector": null,
        "description": "Employee withholding taxes etc",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 350510.5,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 359343.3,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2899",
        "codeVector": null,
        "description": "Other current liabilities",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2.2049037679999996E7,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2.1874456019899998E7,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2999",
        "codeVector": null,
        "description": "Accrued expenses & deferred income",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1946796.4016999998,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 4076293.3749,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2TLE",
        "codeVector": null,
        "description": "EQUITY AND LIABILITIES",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2.9196142500999987E7,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 3.3376072553999998E7,
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
  var table_style = document.getElementById("select2Icons").val;

  console.log(table_style)

  await Word.run(async (context) => {
    const table = context.document.body.insertTable(data.length, data[0].length, "Start", data);
    table.styleBuiltIn = Word.Style.gridTable4_Accent5;
    
    table.rows.load("items");
    await context.sync();

    // Iterate through the table rows and cells, changing the font color to black
    // and aligning the second and third columns to the right
    for (const row of table.rows.items) {
      row.cells.load("items");
      await context.sync();

      for (const [index, cell] of row.cells.items.entries()) {
        cell.load("font");
        await context.sync();

        cell.font.color = 'black'; // Set the font color to black

        if (index === 1 || index === 2) { // Check if it's the second or third column
          cell.horizontalAlignment = Word.Alignment.right; // Align to the right
        }
      }
    }

    // Synchronize the changes
    await context.sync();

    // Synchronize the changes
    await context.sync();
  });
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function consolidatedBalance() {

  const data = {
    "headers": [
      [{
        "code": "",
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
        "code": "ASSETS",
        "codeVector": null,
        "description": "",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "1099",
        "codeVector": null,
        "description": "Immaterial assets",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2784370.284099999,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2722491.656499999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1199",
        "codeVector": null,
        "description": "Land and buildings",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 3672367.8959,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 3553843.8897999995,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1299",
        "codeVector": null,
        "description": "Tangible fixed assets",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 4938422.7688,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 4710700.190399999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1399",
        "codeVector": null,
        "description": "Financial fixed assets",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1227453.1841000002,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 7719189.613299999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1499",
        "codeVector": null,
        "description": "Inventories and prod/work in progress",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 530428.7646,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1023793.2161,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1599",
        "codeVector": null,
        "description": "Accounts receivable",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 5476167.5607,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2439469.66,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1699",
        "codeVector": null,
        "description": "Other current receivables",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 624037.702,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1849449.3997,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1799",
        "codeVector": null,
        "description": "Prepaid expenses and accrued income",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 863263.0499999999,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2311087.4335000003,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1899",
        "codeVector": null,
        "description": "Short-term investments",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 240438.24000000002,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 879121.29,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1999",
        "codeVector": null,
        "description": "Cash and bank",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 8839193.112200001,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 6166926.1796,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1TA",
        "codeVector": null,
        "description": "TOTAL ASSETS",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2.919614256240001E7,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 3.3376072528900005E7,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "LIABILITIES",
        "codeVector": null,
        "description": "",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2081",
        "codeVector": null,
        "description": "Share capital",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 5000.3515,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 5000.3515,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2082",
        "codeVector": null,
        "description": "Unregistered share capital",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2085",
        "codeVector": null,
        "description": "Revaluation reserve",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -42636.839,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -42636.839,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2086",
        "codeVector": null,
        "description": "Statutory reserve",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -19137.7374,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -19137.7374,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2087",
        "codeVector": null,
        "description": "Equity share, associated companies",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -1066.6447000000007,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -11850.144799999998,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "20RE",
        "codeVector": null,
        "description": "Restricted equity",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -64971.891,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -64430.51509999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2091",
        "codeVector": null,
        "description": "Retained profit",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1356545.3476,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 918665.3622,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2094",
        "codeVector": null,
        "description": "Own shares",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2096",
        "codeVector": null,
        "description": "Reserves (not IS)",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 280.0,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 280.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2097",
        "codeVector": null,
        "description": "Share premium reserve",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2099",
        "codeVector": null,
        "description": "Net income",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 299857.7942,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 419490.7998999998,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "20UE",
        "codeVector": null,
        "description": "Unrestricted equity",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1878792.5190999997,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1563028.4264,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "20SE",
        "codeVector": null,
        "description": "EQUITY",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1813820.6280999999,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1498597.9113000007,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2100",
        "codeVector": null,
        "description": "Minority interest",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 81599.3391,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 84842.6517,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2199",
        "codeVector": null,
        "description": "Untaxed reserves",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 0.0,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 0.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2299",
        "codeVector": null,
        "description": "Provisions",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 182568.1147,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 908241.5651000001,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2399",
        "codeVector": null,
        "description": "Long-term liabilities",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 303540.8893,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2444254.8075,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2499",
        "codeVector": null,
        "description": "Current liabilities to cred inst, cust and suppl",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2244564.9480999997,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1716403.7736000002,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2599",
        "codeVector": null,
        "description": "Income tax liability",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 223704.0,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 413639.15,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2699",
        "codeVector": null,
        "description": "VAT and excise duty",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2799",
        "codeVector": null,
        "description": "Employee withholding taxes etc",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 350510.5,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 359343.3,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2899",
        "codeVector": null,
        "description": "Other current liabilities",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2.2049037679999996E7,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2.1874456019899998E7,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2999",
        "codeVector": null,
        "description": "Accrued expenses & deferred income",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1946796.4016999998,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 4076293.3749,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2TLE",
        "codeVector": null,
        "description": "EQUITY AND LIABILITIES",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2.9196142500999987E7,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 3.3376072553999998E7,
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

  let tableHeaders = "<tr class='table-dark'>";
  for (let header of data.headers[0]) {
    tableHeaders += "<th>" + header.code + "</th>";
  }

  tableHeaders += "</tr>";
  let tableRows = "";
  for (let row of data.rows) {
    tableRows += "<tr>";
    tableRows += "<td>" + row.header.description + "</td>";
    if (row.values.length === 0) {
      // tableRows += "<td></td>";
      console.log(data.headers[0].length)
      for (let i = 1; i < data.headers[0].length; i++) {
        tableRows += "<td></td>";
      }
    } else {
      for (let value of row.values) {
        tableRows += "<td>" + value.value.toFixed(2) + "</td>";
      }
    }
    tableRows += "</tr>";
  }
  let tableHTML = "<table class='table table-bordered table-condensed' style='border: 1px solid #ddd' id='tableTest'>" + tableHeaders + tableRows + "</table>";

  // var resp = document.getElementById("jsonTable").innerHTML = tableHTML;
  return tableHTML;

}
