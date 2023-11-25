import express from 'express'
import StudentController from '../controller/StudentController.js'



const studentRouter = express.Router()


// get all student

studentRouter.get('/',StudentController.getAllStudent)

//get non-assigned mentor students

studentRouter.get('/nonmentor',StudentController.selfLearningStudent)

//create a student by using post method

studentRouter.post('/',StudentController.createStudent)

//editbyid assigning mentor for one student 

studentRouter.put('/assignmentor/:id',StudentController.editStudentById)

//edit assign mentor for all student

studentRouter.put('/multistudentmentor',StudentController.assignToMultiStudent)

//dieplay student by assigned mentors with id

studentRouter.get('/regularstudent/:id',StudentController.regularstudent)



export default studentRouter