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
    document.getElementById("noteThree").onclick = insertTable;

    document.getElementById("consolidatedBalance").onclick = consolidatedBalanceProcess;

    document.getElementById("noteEight").onclick = insertTableNoteEightProcess;
    document.getElementById("PotraitNoteEight").onclick = changePageOrientationToPotrait;
    document.getElementById("LandscapeNoteEight").onclick = changePageOrientationToLandscape;

    const tableStylesDropdown = document.getElementById("tableStylesDropdown");

    tableStylesDropdown.addEventListener("change", () => {
      const selectedStyle = tableStylesDropdown.value;
      insertTable(selectedStyle);
      // console.log(selectedStyle);
      //modifyTableStyle(selectedStyle);
    });

  }
});
 
async function changePageOrientationToLandscape() {
  await Word.run(async (context) => {
    const sections = context.document.sections;
    sections.load("items");

    // Synchronize with the document
    await context.sync();

    // Load the pageSetup property for each section and change the orientation to landscape
    for (const section of sections.items) {
      section.load("pageSetup");

      await context.sync();
      section.pageSetup.orientation = 'landscape';
    }

    // Synchronize the changes
    await context.sync();
  });
}


async function changePageOrientationToPotrait() {
  await Word.run(async (context) => {
    // Load the sections and pageSetup
    const sections = context.document.sections;
    sections.load("pageSetup");

    // Synchronize with the document
    await context.sync();

    // Change the orientation of each section to landscape
    for (const section of sections.items) {
      section.pageSetup.orientation = Word.Orientation.portrait;
    }

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


function noteEight() {

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
        "code": "GROUP",
        "codeVector": null,
        "description": "Group",
        "dimension": "Group7",
        "indentation": 0,
        "span": 8,
        "column": 1
      }],
      [{
        "code": "",
        "codeVector": null,
        "description": "",
        "dimension": "",
        "indentation": 0,
        "span": 1,
        "column": 0
      }, {
        "code": null,
        "codeVector": ["101001", "101011", "101015", "101021", "101031", "101049", "1010A", "101051", "101065", "101071", "101081", "101061", "101089", "1010D", "10109001", "10109015", "10109021", "10109031", "10109061", "10109018", "10109019", "10109049", "1010WU", "10109551", "10109565", "10109571", "10109541", "10109581", "10109585", "10109586", "10109589", "1010WD", "1010"],
        "description": "1010 Capitalised#expenditure",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 2
      }, {
        "code": null,
        "codeVector": ["103001", "103011", "103015", "103021", "103031", "103049", "1030A", "103051", "103065", "103071", "103081", "103061", "103089", "1030D", "10309001", "10309015", "10309021", "10309031", "10309061", "10309018", "10309019", "10309049", "1030WU", "10309551", "10309565", "10309571", "10309541", "10309581", "10309585", "10309586", "10309589", "1030WD", "1030"],
        "description": "1030 Patents",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 3
      }, {
        "code": null,
        "codeVector": ["104001", "104011", "104015", "104021", "104031", "104049", "1040A", "104051", "104065", "104071", "104081", "104061", "104089", "1040D", "10409001", "10409015", "10409021", "10409031", "10409061", "10409018", "10409019", "10409049", "1040WU", "10409551", "10409565", "10409571", "10409541", "10409581", "10409585", "10409586", "10409589", "1040WD", "1040"],
        "description": "1040 Licenses",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 4
      }, {
        "code": null,
        "codeVector": ["105001", "105011", "105015", "105021", "105031", "105049", "1050A", "105051", "105065", "105071", "105081", "105061", "105089", "1050D", "10509001", "10509015", "10509021", "10509031", "10509061", "10509018", "10509019", "10509049", "1050WU", "10509551", "10509565", "10509571", "10509541", "10509581", "10509585", "10509586", "10509589", "1050WD", "1050"],
        "description": "1050 Trademarks",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 5
      }, {
        "code": null,
        "codeVector": ["107001", "107011", "107015", "107021", "107031", "107049", "1070A", "107051", "107065", "107071", "107081", "107061", "107089", "1070D", "10709001", "10709015", "10709021", "10709031", "10709061", "10709018", "10709019", "10709049", "1070WU", "10709551", "10709565", "10709571", "10709541", "10709581", "10709585", "10709586", "10709589", "1070WD", "1070"],
        "description": "1070 Goodwill",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 6
      }, {
        "code": null,
        "codeVector": ["108001", "108011", "108015", "108021", "108031", "108049", "1080A", "1080"],
        "description": "1080 Advance#payments",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 7
      }, {
        "code": null,
        "codeVector": ["109001", "109011", "109015", "109021", "109031", "109049", "1090A", "109051", "109065", "109071", "109081", "109061", "109089", "1090D", "10909001", "10909015", "10909021", "10909031", "10909061", "10909018", "10909019", "10909049", "1090WU", "10909551", "10909565", "10909571", "10909541", "10909581", "10909585", "10909586", "10909589", "1090WD", "1090"],
        "description": "1090 Other#intangible#fixed assets",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 8
      }, {
        "code": null,
        "codeVector": ["10XX01", "10XX11", "10XX15", "10XX21", "10XX31", "10XX49", "10XXA", "10XX51", "10XX65", "10XX71", "10XX81", "10XX61", "10XX89", "10XXD", "10XX9001", "10XX9015", "10XX9021", "10XX9031", "10XX9061", "10XX9018", "10XX9019", "10XX9049", "10XXWU", "10XX9551", "10XX9565", "10XX9571", "10XX9541", "10XX9581", "10XX9585", "10XX9586", "10XX9589", "10XXWD", "1099", "1090SP", "1090TSS", "1090R", "3971R", "7971R", "1090DIFF"],
        "description": "TOTAL#Intangible#fixed assets",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 9
      }]
    ],
    "rows": [{
      "header": {
        "code": "2023",
        "codeVector": null,
        "description": "",
        "dimension": "Year",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "ACQUISITIONS",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101001", "103001", "104001", "105001", "107001", "108001", "109001", "10XX01"],
        "description": "Opening accumulated acquisition values",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 564466.2812,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 256049.89670000004,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 749079.8308,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 99932.0956,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 212420.6393,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 929682.2173,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 2811630.9609000003,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101011", "103011", "104011", "105011", "107011", "108011", "109011", "10XX11"],
        "description": "This year´s gross investments",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 8116.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 3677.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 10713.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 6818.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 13391.0,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 42715.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101015", "103015", "104015", "105015", "107015", "108015", "109015", "10XX15"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 25000.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -32250.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -7250.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101021", "103021", "104021", "105021", "107021", "108021", "109021", "10XX21"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -97.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -43.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -127.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -81.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -159.0,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": -507.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101031", "103031", "104031", "105031", "107031", "108031", "109031", "10XX31"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 11.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 5.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 14.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 52259.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 18.0,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 52307.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101049", "103049", "104049", "105049", "107049", "108049", "109049", "10XX49"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -1317.4829,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -596.815,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -1729.4126,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 101.99,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 50.6,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -2175.5545,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": -5666.674999999999,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010A", "1030A", "1040A", "1050A", "1070A", "1080A", "1090A", "10XXA"],
        "description": "Closing accumulated acquisition value",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 571178.7983,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 284092.08170000004,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 757950.4182,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 100034.0856,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 239217.23930000002,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 940756.6628,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 2893229.2859000005,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "AMORTIZATION",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101051", "103051", "104051", "105051", "107051", "109051", "10XX51"],
        "description": "Opening accumulated amortization",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -65849.99799999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -29908.7113,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -87408.3223,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -11997.4995,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -17982.3264,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -213146.85749999998,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101065", "103065", "104065", "105065", "107065", "109065", "10XX65"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101071", "103071", "104071", "105071", "107071", "109071", "10XX71"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 14.2994,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 14.2994,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101081", "103081", "104081", "105081", "107081", "109081", "10XX81"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 0.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 0.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -14.2994,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -14.2994,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101061", "103061", "104061", "105061", "107061", "109061", "10XX61"],
        "description": "Amortization for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -7973.921200000001,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -3657.3732,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -5775.570599999999,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -2060.9656999999997,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -7905.1979,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -27373.0286,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101089", "103089", "104089", "105089", "107089", "109089", "10XX89"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 119.7245,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 54.076699999999995,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 184.99569999999997,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -22.1585,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -12.090300000000001,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 324.5480999999999,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010D", "1030D", "1040D", "1050D", "1070D", "1090D", "10XXD"],
        "description": "Closing accumulated amortization",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -73704.1947,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -33512.0078,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -92998.8972,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -14080.6237,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -25899.6146,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -240195.33800000002,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "WRITE-UPS",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109001", "10309001", "10409001", "10509001", "10709001", "10909001", "10XX9001"],
        "description": "Opening accumulated write-ups",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 43344.076700000005,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 19600.5508,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 57164.4272,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 7200.7,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 2070.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 129379.7547,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109015", "10309015", "10409015", "10509015", "10709015", "10909015", "10XX9015"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 618.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 279.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 814.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 519.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 2230.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109021", "10309021", "10409021", "10509021", "10709021", "10909021", "10XX9021"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109031", "10309031", "10409031", "10509031", "10709031", "10909031", "10XX9031"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109061", "10309061", "10409061", "10509061", "10709061", "10909061", "10XX9061"],
        "description": "Amortization for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109018", "10309018", "10409018", "10509018", "10709018", "10909018", "10XX9018"],
        "description": "Write-ups for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109019", "10309019", "10409019", "10509019", "10709019", "10909019", "10XX9019"],
        "description": "Write-down of write-ups",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109049", "10309049", "10409049", "10509049", "10709049", "10909049", "10XX9049"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -101.39359999999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -45.844899999999996,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -133.72,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 7.54,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -139.6985,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010WU", "1030WU", "1040WU", "1050WU", "1070WU", "1090WU", "10XXWU"],
        "description": "Closing accumulated write-ups",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 43860.6831,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 19833.7059,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 57844.7072,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 7208.24,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 2589.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 131336.33620000002,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "WRITE-DOWNS",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109551", "10309551", "10409551", "10509551", "10709551", "10909551", "10XX9551"],
        "description": "Opening accumulated write-downs",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109565", "10309565", "10409565", "10509565", "10709565", "10909565", "10XX9565"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109571", "10309571", "10409571", "10509571", "10709571", "10909571", "10XX9571"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109541", "10309541", "10409541", "10509541", "10709541", "10909541", "10XX9541"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109581", "10309581", "10409581", "10509581", "10709581", "10909581", "10XX9581"],
        "description": "Amortization for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109585", "10309585", "10409585", "10509585", "10709585", "10909585", "10XX9585"],
        "description": "Write-downs for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109586", "10309586", "10409586", "10509586", "10709586", "10909586", "10XX9586"],
        "description": "Write-up of write-downs",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109589", "10309589", "10409589", "10509589", "10709589", "10909589", "10XX9589"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010WD", "1030WD", "1040WD", "1050WD", "1070WD", "1090WD", "10XXWD"],
        "description": "Closing accumulated write-downs",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010", "1030", "1040", "1050", "1070", "1080", "1090", "1099"],
        "description": "Closing residual value according to plan",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 541335.2866999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 270413.7798000001,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 722796.2282,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 93161.7019,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 215906.62470000001,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 940756.6628,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 2784370.2841,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090SP"],
        "description": "Sales price",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090TSS"],
        "description": "Total sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -492.7006,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090R"],
        "description": "Realization result, this year specification",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -492.7006,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["3971R"],
        "description": "Realization income",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["7971R"],
        "description": "Realization loss",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090DIFF"],
        "description": "Difference in specification vs IS_ALL",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -492.7006,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2022",
        "codeVector": null,
        "description": "",
        "dimension": "Year",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "ACQUISITIONS",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101001", "103001", "104001", "105001", "107001", "108001", "109001", "10XX01"],
        "description": "Opening accumulated acquisition values",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 280267.761,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 127256.92880000001,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 369652.9275,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 99280.8721,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 144372.91,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 460759.7485,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 1481591.1479,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101011", "103011", "104011", "105011", "107011", "108011", "109011", "10XX11"],
        "description": "This year´s gross investments",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 289060.61,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 130945.32,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 381585.36000000004,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 20378.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 476960.72000000003,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 1298930.01,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101015", "103015", "104015", "105015", "107015", "108015", "109015", "10XX15"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 48041.1393,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 48041.1393,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101021", "103021", "104021", "105021", "107021", "108021", "109021", "10XX21"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -10476.519999999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -4720.95,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -13837.4,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -129.0,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -241.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -17295.75,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": -46700.619999999995,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101031", "103031", "104031", "105031", "107031", "108031", "109031", "10XX31"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 385.10999999999996,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 196.79999999999998,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -1175.76,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 9.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 641.85,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 56.99999999999994,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101049", "103049", "104049", "105049", "107049", "108049", "109049", "10XX49"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 5229.3202,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 2371.7979,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 6885.953300000001,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 780.2235000000001,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -139.41,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 8615.6488,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 23743.5337,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010A", "1030A", "1040A", "1050A", "1070A", "1080A", "1090A", "10XXA"],
        "description": "Closing accumulated acquisition value",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 564466.2812,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 256049.8967,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 743111.0808000001,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 99932.0956,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 212420.6393,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 929682.2173,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 2805662.2109000003,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "AMORTIZATION",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101051", "103051", "104051", "105051", "107051", "109051", "10XX51"],
        "description": "Opening accumulated amortization",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -32616.7047,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -14825.9244,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -43006.98569999999,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -11376.6799,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -28710.3236,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -130536.6183,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101065", "103065", "104065", "105065", "107065", "109065", "10XX65"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101071", "103071", "104071", "105071", "107071", "109071", "10XX71"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 821.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 372.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 1083.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 20.0,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 15000.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 17296.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101081", "103081", "104081", "105081", "107081", "109081", "10XX81"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101061", "103061", "104061", "105061", "107061", "109061", "10XX61"],
        "description": "Amortization for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -33444.4673,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -15177.938699999999,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -44083.6872,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -548.076,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -4259.2216,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -97513.3908,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101089", "103089", "104089", "105089", "107089", "109089", "10XX89"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -609.826,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -276.8482,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -804.101,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -92.7436,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -12.7812,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -1796.3000000000002,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010D", "1030D", "1040D", "1050D", "1070D", "1090D", "10XXD"],
        "description": "Closing accumulated amortization",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -65849.99799999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -29908.7113,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -86811.7739,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -11997.4995,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -17982.326399999998,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -212550.30909999995,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "WRITE-UPS",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109001", "10309001", "10409001", "10509001", "10709001", "10909001", "10XX9001"],
        "description": "Opening accumulated write-ups",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 21485.2515,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 9716.012,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 28333.15,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 7243.019,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 519.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 67296.4325,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109015", "10309015", "10409015", "10509015", "10709015", "10909015", "10XX9015"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 21999.21,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 9947.92,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 29015.600000000002,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 1551.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 62513.729999999996,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109021", "10309021", "10409021", "10509021", "10709021", "10909021", "10XX9021"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -542.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -245.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -714.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -100.0,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -1601.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109031", "10309031", "10409031", "10509031", "10709031", "10909031", "10XX9031"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109061", "10309061", "10409061", "10509061", "10709061", "10909061", "10XX9061"],
        "description": "Amortization for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109018", "10309018", "10409018", "10509018", "10709018", "10909018", "10XX9018"],
        "description": "Write-ups for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109019", "10309019", "10409019", "10509019", "10709019", "10909019", "10XX9019"],
        "description": "Write-down of write-ups",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109049", "10309049", "10409049", "10509049", "10709049", "10909049", "10XX9049"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 401.61519999999996,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 181.6188,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 529.6772,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 57.681,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 640.915,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010WU", "1030WU", "1040WU", "1050WU", "1070WU", "1090WU", "10XXWU"],
        "description": "Closing accumulated write-ups",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 43344.0767,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 19600.5508,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 57164.427200000006,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 7200.7,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 2070.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 129379.75469999999,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "WRITE-DOWNS",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109551", "10309551", "10409551", "10509551", "10709551", "10909551", "10XX9551"],
        "description": "Opening accumulated write-downs",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -5000.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -5000.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109565", "10309565", "10409565", "10509565", "10709565", "10909565", "10XX9565"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109571", "10309571", "10409571", "10509571", "10709571", "10909571", "10XX9571"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 5000.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 5000.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109541", "10309541", "10409541", "10509541", "10709541", "10909541", "10XX9541"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109581", "10309581", "10409581", "10509581", "10709581", "10909581", "10XX9581"],
        "description": "Amortization for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109585", "10309585", "10409585", "10509585", "10709585", "10909585", "10XX9585"],
        "description": "Write-downs for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109586", "10309586", "10409586", "10509586", "10709586", "10909586", "10XX9586"],
        "description": "Write-up of write-downs",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109589", "10309589", "10409589", "10509589", "10709589", "10909589", "10XX9589"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010WD", "1030WD", "1040WD", "1050WD", "1070WD", "1090WD", "10XXWD"],
        "description": "Closing accumulated write-downs",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 0.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 0.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010", "1030", "1040", "1050", "1070", "1080", "1090", "1099"],
        "description": "Closing residual value according to plan",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 541960.3598999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 245741.7362,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 713463.7341,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 95135.29609999999,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 196508.3129,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 929682.2173,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 2722491.6565,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090SP"],
        "description": "Sales price",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090TSS"],
        "description": "Total sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -26005.619999999995,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090R"],
        "description": "Realization result, this year specification",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -26005.619999999995,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["3971R"],
        "description": "Realization income",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["7971R"],
        "description": "Realization loss",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090DIFF"],
        "description": "Difference in specification vs IS_ALL",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -26005.619999999995,
        "format": "#,##0",
        "column": 9,
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
      "removeEmpty": false,
      "compactLayout": false,
      "expandPaths": [],
      "collapsePaths": []
    }
  };

  const tableData = [];
  const columnIndex = {};
  let currentColumn = 1;

  // Build header row
  data.headers.forEach((row) => {
    const headerRow = new Array(data.headers[1].length + 1).fill('');
    row.forEach((header) => {
      const span = header.span || 1;
      if (header.code) {
        for (let i = 0; i < span; i++) {
          headerRow[header.column - 1 + i] = header.description;
        }
      }
    });
    tableData.push(headerRow);
  });


  // Add row data
  data.rows.forEach((row) => {
    const rowData = [row.header.description];
    let currentColumn = 2;
    Object.values(columnIndex).forEach((columnHeader) => {
      if (columnHeader !== 'Group') {
        rowData.push('');
      }
    });
    row.values.forEach((value) => {
      const span = value.header ? value.header.span || 1 : 1;
      for (let i = 0; i < span; i++) {
        const columnHeader = columnIndex[currentColumn];
        if (columnHeader !== undefined && columnHeader !== null && columnHeader !== 'Group') {
          rowData[currentColumn - 1] = value.value.toFixed(2);
        }
        currentColumn++;
      }
    });
    tableData.push(rowData);
  });

  return tableData;
}




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


