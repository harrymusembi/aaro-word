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
    retrieveReportsData1();

    //vuexyTree();
    //-poulateTree();

    //document.getElementById("submitReport").onclick = function () {
    var data = "";
    var selectValue = document.getElementById("select2Icons").value;
    var tableTemplateSelect = document.getElementById("tableSelect").value;
    // console.log(tableTemplateSelect);

    const ColumnRadioButtons = document.getElementsByName("columnAlignment");
    let firstColumnAlignment;

    for (const ColumnRadioButton of ColumnRadioButtons) {
      if (ColumnRadioButton.checked) {
        firstColumnAlignment = ColumnRadioButton.value;
        break;
      }
    }

    if (firstColumnAlignment == undefined) {
      firstColumnAlignment = "left";
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
      firstRowAlignment = "left";
    }
    // console.log(firstRowAlignment);

    let decimalPlace = document.getElementById("decimalPlace").value.trim();
    // console.log(decimalPlace);
    if (!decimalPlace) {
      decimalPlace = 2;
    }

    if (tableTemplateSelect == "noteThree") {
      data = note3_data();
      insertTable(selectValue, data, firstColumnAlignment, firstRowAlignment, decimalPlace, tableTemplateSelect);
      console.log("noteThree Passed");
    } else if (tableTemplateSelect == "noteFive") {
      data = note5_data();
      insertTable(selectValue, data, firstColumnAlignment, firstRowAlignment, decimalPlace, tableTemplateSelect);
      console.log("noteFive Passed");
    } else if (tableTemplateSelect == "noteEight") {
      data = note8_data();
      insertTable(selectValue, data, firstColumnAlignment, firstRowAlignment, decimalPlace, tableTemplateSelect);
      console.log("noteEight Passed");
    }
  }
});

