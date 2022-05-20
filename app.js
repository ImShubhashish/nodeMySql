const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))



app.listen(process.env.APP_PORT, ()=>{
    console.log('Listening at port: '+ process.env.APP_PORT)
})
