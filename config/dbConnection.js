const mysql = require('mysql')

const conn = mysql.createConnection({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database: process.env.test
})

conn.connect((err)=>{
    if(err) throw err;
    console.log("Database successfully connected");
});

module.exports=conn;