function poulateTree() {
  $(document).ready(function () {
    var jsonData = [
      {
        name: "Personal Reports",
        isEmpty: true,
      },
      {
        name: "Data entry",
        isEmpty: false,
        json: {
          description: "Data entry",
          folders: [],
          items: [],
          edit: true,
        },
      },
      {
        name: "Company reports",
        isEmpty: false,
        json: {
          description: null,
          folders: [],
          items: [
            {
              name: "Cashflow by Company",
              type: "Report",
              id: 10735,
            },
            {
              name: "Financial statement by Company",
              type: "Report",
              id: 542,
            },
            {
              name: "Income statement by Company",
              type: "Report",
              id: 10736,
            },
            {
              name: "Tangible assets",
              type: "Report",
              id: 543,
            },
          ],
          edit: true,
        },
      },
      {
        name: "Match reports",
        isEmpty: false,
        json: {
          description: null,
          folders: [],
          items: [],
          edit: true,
        },
      },
      {
        name: "Group accounting",
        isEmpty: false,
        json: {
          description: "Group accounting for analysing financial data",
          folders: [
            {
              name: "Statutory",
              isEmpty: false,
            },
            {
              name: "Notes",
              isEmpty: false,
            },
            {
              name: "Currency",
              isEmpty: false,
            },
            {
              name: "Closing check reports",
              isEmpty: false,
            },
            {
              name: "Analysis reports",
              isEmpty: false,
            },
            {
              name: "Audit",
              isEmpty: false,
            },
            {
              name: "Period comparison",
              isEmpty: false,
            },
            {
              name: "ESEF",
              isEmpty: false,
            },
          ],
          items: [],
          edit: true,
        },
      },
      {
        name: "Group management",
        isEmpty: false,
        json: {
          description: "Group management",
          folders: [
            {
              name: "Operational reports",
              isEmpty: false,
            },
            {
              name: "Management reports",
              isEmpty: false,
            },
            {
              name: "Charts",
              isEmpty: false,
            },
          ],
          items: [],
          edit: true,
        },
      },
      {
        name: "Business Area reports",
        isEmpty: false,
      },
      {
        name: "Dashboard",
        isEmpty: false,
        json: {
          description: "Dashboard",
          folders: [
            {
              name: "Business Area controller",
              isEmpty: false,
            },
            {
              name: "Company reporter",
              isEmpty: false,
            },
            {
              name: "Group",
              isEmpty: false,
            },
            {
              name: "HQ",
              isEmpty: false,
            },
            {
              name: "AARO",
              isEmpty: false,
            },
            {
              name: "Flash",
              isEmpty: false,
            },
            {
              name: "Graphic",
              isEmpty: false,
            },
            {
              name: "Graphs",
              isEmpty: false,
            },
            {
              name: "Gauges",
              isEmpty: false,
            },
          ],
          items: [],
          edit: true,
        },
      },
      {
        name: "Cash forecast",
        isEmpty: false,
        json: {
          description: "Cash forecast",
          folders: [
            {
              name: "Import files",
              isEmpty: false,
            },
            {
              name: "Check import",
              isEmpty: false,
            },
            {
              name: "Grids",
              isEmpty: false,
            },
          ],
          items: [
            {
              name: "Balance per Currency and Bank",
              type: "Report",
              id: 10756,
            },
            {
              name: "Balance per Day",
              type: "Report",
              id: 10761,
            },
            {
              name: "Balance per Month",
              type: "Report",
              id: 10762,
            },
            {
              name: "Balance per TransCurr",
              type: "Report",
              id: 10763,
            },
            {
              name: "Balance per Week",
              type: "Report",
              id: 10764,
            },
            {
              name: "Balance per Week and Customer",
              type: "Report",
              id: 10783,
            },
            {
              name: "Curr LOC per currency",
              type: "Report",
              id: 10767,
            },
            {
              name: "Curr SEK per currency",
              type: "Report",
              id: 10766,
            },
            {
              name: "Currency by Company",
              type: "Report",
              id: 10768,
            },
            {
              name: "Forecast accuracy",
              type: "Report",
              id: 10769,
            },
          ],
          edit: true,
        },
      },
      {
        name: "Word",
        isEmpty: false,
        json: {
          description: "Word document reports",
          folders: [
            {
              name: "Annual report, group",
              isEmpty: false,
            },
            {
              name: "Annual report, company",
              isEmpty: false,
            },
            {
              name: "Interim report",
              isEmpty: true,
            },
            {
              name: "Sales flash",
              isEmpty: true,
            },
            {
              name: "Annual report ESEF",
              isEmpty: false,
            },
          ],
          items: [
            {
              name: "Annual_Report_Company.docx",
              type: "Document",
              id: 10149,
            },
            {
              name: "Annual_Report_ESEF.docx",
              type: "Document",
              id: 10151,
            },
            {
              name: "Annual_Report_Group.docx",
              type: "Document",
              id: 10178,
            },
          ],
          edit: true,
        },
      },
      {
        name: "Training",
        isEmpty: false,
        json: {
          description: "Training",
          folders: [
            {
              name: "Analysis training",
              isEmpty: false,
            },
            {
              name: "Legal training",
              isEmpty: false,
            },
            {
              name: "Basic training - closing in AARO",
              isEmpty: false,
            },
            {
              name: "System administration training",
              isEmpty: false,
            },
            {
              name: "AARO lease",
              isEmpty: false,
            },
          ],
          items: [],
          edit: true,
        },
      },
      {
        name: "Other reports",
        isEmpty: false,
        json: {
          description: null,
          folders: [
            {
              name: "Accounting standard",
              isEmpty: false,
            },
            {
              name: "Journals",
              isEmpty: false,
            },
            {
              name: "Budget",
              isEmpty: false,
            },
            {
              name: "Files",
              isEmpty: false,
            },
            {
              name: "Links",
              isEmpty: false,
            },
            {
              name: "Management",
              isEmpty: true,
            },
            {
              name: "Drillthru",
              isEmpty: false,
            },
            {
              name: "SIE import",
              isEmpty: false,
            },
            {
              name: "Other",
              isEmpty: false,
            },
            {
              name: "PPT generator",
              isEmpty: false,
            },
          ],
          items: [
            {
              name: "Annual Report.pdf",
              type: "Document",
              id: 10072,
            },
            {
              name: "Ratios",
              type: "Report",
              id: 394,
            },
            {
              name: "Salary by Function",
              type: "Report",
              id: 393,
            },
            {
              name: "Sales and Markets.pdf",
              type: "Document",
              id: 10073,
            },
            {
              name: "X_IS_ALL_SOURCES",
              type: "Report",
              id: 182,
            },
          ],
          edit: true,
        },
      },
      {
        name: "Analysis",
        isEmpty: false,
        json: {
          description: "Analysis Reports",
          folders: [
            {
              name: "Budget",
              isEmpty: false,
            },
          ],
          items: [
            {
              name: "Actual vs Budget",
              type: "Report",
              id: 10738,
            },
            {
              name: "Actual vs Budget, including chart",
              type: "Report",
              id: 10804,
            },
            {
              name: "Allocation report",
              type: "Report",
              id: 10739,
            },
            {
              name: "Currency exposure",
              type: "Report",
              id: 10741,
            },
            {
              name: "Currency report",
              type: "Report",
              id: 10742,
            },
            {
              name: "Drill thru",
              type: "Report",
              id: 10743,
            },
            {
              name: "Drill thru by Voucher",
              type: "Report",
              id: 10744,
            },
            {
              name: "Function by Salary",
              type: "Report",
              id: 10745,
            },
            {
              name: "Function report",
              type: "Report",
              id: 10746,
            },
            {
              name: "Group IS by Period",
              type: "Report",
              id: 10748,
            },
            {
              name: "Isolated months",
              type: "Report",
              id: 10749,
            },
            {
              name: "Operational IS",
              type: "Report",
              id: 10750,
            },
            {
              name: "Other rate report",
              type: "Report",
              id: 10751,
            },
            {
              name: "Ratios report",
              type: "Report",
              id: 10752,
            },
            {
              name: "Top 10 Product",
              type: "Report",
              id: 10754,
            },
            {
              name: "Top 10 Product, table",
              type: "Report",
              id: 10805,
            },
            {
              name: "Travel expenses allocation",
              type: "Report",
              id: 10755,
            },
          ],
          edit: true,
        },
      },
      {
        name: "IFRS16",
        isEmpty: false,
        json: {
          description: "Folder for Data Entry and Analysis of IFRS16",
          folders: [
            {
              name: "Dashboard",
              isEmpty: false,
            },
            {
              name: "Data entry",
              isEmpty: false,
            },
            {
              name: "Disclosure notes",
              isEmpty: false,
            },
            {
              name: "Reports",
              isEmpty: false,
            },
            {
              name: "Lease analysis",
              isEmpty: false,
            },
          ],
          items: [],
          edit: true,
        },
      },
      {
        name: "Demo",
        isEmpty: false,
        json: {
          description: "Folder for Sales demo",
          folders: [
            {
              name: "AARO",
              isEmpty: false,
            },
            {
              name: "AARO Cash Forecast",
              isEmpty: false,
            },
            {
              name: "AARO Lease",
              isEmpty: false,
            },
            {
              name: "AARO Integrator II",
              isEmpty: false,
            },
            {
              name: "Real Estate",
              isEmpty: false,
            },
            {
              name: "Proforma",
              isEmpty: false,
            },
          ],
          items: [],
          edit: true,
        },
      },
      {
        name: "Test reports",
        isEmpty: false,
        json: {
          description: "Test reports",
          folders: [
            {
              name: "Account Test",
              isEmpty: false,
            },
            {
              name: "TEST_AT",
              isEmpty: false,
            },
            {
              name: "Check Reports",
              isEmpty: false,
            },
            {
              name: "Test Lease",
              isEmpty: false,
            },
            {
              name: "TEST_OC",
              isEmpty: false,
            },
            {
              name: "TEST_PT",
              isEmpty: false,
            },
            {
              name: "TEST_RC",
              isEmpty: false,
            },
            {
              name: "TEST_TA",
              isEmpty: false,
            },
            {
              name: "ESEF",
              isEmpty: true,
            },
            {
              name: "Performance",
              isEmpty: false,
            },
            {
              name: "Reconciliation",
              isEmpty: false,
            },
            {
              name: "TEST_LTA",
              isEmpty: false,
            },
            {
              name: "Cost Company",
              isEmpty: false,
            },
            {
              name: "DrillThru & Import",
              isEmpty: false,
            },
            {
              name: "Period Modifier",
              isEmpty: false,
            },
            {
              name: "Validation",
              isEmpty: false,
            },
            {
              name: "Legal Subgroup",
              isEmpty: false,
            },
          ],
          items: [
            {
              name: "PRODUCTP-1007",
              type: "Report",
              id: 21772,
            },
            {
              name: "PRODUCTP-1007_2301-2307",
              type: "Report",
              id: 21773,
            },
          ],
          edit: true,
        },
      },
      {
        name: "Reference index",
        isEmpty: false,
      },
      {
        name: "Others' Personal Reports",
        isEmpty: false,
      },
    ];

    // jsonData = (jsonData); //mocki.io/v1/4c1989fe-cdc7-44bf-9025-f14246cdd361);

    console.log(typeof jsonData);

    jsonData.map((val)=>{
      console.log(val.name.value)
    });
    var treeviewContainer;
    document.addEventListener("DOMContentLoaded", function () {
      var treeData = jsonData;

      var treeviewContainer = document.getElementById("jstree-ajax");
      console.log(treeviewContainer);
      buildTree(treeData, treeviewContainer);
      treeviewContainer.style.display = "block";

      // Further actions after the treeview is built
      console.log("Treeview built successfully.");
    });

    buildTree(jsonData,treeviewContainer);
    // $("#jstree-ajax").jstree({
    //   core: {
    //     data: jsonData.name,
    //   },
    // });
  });
}
function buildSubfolder(reportName) {

var childTitle=reportName;
var folders;
var encodedString = encodeURIComponent(reportName);
// console.log(encodedString);

var apiUrl = "https://mocki.io/v1/34c4811d-1a05-4aa0-a209-a2996dae8b06";
// API credentials
var username = "AARO";
var password = "juhonpieti";
var credentials = username + ":" + password;
var encoder = new TextEncoder();
var data = encoder.encode(credentials);
var base64Credentials = base64FromArrayBuffer(data);
var authHeader = "Basic " + base64Credentials;
var subfolderName = [];


//apiUrl = apiUrl + encodedString;
let inputParams = new URLSearchParams(apiUrl.search);
inputParams.set('',reportName);
// console.log(apiUrl);
//  console.log(reportName);

 
switch (encodedString) {
  case "Data%20entry":
    console.log("switching");
    apiUrl = "https://mocki.io/v1/34c4811d-1a05-4aa0-a209-a2996dae8b06";
    // console.log(encodedString);

  break;
  case "Company%20reports":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/34701aa8-f202-4c13-8cb9-cf0df8c60e00";
    // console.log(encodedString);

  break;
  case "Match%20reports":
    console.log("switched");
    apiUrl = "";
    // console.log(encodedString);
  break;
  case "Group%20accounting":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/f18cd7c6-a2aa-4f35-b1c1-97ce86bf30ba";
    //console.log(encodedString);
  break;
  case "Group%20management":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/94d29e52-73a7-445c-9bb1-2d1882f03f8a";
    // console.log(encodedString);
  break;
  case "Business%20Area%20reports":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/3ac67c6c-e013-4104-82ac-a746ba70db9f";
    // console.log(encodedString);
  break;
  case "Dashboard":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/1423635a-5d79-4974-9c8d-776aa39ab34b";
    // console.log(encodedString);
  break;
  case "Cash%20forecast":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/08193628-f613-47c0-9f0a-4cfa1c946e08";
    // console.log(encodedString);
  break;
  case "Word":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/26c9b7e3-2ed3-4cfc-b77a-5532029bff47";
    // console.log(encodedString);
  break;
  case "Training":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/81c40bd3-af44-4a88-9488-1ac35a766562";
    // console.log(encodedString);
  break;
  case "Other%20reports":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/5a496cc2-6485-47aa-90a2-d15012064d16";
    // console.log(encodedString);
  break;
  case "IFRS16":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/38c392c7-bdc6-4c8b-a4e3-f4f4aa4b498a";
    // console.log(encodedString);
  break;
  case "Demo":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/623c8e50-7b32-4c21-b357-9166dc7b99e2";
    // console.log(encodedString);
  break;
  case "Test%20reports":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/84e17efd-4a89-463d-80f9-413e6198e49f";
    // console.log(encodedString);
  break;
  case "Reference%20index":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/c82078fa-267c-4014-b915-6d89f65b995b";
    // console.log(encodedString);
  break;
  case "Others'%20Personal%20Reports":
    console.log("switched");
    apiUrl = "https://mocki.io/v1/d98f3fd7-f8aa-4f19-a6c7-2d9920c797b2";
    // console.log(encodedString);
  break;
  default:
    console.log("nonoe");
  break;
}
  //Make the API call with the Authorization header
  $.ajax({
    url: apiUrl,
    type: "GET",
    dataType: "json",
    headers: {
      Authorization: authHeader,
    },
    data: {
      encodedString,
    },
    success: function (response) {
      // console.log(response);
      // Process the API response
      folders = response;

      // buildTree(response, li);
      //var description = response.description.value;
      //console.log(description);
      // if (isEmpty(description) ) {
      //   console.log("is empty");
      // }
      //console.log(items);
      //console.log(response.description);

      document.addEventListener("DOMContentLoaded", function () {
        var treeData = folders;

        var treeviewContainer = document.getElementById("jstree-ajax");
        //console.log(treeData);
        
        //buildTree(treeData, treeviewContainer);
        treeviewContainer.style.display = "block";

        // Further actions after the treeview is built
        console.log("Treeview child built successfully.");
      });
      // console.log(response);
      subfolderName=(Object.values(response));
      //  console.log(subfolderName[1]);
      return subfolderName[1];
  
    },
    error: function (error) {
      // Handle any errors that occur during the API call
    },
  });
  return folders;


// return childTitle;

}

function vuexyTree(){
  $("#jstree-ajax").jstree({
    core: {
      data: {
        url: 'https://hook.eu1.make.com/h41vvedxotfny6t78kd3k2hwydpan8ac',
        dataType: 'json', // IF IN JSON FORMAT
        data: function(node) {
          return { id: node.id }
        }
      }
    },
    plugins: ['types', 'state'],
    types: {
      default: { icon: 'ti ti-folder' },
      html: { icon: 'ti ti-brand-html5 text-danger' },
      css: { icon: 'ti ti-brand-css3 text-info' },
      img: { icon: 'ti ti-photo text-success' },
      js: { icon: 'ti ti-brand-javascript text-warning' }
    }
  })
}

