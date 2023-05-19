/* eslint-disable no-undef */
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const session = require("express-session");
const crypto = require("crypto");
const cors = require("cors");

// Set up a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "aaro",
});

// Connect to the MySQL server
connection.connect();

// Create an Express application
const app = express();

// Serve static files from the public directory
app.use(express.static("assets"));

app.use(cors());

// Parse request bodies as JSON
app.use(express.json());

const secret = crypto.randomBytes(32).toString("hex");

app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
  })
);
// Handle a POST request to the login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log([email, password]);
  // Check the credentials against your MySQL database
  connection.query("SELECT * FROM users WHERE email = ?", [email], (error, results) => {
    if (error) {
      res.status(500).json({ message: "Server error" });
      return;
    }

    console.log(results.length);
    // Check if the user exists
    if (results.length === 0) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    const user = results[0];
    console.log(user);
    // Compare the provided password with the hashed password in the database
    bcrypt.compare(password, user.password, (error, isMatch) => {
      if (error) {
        res.status(500).json({ message: "Server error", success: false });
        return;
      }

      if (!isMatch) {
        res.status(401).json({ message: "Invalid email or password", success: false });
        return;
      }
      req.session.isLoggedIn = true;
      // Password matches, authentication successful
      res.status(200).json({ message: "Login successful", success: true });
    });
  });
});

app.get("/logout", (req, res) => {
  // Clear the session
  req.session.destroy((err) => {
    if (err) {
      console.error("An error occurred during logout:", err);
      res.status(500).json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});

// Handle a POST request to the register route
app.post("/register", (req, res) => {
  const { new_username, new_password } = req.body;
  // Check if the username already exists in the database
  connection.query(`SELECT * FROM users WHERE username = '${new_username}'`, (error, results, fields) => {
    if (error) throw error;
    if (results.length === 0) {
      // Save the user's information to the database
      connection.query(
        `INSERT INTO users (username, password) VALUES ('${new_username}', '${new_password}')`,
        (error, results, fields) => {
          if (error) throw error;
          res.redirect("/index.html");
          req.session.isLoggedIn = true;
        }
      );
    } else {
      res.send("Username already exists");
    }
  });
});

app.get("/table_styles", (req, res) => {
  // Query the database to fetch the table names
  connection.query("SELECT name, slug FROM styles", (error, results) => {
    if (error) {
      console.error("Error retrieving data from styles table:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Extract the table names from the query results
      const tableStyles = results.map((result) => ({
        name: result.name,
        slug: result.slug,
      }));
      res.json(tableStyles);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
