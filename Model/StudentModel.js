import mongoose from "mongoose";

//email validate function
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}
// to create student model schemaa

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "The student name required"]
    },
    batch : {
        type : String,
        required : [true, "The batch name required"]
    },
    mentor : {
        type : mongoose.Schema.Types.ObjectId,
        default : undefined,
        ref : 'Mentor'
    },email : {
        type : String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: [true, "Email is required"],
    }


})

let StudentModel = mongoose.model('Student', studentSchema)


export default StudentModel