function buildTree(nodes, parentElement) {
  //console.log(nodes);
  //parentElement = parentElement;

  console.log(parentElement);
  var subTitles=[];
  var titles = []; // Create an empty array;
  var index = 0;
  nodes.forEach(function (node) {
    var li = document.createElement("li");
    li.style.alignContent = "start";

    var text = document.createTextNode(node.name);
    li.appendChild(text);
    //console.log(index);
    // console.log(text);

    var emptyCheck = node.isEmpty;
    //console.log(emptyCheck);

    if (emptyCheck === false) {

      console.log(buildSubfolder(text.nodeValue));
      subTitles=buildSubfolder(text.nodeValue);
      // console.log("false");

      // subName = document.createTextNode(subName);
      // console.log(subTitles);

      var ul = document.createElement('ul');
      li.appendChild(ul);
      //
      // console.log(li);
      titles.push(text.nodeValue);
      //getTreeChild();
    } else if (emptyCheck === true) {
      console.log("true");

      //ul.appendChild(li);
      //getTreeChild(emptyCheck);
    }

    index = index + 1;
    // console.log(parentElement);
    parentElement.appendChild(li);
    console.log(index);
  });
  //console.log(titles);
  //console.log(titles[2]);
  //retrieveChildReports(titles);

  
}

function getTreeChild(text) {
  return 0;
}

function retrieveChildReports(reportName) {
  //console.log('reportName');
  //reportName = String(reportName);

  var encodedString = encodeURIComponent(reportName);
  console.log(reportName);
  console.log("reportName");
  // console.log( encodedString);
  fetchChildElements(reportName);
}

function fetchChildElements(reportName) {
  var report = reportName;
  var apiUrl = "https://hook.eu1.make.com/h41vvedxotfny6t78kd3k2hwydpan8ac";

  var index = report.length;
  var treeData = null;
  // report = toString(report);
  // API credentials
  var username = "AARO";
  var password = "your_password";
  //console.log(report);
  //console.log('hi joes');
  // Create the Authorization header value with the Base64-encoded credentials
  var credentials = username + ":" + password;
  var encoder = new TextEncoder();
  var data = encoder.encode(credentials);
  var base64Credentials = base64FromArrayBuffer(data);
  var authHeader = "Basic " + base64Credentials;

  // Make the API call with the Authorization header
  $.ajax({
    url: apiUrl,
    type: "GET",
    dataType: "json",
    headers: {
      Authorization: authHeader,
    },
    data: report, // Replace with your payload object
    contentType: "application/json",
    success: function (response) {
      console.log("hi wanji");
      console.log("response" + response);
      // Process the API response
      var folders = response.folders;
      console.log(folders);

      treeData = folders;

      var treeviewContainer = document.getElementById("index");
      buildSubfolder(treeData, treeviewContainer, index);
      treeviewContainer.style.display = "block";
      console.log("joe");
      //console.log(treeviewContainer);

      // Further actions after the treeview is built
      console.log("Child Treeview built successfully.");

      // Get the select element to display the options
    },
    error: function (error) {
      console.log(error);
      // Handle any errors that occur during the API call
    },
  });
}

function retrieveReportsData1() {
  // API endpoint URL
  var apiUrl = "https://mocki.io/v1/04bdf4fa-1815-4b52-9de4-42193bfa3a77";
  var jsonData = [
    {
      name: "Personal Reports",
      isEmpty: true,
    },
    {
      name: "Data entry",
      isEmpty: false,
      json: {
        description: "Data entry",
        folders: [],
        items: [],
        edit: true,
      },
    },
    {
      name: "Company reports",
      isEmpty: false,
      json: {
        description: null,
        folders: [],
        items: [
          {
            name: "Cashflow by Company",
            type: "Report",
            id: 10735,
          },
          {
            name: "Financial statement by Company",
            type: "Report",
            id: 542,
          },
          {
            name: "Income statement by Company",
            type: "Report",
            id: 10736,
          },
          {
            name: "Tangible assets",
            type: "Report",
            id: 543,
          },
        ],
        edit: true,
      },
    },
    {
      name: "Match reports",
      isEmpty: false,
      json: {
        description: null,
        folders: [],
        items: [],
        edit: true,
      },
    },
    {
      name: "Group accounting",
      isEmpty: false,
      json: {
        description: "Group accounting for analysing financial data",
        folders: [
          {
            name: "Statutory",
            isEmpty: false,
          },
          {
            name: "Notes",
            isEmpty: false,
          },
          {
            name: "Currency",
            isEmpty: false,
          },
          {
            name: "Closing check reports",
            isEmpty: false,
          },
          {
            name: "Analysis reports",
            isEmpty: false,
          },
          {
            name: "Audit",
            isEmpty: false,
          },
          {
            name: "Period comparison",
            isEmpty: false,
          },
          {
            name: "ESEF",
            isEmpty: false,
          },
        ],
        items: [],
        edit: true,
      },
    },
    {
      name: "Group management",
      isEmpty: false,
      json: {
        description: "Group management",
        folders: [
          {
            name: "Operational reports",
            isEmpty: false,
          },
          {
            name: "Management reports",
            isEmpty: false,
          },
          {
            name: "Charts",
            isEmpty: false,
          },
        ],
        items: [],
        edit: true,
      },
    },
    {
      name: "Business Area reports",
      isEmpty: false,
    },
    {
      name: "Dashboard",
      isEmpty: false,
      json: {
        description: "Dashboard",
        folders: [
          {
            name: "Business Area controller",
            isEmpty: false,
          },
          {
            name: "Company reporter",
            isEmpty: false,
          },
          {
            name: "Group",
            isEmpty: false,
          },
          {
            name: "HQ",
            isEmpty: false,
          },
          {
            name: "AARO",
            isEmpty: false,
          },
          {
            name: "Flash",
            isEmpty: false,
          },
          {
            name: "Graphic",
            isEmpty: false,
          },
          {
            name: "Graphs",
            isEmpty: false,
          },
          {
            name: "Gauges",
            isEmpty: false,
          },
        ],
        items: [],
        edit: true,
      },
    },
    {
      name: "Cash forecast",
      isEmpty: false,
      json: {
        description: "Cash forecast",
        folders: [
          {
            name: "Import files",
            isEmpty: false,
          },
          {
            name: "Check import",
            isEmpty: false,
          },
          {
            name: "Grids",
            isEmpty: false,
          },
        ],
        items: [
          {
            name: "Balance per Currency and Bank",
            type: "Report",
            id: 10756,
          },
          {
            name: "Balance per Day",
            type: "Report",
            id: 10761,
          },
          {
            name: "Balance per Month",
            type: "Report",
            id: 10762,
          },
          {
            name: "Balance per TransCurr",
            type: "Report",
            id: 10763,
          },
          {
            name: "Balance per Week",
            type: "Report",
            id: 10764,
          },
          {
            name: "Balance per Week and Customer",
            type: "Report",
            id: 10783,
          },
          {
            name: "Curr LOC per currency",
            type: "Report",
            id: 10767,
          },
          {
            name: "Curr SEK per currency",
            type: "Report",
            id: 10766,
          },
          {
            name: "Currency by Company",
            type: "Report",
            id: 10768,
          },
          {
            name: "Forecast accuracy",
            type: "Report",
            id: 10769,
          },
        ],
        edit: true,
      },
    },
    {
      name: "Word",
      isEmpty: false,
      json: {
        description: "Word document reports",
        folders: [
          {
            name: "Annual report, group",
            isEmpty: false,
          },
          {
            name: "Annual report, company",
            isEmpty: false,
          },
          {
            name: "Interim report",
            isEmpty: true,
          },
          {
            name: "Sales flash",
            isEmpty: true,
          },
          {
            name: "Annual report ESEF",
            isEmpty: false,
          },
        ],
        items: [
          {
            name: "Annual_Report_Company.docx",
            type: "Document",
            id: 10149,
          },
          {
            name: "Annual_Report_ESEF.docx",
            type: "Document",
            id: 10151,
          },
          {
            name: "Annual_Report_Group.docx",
            type: "Document",
            id: 10178,
          },
        ],
        edit: true,
      },
    },
    {
      name: "Training",
      isEmpty: false,
      json: {
        description: "Training",
        folders: [
          {
            name: "Analysis training",
            isEmpty: false,
          },
          {
            name: "Legal training",
            isEmpty: false,
          },
          {
            name: "Basic training - closing in AARO",
            isEmpty: false,
          },
          {
            name: "System administration training",
            isEmpty: false,
          },
          {
            name: "AARO lease",
            isEmpty: false,
          },
        ],
        items: [],
        edit: true,
      },
    },
    {
      name: "Other reports",
      isEmpty: false,
      json: {
        description: null,
        folders: [
          {
            name: "Accounting standard",
            isEmpty: false,
          },
          {
            name: "Journals",
            isEmpty: false,
          },
          {
            name: "Budget",
            isEmpty: false,
          },
          {
            name: "Files",
            isEmpty: false,
          },
          {
            name: "Links",
            isEmpty: false,
          },
          {
            name: "Management",
            isEmpty: true,
          },
          {
            name: "Drillthru",
            isEmpty: false,
          },
          {
            name: "SIE import",
            isEmpty: false,
          },
          {
            name: "Other",
            isEmpty: false,
          },
          {
            name: "PPT generator",
            isEmpty: false,
          },
        ],
        items: [
          {
            name: "Annual Report.pdf",
            type: "Document",
            id: 10072,
          },
          {
            name: "Ratios",
            type: "Report",
            id: 394,
          },
          {
            name: "Salary by Function",
            type: "Report",
            id: 393,
          },
          {
            name: "Sales and Markets.pdf",
            type: "Document",
            id: 10073,
          },
          {
            name: "X_IS_ALL_SOURCES",
            type: "Report",
            id: 182,
          },
        ],
        edit: true,
      },
    },
    {
      name: "Analysis",
      isEmpty: false,
      json: {
        description: "Analysis Reports",
        folders: [
          {
            name: "Budget",
            isEmpty: false,
          },
        ],
        items: [
          {
            name: "Actual vs Budget",
            type: "Report",
            id: 10738,
          },
          {
            name: "Actual vs Budget, including chart",
            type: "Report",
            id: 10804,
          },
          {
            name: "Allocation report",
            type: "Report",
            id: 10739,
          },
          {
            name: "Currency exposure",
            type: "Report",
            id: 10741,
          },
          {
            name: "Currency report",
            type: "Report",
            id: 10742,
          },
          {
            name: "Drill thru",
            type: "Report",
            id: 10743,
          },
          {
            name: "Drill thru by Voucher",
            type: "Report",
            id: 10744,
          },
          {
            name: "Function by Salary",
            type: "Report",
            id: 10745,
          },
          {
            name: "Function report",
            type: "Report",
            id: 10746,
          },
          {
            name: "Group IS by Period",
            type: "Report",
            id: 10748,
          },
          {
            name: "Isolated months",
            type: "Report",
            id: 10749,
          },
          {
            name: "Operational IS",
            type: "Report",
            id: 10750,
          },
          {
            name: "Other rate report",
            type: "Report",
            id: 10751,
          },
          {
            name: "Ratios report",
            type: "Report",
            id: 10752,
          },
          {
            name: "Top 10 Product",
            type: "Report",
            id: 10754,
          },
          {
            name: "Top 10 Product, table",
            type: "Report",
            id: 10805,
          },
          {
            name: "Travel expenses allocation",
            type: "Report",
            id: 10755,
          },
        ],
        edit: true,
      },
    },
    {
      name: "IFRS16",
      isEmpty: false,
      json: {
        description: "Folder for Data Entry and Analysis of IFRS16",
        folders: [
          {
            name: "Dashboard",
            isEmpty: false,
          },
          {
            name: "Data entry",
            isEmpty: false,
          },
          {
            name: "Disclosure notes",
            isEmpty: false,
          },
          {
            name: "Reports",
            isEmpty: false,
          },
          {
            name: "Lease analysis",
            isEmpty: false,
          },
        ],
        items: [],
        edit: true,
      },
    },
    {
      name: "Demo",
      isEmpty: false,
      json: {
        description: "Folder for Sales demo",
        folders: [
          {
            name: "AARO",
            isEmpty: false,
          },
          {
            name: "AARO Cash Forecast",
            isEmpty: false,
          },
          {
            name: "AARO Lease",
            isEmpty: false,
          },
          {
            name: "AARO Integrator II",
            isEmpty: false,
          },
          {
            name: "Real Estate",
            isEmpty: false,
          },
          {
            name: "Proforma",
            isEmpty: false,
          },
        ],
        items: [],
        edit: true,
      },
    },
    {
      name: "Test reports",
      isEmpty: false,
      json: {
        description: "Test reports",
        folders: [
          {
            name: "Account Test",
            isEmpty: false,
          },
          {
            name: "TEST_AT",
            isEmpty: false,
          },
          {
            name: "Check Reports",
            isEmpty: false,
          },
          {
            name: "Test Lease",
            isEmpty: false,
          },
          {
            name: "TEST_OC",
            isEmpty: false,
          },
          {
            name: "TEST_PT",
            isEmpty: false,
          },
          {
            name: "TEST_RC",
            isEmpty: false,
          },
          {
            name: "TEST_TA",
            isEmpty: false,
          },
          {
            name: "ESEF",
            isEmpty: true,
          },
          {
            name: "Performance",
            isEmpty: false,
          },
          {
            name: "Reconciliation",
            isEmpty: false,
          },
          {
            name: "TEST_LTA",
            isEmpty: false,
          },
          {
            name: "Cost Company",
            isEmpty: false,
          },
          {
            name: "DrillThru & Import",
            isEmpty: false,
          },
          {
            name: "Period Modifier",
            isEmpty: false,
          },
          {
            name: "Validation",
            isEmpty: false,
          },
          {
            name: "Legal Subgroup",
            isEmpty: false,
          },
        ],
        items: [
          {
            name: "PRODUCTP-1007",
            type: "Report",
            id: 21772,
          },
          {
            name: "PRODUCTP-1007_2301-2307",
            type: "Report",
            id: 21773,
          },
        ],
        edit: true,
      },
    },
    {
      name: "Reference index",
      isEmpty: false,
    },
    {
      name: "Others' Personal Reports",
      isEmpty: false,
    },
  ];

  // API credentials
  var username = "your_username";
  var password = "your_password";

  // Create the Authorization header value with the Base64-encoded credentials
  var credentials = username + ":" + password;
  var encoder = new TextEncoder();
  var data = encoder.encode(credentials);
  var base64Credentials = base64FromArrayBuffer(data);
  var authHeader = "Basic " + base64Credentials;

  // Make the API call with the Authorization header
  // $.ajax({
  //   url: apiUrl,
  //   type: "GET",
  //   dataType: "json",
  //   headers: {
  //     Authorization: authHeader,
  //   },
  //   success: function (response) {
  //     // Process the API response
  //     var folders = response.folders;
  //     console.log('hi'+response);

  //     document.addEventListener("DOMContentLoaded", function () {
  //       var treeData = folders;

  //       var treeviewContainer = document.getElementById("jstree-ajax");
  //       console.log(treeData);
        
  //       buildTree(treeData, treeviewContainer);
  //       treeviewContainer.style.display = "block";

  //       // Further actions after the treeview is built
  //       console.log("Treeview built successfully.");
  //     });
  //   },
  //   error: function (error) {
  //     // Handle any errors that occur during the API call
  //   },
  // });


  document.addEventListener("DOMContentLoaded", function () {
          var treeData = jsonData;
  
          var treeviewContainer = document.getElementById("jstree-ajax");
          //console.log(treeData);
          
          buildTree(treeData, treeviewContainer);
          treeviewContainer.style.display = "block";
  
          // Further actions after the treeview is built
          console.log("Treeview built successfully.");
        });
}

