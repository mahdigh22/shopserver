const express = require('express');
const con = require("./config");

const app = express();
let cors = require("cors");
app.use(cors());
var PORT = "5000";

// Handling GET request
app.get("/products", (req, resp) => {
    con.query("select * from shopproducts", (err, result) => {
      if (err) {
        resp.send("error in ddapi");
      } else {
        resp.send(result);
      }
    });
  });
// Port Number

 
// Server Setup
app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
