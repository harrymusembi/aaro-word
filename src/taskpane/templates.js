/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/**
 * Treeview (jquery)
 */

'use strict';

// $(function () {
//   var theme = $('html').hasClass('light-style') ? 'default' : 'default-dark',
//     ajaxTree = $('#jstree-ajax');

//   // Ajax Example
//   // --------------------------------------------------------------------
//   if (ajaxTree.length) {
//     ajaxTree.jstree({
//       core: {
//         themes: {
//           name: theme
//         },
//         data: {
//           url: 'https://mocki.io/v1/e328d63c-db46-408e-96b5-1d97775f4d38',
//           dataType: 'json',
//           data: function (node) {
//             return {
//               id: node.id
//             };
//             console.log(node)
//           }
//         }
//       },
//       plugins: ['types', 'state'],
//       types: {
//         default: {
//           icon: 'ti ti-folder'
//         },
//         html: {
//           icon: 'ti ti-brand-html5 text-danger'
//         },
//         css: {
//           icon: 'ti ti-brand-css3 text-info'
//         },
//         img: {
//           icon: 'ti ti-photo text-success'
//         },
//         js: {
//           icon: 'ti ti-brand-javascript text-warning'
//         }
//       }
//     });
//   }
// });

var theme = $('html').hasClass('light-style') ? 'default' : 'default-dark',
  ajaxTree = $('#jstree-ajax');

  // 

// function processFoldersAndItems(data) {
//     let idCounter = 0; // Initialize the id counter to 1

//     // function addItemWithId(item) {
//     //   item.id = idCounter++; // Add the "id" property to the item and increment the counter
//     //   return item;
//     // }

//     let jstreeData = [];

//     data.folders.forEach((folder) => {
//         let folderNode = {
//             id: idCounter++,
//             text: folder.name,
//             type: 'default',
//             state: {
//                 opened: false
//             },
//             isempty: folder.isEmpty,
//             children: []
//         };


//         if (folderNode.isempty === false && folderNode.text == 'Word') {
//             const fd = 'Word';
//             makeSecondAPICall(fd, (subFolderData) => {
//                 let subFolderNodes = processSubFoldersAndItems(subFolderData);
//                 //  console.log(subFolderNodes)
//                 //  folderNode.children = subFolderNodes;
//                 folderNode.children = subFolderNodes
//                 folderNode.state.opened = true;
//             });

//             jstreeData.push(folderNode);
//         }
//         // console.log(folderNode);

//         // jstreeData.push(folderNode);
//     });

//     console.log('Data on JSTREE is '+ JSON.stringify(jstreeData));

//     // 


//     return jstreeData;
// }

// function processFoldersAndItems(data) {
//   let idCounter = 0;
//   let jstreeData = [];

//   // console.log('Data is '+ JSON.stringify(data));

//   function processFolderAsync(folder) {
//     return new Promise((resolve, reject) => {
//       let folderNode = {
//         id: idCounter++,
//         text: folder.name,
//         type: 'default',
//         state: {
//           opened: false
//         },
//         isempty: folder.isEmpty,
//         children: []
//       };

//       // console.log('folderNode is '+ JSON.stringify(folderNode));
//       // console.log('folder is '+ JSON.stringify(folder));
//       if (folderNode.isempty === false && folderNode.text === 'Word') {
//         const fd = 'Word';
//         makeSecondAPICall(fd, (subFolderData) => {
//           let subFolderNodes = null;
//           // let subFolderNodes = processSubFoldersAndItems(subFolderData);
//           if (Array.isArray(subFolderData)) {
//             let subFolderNodes = subFolderData.slice();
//           } else {
//             console.log('subFolderData is not an array');
//           }
//           folderNode.children = subFolderNodes;
//           folderNode.state.opened = true;
//           resolve(folderNode); // Resolve the promise with the updated folderNode

//           // console.log('folderNode2 is '+ JSON.stringify(folderNode));
//         });
//       } else {
//         resolve(folderNode); // Resolve the promise with the original folderNode
//       }



//     });
//   }

