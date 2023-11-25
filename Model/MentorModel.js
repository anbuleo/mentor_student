import mongoose from "mongoose";

//email validate function
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

// mentor schema
const mentorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is requied"]
    },
    email : {
        type : String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: [true, "Email is required"],
    },
    course : {
        type : String,
        required : [true, "Course name is required"]
    }
})

const MentorModel = mongoose.model('Mentor',mentorSchema)

export default  MentorModel