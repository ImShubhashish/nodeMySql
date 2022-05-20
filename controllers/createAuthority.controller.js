
const createModel = require("../models/createAuhtority.model");

module.exports = {
  createControllerData : (req, res) => {
    const inputData = {
      documentNumber: req.body.documentNumber,
      fileRef: req.body.fileRef,
      comment: req.body.comment,
      uploadStatus: req.body.uploadStatus,
      synchronousStorage: req.body.synchronousStorage,
    };

    createModel.createModelData(inputData,(data)=>{
        console.log(data.affectedRows + "record created");
    });
  
  },

  readControllerData : (req,res)=>{
    createModel.readModelData((data)=>{
      return res.status(200).json({
          success : 1,
          data: data
      })
    })
  }
}
