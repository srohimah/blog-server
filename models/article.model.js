const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Article', new Schema({
    title : String,
    body : String,
},{
    timestamps : true,
})) 