function retrieveReportsData() {

  // API endpoint URL
  //var apiUrl = 'https://hook.eu1.make.com/ow2236iwa386h0ib7ewif3kuhqc5qgnb';
  var apiUrl = 'https://hook.eu1.make.com/owaqe6e1191lty29m12qgaj88qyvaev6';

  // API credentials
  var username = 'your_username';
  var password = 'your_password';
  
  // Create the Authorization header value with the Base64-encoded credentials
  var credentials = username + ':' + password;
  var encoder = new TextEncoder();
  var data = encoder.encode(credentials);
  var base64Credentials = base64FromArrayBuffer(data);
  var authHeader = 'Basic ' + base64Credentials;
  
  // Make the API call with the Authorization header
  $.ajax({
    url: apiUrl,
    type: 'GET',
    dataType: 'json',
    headers: {
      'Authorization': authHeader
    },
    success: function (response) {
      // Process the API response
      var folders = response.folders;
      console.log(folders);
      
      // Get the select element to display the options
      var selectElement = document.getElementById('optionsList');
      
      // Clear any existing options
      selectElement.innerHTML = '';
      
      // Add the report names as options
      for (var i = 0; i < folders.length; i++) {
        var folder = folders[i];
        var option = document.createElement('option');
        option.text = folder.name;
        selectElement.add(option);
      }
      // Add event listener to the select element
      selectElement.addEventListener('change', function() {
        // Get the selected value
        var selectedValue = selectElement.value;
      
        // Do something with the selected value
        console.log('Selected value:', selectedValue);
        retrieveReportFromTree(selectedValue);
        

      });
    },
    error: function (error) {
      // Handle any errors that occur during the API call
    }
  });

    
  

}