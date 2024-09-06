let mysql=require("mysql");

let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Yash@123",
    database:"courses1"
});

module.exports=con;