function retrieveReportsData() {
  // API endpoint URL
  var apiUrl = "https://hook.eu1.make.com/owaqe6e1191lty29m12qgaj88qyvaev6";

  // API credentials
  var username = "your_username";
  var password = "your_password";

  // Create the Authorization header value with the Base64-encoded credentials
  var credentials = username + ":" + password;
  var encoder = new TextEncoder();
  var data = encoder.encode(credentials);
  var base64Credentials = base64FromArrayBuffer(data);
  var authHeader = "Basic " + base64Credentials;

  // Make the API call with the Authorization header
  $.ajax({
    url: apiUrl,
    type: "GET",
    dataType: "json",
    headers: {
      Authorization: authHeader,
    },
    success: function (response) {
      // Process the API response
      var folders = response.folders;
      console.log(folders);

      // Get the select element to display the options
      //var selectElement = document.getElementById('optionsList');

      // Clear any existing options
      //selectElement.innerHTML = '';

      // Add the report names as options
    },
    error: function (error) {
      // Handle any errors that occur during the API call
    },
  });
}

function retrieveReportsDataDescriptions() {
  // API endpoint URL
  var apiUrlDescription = "https://hook.eu1.make.com/8e22bltzfocqxb780qwicq2yjutx9kaj";

  // API credentials
  var username = "your_username";
  var password = "your_password";

  // Create the Authorization header value with the Base64-encoded credentials
  var credentials = username + ":" + password;
  var encoder = new TextEncoder();
  var data = encoder.encode(credentials);
  var base64Credentials = base64FromArrayBuffer(data);
  var authHeader = "Basic " + base64Credentials;

  // Make the API call with the Authorization header
  $.ajax({
    url: apiUrlDescription,
    type: "GET",
    dataType: "json",
    headers: {
      Authorization: authHeader,
    },
    success: function (response) {
      // Process the API response
      var folders = response.items;
      var items = folders.items;
      console.log(items);
      console.log(folders);
    },
    error: function (error) {
      //console.log(error);
    },
  });
}

function retrieveReportFromTree(reportName) {
  // API endpoint URL
  var apiUrlTree = "https://hook.eu1.make.com/ow2236iwa386h0ib7ewif3kuhqc5qgnb";

  // API credentials
  var username = "your_username";
  var password = "your_password";
  var reportNames = reportName;
  // Create the Authorization header value with the Base64-encoded credentials
  var credentials = username + ":" + password;
  var encoder = new TextEncoder();
  var data = encoder.encode(credentials);
  var base64Credentials = base64FromArrayBuffer(data);
  var authHeader = "Basic " + base64Credentials;

  // Make the API call with the Authorization header
  $.ajax({
    url: apiUrlTree,
    type: "GET",
    dataType: "json",
    headers: {
      Authorization: authHeader,
    },
    success: function (response) {
      // Process the API response
      var reports = response.folders;
      console.log(response);
      console.log("reportName");

      // Get the select element to display the options
    },
    error: function (error) {
      // Handle any errors that occur during the API call
    },
  });
}

