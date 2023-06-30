var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var solutionSchema = new Schema({

    cid: {
        type: String,
        required: true
    },
    
   /* rc_complaint:{
        type:String,
        //required:true
    },*/
    rc_solution:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('solution', solutionSchema);