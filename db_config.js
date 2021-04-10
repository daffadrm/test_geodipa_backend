const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "new_password",
    insecureAuth: true,
    database: "db_test"
})
db.connect(function(err){
    if(err) throw err;
    console.log("connnected!");
    
      
})
module.exports = db;