// Helper function to convert an ArrayBuffer to Base64
function base64FromArrayBuffer(arrayBuffer) {
  var uint8Array = new Uint8Array(arrayBuffer);
  var base64 = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  var padding = uint8Array.length % 3;
  var length = uint8Array.length - padding;

  for (var i = 0; i < length; i += 3) {
    var a = uint8Array[i];
    var b = uint8Array[i + 1];
    var c = uint8Array[i + 2];

    var triplet = (a << 16) | (b << 8) | c;

    base64 += characters[(triplet >> 18) & 63];
    base64 += characters[(triplet >> 12) & 63];
    base64 += characters[(triplet >> 6) & 63];
    base64 += characters[triplet & 63];
  }

  if (padding === 1) {
    var a = uint8Array[length];
    var b = 0;

    var triplet = (a << 16) | (b << 8);

    base64 += characters[(triplet >> 18) & 63];
    base64 += characters[(triplet >> 12) & 63];
    base64 += "==";
  } else if (padding === 2) {
    var a = uint8Array[length];
    var b = uint8Array[length + 1];

    var triplet = (a << 16) | (b << 8);

    base64 += characters[(triplet >> 18) & 63];
    base64 += characters[(triplet >> 12) & 63];
    base64 += characters[(triplet >> 6) & 63];
    base64 += "=";
  }

  return base64;
}

async function insertTable3() {
  let data = note3_data();
  await Word.run(async (context) => {
    const table = context.document.body.insertTable(data.length, data[0].length, "Start", data);
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
        cell.font.color = "black"; // Set the font color to black
        if (index === 1 || index === 2) {
          // Check if it's the second or third column
          cell.horizontalAlignment = Word.Alignment.right; // Align to the right
        }
      }
    }
    // Synchronize the changes
    await context.sync();
  });
}

function tryCatch(callback) {
  Promise.resolve()
    .then(callback)
    .catch(function (error) {
      // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
      console.error(error);
    });
}

