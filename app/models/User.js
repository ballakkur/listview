'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose');

const dataModel = new mongoose.Schema({
 
  
  imageUrl: {
    type: String,
  },
  qoute: {
    type: String,
    index:true
  },
 video:{
   type:String
 },
  createdOn :{
    type:Date,
    default:Date.now()
  }
})

mongoose.model('Data', dataModel);
