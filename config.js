const mysql = require("mysql");
const con= mysql.createConnection({
    host:'us-cdbr-east-06.cleardb.net',
    user:'b4e1eb96e7de2a',
    password:"cbd62a59",
    database:"heroku_6a4ea2b1a806c73"
});

con.connect((err)=>{
    if(err)
    {
        console.warn(err)
    }
    else{
        console.log('done')
    }
});

module.exports =con;