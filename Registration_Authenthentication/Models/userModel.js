const mongoose = require('mongoose');

const  userSchema = mongoose.Schema({
    name:{        
        type:String,
        required:true,
        trim: true
    },
    email:{
        type:String,
        require:true,
        trim: true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        trim: true
    },
    join:{  //created At
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User1234",userSchema);
