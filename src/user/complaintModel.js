var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var complaintSchema = new Schema({

    complaintID: {
        type: String,
        required: true
    },
    
    c_email: {
        type: String,
        required: true
    },
    c_subject: {
        type: String,
        required: true
    },
    c_dept:{
        type:String,
        required:true
    },
    c_content:{
        type:String,
        required:true
    },
    c_status:{
        type:String,
        
    },
    solution:{
        type:String,
    }

});

module.exports = mongoose.model('complaint', complaintSchema);