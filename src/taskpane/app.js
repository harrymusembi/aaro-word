/* eslint-disable no-undef */
// Set up idle timer and session management

Office.onReady((info) => {
  // if (info.host === Office.HostType.Word) {
  //   // Office.context.ui.displayDialogAsync('https://www.contoso.com/myDialog.html', {height: 30, width: 20});
  //   let dialog; // Declare dialog as global for use in later functions.
  //   // Define the URL to your dialog page
  //   const dialogPageUrl = "https://localhost:4000/index.html";
  //   // Construct the URL parameter with the desired URL
  //   const desiredUrl = "https://frf24.aarotest.se/api/version"; // Replace 'https://example.com' with your desired URL
  //   const urlParam = encodeURIComponent(desiredUrl);
  //   // Append the URL parameter to the dialog page URL
  //   const dialogUrl = `${dialogPageUrl}?url=${urlParam}`;
  //   // Call displayDialogAsync with the constructed URL
  //   Office.context.ui.displayDialogAsync(dialogUrl, { height: 60, width: 30 }, function (asyncResult) {
  //     dialog = asyncResult.value;
  //     dialog.addEventHandler(Office.EventType.DialogMessageReceived, (arg) => {
  //       processMessage(arg);
  //     });
  //   });
  //   console.log("Harry");
  // }
  if (info.host === Office.HostType.Word) {


    document.getElementById("loginButton").addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission
      // Get the value of the database URL input field
      var databaseUrl = document.getElementById("database_url").value;
      // Pass the database URL to the dialog
      console.log(databaseUrl)

      let dialog; // Declare dialog as global for use in later functions.
    // Define the URL to your dialog page
    const dialogPageUrl = "https://localhost:4000/index.html";

    // Call displayDialogAsync with the constructed URL
    Office.context.ui.displayDialogAsync(dialogPageUrl, { height: 60, width: 30 }, function (asyncResult) {
      dialog = asyncResult.value;
      dialog.addEventHandler(Office.EventType.DialogMessageReceived, (arg) => {
        processMessage(arg);
      });
    });
    });

    
  }
});

function processMessage(arg) {
  const messageFromDialog = JSON.parse(arg.message);
  if (messageFromDialog.messageType === "signinSuccess") {
    dialog.close();
    showUserName(messageFromDialog.profile.name);
    console.log(messageFromDialog);
    // window.location.replace("/newPage.html");
    console.log("Mule");
  } else {
    dialog.close();
    showNotification("Unable to authenticate user: " + messageFromDialog.error);
  }
}
// $(document).ready(function () {
//   /* eslint-disable no-undef */
//   // Set up idle timer and session management

//   let logoutTimer;

//   function startLogoutTimer() {
//     logoutTimer = setTimeout(logoutUser, 30 * 60 * 1000); // 30 minutes
//   }

//   function resetLogoutTimer() {
//     clearTimeout(logoutTimer);
//     startLogoutTimer();
//   }

//   function checkLoggedInStatus() {
//     const isLoggedIn = sessionStorage.getItem("isLoggedIn");

//     if (isLoggedIn) {
//       startLogoutTimer();
//     } else {
//       logoutUser();
//     }
//   }

//   function logoutUser() {
//     sessionStorage.removeItem("isLoggedIn");
//     console.log("User logged out due to inactivity");
//     // Redirect to the login page or display a message
//     // window.location.href = '/login.html';
//   }

//   // Event listener for user activity

//   $(document).on("mousemove keypress", resetLogoutTimer);
//   // Add more event listeners as needed

//   // Check logged-in status on page load

//   checkLoggedInStatus();

//   $("#LoginForm").submit(function (event) {
//     console.log("harry");
//     event.preventDefault();

//     const email = $("#email").val();
//     const password = $("#password").val();

//     // console.log(email);
//     // console.log(password);

//     $.ajax({
//       url: "https://aaro-web.test/api/v1/auth/login",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: JSON.stringify({
//         email,
//         password,
//       }),
//       success: function (response) {
//         console.log(response);
//         if (response.status == true) {
//           sessionStorage.setItem("isLoggedIn", true);
//           console.log(response.token);
//           // Store the token for reuse in subsequent API calls
//           sessionStorage.setItem("aaroWebToken", response.token);
//           console.log("Login successful");
//           window.location.href = "/templates.html"; // Redirect to the specified URL
//         } else {
//           throw new Error("Login failed");
//         }
//       },
//       error: function (error) {
//         console.error("An error occurred during login:", error);
//       },
//     });
//   });

//   $("#logoutButton").click(function () {
//     $.ajax({
//       url: "https://aaro-web.test/api/v1/auth/logout",
//       method: "GET",
//       success: function (response) {
//         if (response.status == true) {
//           console.log(response);
//           console.log("Logout successful");
//           // Redirect to the login page or display a message
//           window.location.href = "/taskpane.html";
//         } else {
//           throw new Error("Logout failed");
//         }
//       },
//       error: function (error) {
//         console.error("An error occurred during logout:", error);
//       },
//     });
//   });
// });
