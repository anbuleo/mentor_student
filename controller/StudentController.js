import StudentModel from '../Model/StudentModel.js'



//to get all the student controller 

const getAllStudent = async (req,res) => {
    
   
    try {
        let users = await StudentModel.find()
        console.log(users)
        let count = users.length

        res.status(200).send({
            users,
            count
        })
        
        let students = await StudentModel.find({}).populate('Mentor').exec((err,result)=>{
            if(!err ){
                res.json(result)
            }
            
           
        })
        console.log(students)
       
    } catch (error) {
        console.log(error)
        res.status(400).send({
            message : "Error ocurred",
            error
        })
    }
}

//getting a mentor not assigned student

const selfLearningStudent = async (req,res) =>{
    const students = await StudentModel.find({mentor:undefined})
    res.status(200).send({
        message : "The list of non-assigned mentor students",
        students
    })
}

//creating a student so code for controller

const createStudent = async (req,res) => {
    const addStudent = new StudentModel({
        "name" : req.body.name,
        "email": req.body.email,
        "batch" : req.body.batch,
        "mentor" : req.body.mentor ? req.body.mentor : undefined
    })
    try {
        const {email} = req.body
        let user = await StudentModel.findOne({email:req.body.email})
        console.log(email)
        if(! user){
            const newStudent = await addStudent.save()
            res.status(201).send({
                message: "The student was created",
                newStudent
            })
        }else{
            res.status(400).send({
                messsage : `${email} is already taken`
            })
        }
       
    } catch (error) {
        res.status(500).send({
            message : "Internal server error",
            error
        })
    }
}

//add mentor student by id

const editStudentById = async (req,res) => {
    // const {id} = req.params
    
    // console.log(mentor,id)
    try {
        const student = await StudentModel.findOne({_id:req.params.id})

        // const filter = {name : student.name}
        // const update = {  mentor : req.body.mentor}
        // const doc = await StudentModel.findOneAndUpdate(filter, update, {
        //     new: true,
        //     upsert: true // Make this update into an upsert
        //   })
        // console.log(student,filter,update,doc)
        
        student.mentor = req.body.mentor;
       await student.save()
        res.send(student)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message : "Internal server error",
            error
        })
    }
}

//add mentor for multiple student

const assignToMultiStudent = async (req,res) => {
    const {mentor,stud_list} = req.body;
    console.log(stud_list)
    try{
        // let students = await StudentModel.find()
        // console.log(students)
        let list =req.body.stud_list
        let newList = list.split(',')
      
        console.log(typeof(newList),newList)

        newList.map( async(stud_id) => {
           let  newc = stud_id.slice(5,stud_id.length-1)
            console.log(newc)
            const student = await StudentModel.findById(newc)
            //console.log(student)
            student.mentor = req.body.mentor;
            await student.save();
        })
        res.send("Updated Successfully");  
    }catch(err){
        
        res.status(500);
        res.send(err);
    }
}


//get the students for a particular students  http://localhost:8000/students/regularstudent/:id

const regularstudent = async (req,res) => {
    const {id} = req.params
    try {
        const students = await StudentModel.find({mentor : id})
        res.status(200).send({
            message : "the get req success",
            students
        })
       
    } catch (error) {
        res.status(400).send({
            message : "The student Not get Internal error",
            error
        })
    }
}




export default {
    getAllStudent,
    createStudent,
    selfLearningStudent,
    editStudentById,
    assignToMultiStudent,
    regularstudent
}