var mongoose = require('mongoose')
var Schema = mongoose.Schema

var registerSchema = new Schema({

            email : {
                type : String,
                required : true,
                unique : true
            },
            password : {
                type : String,
                required : true 
            }
},{
    timestamps : true 
})

var reg = mongoose.model('regForm',registerSchema)

module.exports = reg;