export async function run() {
  return Word.run(async (context) => {
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css";
    const htmlDiv = get_data();
    const htmlString = `

    <style>
      table {
        border-collapse: collapse;
        width: 100%;
        border: 1px solid #ddd;

        overflow: hidden;
      }

      table td,
      table th {
        border: 1px solid #ddd;
        text-align: left;
        font-family: 'Motnserrat', sans-serif;
        font-size: 12px;
        padding: 2px 10px;
      }

      table th {
        // background-color: #4b4b4b;
        font-weight: bold;
      }

      .table-dark {
        background-color: #4b4b4b;
        color: #fff;
        border-color: #6f6f6f;
      }

      tbody tr:nth-child(even) {
        background-color: rgba(241, 196, 15, 1.0);
      }
  </style>
  `;

    var htmldata = htmlString + htmlDiv;


    console.log(htmldata);

    const range = context.document.body;
    range.insertHtml(htmldata, "End");



    // Execute the queued commands and return a promise
    return context.sync().then(function () {
      console.log("HTML added successfully.");
    });
  });
}

export async function noteEightProcess() {
  return Word.run(async (context) => {
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css";
    const htmlDiv = noteEight();
    const htmlString = `

    <style>
      table {
        border-collapse: collapse;
        width: 100%;
        border: 1px solid #ddd;

        overflow: hidden;
      }

      table td,
      table th {
        border: 1px solid #ddd;
        text-align: left;
        font-family: 'Motnserrat', sans-serif;
        font-size: 12px;
        padding: 2px 10px;
      }

      table th {
        // background-color: #4b4b4b;
        font-weight: bold;
      }

      .table-dark {
        background-color: #4b4b4b;
        color: #fff;
        border-color: #6f6f6f;
      }

      tbody tr:nth-child(even) {
        background-color: rgba(241, 196, 15, 1.0);
      }
  </style>
  `;

    var htmldata = htmlString + htmlDiv;


    console.log(htmldata);

    const range = context.document.body;
    range.insertHtml(htmldata, "End");




    // Execute the queued commands and return a promise
    return context.sync().then(function () {
      console.log("HTML added successfully.");
    });
  });
}


