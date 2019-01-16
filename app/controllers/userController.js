const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')

/* Models */
const DataModel = mongoose.model('Data')


let getData = (req,res)=>{
    console.log('working');
    DataModel.find()
    .then((data)=>{
        console.log(data);
        res.send(data);
    })

}


module.exports = {

   getData:getData

}// end exports