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
          console.log("Style:" . style);


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

    
    document.getElementById("refreshAll").onclick = async function () {

        let templateSelected = localStorage.getItem('templateSelected');
        console.log("TS");
        console.log(templateSelected);
      await Word.run(async function (context) {

 
          const tableCollection = context.document.body.tables;
          var data =0;
          // Queue a commmand to load the results.
          context.load(tableCollection);
          await context.sync()
          //cycle through the tbale collection and test the first cell of each table looking for insects
          for (var i = 0; i < tableCollection.items.length; i++) {
              var theTable = null;
              theTable = tableCollection.items[i];
              var cell1 = theTable.values[0][1];
              var row2cell1 = theTable.values[1][0];
              var row3cell1 = theTable.values[2][0];
            //   var style = theTable.style;
            //   console.log("Style:" . style);
              console.log(row2cell1);
              if (cell1 == "GOTHENBURG") {
                  //once found, load the table in memory and add a row
                  context.load(theTable);
                  await context.sync();
                  data = {
                    "headers": [
                        [
                            {
                                "code": "",
                                "codeVector": null,
                                "description": "",
                                "dimension": "",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            {
                                "code": "GOTHENBURG",
                                "codeVector": null,
                                "description": "Gothenburg",
                                "dimension": "Co",
                                "indentation": 0,
                                "span": 1,
                                "column": 1
                            },
                            {
                                "code": "MOLNDAL",
                                "codeVector": null,
                                "description": "Mölndal",
                                "dimension": "Co",
                                "indentation": 0,
                                "span": 1,
                                "column": 2
                            },
                            {
                                "code": "PARTILLE",
                                "codeVector": null,
                                "description": "Partille",
                                "dimension": "Co",
                                "indentation": 0,
                                "span": 1,
                                "column": 3
                            },
                            {
                                "code": "SV_HOLD",
                                "codeVector": null,
                                "description": "Sweden Holding AB",
                                "dimension": "Co",
                                "indentation": 0,
                                "span": 1,
                                "column": 4
                            },
                            {
                                "code": "EL",
                                "codeVector": null,
                                "description": "Elimination company",
                                "dimension": "Co",
                                "indentation": 0,
                                "span": 1,
                                "column": 5
                            }
                        ]
                    ],
                    "rows": [
                        {
                            "header": {
                                "code": "2081",
                                "codeVector": null,
                                "description": "Share capital",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": []
                        },
                        {
                            "header": {
                                "code": "ARLANDA",
                                "codeVector": null,
                                "description": "Sthlm Arlanda",
                                "dimension": "OwnedCo",
                                "indentation": 1,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -90000,
                                    "format": "#,##0",
                                    "column": 5,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "ASC-28751",
                                "codeVector": null,
                                "description": "",
                                "dimension": "OwnedCo",
                                "indentation": 1,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -150,
                                    "format": "#,##0",
                                    "column": 5,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "GOTHENBURG",
                                "codeVector": null,
                                "description": "Gothenburg",
                                "dimension": "OwnedCo",
                                "indentation": 1,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -60000,
                                    "format": "#,##0",
                                    "column": 5,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "MOLNDAL",
                                "codeVector": null,
                                "description": "Mölndal",
                                "dimension": "OwnedCo",
                                "indentation": 1,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -5000,
                                    "format": "#,##0",
                                    "column": 5,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "PARTILLE",
                                "codeVector": null,
                                "description": "Partille",
                                "dimension": "OwnedCo",
                                "indentation": 1,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -15000,
                                    "format": "#,##0",
                                    "column": 5,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "UNDEF",
                                "codeVector": null,
                                "description": "",
                                "dimension": "OwnedCo",
                                "indentation": 1,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 60000,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 5000,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 15000,
                                    "format": "#,##0",
                                    "column": 3,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 3000,
                                    "format": "#,##0",
                                    "column": 4,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 0,
                                    "format": "#,##0",
                                    "column": 5,
                                    "inputValidationErrors": null
                                }
                            ]
                        }
                    ],
                    "inputAvailability": {
                        "enabled": false,
                        "preValidation": null,
                        "rowSpec": null
                    },
                    "staticAxis": {
                        "criteria": [
                            {
                                "dimension": "Currency",
                                "sort": "AutomaticSorting",
                                "ascending": true,
                                "total": false,
                                "reportTotal": false,
                                "showCode": true,
                                "showDescription": false,
                                "exclude": false,
                                "selection": [
                                    {
                                        "type": "Member",
                                        "value": "LOC",
                                        "label": ""
                                    }
                                ]
                            },
                            {
                                "dimension": "LegalGroup",
                                "sort": "AutomaticSorting",
                                "ascending": false,
                                "total": false,
                                "reportTotal": false,
                                "showCode": true,
                                "showDescription": false,
                                "exclude": false,
                                "selection": [
                                    {
                                        "type": "Member",
                                        "value": "LEGGROUP",
                                        "label": ""
                                    }
                                ]
                            },
                            {
                                "dimension": "Period",
                                "sort": "AutomaticSorting",
                                "ascending": true,
                                "total": false,
                                "reportTotal": false,
                                "showCode": true,
                                "showDescription": false,
                                "exclude": false,
                                "selection": [
                                    {
                                        "type": "Member",
                                        "value": "2212A",
                                        "label": ""
                                    }
                                ]
                            }
                        ],
                        "expand": [],
                        "topN": null,
                        "removeEmpty": true,
                        "compactLayout": false,
                        "expandPaths": [],
                        "collapsePaths": []
                    }
                };
              }
              else if(cell1 == "ENTER"){

                //once found, load the table in memory and add a row
                context.load(theTable);
                await context.sync();
                data = {
                  "headers": [
                      [
                          {
                              "code": "",
                              "codeVector": null,
                              "description": "",
                              "dimension": "",
                              "indentation": 0,
                              "span": 1,
                              "column": 0
                          },
                          {
                              "code": "ENTER",
                              "codeVector": null,
                              "description": "Entertainment",
                              "dimension": "Level3",
                              "indentation": 0,
                              "span": 1,
                              "column": 1
                          },
                          {
                              "code": "Report Total",
                              "codeVector": null,
                              "description": "",
                              "dimension": "Level3",
                              "indentation": 0,
                              "span": 1,
                              "column": 2
                          }
                      ]
                  ],
                  "rows": [
                      {
                          "header": {
                              "code": "1340",
                              "codeVector": null,
                              "description": "Long-term receivables from associated companies",
                              "dimension": "Code",
                              "indentation": 0,
                              "span": 1,
                              "column": 0
                          },
                          "values": [
                              {
                                  "value": 10,
                                  "format": "#,##0",
                                  "column": 1,
                                  "inputValidationErrors": []
                              },
                              {
                                  "value": 10,
                                  "format": "#,##0",
                                  "column": 2,
                                  "inputValidationErrors": null
                              }
                          ]
                      },
                      {
                          "header": {
                              "code": "1TFFA",
                              "codeVector": null,
                              "description": "TOTAL FINANCIAL FIXED ASSETS",
                              "dimension": "Code",
                              "indentation": 0,
                              "span": 1,
                              "column": 0
                          },
                          "values": [
                              {
                                  "value": 10,
                                  "format": "#,##0",
                                  "column": 1,
                                  "inputValidationErrors": [
                                      "Code \"1TFFA\" not reported on any form this period"
                                  ]
                              },
                              {
                                  "value": 10,
                                  "format": "#,##0",
                                  "column": 2,
                                  "inputValidationErrors": null
                              }
                          ]
                      },
                      {
                          "header": {
                              "code": "1FA",
                              "codeVector": null,
                              "description": "TOTAL FIXED ASSETS",
                              "dimension": "Code",
                              "indentation": 0,
                              "span": 1,
                              "column": 0
                          },
                          "values": [
                              {
                                  "value": 10,
                                  "format": "#,##0",
                                  "column": 1,
                                  "inputValidationErrors": [
                                      "Code \"1FA\" not reported on any form this period"
                                  ]
                              },
                              {
                                  "value": 10,
                                  "format": "#,##0",
                                  "column": 2,
                                  "inputValidationErrors": null
                              }
                          ]
                      },
                      {
                          "header": {
                              "code": "1TA",
                              "codeVector": null,
                              "description": "TOTAL ASSETS",
                              "dimension": "Code",
                              "indentation": 0,
                              "span": 1,
                              "column": 0
                          },
                          "values": [
                              {
                                  "value": 10,
                                  "format": "#,##0",
                                  "column": 1,
                                  "inputValidationErrors": [
                                      "Code \"1TA\" not reported on any form this period"
                                  ]
                              },
                              {
                                  "value": 10,
                                  "format": "#,##0",
                                  "column": 2,
                                  "inputValidationErrors": null
                              }
                          ]
                      },
                      {
                          "header": {
                              "code": "2099",
                              "codeVector": null,
                              "description": "Income for the period",
                              "dimension": "Code",
                              "indentation": 0,
                              "span": 1,
                              "column": 0
                          },
                          "values": [
                              {
                                  "value": 5,
                                  "format": "#,##0",
                                  "column": 1,
                                  "inputValidationErrors": [
                                      "Code \"2099\" not reported on any form this period"
                                  ]
                              },
                              {
                                  "value": 5,
                                  "format": "#,##0",
                                  "column": 2,
                                  "inputValidationErrors": null
                              }
                          ]
                      },
                      {
                          "header": {
                              "code": "20REEA",
                              "codeVector": null,
                              "description": "Retained earnings including profit or loss for the period",
                              "dimension": "Code",
                              "indentation": 0,
                              "span": 1,
                              "column": 0
                          },
                          "values": [
                              {
                                  "value": 5,
                                  "format": "#,##0",
                                  "column": 1,
                                  "inputValidationErrors": [
                                      "Code \"20REEA\" not reported on any form this period"
                                  ]
                              },
                              {
                                  "value": 5,
                                  "format": "#,##0",
                                  "column": 2,
                                  "inputValidationErrors": null
                              }
                          ]
                      },
                      {
                          "header": {
                              "code": "20SE",
                              "codeVector": null,
                              "description": "TOTAL EQUITY",
                              "dimension": "Code",
                              "indentation": 0,
                              "span": 1,
                              "column": 0
                          },
                          "values": [
                              {
                                  "value": 5,
                                  "format": "#,##0",
                                  "column": 1,
                                  "inputValidationErrors": [
                                      "Code \"20SE\" not reported on any form this period"
                                  ]
                              },
                              {
                                  "value": 5,
                                  "format": "#,##0",
                                  "column": 2,
                                  "inputValidationErrors": null
                              }
                          ]
                      },
                      {
                          "header": {
                              "code": "20SETOT",
                              "codeVector": null,
                              "description": "TOTAL EQUITY, GROUP",
                              "dimension": "Code",
                              "indentation": 0,
                              "span": 1,
                              "column": 0
                          },
                          "values": [
                              {
                                  "value": 5,
                                  "format": "#,##0",
                                  "column": 1,
                                  "inputValidationErrors": [
                                      "Code \"20SETOT\" not reported on any form this period"
                                  ]
                              },
                              {
                                  "value": 5,
                                  "format": "#,##0",
                                  "column": 2,
                                  "inputValidationErrors": null
                              }
                          ]
                      },
                      {
                          "header": {
                              "code": "2TLE",
                              "codeVector": null,
                              "description": "TOTAL EQUITY AND LIABILITIES",
                              "dimension": "Code",
                              "indentation": 0,
                              "span": 1,
                              "column": 0
                          },
                          "values": [
                              {
                                  "value": 5,
                                  "format": "#,##0",
                                  "column": 1,
                                  "inputValidationErrors": [
                                      "Code \"2TLE\" not reported on any form this period"
                                  ]
                              },
                              {
                                  "value": 5,
                                  "format": "#,##0",
                                  "column": 2,
                                  "inputValidationErrors": null
                              }
                          ]
                      },
                      {
                          "header": {
                              "code": "2TBSDIFF",
                              "codeVector": null,
                              "description": "Balance sheet difference",
                              "dimension": "Code",
                              "indentation": 0,
                              "span": 1,
                              "column": 0
                          },
                          "values": [
                              {
                                  "value": 5,
                                  "format": "#,##0",
                                  "column": 1,
                                  "inputValidationErrors": [
                                      "Code \"2TBSDIFF\" not reported on any form this period"
                                  ]
                              },
                              {
                                  "value": 5,
                                  "format": "#,##0",
                                  "column": 2,
                                  "inputValidationErrors": null
                              }
                          ]
                      }
                  ],
                  "inputAvailability": {
                      "enabled": true,
                      "preValidation": [],
                      "rowSpec": null
                  },
                  "staticAxis": {
                      "criteria": [
                          {
                              "dimension": "Currency",
                              "sort": "AutomaticSorting",
                              "ascending": true,
                              "total": false,
                              "reportTotal": false,
                              "showCode": true,
                              "showDescription": false,
                              "exclude": false,
                              "selection": [
                                  {
                                      "type": "Member",
                                      "value": "LOC",
                                      "label": ""
                                  }
                              ]
                          },
                          {
                              "dimension": "Source",
                              "sort": "AutomaticSorting",
                              "ascending": true,
                              "total": false,
                              "reportTotal": false,
                              "showCode": true,
                              "showDescription": false,
                              "exclude": false,
                              "selection": [
                                  {
                                      "type": "Member",
                                      "value": "INPUT",
                                      "label": ""
                                  }
                              ]
                          },
                          {
                              "dimension": "Co",
                              "sort": "AutomaticSorting",
                              "ascending": true,
                              "total": false,
                              "reportTotal": false,
                              "showCode": true,
                              "showDescription": true,
                              "exclude": false,
                              "selection": [
                                  {
                                      "type": "Member",
                                      "value": "CO",
                                      "label": ""
                                  }
                              ]
                          },
                          {
                              "dimension": "Period",
                              "sort": "AutomaticSorting",
                              "ascending": true,
                              "total": false,
                              "reportTotal": false,
                              "showCode": true,
                              "showDescription": false,
                              "exclude": false,
                              "selection": [
                                  {
                                      "type": "Member",
                                      "value": "2112A",
                                      "label": ""
                                  }
                              ]
                          }
                      ],
                      "expand": [],
                      "topN": null,
                      "removeEmpty": false,
                      "compactLayout": false,
                      "expandPaths": [],
                      "collapsePaths": []
                  }
              };
              }
              else if(row2cell1 == "Total income"){
                context.load(theTable);
                await context.sync();
                data = {
                    "headers": [
                        [
                            {
                                "code": "",
                                "codeVector": null,
                                "description": "",
                                "dimension": "",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            {
                                "code": "2023",
                                "codeVector": null,
                                "description": "",
                                "dimension": "Year",
                                "indentation": 0,
                                "span": 1,
                                "column": 1
                            },
                            {
                                "code": "2022",
                                "codeVector": null,
                                "description": "",
                                "dimension": "Year",
                                "indentation": 0,
                                "span": 1,
                                "column": 2
                            }
                        ]
                    ],
                    "rows": [
                        {
                            "header": {
                                "code": "3999",
                                "codeVector": null,
                                "description": "Total income",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 1566370.7514,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 1029398.0310999999,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "4999",
                                "codeVector": null,
                                "description": "Costs of materials",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -739857.2744,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": -327558.2537,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "4GP",
                                "codeVector": null,
                                "description": "Gross profit",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 826513.4770000001,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 701839.7773999999,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "5999",
                                "codeVector": null,
                                "description": "Operating expenses",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -149762.8176,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": -112150.0719,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "6999",
                                "codeVector": null,
                                "description": "Other external operating expenses",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -184711.45049999998,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": -203566.27610000002,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "7699",
                                "codeVector": null,
                                "description": "Personnel costs",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -135340.6178,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": -160436.7574,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "EBITDA",
                                "codeVector": null,
                                "description": "Earnings before inter, depr, amort",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 356698.5911000001,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 225686.672,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "7899",
                                "codeVector": null,
                                "description": "Depreciation",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 1883162.4609,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 1741271.698,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "8399",
                                "codeVector": null,
                                "description": "Financial income",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 471950.166,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 776041.1597,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "8499",
                                "codeVector": null,
                                "description": "Financial expenses",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -61266.247599999995,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": -70501.4414,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "8799",
                                "codeVector": null,
                                "description": "Extraordinary income and expenses",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 0,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 0,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "8899",
                                "codeVector": null,
                                "description": "Appropriations",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 0,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 0,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "EBT",
                                "codeVector": null,
                                "description": "Earnings before  tax",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 2650544.970400001,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 2672498.0882999995,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "8910",
                                "codeVector": null,
                                "description": "Tax expense for the year",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": []
                        },
                        {
                            "header": {
                                "code": "8940",
                                "codeVector": null,
                                "description": "Deferred tax",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -434958.3094,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": -431249.309,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "8950",
                                "codeVector": null,
                                "description": "Minority",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -5311.6388,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": -8368.2852,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "8999",
                                "codeVector": null,
                                "description": "Net income",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 2210275.022200001,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 2222880.494099999,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        }
                    ],
                    "inputAvailability": {
                        "enabled": false,
                        "preValidation": null,
                        "rowSpec": null
                    },
                    "staticAxis": {
                        "criteria": [
                            {
                                "dimension": "Currency",
                                "sort": "SelectionOrder",
                                "ascending": true,
                                "total": false,
                                "reportTotal": false,
                                "showCode": true,
                                "showDescription": false,
                                "exclude": false,
                                "selection": [
                                    {
                                        "type": "Member",
                                        "value": "TSEK",
                                        "label": ""
                                    }
                                ]
                            },
                            {
                                "dimension": "PeriodType",
                                "sort": "SelectionOrder",
                                "ascending": true,
                                "total": false,
                                "reportTotal": false,
                                "showCode": true,
                                "showDescription": false,
                                "exclude": false,
                                "selection": [
                                    {
                                        "type": "Member",
                                        "value": "Actual",
                                        "label": ""
                                    }
                                ]
                            },
                            {
                                "dimension": "PeriodIndex",
                                "sort": "SelectionOrder",
                                "ascending": true,
                                "total": false,
                                "reportTotal": false,
                                "showCode": true,
                                "showDescription": false,
                                "exclude": false,
                                "selection": [
                                    {
                                        "type": "Member",
                                        "value": "12",
                                        "label": ""
                                    }
                                ]
                            }
                        ],
                        "expand": [],
                        "topN": null,
                        "removeEmpty": true,
                        "compactLayout": false,
                        "expandPaths": [],
                        "collapsePaths": []
                    }
                };
              }
              else if(row3cell1 == "Immaterial assets"){
                context.load(theTable);
                await context.sync();

                console.log(row3cell1);
                data = {
                    "headers": [
                        [
                            {
                                "code": "",
                                "codeVector": null,
                                "description": "",
                                "dimension": "",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            {
                                "code": "2023",
                                "codeVector": null,
                                "description": "",
                                "dimension": "Year",
                                "indentation": 0,
                                "span": 1,
                                "column": 1
                            },
                            {
                                "code": "2022",
                                "codeVector": null,
                                "description": "",
                                "dimension": "Year",
                                "indentation": 0,
                                "span": 1,
                                "column": 2
                            }
                        ]
                    ],
                    "rows": [
                        {
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
                        },
                        {
                            "header": {
                                "code": "1099",
                                "codeVector": null,
                                "description": "Immaterial assets",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 3240513.3929000013,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 398871.6214999992,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "1199",
                                "codeVector": null,
                                "description": "Land and buildings",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 2984290.1279,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 2686961.7467,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "1299",
                                "codeVector": null,
                                "description": "Tangible fixed assets",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 3721730.1843000012,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 3386407.2456999994,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "1399",
                                "codeVector": null,
                                "description": "Financial fixed assets",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 1770874.8002000002,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 1951361.7237999998,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "1499",
                                "codeVector": null,
                                "description": "Inventories and prod/work in progress",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 566461.1754000001,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 1016036.5683,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "1599",
                                "codeVector": null,
                                "description": "Accounts receivable",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 5317104.949200001,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 2279025.573,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "1699",
                                "codeVector": null,
                                "description": "Other current receivables",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 746033.2684000001,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 1630760.8437,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "1799",
                                "codeVector": null,
                                "description": "Prepaid expenses and accrued income",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 1349743.2415,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 1906251.0092999998,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "1899",
                                "codeVector": null,
                                "description": "Short-term investments",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 240438.24000000002,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 472725.1295,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "1999",
                                "codeVector": null,
                                "description": "Cash and bank",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 7196067.934,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 5036800.270900001,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "1TA",
                                "codeVector": null,
                                "description": "TOTAL ASSETS",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 27133257.313800007,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 20765201.7324,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
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
                        },
                        {
                            "header": {
                                "code": "2081",
                                "codeVector": null,
                                "description": "Share capital",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -7574811.3073,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": -6821284.9998,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
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
                        },
                        {
                            "header": {
                                "code": "2085",
                                "codeVector": null,
                                "description": "Revaluation reserve",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -41720,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": -41720,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "2086",
                                "codeVector": null,
                                "description": "Statutory reserve",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -77137.7374,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": -48137.7374,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "2087",
                                "codeVector": null,
                                "description": "Equity share, associated companies",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 22256.9683,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 8146.5118,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "20RE",
                                "codeVector": null,
                                "description": "Restricted equity",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": -7499315.5412,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": -6724816.8997,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "2091",
                                "codeVector": null,
                                "description": "Retained profit",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 4755352.7129999995,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 2469035.5612,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
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
                        },
                        {
                            "header": {
                                "code": "2096",
                                "codeVector": null,
                                "description": "Reserves (not IS)",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 280,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 280,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
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
                        },
                        {
                            "header": {
                                "code": "2099",
                                "codeVector": null,
                                "description": "Net income",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 2210275.022200001,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 2222880.494099999,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "20UE",
                                "codeVector": null,
                                "description": "Unrestricted equity",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 7592987.928200002,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 5127035.158100001,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "20SE",
                                "codeVector": null,
                                "description": "EQUITY",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 93672.38700000002,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": -1597781.7416,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "2100",
                                "codeVector": null,
                                "description": "Minority interest",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 81539.84,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 91993.0665,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "2199",
                                "codeVector": null,
                                "description": "Untaxed reserves",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 0,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 0,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "2299",
                                "codeVector": null,
                                "description": "Provisions",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 168458.5741,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 254957.18660000002,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "2399",
                                "codeVector": null,
                                "description": "Long-term liabilities",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 1728764.2536,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 2337036.84,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "2499",
                                "codeVector": null,
                                "description": "Current liabilities to cred inst, cust and suppl",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 2255392.4118,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 2686204.4589,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "2599",
                                "codeVector": null,
                                "description": "Income tax liability",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 410325.7055,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 410325.7055,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
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
                        },
                        {
                            "header": {
                                "code": "2799",
                                "codeVector": null,
                                "description": "Employee withholding taxes etc",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 350510.5,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 359215.85099999997,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "2899",
                                "codeVector": null,
                                "description": "Other current liabilities",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 18272548.2797,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 11118279.251600001,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "2999",
                                "codeVector": null,
                                "description": "Accrued expenses & deferred income",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 3092661.3482,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 3578220.6111,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        },
                        {
                            "header": {
                                "code": "2TLE",
                                "codeVector": null,
                                "description": "EQUITY AND LIABILITIES",
                                "dimension": "Code",
                                "indentation": 0,
                                "span": 1,
                                "column": 0
                            },
                            "values": [
                                {
                                    "value": 26453873.299899995,
                                    "format": "#,##0",
                                    "column": 1,
                                    "inputValidationErrors": null
                                },
                                {
                                    "value": 19238451.22960001,
                                    "format": "#,##0",
                                    "column": 2,
                                    "inputValidationErrors": null
                                }
                            ]
                        }
                    ],
                    "inputAvailability": {
                        "enabled": false,
                        "preValidation": null,
                        "rowSpec": null
                    },
                    "staticAxis": {
                        "criteria": [
                            {
                                "dimension": "Currency",
                                "sort": "SelectionOrder",
                                "ascending": true,
                                "total": false,
                                "reportTotal": false,
                                "showCode": true,
                                "showDescription": false,
                                "exclude": false,
                                "selection": [
                                    {
                                        "type": "Member",
                                        "value": "TSEK",
                                        "label": ""
                                    }
                                ]
                            },
                            {
                                "dimension": "PeriodType",
                                "sort": "SelectionOrder",
                                "ascending": true,
                                "total": false,
                                "reportTotal": false,
                                "showCode": true,
                                "showDescription": false,
                                "exclude": false,
                                "selection": [
                                    {
                                        "type": "Member",
                                        "value": "Actual",
                                        "label": ""
                                    }
                                ]
                            },
                            {
                                "dimension": "PeriodIndex",
                                "sort": "SelectionOrder",
                                "ascending": true,
                                "total": false,
                                "reportTotal": false,
                                "showCode": true,
                                "showDescription": false,
                                "exclude": false,
                                "selection": [
                                    {
                                        "type": "Member",
                                        "value": "12",
                                        "label": ""
                                    }
                                ]
                            }
                        ],
                        "expand": [],
                        "topN": null,
                        "removeEmpty": true,
                        "compactLayout": false,
                        "expandPaths": [],
                        "collapsePaths": []
                    }
                };

              };
              theTable.delete();
            //   insertTable("ASC-28751", data, '', '', '', templateSelected);
            insertTable(templateSelected, data, 'left', 'left', '3', "gridTable5Dark_Accent5")
            //insertTable("ASC-28751", data, 'left', 0, templateSelected);
             // insertTable(templateSelected, data, '', '', '', templateSelected);
          }
    //     const tableCollection = context.document.body.tables;
        
    //     // Queue a command to load the tables and execute the query.
    //     context.load(tableCollection);
    //     await context.sync();
    
        
    //     console.log(`Total tables in the document: ${tableCollection.items.length}`);
        
    //     // Loop through the table collection
    //     for (let i = 0; i < tableCollection.items .length; i++) {
    //         const theTable = tableCollection.items[i];
    //         console.log(tableCollection.items);



    //         const oldTableStyle = theTable.style;
    //         console.log(`Table Style: ${oldTableStyle}`);

    //         const serializedData = tableCollection.items[i].tag;



    //         let {
    //           tableTemplateSelect,
    //           selectValue,
    //           data
    //         } = JSON.parse(serializedData);
  
    //         console.log(tableTemplateSelect)
    //         console.log(data)
    //         console.log(selectValue);
            
    //         // Get the content controls within the table
    //         // var contentControls = theTable.contentControls;
    //         // console.log(theTable)
    //         // contentControls.load("items, items/tag");
    //         // await context.sync();

    //         // // Loop through the content controls in the table
    //         // for (const contentControl of contentControls.items) {
    //         //     const serializedData = contentControl.tag;
    //         //     let {
    //         //         tableTemplateSelect,
    //         //         selectValue,
    //         //         data
    //         //     } = JSON.parse(serializedData);
    
    //         //     console.log(`Table Template: ${tableTemplateSelect}`);
    //         //     console.log(`Select Value: ${selectValue}`);
    //         //     console.log(`Data: ${data}`);
    
    //         //     // You can perform actions with the content controls here
    //         // }
            
    //         // Delete the current table
    //         theTable.delete();

    //         insertTable(selectValue, data, '', '', '', tableTemplateSelect);
  
            
    //         // Insert a new table or perform other actions
    //         // based on your requirements (insertTable function)
    //     }
    // }).catch((error) => {
    //     console.log(`Error: ${error.message}`);
    // 
  }
    );
    


  };
//       document.getElementById("refreshAll2").onclick = async function () {


//       await Word.run(async function (context) {

 
//           const tableCollection = context.document.body.tables;
//           var data =0;
//           // Queue a commmand to load the results.
//           context.load(tableCollection);
//           await context.sync()
//           //cycle through the tbale collection and test the first cell of each table looking for insects
//           for (var i = 0; i < tableCollection.items.length; i++) {
//               var theTable = null;
//               theTable = tableCollection.items[i];
//               var cell1 = theTable.values[0][1];
//               var row2cell1 = theTable.values[1][0];
//               var row3cell1 = theTable.values[2][0];
//             //   var style = theTable.style;
//             //   console.log("Style:" . style);
//               console.log(row2cell1);
//               if (cell1 == "GOTHENBURG") {
//                   //once found, load the table in memory and add a row
//                   context.load(theTable);
//                   await context.sync();
//                   data = {
//                     "headers": [
//                         [
//                             {
//                                 "code": "",
//                                 "codeVector": null,
//                                 "description": "",
//                                 "dimension": "",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             {
//                                 "code": "GOTHENBURG",
//                                 "codeVector": null,
//                                 "description": "Gothenburg",
//                                 "dimension": "Co",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 1
//                             },
//                             {
//                                 "code": "MOLNDAL",
//                                 "codeVector": null,
//                                 "description": "Mölndal",
//                                 "dimension": "Co",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 2
//                             },
//                             {
//                                 "code": "PARTILLE",
//                                 "codeVector": null,
//                                 "description": "Partille",
//                                 "dimension": "Co",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 3
//                             },
//                             {
//                                 "code": "SV_HOLD",
//                                 "codeVector": null,
//                                 "description": "Sweden Holding AB",
//                                 "dimension": "Co",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 4
//                             },
//                             {
//                                 "code": "EL",
//                                 "codeVector": null,
//                                 "description": "Elimination company",
//                                 "dimension": "Co",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 5
//                             }
//                         ]
//                     ],
//                     "rows": [
//                         {
//                             "header": {
//                                 "code": "2081",
//                                 "codeVector": null,
//                                 "description": "Share capital",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": []
//                         },
//                         {
//                             "header": {
//                                 "code": "ARLANDA",
//                                 "codeVector": null,
//                                 "description": "Sthlm Arlanda",
//                                 "dimension": "OwnedCo",
//                                 "indentation": 1,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -90000,
//                                     "format": "#,##0",
//                                     "column": 5,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "ASC-28751",
//                                 "codeVector": null,
//                                 "description": "",
//                                 "dimension": "OwnedCo",
//                                 "indentation": 1,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -150,
//                                     "format": "#,##0",
//                                     "column": 5,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "GOTHENBURG",
//                                 "codeVector": null,
//                                 "description": "Gothenburg",
//                                 "dimension": "OwnedCo",
//                                 "indentation": 1,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -60000,
//                                     "format": "#,##0",
//                                     "column": 5,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "MOLNDAL",
//                                 "codeVector": null,
//                                 "description": "Mölndal",
//                                 "dimension": "OwnedCo",
//                                 "indentation": 1,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -5000,
//                                     "format": "#,##0",
//                                     "column": 5,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "PARTILLE",
//                                 "codeVector": null,
//                                 "description": "Partille",
//                                 "dimension": "OwnedCo",
//                                 "indentation": 1,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -15000,
//                                     "format": "#,##0",
//                                     "column": 5,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "UNDEF",
//                                 "codeVector": null,
//                                 "description": "",
//                                 "dimension": "OwnedCo",
//                                 "indentation": 1,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 60000,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 5000,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 15000,
//                                     "format": "#,##0",
//                                     "column": 3,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 3000,
//                                     "format": "#,##0",
//                                     "column": 4,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 0,
//                                     "format": "#,##0",
//                                     "column": 5,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         }
//                     ],
//                     "inputAvailability": {
//                         "enabled": false,
//                         "preValidation": null,
//                         "rowSpec": null
//                     },
//                     "staticAxis": {
//                         "criteria": [
//                             {
//                                 "dimension": "Currency",
//                                 "sort": "AutomaticSorting",
//                                 "ascending": true,
//                                 "total": false,
//                                 "reportTotal": false,
//                                 "showCode": true,
//                                 "showDescription": false,
//                                 "exclude": false,
//                                 "selection": [
//                                     {
//                                         "type": "Member",
//                                         "value": "LOC",
//                                         "label": ""
//                                     }
//                                 ]
//                             },
//                             {
//                                 "dimension": "LegalGroup",
//                                 "sort": "AutomaticSorting",
//                                 "ascending": false,
//                                 "total": false,
//                                 "reportTotal": false,
//                                 "showCode": true,
//                                 "showDescription": false,
//                                 "exclude": false,
//                                 "selection": [
//                                     {
//                                         "type": "Member",
//                                         "value": "LEGGROUP",
//                                         "label": ""
//                                     }
//                                 ]
//                             },
//                             {
//                                 "dimension": "Period",
//                                 "sort": "AutomaticSorting",
//                                 "ascending": true,
//                                 "total": false,
//                                 "reportTotal": false,
//                                 "showCode": true,
//                                 "showDescription": false,
//                                 "exclude": false,
//                                 "selection": [
//                                     {
//                                         "type": "Member",
//                                         "value": "2212A",
//                                         "label": ""
//                                     }
//                                 ]
//                             }
//                         ],
//                         "expand": [],
//                         "topN": null,
//                         "removeEmpty": true,
//                         "compactLayout": false,
//                         "expandPaths": [],
//                         "collapsePaths": []
//                     }
//                 };
//               }
//               else if(cell1 == "ENTER"){

//                 //once found, load the table in memory and add a row
//                 context.load(theTable);
//                 await context.sync();
//                 data = {
//                   "headers": [
//                       [
//                           {
//                               "code": "",
//                               "codeVector": null,
//                               "description": "",
//                               "dimension": "",
//                               "indentation": 0,
//                               "span": 1,
//                               "column": 0
//                           },
//                           {
//                               "code": "ENTER",
//                               "codeVector": null,
//                               "description": "Entertainment",
//                               "dimension": "Level3",
//                               "indentation": 0,
//                               "span": 1,
//                               "column": 1
//                           },
//                           {
//                               "code": "Report Total",
//                               "codeVector": null,
//                               "description": "",
//                               "dimension": "Level3",
//                               "indentation": 0,
//                               "span": 1,
//                               "column": 2
//                           }
//                       ]
//                   ],
//                   "rows": [
//                       {
//                           "header": {
//                               "code": "1340",
//                               "codeVector": null,
//                               "description": "Long-term receivables from associated companies",
//                               "dimension": "Code",
//                               "indentation": 0,
//                               "span": 1,
//                               "column": 0
//                           },
//                           "values": [
//                               {
//                                   "value": 10,
//                                   "format": "#,##0",
//                                   "column": 1,
//                                   "inputValidationErrors": []
//                               },
//                               {
//                                   "value": 10,
//                                   "format": "#,##0",
//                                   "column": 2,
//                                   "inputValidationErrors": null
//                               }
//                           ]
//                       },
//                       {
//                           "header": {
//                               "code": "1TFFA",
//                               "codeVector": null,
//                               "description": "TOTAL FINANCIAL FIXED ASSETS",
//                               "dimension": "Code",
//                               "indentation": 0,
//                               "span": 1,
//                               "column": 0
//                           },
//                           "values": [
//                               {
//                                   "value": 10,
//                                   "format": "#,##0",
//                                   "column": 1,
//                                   "inputValidationErrors": [
//                                       "Code \"1TFFA\" not reported on any form this period"
//                                   ]
//                               },
//                               {
//                                   "value": 10,
//                                   "format": "#,##0",
//                                   "column": 2,
//                                   "inputValidationErrors": null
//                               }
//                           ]
//                       },
//                       {
//                           "header": {
//                               "code": "1FA",
//                               "codeVector": null,
//                               "description": "TOTAL FIXED ASSETS",
//                               "dimension": "Code",
//                               "indentation": 0,
//                               "span": 1,
//                               "column": 0
//                           },
//                           "values": [
//                               {
//                                   "value": 10,
//                                   "format": "#,##0",
//                                   "column": 1,
//                                   "inputValidationErrors": [
//                                       "Code \"1FA\" not reported on any form this period"
//                                   ]
//                               },
//                               {
//                                   "value": 10,
//                                   "format": "#,##0",
//                                   "column": 2,
//                                   "inputValidationErrors": null
//                               }
//                           ]
//                       },
//                       {
//                           "header": {
//                               "code": "1TA",
//                               "codeVector": null,
//                               "description": "TOTAL ASSETS",
//                               "dimension": "Code",
//                               "indentation": 0,
//                               "span": 1,
//                               "column": 0
//                           },
//                           "values": [
//                               {
//                                   "value": 10,
//                                   "format": "#,##0",
//                                   "column": 1,
//                                   "inputValidationErrors": [
//                                       "Code \"1TA\" not reported on any form this period"
//                                   ]
//                               },
//                               {
//                                   "value": 10,
//                                   "format": "#,##0",
//                                   "column": 2,
//                                   "inputValidationErrors": null
//                               }
//                           ]
//                       },
//                       {
//                           "header": {
//                               "code": "2099",
//                               "codeVector": null,
//                               "description": "Income for the period",
//                               "dimension": "Code",
//                               "indentation": 0,
//                               "span": 1,
//                               "column": 0
//                           },
//                           "values": [
//                               {
//                                   "value": 5,
//                                   "format": "#,##0",
//                                   "column": 1,
//                                   "inputValidationErrors": [
//                                       "Code \"2099\" not reported on any form this period"
//                                   ]
//                               },
//                               {
//                                   "value": 5,
//                                   "format": "#,##0",
//                                   "column": 2,
//                                   "inputValidationErrors": null
//                               }
//                           ]
//                       },
//                       {
//                           "header": {
//                               "code": "20REEA",
//                               "codeVector": null,
//                               "description": "Retained earnings including profit or loss for the period",
//                               "dimension": "Code",
//                               "indentation": 0,
//                               "span": 1,
//                               "column": 0
//                           },
//                           "values": [
//                               {
//                                   "value": 5,
//                                   "format": "#,##0",
//                                   "column": 1,
//                                   "inputValidationErrors": [
//                                       "Code \"20REEA\" not reported on any form this period"
//                                   ]
//                               },
//                               {
//                                   "value": 5,
//                                   "format": "#,##0",
//                                   "column": 2,
//                                   "inputValidationErrors": null
//                               }
//                           ]
//                       },
//                       {
//                           "header": {
//                               "code": "20SE",
//                               "codeVector": null,
//                               "description": "TOTAL EQUITY",
//                               "dimension": "Code",
//                               "indentation": 0,
//                               "span": 1,
//                               "column": 0
//                           },
//                           "values": [
//                               {
//                                   "value": 5,
//                                   "format": "#,##0",
//                                   "column": 1,
//                                   "inputValidationErrors": [
//                                       "Code \"20SE\" not reported on any form this period"
//                                   ]
//                               },
//                               {
//                                   "value": 5,
//                                   "format": "#,##0",
//                                   "column": 2,
//                                   "inputValidationErrors": null
//                               }
//                           ]
//                       },
//                       {
//                           "header": {
//                               "code": "20SETOT",
//                               "codeVector": null,
//                               "description": "TOTAL EQUITY, GROUP",
//                               "dimension": "Code",
//                               "indentation": 0,
//                               "span": 1,
//                               "column": 0
//                           },
//                           "values": [
//                               {
//                                   "value": 5,
//                                   "format": "#,##0",
//                                   "column": 1,
//                                   "inputValidationErrors": [
//                                       "Code \"20SETOT\" not reported on any form this period"
//                                   ]
//                               },
//                               {
//                                   "value": 5,
//                                   "format": "#,##0",
//                                   "column": 2,
//                                   "inputValidationErrors": null
//                               }
//                           ]
//                       },
//                       {
//                           "header": {
//                               "code": "2TLE",
//                               "codeVector": null,
//                               "description": "TOTAL EQUITY AND LIABILITIES",
//                               "dimension": "Code",
//                               "indentation": 0,
//                               "span": 1,
//                               "column": 0
//                           },
//                           "values": [
//                               {
//                                   "value": 5,
//                                   "format": "#,##0",
//                                   "column": 1,
//                                   "inputValidationErrors": [
//                                       "Code \"2TLE\" not reported on any form this period"
//                                   ]
//                               },
//                               {
//                                   "value": 5,
//                                   "format": "#,##0",
//                                   "column": 2,
//                                   "inputValidationErrors": null
//                               }
//                           ]
//                       },
//                       {
//                           "header": {
//                               "code": "2TBSDIFF",
//                               "codeVector": null,
//                               "description": "Balance sheet difference",
//                               "dimension": "Code",
//                               "indentation": 0,
//                               "span": 1,
//                               "column": 0
//                           },
//                           "values": [
//                               {
//                                   "value": 5,
//                                   "format": "#,##0",
//                                   "column": 1,
//                                   "inputValidationErrors": [
//                                       "Code \"2TBSDIFF\" not reported on any form this period"
//                                   ]
//                               },
//                               {
//                                   "value": 5,
//                                   "format": "#,##0",
//                                   "column": 2,
//                                   "inputValidationErrors": null
//                               }
//                           ]
//                       }
//                   ],
//                   "inputAvailability": {
//                       "enabled": true,
//                       "preValidation": [],
//                       "rowSpec": null
//                   },
//                   "staticAxis": {
//                       "criteria": [
//                           {
//                               "dimension": "Currency",
//                               "sort": "AutomaticSorting",
//                               "ascending": true,
//                               "total": false,
//                               "reportTotal": false,
//                               "showCode": true,
//                               "showDescription": false,
//                               "exclude": false,
//                               "selection": [
//                                   {
//                                       "type": "Member",
//                                       "value": "LOC",
//                                       "label": ""
//                                   }
//                               ]
//                           },
//                           {
//                               "dimension": "Source",
//                               "sort": "AutomaticSorting",
//                               "ascending": true,
//                               "total": false,
//                               "reportTotal": false,
//                               "showCode": true,
//                               "showDescription": false,
//                               "exclude": false,
//                               "selection": [
//                                   {
//                                       "type": "Member",
//                                       "value": "INPUT",
//                                       "label": ""
//                                   }
//                               ]
//                           },
//                           {
//                               "dimension": "Co",
//                               "sort": "AutomaticSorting",
//                               "ascending": true,
//                               "total": false,
//                               "reportTotal": false,
//                               "showCode": true,
//                               "showDescription": true,
//                               "exclude": false,
//                               "selection": [
//                                   {
//                                       "type": "Member",
//                                       "value": "CO",
//                                       "label": ""
//                                   }
//                               ]
//                           },
//                           {
//                               "dimension": "Period",
//                               "sort": "AutomaticSorting",
//                               "ascending": true,
//                               "total": false,
//                               "reportTotal": false,
//                               "showCode": true,
//                               "showDescription": false,
//                               "exclude": false,
//                               "selection": [
//                                   {
//                                       "type": "Member",
//                                       "value": "2112A",
//                                       "label": ""
//                                   }
//                               ]
//                           }
//                       ],
//                       "expand": [],
//                       "topN": null,
//                       "removeEmpty": false,
//                       "compactLayout": false,
//                       "expandPaths": [],
//                       "collapsePaths": []
//                   }
//               };
//               }
//               else if(row2cell1 == "Total income"){
//                 context.load(theTable);
//                 await context.sync();
//                 data = {
//                     "headers": [
//                         [
//                             {
//                                 "code": "",
//                                 "codeVector": null,
//                                 "description": "",
//                                 "dimension": "",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             {
//                                 "code": "2023",
//                                 "codeVector": null,
//                                 "description": "",
//                                 "dimension": "Year",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 1
//                             },
//                             {
//                                 "code": "2022",
//                                 "codeVector": null,
//                                 "description": "",
//                                 "dimension": "Year",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 2
//                             }
//                         ]
//                     ],
//                     "rows": [
//                         {
//                             "header": {
//                                 "code": "3999",
//                                 "codeVector": null,
//                                 "description": "Total income",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 1566370.7514,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 1029398.0310999999,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "4999",
//                                 "codeVector": null,
//                                 "description": "Costs of materials",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -739857.2744,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": -327558.2537,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "4GP",
//                                 "codeVector": null,
//                                 "description": "Gross profit",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 826513.4770000001,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 701839.7773999999,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "5999",
//                                 "codeVector": null,
//                                 "description": "Operating expenses",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -149762.8176,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": -112150.0719,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "6999",
//                                 "codeVector": null,
//                                 "description": "Other external operating expenses",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -184711.45049999998,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": -203566.27610000002,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "7699",
//                                 "codeVector": null,
//                                 "description": "Personnel costs",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -135340.6178,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": -160436.7574,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "EBITDA",
//                                 "codeVector": null,
//                                 "description": "Earnings before inter, depr, amort",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 356698.5911000001,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 225686.672,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "7899",
//                                 "codeVector": null,
//                                 "description": "Depreciation",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 1883162.4609,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 1741271.698,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "8399",
//                                 "codeVector": null,
//                                 "description": "Financial income",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 471950.166,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 776041.1597,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "8499",
//                                 "codeVector": null,
//                                 "description": "Financial expenses",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -61266.247599999995,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": -70501.4414,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "8799",
//                                 "codeVector": null,
//                                 "description": "Extraordinary income and expenses",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 0,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 0,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "8899",
//                                 "codeVector": null,
//                                 "description": "Appropriations",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 0,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 0,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "EBT",
//                                 "codeVector": null,
//                                 "description": "Earnings before  tax",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 2650544.970400001,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 2672498.0882999995,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "8910",
//                                 "codeVector": null,
//                                 "description": "Tax expense for the year",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": []
//                         },
//                         {
//                             "header": {
//                                 "code": "8940",
//                                 "codeVector": null,
//                                 "description": "Deferred tax",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -434958.3094,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": -431249.309,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "8950",
//                                 "codeVector": null,
//                                 "description": "Minority",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -5311.6388,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": -8368.2852,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "8999",
//                                 "codeVector": null,
//                                 "description": "Net income",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 2210275.022200001,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 2222880.494099999,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         }
//                     ],
//                     "inputAvailability": {
//                         "enabled": false,
//                         "preValidation": null,
//                         "rowSpec": null
//                     },
//                     "staticAxis": {
//                         "criteria": [
//                             {
//                                 "dimension": "Currency",
//                                 "sort": "SelectionOrder",
//                                 "ascending": true,
//                                 "total": false,
//                                 "reportTotal": false,
//                                 "showCode": true,
//                                 "showDescription": false,
//                                 "exclude": false,
//                                 "selection": [
//                                     {
//                                         "type": "Member",
//                                         "value": "TSEK",
//                                         "label": ""
//                                     }
//                                 ]
//                             },
//                             {
//                                 "dimension": "PeriodType",
//                                 "sort": "SelectionOrder",
//                                 "ascending": true,
//                                 "total": false,
//                                 "reportTotal": false,
//                                 "showCode": true,
//                                 "showDescription": false,
//                                 "exclude": false,
//                                 "selection": [
//                                     {
//                                         "type": "Member",
//                                         "value": "Actual",
//                                         "label": ""
//                                     }
//                                 ]
//                             },
//                             {
//                                 "dimension": "PeriodIndex",
//                                 "sort": "SelectionOrder",
//                                 "ascending": true,
//                                 "total": false,
//                                 "reportTotal": false,
//                                 "showCode": true,
//                                 "showDescription": false,
//                                 "exclude": false,
//                                 "selection": [
//                                     {
//                                         "type": "Member",
//                                         "value": "12",
//                                         "label": ""
//                                     }
//                                 ]
//                             }
//                         ],
//                         "expand": [],
//                         "topN": null,
//                         "removeEmpty": true,
//                         "compactLayout": false,
//                         "expandPaths": [],
//                         "collapsePaths": []
//                     }
//                 };
//               }
//               else if(row3cell1 == "Immaterial assets"){
//                 context.load(theTable);
//                 await context.sync();

//                 console.log(row3cell1);
//                 data = {
//                     "headers": [
//                         [
//                             {
//                                 "code": "",
//                                 "codeVector": null,
//                                 "description": "",
//                                 "dimension": "",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             {
//                                 "code": "2023",
//                                 "codeVector": null,
//                                 "description": "",
//                                 "dimension": "Year",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 1
//                             },
//                             {
//                                 "code": "2022",
//                                 "codeVector": null,
//                                 "description": "",
//                                 "dimension": "Year",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 2
//                             }
//                         ]
//                     ],
//                     "rows": [
//                         {
//                             "header": {
//                                 "code": "ASSETS",
//                                 "codeVector": null,
//                                 "description": "",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": []
//                         },
//                         {
//                             "header": {
//                                 "code": "1099",
//                                 "codeVector": null,
//                                 "description": "Immaterial assets",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 3240513.3929000013,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 398871.6214999992,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "1199",
//                                 "codeVector": null,
//                                 "description": "Land and buildings",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 2984290.1279,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 2686961.7467,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "1299",
//                                 "codeVector": null,
//                                 "description": "Tangible fixed assets",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 3721730.1843000012,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 3386407.2456999994,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "1399",
//                                 "codeVector": null,
//                                 "description": "Financial fixed assets",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 1770874.8002000002,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 1951361.7237999998,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "1499",
//                                 "codeVector": null,
//                                 "description": "Inventories and prod/work in progress",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 566461.1754000001,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 1016036.5683,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "1599",
//                                 "codeVector": null,
//                                 "description": "Accounts receivable",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 5317104.949200001,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 2279025.573,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "1699",
//                                 "codeVector": null,
//                                 "description": "Other current receivables",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 746033.2684000001,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 1630760.8437,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "1799",
//                                 "codeVector": null,
//                                 "description": "Prepaid expenses and accrued income",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 1349743.2415,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 1906251.0092999998,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "1899",
//                                 "codeVector": null,
//                                 "description": "Short-term investments",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 240438.24000000002,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 472725.1295,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "1999",
//                                 "codeVector": null,
//                                 "description": "Cash and bank",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 7196067.934,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 5036800.270900001,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "1TA",
//                                 "codeVector": null,
//                                 "description": "TOTAL ASSETS",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 27133257.313800007,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 20765201.7324,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "LIABILITIES",
//                                 "codeVector": null,
//                                 "description": "",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": []
//                         },
//                         {
//                             "header": {
//                                 "code": "2081",
//                                 "codeVector": null,
//                                 "description": "Share capital",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -7574811.3073,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": -6821284.9998,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2082",
//                                 "codeVector": null,
//                                 "description": "Unregistered share capital",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": []
//                         },
//                         {
//                             "header": {
//                                 "code": "2085",
//                                 "codeVector": null,
//                                 "description": "Revaluation reserve",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -41720,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": -41720,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2086",
//                                 "codeVector": null,
//                                 "description": "Statutory reserve",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -77137.7374,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": -48137.7374,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2087",
//                                 "codeVector": null,
//                                 "description": "Equity share, associated companies",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 22256.9683,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 8146.5118,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "20RE",
//                                 "codeVector": null,
//                                 "description": "Restricted equity",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": -7499315.5412,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": -6724816.8997,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2091",
//                                 "codeVector": null,
//                                 "description": "Retained profit",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 4755352.7129999995,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 2469035.5612,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2094",
//                                 "codeVector": null,
//                                 "description": "Own shares",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": []
//                         },
//                         {
//                             "header": {
//                                 "code": "2096",
//                                 "codeVector": null,
//                                 "description": "Reserves (not IS)",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 280,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 280,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2097",
//                                 "codeVector": null,
//                                 "description": "Share premium reserve",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": []
//                         },
//                         {
//                             "header": {
//                                 "code": "2099",
//                                 "codeVector": null,
//                                 "description": "Net income",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 2210275.022200001,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 2222880.494099999,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "20UE",
//                                 "codeVector": null,
//                                 "description": "Unrestricted equity",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 7592987.928200002,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 5127035.158100001,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "20SE",
//                                 "codeVector": null,
//                                 "description": "EQUITY",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 93672.38700000002,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": -1597781.7416,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2100",
//                                 "codeVector": null,
//                                 "description": "Minority interest",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 81539.84,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 91993.0665,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2199",
//                                 "codeVector": null,
//                                 "description": "Untaxed reserves",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 0,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 0,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2299",
//                                 "codeVector": null,
//                                 "description": "Provisions",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 168458.5741,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 254957.18660000002,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2399",
//                                 "codeVector": null,
//                                 "description": "Long-term liabilities",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 1728764.2536,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 2337036.84,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2499",
//                                 "codeVector": null,
//                                 "description": "Current liabilities to cred inst, cust and suppl",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 2255392.4118,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 2686204.4589,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2599",
//                                 "codeVector": null,
//                                 "description": "Income tax liability",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 410325.7055,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 410325.7055,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2699",
//                                 "codeVector": null,
//                                 "description": "VAT and excise duty",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": []
//                         },
//                         {
//                             "header": {
//                                 "code": "2799",
//                                 "codeVector": null,
//                                 "description": "Employee withholding taxes etc",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 350510.5,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 359215.85099999997,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2899",
//                                 "codeVector": null,
//                                 "description": "Other current liabilities",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 18272548.2797,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 11118279.251600001,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2999",
//                                 "codeVector": null,
//                                 "description": "Accrued expenses & deferred income",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 3092661.3482,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 3578220.6111,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         },
//                         {
//                             "header": {
//                                 "code": "2TLE",
//                                 "codeVector": null,
//                                 "description": "EQUITY AND LIABILITIES",
//                                 "dimension": "Code",
//                                 "indentation": 0,
//                                 "span": 1,
//                                 "column": 0
//                             },
//                             "values": [
//                                 {
//                                     "value": 26453873.299899995,
//                                     "format": "#,##0",
//                                     "column": 1,
//                                     "inputValidationErrors": null
//                                 },
//                                 {
//                                     "value": 19238451.22960001,
//                                     "format": "#,##0",
//                                     "column": 2,
//                                     "inputValidationErrors": null
//                                 }
//                             ]
//                         }
//                     ],
//                     "inputAvailability": {
//                         "enabled": false,
//                         "preValidation": null,
//                         "rowSpec": null
//                     },
//                     "staticAxis": {
//                         "criteria": [
//                             {
//                                 "dimension": "Currency",
//                                 "sort": "SelectionOrder",
//                                 "ascending": true,
//                                 "total": false,
//                                 "reportTotal": false,
//                                 "showCode": true,
//                                 "showDescription": false,
//                                 "exclude": false,
//                                 "selection": [
//                                     {
//                                         "type": "Member",
//                                         "value": "TSEK",
//                                         "label": ""
//                                     }
//                                 ]
//                             },
//                             {
//                                 "dimension": "PeriodType",
//                                 "sort": "SelectionOrder",
//                                 "ascending": true,
//                                 "total": false,
//                                 "reportTotal": false,
//                                 "showCode": true,
//                                 "showDescription": false,
//                                 "exclude": false,
//                                 "selection": [
//                                     {
//                                         "type": "Member",
//                                         "value": "Actual",
//                                         "label": ""
//                                     }
//                                 ]
//                             },
//                             {
//                                 "dimension": "PeriodIndex",
//                                 "sort": "SelectionOrder",
//                                 "ascending": true,
//                                 "total": false,
//                                 "reportTotal": false,
//                                 "showCode": true,
//                                 "showDescription": false,
//                                 "exclude": false,
//                                 "selection": [
//                                     {
//                                         "type": "Member",
//                                         "value": "12",
//                                         "label": ""
//                                     }
//                                 ]
//                             }
//                         ],
//                         "expand": [],
//                         "topN": null,
//                         "removeEmpty": true,
//                         "compactLayout": false,
//                         "expandPaths": [],
//                         "collapsePaths": []
//                     }
//                 };

//               };
//               theTable.delete();
//               insertTable("ASC-28751", data, '', '', '', "gridTable5Dark_Accent5");
//           }
//     //     const tableCollection = context.document.body.tables;
        
//     //     // Queue a command to load the tables and execute the query.
//     //     context.load(tableCollection);
//     //     await context.sync();
    
        
//     //     console.log(`Total tables in the document: ${tableCollection.items.length}`);
        
//     //     // Loop through the table collection
//     //     for (let i = 0; i < tableCollection.items .length; i++) {
//     //         const theTable = tableCollection.items[i];
//     //         console.log(tableCollection.items);



//     //         const oldTableStyle = theTable.style;
//     //         console.log(`Table Style: ${oldTableStyle}`);

//     //         const serializedData = tableCollection.items[i].tag;



//     //         let {
//     //           tableTemplateSelect,
//     //           selectValue,
//     //           data
//     //         } = JSON.parse(serializedData);
  
//     //         console.log(tableTemplateSelect)
//     //         console.log(data)
//     //         console.log(selectValue);
            
//     //         // Get the content controls within the table
//     //         // var contentControls = theTable.contentControls;
//     //         // console.log(theTable)
//     //         // contentControls.load("items, items/tag");
//     //         // await context.sync();

//     //         // // Loop through the content controls in the table
//     //         // for (const contentControl of contentControls.items) {
//     //         //     const serializedData = contentControl.tag;
//     //         //     let {
//     //         //         tableTemplateSelect,
//     //         //         selectValue,
//     //         //         data
//     //         //     } = JSON.parse(serializedData);
    
//     //         //     console.log(`Table Template: ${tableTemplateSelect}`);
//     //         //     console.log(`Select Value: ${selectValue}`);
//     //         //     console.log(`Data: ${data}`);
    
//     //         //     // You can perform actions with the content controls here
//     //         // }
            
//     //         // Delete the current table
//     //         theTable.delete();

//     //         insertTable(selectValue, data, '', '', '', tableTemplateSelect);
  
            
//     //         // Insert a new table or perform other actions
//     //         // based on your requirements (insertTable function)
//     //     }
//     // }).catch((error) => {
//     //     console.log(`Error: ${error.message}`);
//     // 
//   }
//     );
    


//   };


  }
});


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

  console.log([selectValue,data,firstColumnAlignment,firstRowAlignment,decimalPlace,
    tableTemplateSelect
  ])

  

  await Word.run(async (context) => {
    try {
        
      const table = context.document.body.insertTable(tableData.length, tableData[0].length, "end", tableData);
      let contentControl = table.insertContentControl();
      const serializedData = JSON.stringify({
        tableTemplateSelect,
        selectValue,
        data
      });
      contentControl.tag = serializedData;
      await context.sync();
            console.log(selectValue)
    //   table.styleBuiltIn = Word.Style['gridTable5Dark_Accent5'];
      table.styleBuiltIn = Word.Style[selectValue];
      table.styleFirstRow = false;
      // Now load and set alignment for cells
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