export async function consolidatedBalanceProcess() {
  return Word.run(async (context) => {
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css";
    const htmlDiv = noteEight();
    const htmlString = `

    <style>
      table {
        border-collapse: collapse;
        width: 100%;
        border: 1px solid #ddd;

        overflow: hidden;
      }

      table td,
      table th {
        border: 1px solid #ddd;
        text-align: left;
        font-family: 'Motnserrat', sans-serif;
        font-size: 12px;
        padding: 2px 10px;
      }

      table th {
        // background-color: #4b4b4b;
        font-weight: bold;
      }

      .table-dark {
        background-color: #4b4b4b;
        color: #fff;
        border-color: #6f6f6f;
      }

      tbody tr:nth-child(even) {
        background-color: rgba(241, 196, 15, 1.0);
      }
  </style>
  `;

    var htmldata = htmlString + htmlDiv;


    console.log(htmldata);

    const range = context.document.body;
    range.insertHtml(htmldata, "End");

    // Execute the queued commands and return a promise
    return context.sync().then(function () {
      console.log("HTML added successfully.");
    });
  });
}

async function modifyTableStyle(selectedStyle) {
  //console.log(selectedStyle);
  await Word.run(async (context) => {
    const tables = context.document.tables;
    if (tables) {
      tables.load("items");
      await context.sync();
      // Iterate through all the tables in the document
      for (const table of tables.items) {
        // Check if the current table is selected
        if (table.isSelected) {
          table.styleBuiltIn = selectedStyle;
          await context.sync();
          break; // Exit the loop since we've found and modified the selected table
        }
      }
    } else {
      console.log("No tables found in the document");
      console.log(context.document.body.getHtml());

    }
  });
}

async function insertTable(selectedStyle) {
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


async function insertTableNoteEightProcess() {
  const data = noteEight();

  await Word.run(async (context) => {
    const table = context.document.body.insertTable(data.length, data[0].length, "Start", data);
    table.styleBuiltIn = Word.Style.gridTable2_Accent3;
    // table.styleFirstColumn = false;

    await context.sync();
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
