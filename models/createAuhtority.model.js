var dBconn = require('../config/dbConnection');

module.exports = {
    createModelData : (inputData, callback)=>{
        var sql = 'insert into authority ?';
        dBconn.query(sql, inputData, (err, data)=>{
            if(err) throw err;
            return callback(data);
        })
    },

    readModelData : (callback) =>{
        var sql = 'select * from authority';
        dBconn.query(sql, (err,data)=>{
            if(err) throw err;
            return callback(data);
        })
    }
}