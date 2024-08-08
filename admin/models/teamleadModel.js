const mongoose = require("mongoose");
const teamleadSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            // required:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:Number,
            // required:true
        },
        city:{
            type:String,
            // required:true
        },
        role:{
            type:String,
            // required:true
        },
        image:{
            type:String
        }
},
{
    timestamps:true,
}
);
module.exports = mongoose.model("teamlead",teamleadSchema);