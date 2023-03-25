const express = require('express');
const con = require("./config");

const app = express();
 
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
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));