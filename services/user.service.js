const conn = require('../config/dbConnection');

module.exports = {
    create: (data, callback)=>{
        conn.query(
            `insert into authority(documentNumber,fileRef,comment,uploadStatus,synchronousStorage)
            values(?,?,?,?,?,?)`, 
            [
               data.documentNumber,
               data.fileRef,
               data,comment,
               data.uploadStatus,
               data.synchronousStorage
            ],
            (err, results, fields)=>{
                if(err){
                   return callback(err);
                }
                return callback(null, results)
            }
        )
    }
}