//   // Process each folder using async/await
//   async function processFoldersAsync() {

//     // console.log('data1 is '+ JSON.stringify(data));
//     for (const folder of data.folders) {
//       const folderNode = await processFolderAsync(folder);

//       // console.log('data2 is '+ JSON.stringify(folderNode));
//       jstreeData.push(folderNode);
//     }
//   }

//   // Call the function to start processing the folders
//   processFoldersAsync().then((jstreeData) => {
//     console.log('JSTREE is ' + JSON.stringify(jstreeData));
//     return jstreeData;
//   });


//   // console.log('RETURN JSTREE is ' + JSON.stringify(jstreeData));
//   // return jstreeData;
// }



// function processSubFoldersAndItems(data) {
//   let idCounter = 1;

//   // Function to add id to items
//   function addItemWithId(item) {
//     const newItem = {

//       id: item.id,
//       text: item.name.replace(',', '-'),
//       ...item
//     };

//     // Remove the 'name' property from the 'item' object
//     delete newItem.name;

//     return newItem;
//   }
//   // console.log(data);
//   // Process folders
//   const processedFolders = data.folders.map((folder) => {

//     let subFolderNode = {
//       id: idCounter++,
//       text: folder.name.replace(',', ' -'),
//       type: 'default',
//       isempty: folder.isEmpty
//     };

//     return subFolderNode;
//   });

//   // Process items
//   const processedItems = data.items.map(addItemWithId);

//   // Combine folders and items into one array
//   const combinedData = [...processedFolders, ...processedItems];


//   // console.log(combinedData);
//   return combinedData;
// }

// // Function to create the jstree
// function createJSTree(data) {
//   console.log($(ajaxTree).length)
//   console.log('DATA is ' + data)

//   var new_data = JSON.stringify(data)

//   console.log(new_data)
//   if ($(ajaxTree).length) {
//     $(ajaxTree).jstree({
//       core: {
//         themes: {
//           name: theme, // Change this to the desired theme
//         },
//         data: new_data,
//         check_callback: true,
//       },
//       plugins: ['types', 'contextmenu'],
//       types: {
//         default: {
//           icon: 'ti ti-folder'
//         },
//         html: {
//           icon: 'ti ti-brand-html5 text-danger'
//         },
//         css: {
//           icon: 'ti ti-brand-css3 text-info'
//         },
//         img: {
//           icon: 'ti ti-photo text-success'
//         },
//         js: {
//           icon: 'ti ti-brand-javascript text-warning'
//         },
//         docx: {
//           icon: 'ti ti-file-analytics text-grey'
//         },
//         Document: {
//           icon: 'ti ti-file-analytics text-blue'
//         }
//       }
//     });
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// function encodeCredentials(username, password) {
//   const credentials = username + ':' + password;
//   return btoa(credentials);
// }

// // Function to make the second AJAX call with the folder name as a parameter
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// function makeSecondAPICall(Word, callback) {
//   // Assuming you have the base URL for the second API
//   const secondAPIBaseUrl = 'https://mocki.io/v1/df28bd24-5ea4-4b1c-9c96-efd9e9b48f0e';

//   // **************************************************************************************
//   // // Encode the folder name for the URL
//   // const encodedFolderName = encodeURIComponent(Word);

//   // // Make the AJAX call to the second API with the folder name as a parameter
//   // $.getJSON(secondAPIBaseUrl +'/'+ encodedFolderName)
//   //   .done((data) => {
//   //     callback(data); // Invoke the callback with the response data
//   //   })
//   //   .fail((error) => {
//   //     console.error('Error occurred while fetching data:', error);
//   //   });
//   // **************************************************************************************



//   // Encode the folder name for the URL
//   // const encodedFolderName = encodeURIComponent(Word);

//   // Make the AJAX call to the second API with the folder name as a parameter
//   $.getJSON(secondAPIBaseUrl)
//     .done((data) => {
//       // console.log('callback data is ' + JSON.stringify(data))
//       callback(data); // Invoke the callback with the response data
//     })
//     .fail((error) => {
//       console.error('Error occurred while fetching data:', error);
//     });
// }




