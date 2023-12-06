/* eslint-disable no-undef */
// Set up idle timer and session management

$(document).ready(function () {
  /* eslint-disable no-undef */
  // Set up idle timer and session management

  let logoutTimer;

  function startLogoutTimer() {
    logoutTimer = setTimeout(logoutUser, 30 * 60 * 1000); // 30 minutes
  }

  function resetLogoutTimer() {
    clearTimeout(logoutTimer);
    startLogoutTimer();
  }

  function checkLoggedInStatus() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

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

  $("#LoginForm").submit(function (event) {
    console.log("harry");
    event.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();

    // console.log(email);
    // console.log(password);

    $.ajax({
      url: "https://aaro-web.test/api/v1/auth/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email,
        password,
      }),
      success: function (response) {
        console.log(response);
        if (response.status == true) {
          sessionStorage.setItem("isLoggedIn", true);
          console.log(response.token);
          // Store the token for reuse in subsequent API calls
          sessionStorage.setItem("aaroWebToken", response.token);
          console.log("Login successful");
          window.location.href = "/index.html"; // Redirect to the specified URL
        } else {
          throw new Error("Login failed");
        }
      },
      error: function (error) {
        console.error("An error occurred during login:", error);
      },
    });
  });

  $("#logoutButton").click(function () {
    $.ajax({
      url: "https://aaro-web.test/api/v1/auth/logout",
      method: "GET",
      success: function (response) {
        if (response.status == true) {
          console.log(response);
          console.log("Logout successful");
          // Redirect to the login page or display a message
          window.location.href = "/taskpane.html";
        } else {
          throw new Error("Logout failed");
        }
      },
      error: function (error) {
        console.error("An error occurred during logout:", error);
      },
    });
  });
});
