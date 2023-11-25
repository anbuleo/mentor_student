import MentorModel from "../Model/MentorModel.js";



//get all mentors

const getAllmentors =async (req,res)=>{
    try {
       const mentor = await MentorModel.find() 
       res.status(200).send({
        message : "All mentor details",
        mentor
       })
    } catch (error) {
        res.status(400).send({
            message : 'internel server error',
            error
        })
        
    }
} 

//get mentor by id
const getMentorById = async (req,res) => {
    const {id} = req.params

    try {
        const mentor = await MentorModel.findById({_id:id})
        res.status(200).send({
            message : "The get mentor by id is success",
            mentor
        })
        
    } catch (error) {
        res.status(500).send({
            message : "Internal sever error",
            error
        })
    }
}

//create mentor post method

const createMentor = async (req,res) => {
    const {name, email, course} = req.body;
    const addMentor = new MentorModel({
        "name" : name,
        "email" : email,
        "course" : course
    })

    try {
        const newMentor = await addMentor.save()
        res.status(201).send({
            message : "The new mentor created success",
            newMentor
        })
    } catch (error) {
        res.status(500).send({
            message : "internel server error",
            error
        })
    }
}



//export all the controller

export default {
    getAllmentors,
    getMentorById,
    createMentor
}