async function replaceTableData() {
  const data = get_data();

  //var table_style = selectValue;

  insertTable3();
  await Word.run(async (context) => {
    const table = context.document.body.insertTable(data.length, data[0].length, "Start", data);
    //table.styleBuiltIn = table_style;
    table.styleBuiltIn = Word.Style.gridTable4_Accent2;
    //table.rows.load("items");
    await context.sync();

    // Iterate through the table rows and cells, changing the font color to black
    // and aligning the second and third columns to the right

    // Synchronize the changes
  });
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

function note3_data() {
  const data = {
    headers: [
      [
        {
          code: "Year",
          codeVector: null,
          description: "",
          dimension: "",
          indentation: 0,
          span: 1,
          column: 0,
        },
        {
          code: "2023",
          codeVector: null,
          description: "",
          dimension: "Year",
          indentation: 0,
          span: 1,
          column: 1,
        },
        {
          code: "2022",
          codeVector: null,
          description: "",
          dimension: "Year",
          indentation: 0,
          span: 1,
          column: 2,
        },
      ],
    ],
    rows: [
      {
        header: {
          code: "5010",
          codeVector: null,
          description: "Rented premises",
          dimension: "Code",
          indentation: 0,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -18835.1954,
            format: "#,##0",
            column: 1,
            inputValidationErrors: null,
          },
          {
            value: -18749.2282,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: "5110",
          codeVector: null,
          description: "Property costs",
          dimension: "Code",
          indentation: 0,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -27274.236,
            format: "#,##0",
            column: 1,
            inputValidationErrors: null,
          },
          {
            value: -23945.4796,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: "5210",
          codeVector: null,
          description: "Hire of plant and machinery",
          dimension: "Code",
          indentation: 0,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -7615.68,
            format: "#,##0",
            column: 1,
            inputValidationErrors: null,
          },
          {
            value: -10154.3,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: "5310",
          codeVector: null,
          description: "Energy costs",
          dimension: "Code",
          indentation: 0,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -7387.2661,
            format: "#,##0",
            column: 1,
            inputValidationErrors: null,
          },
          {
            value: -4378.9705,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: "5410",
          codeVector: null,
          description: "Consumable equipment and supplies",
          dimension: "Code",
          indentation: 0,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -24774.1218,
            format: "#,##0",
            column: 1,
            inputValidationErrors: null,
          },
          {
            value: -21924.2238,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: "5510",
          codeVector: null,
          description: "Repairs and maintenance",
          dimension: "Code",
          indentation: 0,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -2898.85,
            format: "#,##0",
            column: 1,
            inputValidationErrors: null,
          },
          {
            value: 1252.8062,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: "5610",
          codeVector: null,
          description: "Transport equipment costs",
          dimension: "Code",
          indentation: 0,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -21109.4475,
            format: "#,##0",
            column: 1,
            inputValidationErrors: null,
          },
          {
            value: -16813.2712,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: "5710",
          codeVector: null,
          description: "Freight and transportation",
          dimension: "Code",
          indentation: 0,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -18683.321,
            format: "#,##0",
            column: 1,
            inputValidationErrors: null,
          },
          {
            value: -19149.2453,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: "5810",
          codeVector: null,
          description: "Travel expenses",
          dimension: "Code",
          indentation: 0,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -7761.305,
            format: "#,##0",
            column: 1,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: "5910",
          codeVector: null,
          description: "Advertising and PR",
          dimension: "Code",
          indentation: 0,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: "5999",
          codeVector: null,
          description: "Operating expenses",
          dimension: "Code",
          indentation: 0,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -169614.1928,
            format: "#,##0",
            column: 1,
            inputValidationErrors: null,
          },
          {
            value: -133531.97269999998,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
        ],
      },
    ],
    inputAvailability: {
      enabled: false,
      preValidation: null,
      rowSpec: null,
    },
    staticAxis: {
      criteria: [
        {
          dimension: "Currency",
          sort: "SelectionOrder",
          ascending: true,
          total: false,
          reportTotal: false,
          showCode: true,
          showDescription: false,
          exclude: false,
          selection: [
            {
              type: "Member",
              value: "TSEK",
              label: "",
            },
          ],
        },
        {
          dimension: "PeriodType",
          sort: "SelectionOrder",
          ascending: true,
          total: false,
          reportTotal: false,
          showCode: true,
          showDescription: false,
          exclude: false,
          selection: [
            {
              type: "Member",
              value: "Actual",
              label: "",
            },
          ],
        },
        {
          dimension: "PeriodIndex",
          sort: "SelectionOrder",
          ascending: true,
          total: false,
          reportTotal: false,
          showCode: true,
          showDescription: false,
          exclude: false,
          selection: [
            {
              type: "Member",
              value: "12",
              label: "",
            },
          ],
        },
      ],
      expand: [],
      topN: null,
      removeEmpty: true,
      compactLayout: false,
      expandPaths: [],
      collapsePaths: [],
    },
  };
  return data;
}

// function note5_data() {

//   const data = {
//     "headers": [
//       [{
//         "code": "Year",
//         "codeVector": null,
//         "description": "",
//         "dimension": "",
//         "indentation": 0,
//         "span": 1,
//         "column": 0
//       }, {
//         "code": "2023",
//         "codeVector": null,
//         "description": "",
//         "dimension": "Year",
//         "indentation": 0,
//         "span": 1,
//         "column": 1
//       }, {
//         "code": "2022",
//         "codeVector": null,
//         "description": "",
//         "dimension": "Year",
//         "indentation": 0,
//         "span": 1,
//         "column": 2
//       }]
//     ],
//     "rows": [{
//       "header": {
//         "code": "5010",
//         "codeVector": null,
//         "description": "Rented premises",
//         "dimension": "Code",
//         "indentation": 0,
//         "span": 1,
//         "column": 0
//       },
//       "values": [{
//         "value": -18835.1954,
//         "format": "#,##0",
//         "column": 1,
//         "inputValidationErrors": null
//       }, {
//         "value": -18749.2282,
//         "format": "#,##0",
//         "column": 2,
//         "inputValidationErrors": null
//       }]
//     }, {
//       "header": {
//         "code": "5110",
//         "codeVector": null,
//         "description": "Property costs",
//         "dimension": "Code",
//         "indentation": 0,
//         "span": 1,
//         "column": 0
//       },
//       "values": [{
//         "value": -27274.236,
//         "format": "#,##0",
//         "column": 1,
//         "inputValidationErrors": null
//       }, {
//         "value": -23945.4796,
//         "format": "#,##0",
//         "column": 2,
//         "inputValidationErrors": null
//       }]
//     }, {
//       "header": {
//         "code": "5210",
//         "codeVector": null,
//         "description": "Hire of plant and machinery",
//         "dimension": "Code",
//         "indentation": 0,
//         "span": 1,
//         "column": 0
//       },
//       "values": [{
//         "value": -7615.68,
//         "format": "#,##0",
//         "column": 1,
//         "inputValidationErrors": null
//       }, {
//         "value": -10154.3,
//         "format": "#,##0",
//         "column": 2,
//         "inputValidationErrors": null
//       }]
//     }, {
//       "header": {
//         "code": "5310",
//         "codeVector": null,
//         "description": "Energy costs",
//         "dimension": "Code",
//         "indentation": 0,
//         "span": 1,
//         "column": 0
//       },
//       "values": [{
//         "value": -7387.2661,
//         "format": "#,##0",
//         "column": 1,
//         "inputValidationErrors": null
//       }, {
//         "value": -4378.9705,
//         "format": "#,##0",
//         "column": 2,
//         "inputValidationErrors": null
//       }]
//     }, {
//       "header": {
//         "code": "5410",
//         "codeVector": null,
//         "description": "Consumable equipment and supplies",
//         "dimension": "Code",
//         "indentation": 0,
//         "span": 1,
//         "column": 0
//       },
//       "values": [{
//         "value": -24774.1218,
//         "format": "#,##0",
//         "column": 1,
//         "inputValidationErrors": null
//       }, {
//         "value": -21924.2238,
//         "format": "#,##0",
//         "column": 2,
//         "inputValidationErrors": null
//       }]
//     }, {
//       "header": {
//         "code": "5510",
//         "codeVector": null,
//         "description": "Repairs and maintenance",
//         "dimension": "Code",
//         "indentation": 0,
//         "span": 1,
//         "column": 0
//       },
//       "values": [{
//         "value": -2898.85,
//         "format": "#,##0",
//         "column": 1,
//         "inputValidationErrors": null
//       }, {
//         "value": 1252.8062,
//         "format": "#,##0",
//         "column": 2,
//         "inputValidationErrors": null
//       }]
//     }, {
//       "header": {
//         "code": "5610",
//         "codeVector": null,
//         "description": "Transport equipment costs",
//         "dimension": "Code",
//         "indentation": 0,
//         "span": 1,
//         "column": 0
//       },
//       "values": [{
//         "value": -21109.4475,
//         "format": "#,##0",
//         "column": 1,
//         "inputValidationErrors": null
//       }, {
//         "value": -16813.2712,
//         "format": "#,##0",
//         "column": 2,
//         "inputValidationErrors": null
//       }]
//     }, {
//       "header": {
//         "code": "5710",
//         "codeVector": null,
//         "description": "Freight and transportation",
//         "dimension": "Code",
//         "indentation": 0,
//         "span": 1,
//         "column": 0
//       },
//       "values": [{
//         "value": -18683.321,
//         "format": "#,##0",
//         "column": 1,
//         "inputValidationErrors": null
//       }, {
//         "value": -19149.2453,
//         "format": "#,##0",
//         "column": 2,
//         "inputValidationErrors": null
//       }]
//     }, {
//       "header": {
//         "code": "5810",
//         "codeVector": null,
//         "description": "Travel expenses",
//         "dimension": "Code",
//         "indentation": 0,
//         "span": 1,
//         "column": 0
//       },
//       "values": [{
//         "value": -7761.305,
//         "format": "#,##0",
//         "column": 1,
//         "inputValidationErrors": null
//       }]
//     }, {
//       "header": {
//         "code": "5910",
//         "codeVector": null,
//         "description": "Advertising and PR",
//         "dimension": "Code",
//         "indentation": 0,
//         "span": 1,
//         "column": 0
//       },
//       "values": []
//     }, {
//       "header": {
//         "code": "5999",
//         "codeVector": null,
//         "description": "Operating expenses",
//         "dimension": "Code",
//         "indentation": 0,
//         "span": 1,
//         "column": 0
//       },
//       "values": [{
//         "value": -169614.1928,
//         "format": "#,##0",
//         "column": 1,
//         "inputValidationErrors": null
//       }, {
//         "value": -133531.97269999998,
//         "format": "#,##0",
//         "column": 2,
//         "inputValidationErrors": null
//       }]
//     }],
//     "inputAvailability": {
//       "enabled": false,
//       "preValidation": null,
//       "rowSpec": null
//     },
//     "staticAxis": {
//       "criteria": [{
//         "dimension": "Currency",
//         "sort": "SelectionOrder",
//         "ascending": true,
//         "total": false,
//         "reportTotal": false,
//         "showCode": true,
//         "showDescription": false,
//         "exclude": false,
//         "selection": [{
//           "type": "Member",
//           "value": "TSEK",
//           "label": ""
//         }]
//       }, {
//         "dimension": "PeriodType",
//         "sort": "SelectionOrder",
//         "ascending": true,
//         "total": false,
//         "reportTotal": false,
//         "showCode": true,
//         "showDescription": false,
//         "exclude": false,
//         "selection": [{
//           "type": "Member",
//           "value": "Actual",
//           "label": ""
//         }]
//       }, {
//         "dimension": "PeriodIndex",
//         "sort": "SelectionOrder",
//         "ascending": true,
//         "total": false,
//         "reportTotal": false,
//         "showCode": true,
//         "showDescription": false,
//         "exclude": false,
//         "selection": [{
//           "type": "Member",
//           "value": "12",
//           "label": ""
//         }]
//       }],
//       "expand": [],
//       "topN": null,
//       "removeEmpty": true,
//       "compactLayout": false,
//       "expandPaths": [],
//       "collapsePaths": []
//     }
//   };
//   return data;
// }

function note8_data() {
  const data = {
    headers: [
      [
        {
          code: "",
          codeVector: null,
          description: "",
          dimension: "",
          indentation: 0,
          span: 1,
          column: 0,
        },
        {
          code: "GROUP",
          codeVector: null,
          description: "Group",
          dimension: "Group7",
          indentation: 0,
          span: 8,
          column: 1,
        },
      ],
      [
        {
          code: "",
          codeVector: null,
          description: "",
          dimension: "",
          indentation: 0,
          span: 1,
          column: 0,
        },
        {
          code: null,
          codeVector: [
            "101001",
            "101011",
            "101015",
            "101021",
            "101031",
            "101049",
            "1010A",
            "101051",
            "101065",
            "101071",
            "101081",
            "101061",
            "101089",
            "1010D",
            "10109001",
            "10109015",
            "10109021",
            "10109031",
            "10109061",
            "10109018",
            "10109019",
            "10109049",
            "1010WU",
            "10109551",
            "10109565",
            "10109571",
            "10109541",
            "10109581",
            "10109585",
            "10109586",
            "10109589",
            "1010WD",
            "1010",
          ],
          description: "1010 Capitalised#expenditure",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 2,
        },
        {
          code: null,
          codeVector: [
            "103001",
            "103011",
            "103015",
            "103021",
            "103031",
            "103049",
            "1030A",
            "103051",
            "103065",
            "103071",
            "103081",
            "103061",
            "103089",
            "1030D",
            "10309001",
            "10309015",
            "10309021",
            "10309031",
            "10309061",
            "10309018",
            "10309019",
            "10309049",
            "1030WU",
            "10309551",
            "10309565",
            "10309571",
            "10309541",
            "10309581",
            "10309585",
            "10309586",
            "10309589",
            "1030WD",
            "1030",
          ],
          description: "1030 Patents",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 3,
        },
        {
          code: null,
          codeVector: [
            "104001",
            "104011",
            "104015",
            "104021",
            "104031",
            "104049",
            "1040A",
            "104051",
            "104065",
            "104071",
            "104081",
            "104061",
            "104089",
            "1040D",
            "10409001",
            "10409015",
            "10409021",
            "10409031",
            "10409061",
            "10409018",
            "10409019",
            "10409049",
            "1040WU",
            "10409551",
            "10409565",
            "10409571",
            "10409541",
            "10409581",
            "10409585",
            "10409586",
            "10409589",
            "1040WD",
            "1040",
          ],
          description: "1040 Licenses",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 4,
        },
        {
          code: null,
          codeVector: [
            "105001",
            "105011",
            "105015",
            "105021",
            "105031",
            "105049",
            "1050A",
            "105051",
            "105065",
            "105071",
            "105081",
            "105061",
            "105089",
            "1050D",
            "10509001",
            "10509015",
            "10509021",
            "10509031",
            "10509061",
            "10509018",
            "10509019",
            "10509049",
            "1050WU",
            "10509551",
            "10509565",
            "10509571",
            "10509541",
            "10509581",
            "10509585",
            "10509586",
            "10509589",
            "1050WD",
            "1050",
          ],
          description: "1050 Trademarks",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 5,
        },
        {
          code: null,
          codeVector: [
            "107001",
            "107011",
            "107015",
            "107021",
            "107031",
            "107049",
            "1070A",
            "107051",
            "107065",
            "107071",
            "107081",
            "107061",
            "107089",
            "1070D",
            "10709001",
            "10709015",
            "10709021",
            "10709031",
            "10709061",
            "10709018",
            "10709019",
            "10709049",
            "1070WU",
            "10709551",
            "10709565",
            "10709571",
            "10709541",
            "10709581",
            "10709585",
            "10709586",
            "10709589",
            "1070WD",
            "1070",
          ],
          description: "1070 Goodwill",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 6,
        },
        {
          code: null,
          codeVector: ["108001", "108011", "108015", "108021", "108031", "108049", "1080A", "1080"],
          description: "1080 Advance#payments",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 7,
        },
        {
          code: null,
          codeVector: [
            "109001",
            "109011",
            "109015",
            "109021",
            "109031",
            "109049",
            "1090A",
            "109051",
            "109065",
            "109071",
            "109081",
            "109061",
            "109089",
            "1090D",
            "10909001",
            "10909015",
            "10909021",
            "10909031",
            "10909061",
            "10909018",
            "10909019",
            "10909049",
            "1090WU",
            "10909551",
            "10909565",
            "10909571",
            "10909541",
            "10909581",
            "10909585",
            "10909586",
            "10909589",
            "1090WD",
            "1090",
          ],
          description: "1090 Other#intangible#fixed assets",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 8,
        },
        {
          code: null,
          codeVector: [
            "10XX01",
            "10XX11",
            "10XX15",
            "10XX21",
            "10XX31",
            "10XX49",
            "10XXA",
            "10XX51",
            "10XX65",
            "10XX71",
            "10XX81",
            "10XX61",
            "10XX89",
            "10XXD",
            "10XX9001",
            "10XX9015",
            "10XX9021",
            "10XX9031",
            "10XX9061",
            "10XX9018",
            "10XX9019",
            "10XX9049",
            "10XXWU",
            "10XX9551",
            "10XX9565",
            "10XX9571",
            "10XX9541",
            "10XX9581",
            "10XX9585",
            "10XX9586",
            "10XX9589",
            "10XXWD",
            "1099",
            "1090SP",
            "1090TSS",
            "1090R",
            "3971R",
            "7971R",
            "1090DIFF",
          ],
          description: "TOTAL#Intangible#fixed assets",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 9,
        },
      ],
    ],
    rows: [
      {
        header: {
          code: "2023",
          codeVector: null,
          description: "",
          dimension: "Year",
          indentation: 0,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: [],
          description: "ACQUISITIONS",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["101001", "103001", "104001", "105001", "107001", "108001", "109001", "10XX01"],
          description: "Opening accumulated acquisition values",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 564466.2812,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 256049.89670000004,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 749079.8308,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 99932.0956,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: 212420.6393,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 929682.2173,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: 2811630.9609000003,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101011", "103011", "104011", "105011", "107011", "108011", "109011", "10XX11"],
          description: "This year´s gross investments",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 8116.0,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 3677.0,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 10713.0,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 6818.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 13391.0,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: 42715.0,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101015", "103015", "104015", "105015", "107015", "108015", "109015", "10XX15"],
          description: "Acquisitions",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 25000.0,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -32250.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: -7250.0,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101021", "103021", "104021", "105021", "107021", "108021", "109021", "10XX21"],
          description: "Sold/scrapped",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -97.0,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: -43.0,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -127.0,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: -81.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: -159.0,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: -507.0,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101031", "103031", "104031", "105031", "107031", "108031", "109031", "10XX31"],
          description: "Reclassification/internal transfers",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 11.0,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 5.0,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 14.0,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 52259.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 18.0,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: 52307.0,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101049", "103049", "104049", "105049", "107049", "108049", "109049", "10XX49"],
          description: "Translation difference",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -1317.4829,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: -596.815,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -1729.4126,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 101.99,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: 50.6,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: -2175.5545,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: -5666.674999999999,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["1010A", "1030A", "1040A", "1050A", "1070A", "1080A", "1090A", "10XXA"],
          description: "Closing accumulated acquisition value",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 571178.7983,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 284092.08170000004,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 757950.4182,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 100034.0856,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: 239217.23930000002,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 940756.6628,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: 2893229.2859000005,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: [],
          description: "AMORTIZATION",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["101051", "103051", "104051", "105051", "107051", "109051", "10XX51"],
          description: "Opening accumulated amortization",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -65849.99799999999,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: -29908.7113,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -87408.3223,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: -11997.4995,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: -17982.3264,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: -213146.85749999998,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101065", "103065", "104065", "105065", "107065", "109065", "10XX65"],
          description: "Acquisitions",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["101071", "103071", "104071", "105071", "107071", "109071", "10XX71"],
          description: "Sold/scrapped",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 14.2994,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 14.2994,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101081", "103081", "104081", "105081", "107081", "109081", "10XX81"],
          description: "Reclassification/internal transfers",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 0.0,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 0.0,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: -14.2994,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: -14.2994,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101061", "103061", "104061", "105061", "107061", "109061", "10XX61"],
          description: "Amortization for the year",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -7973.921200000001,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: -3657.3732,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -5775.570599999999,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: -2060.9656999999997,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: -7905.1979,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: -27373.0286,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101089", "103089", "104089", "105089", "107089", "109089", "10XX89"],
          description: "Translation difference",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 119.7245,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 54.076699999999995,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 184.99569999999997,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: -22.1585,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: -12.090300000000001,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 324.5480999999999,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["1010D", "1030D", "1040D", "1050D", "1070D", "1090D", "10XXD"],
          description: "Closing accumulated amortization",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -73704.1947,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: -33512.0078,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -92998.8972,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: -14080.6237,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: -25899.6146,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: -240195.33800000002,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: [],
          description: "WRITE-UPS",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109001", "10309001", "10409001", "10509001", "10709001", "10909001", "10XX9001"],
          description: "Opening accumulated write-ups",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 43344.076700000005,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 19600.5508,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 57164.4272,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 7200.7,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: 2070.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 129379.7547,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["10109015", "10309015", "10409015", "10509015", "10709015", "10909015", "10XX9015"],
          description: "Acquisitions",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 618.0,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 279.0,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 814.0,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 519.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 2230.0,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["10109021", "10309021", "10409021", "10509021", "10709021", "10909021", "10XX9021"],
          description: "Sold/scrapped",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109031", "10309031", "10409031", "10509031", "10709031", "10909031", "10XX9031"],
          description: "Reclassification/internal transfers",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109061", "10309061", "10409061", "10509061", "10709061", "10909061", "10XX9061"],
          description: "Amortization for the year",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109018", "10309018", "10409018", "10509018", "10709018", "10909018", "10XX9018"],
          description: "Write-ups for the year",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109019", "10309019", "10409019", "10509019", "10709019", "10909019", "10XX9019"],
          description: "Write-down of write-ups",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109049", "10309049", "10409049", "10509049", "10709049", "10909049", "10XX9049"],
          description: "Translation difference",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -101.39359999999999,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: -45.844899999999996,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -133.72,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 7.54,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: -139.6985,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["1010WU", "1030WU", "1040WU", "1050WU", "1070WU", "1090WU", "10XXWU"],
          description: "Closing accumulated write-ups",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 43860.6831,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 19833.7059,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 57844.7072,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 7208.24,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: 2589.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 131336.33620000002,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: [],
          description: "WRITE-DOWNS",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109551", "10309551", "10409551", "10509551", "10709551", "10909551", "10XX9551"],
          description: "Opening accumulated write-downs",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109565", "10309565", "10409565", "10509565", "10709565", "10909565", "10XX9565"],
          description: "Acquisitions",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109571", "10309571", "10409571", "10509571", "10709571", "10909571", "10XX9571"],
          description: "Sold/scrapped",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109541", "10309541", "10409541", "10509541", "10709541", "10909541", "10XX9541"],
          description: "Reclassification/internal transfers",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109581", "10309581", "10409581", "10509581", "10709581", "10909581", "10XX9581"],
          description: "Amortization for the year",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109585", "10309585", "10409585", "10509585", "10709585", "10909585", "10XX9585"],
          description: "Write-downs for the year",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109586", "10309586", "10409586", "10509586", "10709586", "10909586", "10XX9586"],
          description: "Write-up of write-downs",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109589", "10309589", "10409589", "10509589", "10709589", "10909589", "10XX9589"],
          description: "Translation difference",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["1010WD", "1030WD", "1040WD", "1050WD", "1070WD", "1090WD", "10XXWD"],
          description: "Closing accumulated write-downs",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: [],
          description: "",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["1010", "1030", "1040", "1050", "1070", "1080", "1090", "1099"],
          description: "Closing residual value according to plan",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 541335.2866999999,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 270413.7798000001,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 722796.2282,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 93161.7019,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: 215906.62470000001,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 940756.6628,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: 2784370.2841,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: [],
          description: "",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["1090SP"],
          description: "Sales price",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["1090TSS"],
          description: "Total sold/scrapped",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -492.7006,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["1090R"],
          description: "Realization result, this year specification",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -492.7006,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["3971R"],
          description: "Realization income",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["7971R"],
          description: "Realization loss",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["1090DIFF"],
          description: "Difference in specification vs IS_ALL",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -492.7006,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: "2022",
          codeVector: null,
          description: "",
          dimension: "Year",
          indentation: 0,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: [],
          description: "ACQUISITIONS",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["101001", "103001", "104001", "105001", "107001", "108001", "109001", "10XX01"],
          description: "Opening accumulated acquisition values",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 280267.761,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 127256.92880000001,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 369652.9275,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 99280.8721,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: 144372.91,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 460759.7485,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: 1481591.1479,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101011", "103011", "104011", "105011", "107011", "108011", "109011", "10XX11"],
          description: "This year´s gross investments",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 289060.61,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 130945.32,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 381585.36000000004,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 20378.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 476960.72000000003,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: 1298930.01,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101015", "103015", "104015", "105015", "107015", "108015", "109015", "10XX15"],
          description: "Acquisitions",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 48041.1393,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 48041.1393,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101021", "103021", "104021", "105021", "107021", "108021", "109021", "10XX21"],
          description: "Sold/scrapped",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -10476.519999999999,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: -4720.95,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -13837.4,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: -129.0,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: -241.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: -17295.75,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: -46700.619999999995,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101031", "103031", "104031", "105031", "107031", "108031", "109031", "10XX31"],
          description: "Reclassification/internal transfers",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 385.10999999999996,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 196.79999999999998,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -1175.76,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 9.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 641.85,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: 56.99999999999994,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101049", "103049", "104049", "105049", "107049", "108049", "109049", "10XX49"],
          description: "Translation difference",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 5229.3202,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 2371.7979,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 6885.953300000001,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 780.2235000000001,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: -139.41,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 8615.6488,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: 23743.5337,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["1010A", "1030A", "1040A", "1050A", "1070A", "1080A", "1090A", "10XXA"],
          description: "Closing accumulated acquisition value",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 564466.2812,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 256049.8967,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 743111.0808000001,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 99932.0956,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: 212420.6393,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 929682.2173,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: 2805662.2109000003,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: [],
          description: "AMORTIZATION",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["101051", "103051", "104051", "105051", "107051", "109051", "10XX51"],
          description: "Opening accumulated amortization",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -32616.7047,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: -14825.9244,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -43006.98569999999,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: -11376.6799,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: -28710.3236,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: -130536.6183,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101065", "103065", "104065", "105065", "107065", "109065", "10XX65"],
          description: "Acquisitions",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["101071", "103071", "104071", "105071", "107071", "109071", "10XX71"],
          description: "Sold/scrapped",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 821.0,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 372.0,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 1083.0,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 20.0,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: 15000.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 17296.0,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101081", "103081", "104081", "105081", "107081", "109081", "10XX81"],
          description: "Reclassification/internal transfers",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["101061", "103061", "104061", "105061", "107061", "109061", "10XX61"],
          description: "Amortization for the year",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -33444.4673,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: -15177.938699999999,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -44083.6872,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: -548.076,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: -4259.2216,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: -97513.3908,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["101089", "103089", "104089", "105089", "107089", "109089", "10XX89"],
          description: "Translation difference",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -609.826,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: -276.8482,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -804.101,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: -92.7436,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: -12.7812,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: -1796.3000000000002,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["1010D", "1030D", "1040D", "1050D", "1070D", "1090D", "10XXD"],
          description: "Closing accumulated amortization",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -65849.99799999999,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: -29908.7113,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -86811.7739,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: -11997.4995,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: -17982.326399999998,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: -212550.30909999995,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: [],
          description: "WRITE-UPS",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109001", "10309001", "10409001", "10509001", "10709001", "10909001", "10XX9001"],
          description: "Opening accumulated write-ups",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 21485.2515,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 9716.012,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 28333.15,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 7243.019,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: 519.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 67296.4325,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["10109015", "10309015", "10409015", "10509015", "10709015", "10909015", "10XX9015"],
          description: "Acquisitions",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 21999.21,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 9947.92,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 29015.600000000002,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 1551.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 62513.729999999996,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["10109021", "10309021", "10409021", "10509021", "10709021", "10909021", "10XX9021"],
          description: "Sold/scrapped",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -542.0,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: -245.0,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: -714.0,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: -100.0,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: -1601.0,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["10109031", "10309031", "10409031", "10509031", "10709031", "10909031", "10XX9031"],
          description: "Reclassification/internal transfers",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109061", "10309061", "10409061", "10509061", "10709061", "10909061", "10XX9061"],
          description: "Amortization for the year",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109018", "10309018", "10409018", "10509018", "10709018", "10909018", "10XX9018"],
          description: "Write-ups for the year",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109019", "10309019", "10409019", "10509019", "10709019", "10909019", "10XX9019"],
          description: "Write-down of write-ups",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109049", "10309049", "10409049", "10509049", "10709049", "10909049", "10XX9049"],
          description: "Translation difference",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 401.61519999999996,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 181.6188,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 529.6772,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 57.681,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: 640.915,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["1010WU", "1030WU", "1040WU", "1050WU", "1070WU", "1090WU", "10XXWU"],
          description: "Closing accumulated write-ups",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 43344.0767,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 19600.5508,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 57164.427200000006,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 7200.7,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: 2070.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 129379.75469999999,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: [],
          description: "WRITE-DOWNS",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109551", "10309551", "10409551", "10509551", "10709551", "10909551", "10XX9551"],
          description: "Opening accumulated write-downs",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -5000.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: -5000.0,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["10109565", "10309565", "10409565", "10509565", "10709565", "10909565", "10XX9565"],
          description: "Acquisitions",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109571", "10309571", "10409571", "10509571", "10709571", "10909571", "10XX9571"],
          description: "Sold/scrapped",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 5000.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 5000.0,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["10109541", "10309541", "10409541", "10509541", "10709541", "10909541", "10XX9541"],
          description: "Reclassification/internal transfers",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109581", "10309581", "10409581", "10509581", "10709581", "10909581", "10XX9581"],
          description: "Amortization for the year",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109585", "10309585", "10409585", "10509585", "10709585", "10909585", "10XX9585"],
          description: "Write-downs for the year",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109586", "10309586", "10409586", "10509586", "10709586", "10909586", "10XX9586"],
          description: "Write-up of write-downs",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["10109589", "10309589", "10409589", "10509589", "10709589", "10909589", "10XX9589"],
          description: "Translation difference",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["1010WD", "1030WD", "1040WD", "1050WD", "1070WD", "1090WD", "10XXWD"],
          description: "Closing accumulated write-downs",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 0.0,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 0.0,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: [],
          description: "",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["1010", "1030", "1040", "1050", "1070", "1080", "1090", "1099"],
          description: "Closing residual value according to plan",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: 541960.3598999999,
            format: "#,##0",
            column: 2,
            inputValidationErrors: null,
          },
          {
            value: 245741.7362,
            format: "#,##0",
            column: 3,
            inputValidationErrors: null,
          },
          {
            value: 713463.7341,
            format: "#,##0",
            column: 4,
            inputValidationErrors: null,
          },
          {
            value: 95135.29609999999,
            format: "#,##0",
            column: 5,
            inputValidationErrors: null,
          },
          {
            value: 196508.3129,
            format: "#,##0",
            column: 6,
            inputValidationErrors: null,
          },
          {
            value: 929682.2173,
            format: "#,##0",
            column: 7,
            inputValidationErrors: null,
          },
          {
            value: 2722491.6565,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: [],
          description: "",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["1090SP"],
          description: "Sales price",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["1090TSS"],
          description: "Total sold/scrapped",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -26005.619999999995,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["1090R"],
          description: "Realization result, this year specification",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -26005.619999999995,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
      {
        header: {
          code: null,
          codeVector: ["3971R"],
          description: "Realization income",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["7971R"],
          description: "Realization loss",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [],
      },
      {
        header: {
          code: null,
          codeVector: ["1090DIFF"],
          description: "Difference in specification vs IS_ALL",
          dimension: "Code",
          indentation: 1,
          span: 1,
          column: 0,
        },
        values: [
          {
            value: -26005.619999999995,
            format: "#,##0",
            column: 9,
            inputValidationErrors: null,
          },
        ],
      },
    ],
    inputAvailability: {
      enabled: false,
      preValidation: null,
      rowSpec: null,
    },
    staticAxis: {
      criteria: [
        {
          dimension: "Currency",
          sort: "SelectionOrder",
          ascending: true,
          total: false,
          reportTotal: false,
          showCode: true,
          showDescription: false,
          exclude: false,
          selection: [
            {
              type: "Member",
              value: "TSEK",
              label: "",
            },
          ],
        },
        {
          dimension: "PeriodType",
          sort: "SelectionOrder",
          ascending: true,
          total: false,
          reportTotal: false,
          showCode: true,
          showDescription: false,
          exclude: false,
          selection: [
            {
              type: "Member",
              value: "Actual",
              label: "",
            },
          ],
        },
        {
          dimension: "PeriodIndex",
          sort: "SelectionOrder",
          ascending: true,
          total: false,
          reportTotal: false,
          showCode: true,
          showDescription: false,
          exclude: false,
          selection: [
            {
              type: "Member",
              value: "12",
              label: "",
            },
          ],
        },
      ],
      expand: [],
      topN: null,
      removeEmpty: false,
      compactLayout: false,
      expandPaths: [],
      collapsePaths: [],
    },
  };

  return data;
}

async function insertTable(
  selectValue,
  data,
  firstColumnAlignment,
  firstRowAlignment,
  decimalPlace,
  tableTemplateSelect
) {
  // console.log('decimal places ' + decimalPlace)
  // console.log('first Column Alignment ' + firstColumnAlignment)
  // console.log('first Row Alignment ' + firstRowAlignment)
  const tableData = [];
  tableData.push(data.headers[0].map((header) => header.code));

  for (let row of data.rows) {
    const rowData = [row.header.description];
    if (row.values.length === 0) {
      for (let i = 1; i < data.headers[0].length; i++) {
        rowData.push("");
      }
    } else {
      for (let value of row.values) {
        let val = value.value.toLocaleString(undefined, {
          minimumFractionDigits: decimalPlace,
          maximumFractionDigits: decimalPlace,
        });
        rowData.push(val);
      }
    }
    tableData.push(rowData);
  }

  // var table_style = document.getElementById("select2Icons").val;

  // console.log(table_style)

  await Word.run(async (context) => {
    const table = context.document.body.insertTable(tableData.length, tableData[0].length, "Start", tableData);
    let contentControl = table.insertContentControl();
    const serializedData = JSON.stringify({ tableTemplateSelect, selectValue, data });
    contentControl.tag = serializedData;
    await context.sync();

    table.styleBuiltIn = Word.Style[selectValue];
    table.styleFirstRow = false;
    // Now load and set alignment for cells
    const rows = table.rows;
    rows.load("items");
    await context.sync();

    // Load the cells for each row, starting from the second row (index 1)
    for (let i = 0; i < rows.items.length; i++) {
      const row = rows.items[i];

      // Load cells for each row
      const cells = row.cells;
      cells.load("items/horizontalAlignment");
      await context.sync();

      if (firstColumnAlignment != "left") {
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
  });
}