// Function to make the API call and create the jstree
async function loadJSTreeData() {

  try {
    // const token = await login(); // Call the login function
    var token = localStorage.getItem('aaroWebToken');
    console.log(token);

    // Now you have the token and can use it for subsequent API calls
    await browseWithToken(token); // Call another function that uses the token
  } catch (error) {
    console.error(error);
  }


}

async function login() {
  const url = 'https://aaro-web.test/api/v1/auth/login';
  const credentials = {
    email: 'doyle.abagail@example.net',
    password: '!admin123!'
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  if (response.ok) {
    const data = await response.json();
    const token = data.token; // Assuming the API returns the access token
    console.log(data)
    console.log(data)
    // Store the token for reuse in subsequent API calls
    localStorage.setItem('aaroWebToken', token);
    return token;
  } else {
    throw new Error('Login failed');
  }
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


function results(selectedNodeId, token) {
  const otherApiUrl = `https://aaro-web.test/api/v1/reports/report/${selectedNodeId}`;

  let reportId = parseInt(selectedNodeId, 10);
  if (typeof reportId === 'number' && Number.isInteger(reportId)) {
    let reports = [reportId];
    // Convert the array to a JSON string before storing it in local storage
    localStorage.setItem('all_reports', JSON.stringify(reports));

  console.log(typeof reportId)
  console.log(otherApiUrl)
  // Perform the API call using the selected node's ID
  fetch(otherApiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())

    .then(data => {
      console.log("Data from other API:", data);
      // Process the data from the other API as needed
      localStorage.setItem('apiData', JSON.stringify(data));
      var jstree_temp = localStorage.getItem('jstree');
      localStorage.setItem('jstree_temp', jstree_temp);
      localStorage.setItem('criteria', JSON.stringify(data.criteria));
      localStorage.removeItem('jstree');
      // Redirect to index.html
      window.location.href = 'index.html';
      
      
    })
    .catch(error => {
      console.error("Other API request failed:", error);
    });


  }else{
  
    console.log(Number.isInteger(reportId))
    console.log(otherApiUrl)
  }

  
}

// Call the login function and use the token for subsequent API calls
async function browseWithToken(token) {
  const url = 'https://aaro-web.test/api/v1/reports/browse'; // Replace with the actual API endpoint

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  if (response.ok) {
    const data = await response.json();
    // Process the response data here
    console.log('this is harry ' + stringifySafe(data));
  } else {
    console.error('API request failed');
  }
}

// Usage
(async () => {
  try {
    // const token = await login();
    var token = localStorage.getItem('aaroWebToken');
    console.error(token);
    await browseWithToken(token);


    ajaxTree
      .on("select_node.jstree", function (e, data) {
        // const safeJSON = stringifySafe(data, null, 2);
        // alert(safeJSON);
        // console.log("Node selected:", safeJSON);
        const selectedNode = data.node;
        console.log("Node selected:", selectedNode);
        localStorage.setItem('node_selected', JSON.stringify(selectedNode));
        results(selectedNode.id, token);
      }).jstree({
        core: {
          themes: {
            name: theme
          },
          check_callback: true,
          data: {
            url: "https://aaro-web.test/api/v1/reports/browse",
            method: 'POST',
            dataType: 'json',
            data: function (node) {
              return {
                id: node.id,
                name: node.name,
                parents: node.parents,
                parent: node.parent,
                _token: token
              };
            },
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          }
        },
        plugins: ['types', 'state'],
        types: {
          default: {
            icon: 'ti ti-folder'
          },
          html: {
            icon: 'ti ti-brand-html5 text-danger'
          },
          css: {
            icon: 'ti ti-brand-css3 text-info'
          },
          img: {
            icon: 'ti ti-photo text-success'
          },
          js: {
            icon: 'ti ti-brand-javascript text-warning'
          }
        }
      });
  } catch (error) {
    console.error(error);
  }
})();


// });

// Call the function to load the jstree data on page load
$(document).ready(function () {
  loadJSTreeData();
});