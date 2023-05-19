/* eslint-disable no-undef */
// Set up idle timer and session management

$(document).ready(function () {
  /* eslint-disable no-undef */
  // Set up idle timer and session management

  var logoutTimer;
  function startLogoutTimer() {
    logoutTimer = setTimeout(logoutUser, 30 * 60 * 1000); // 30 minutes
  }

  function resetLogoutTimer() {
    clearTimeout(logoutTimer);
    startLogoutTimer();
  }
  function checkLoggedInStatus() {
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      startLogoutTimer();
    } else {
      logoutUser();
    }
  }
  function logoutUser() {
    sessionStorage.removeItem("isLoggedIn");
    console.log("User logged out due to inactivity");
    // Redirect to the login page or display a message
    // window.location.href = '/login.html';
  }

  // Event listener for user activity

  $(document).on("mousemove keypress", resetLogoutTimer);
  // Add more event listeners as needed

  // Check logged-in status on page load

  checkLoggedInStatus();
  window.addEventListener("load", function () {
    var selectElement = document.getElementById("select2Icons");

    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open("GET", "http://localhost:3000/table_styles", true);

    // Set the response type to JSON
    xhr.responseType = "json";

    // Define the callback function for the AJAX request
    xhr.onload = function () {
      if (xhr.status === 200) {
        var tableStyles = xhr.response;

        // Group the table styles
        var groupedOptions = {
          "Table Grid": [],
          "Plain Table": [],
          "Grid Table 1 Light": [],
          "Grid Table 2": [],
          "Grid Table 3": [],
          "Grid Table 4": [],
          "Grid Table 5 Dark": [],
          "Grid Table 6 Colorful": [],
          "Grid Table 7 Colorful": []
          // Add more groups as needed
        };

        tableStyles.forEach(function (style) {
          if (style.name.startsWith("Table Grid")) {
            groupedOptions["Table Grid"].push(style);
          } else if (style.name.startsWith("Plain Table")) {
            groupedOptions["Plain Table"].push(style);
          } else if (style.name.startsWith("Grid Table 1 Light")) {
            groupedOptions["Grid Table 1 Light"].push(style);
          } else if (style.name.startsWith("Grid Table 2")) {
            groupedOptions["Grid Table 2"].push(style);
          } else if (style.name.startsWith("Grid Table 3")) {
            groupedOptions["Grid Table 3"].push(style);
          } else if (style.name.startsWith("Grid Table 4")) {
            groupedOptions["Grid Table 4"].push(style);
          } else if (style.name.startsWith("Grid Table 5 Dark")) {
            groupedOptions["Grid Table 5 Dark"].push(style);
          } else if (style.name.startsWith("Grid Table 6 Colorful")) {
            groupedOptions["Grid Table 6 Colorful"].push(style);
          } else if (style.name.startsWith("Grid Table 7 Colorful")) {
            groupedOptions["Grid Table 7 Colorful"].push(style);
          }
          // Add more conditions to group the table styles based on your desired logic
        });

        // Generate the select options dynamically
        var _loop = function _loop() {
          var group = document.createElement("optgroup");
          group.label = groupName;
          groupedOptions[groupName].forEach(function (optionValue) {
            var option = document.createElement("option");
            option.value = optionValue.slug; // Use the 'slug' property as the option value
            option.textContent = optionValue.name; // Use the 'name' property as the option text
            group.appendChild(option);
          });
          selectElement.appendChild(group);
        };
        for (var groupName in groupedOptions) {
          _loop();
        }
      } else {
        console.error("Error loading table styles:", xhr.status);
      }
    };

    // Send the request
    xhr.send();
  });
  $("#LoginForm").submit(function (event) {
    console.log("harry");
    event.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();

    // console.log(email);
    // console.log(password);

    $.ajax({
      url: "http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        email: email,
        password: password
      }),
      success: function success(response) {
        console.log(response);
        if (response.success == true) {
          sessionStorage.setItem("isLoggedIn", true);
          console.log("Login successful");
          window.location.href = "/index.html"; // Redirect to the specified URL
        } else {
          throw new Error("Login failed");
        }
      },
      error: function error(_error) {
        console.error("An error occurred during login:", _error);
      }
    });
  });
  $("#logoutButton").click(function () {
    $.ajax({
      url: "http://localhost:3000/logout",
      method: "GET",
      success: function success(response) {
        if (response.success == true) {
          console.log(response);
          console.log("Logout successful");
          // Redirect to the login page or display a message
          window.location.href = "/taskpane.html";
        } else {
          throw new Error("Logout failed");
        }
      },
      error: function error(_error2) {
        console.error("An error occurred during logout:", _error2);
      }
    });
  });
});