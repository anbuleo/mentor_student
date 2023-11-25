import express from 'express'
import MentorController from '../controller/MentorController.js'


let mentorRouter = express.Router()

// get all mentor detailes
mentorRouter.get('/',MentorController.getAllmentors)
//get mentor by id
mentorRouter.get('/getmentor/:id',MentorController.getMentorById)

// create mentor by using post method
mentorRouter.post('/',MentorController.createMentor)





export default mentorRouter