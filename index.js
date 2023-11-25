import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connect from './database/connect.js'

import studentRoute from './Routers/StudentRoute.js'
import mentorRouter from './Routers/MentorRoute.js'


//For create app
const app = express()
dotenv.config()

//cors policy - origin limitation

app.use(cors());


app.use(express.json());  

app.use('/mentors',mentorRouter)
app.use('/students',studentRoute)

//PORT 

let PORT = process.env.PORT


app.get('/',(req,res)=>{
    res.send(`<h1>Hello world</h1>`)
})

//

//TO start a server and database

connect().then(()=>{
    try {
        app.listen(PORT,()=>console.log(`app lisenting server ${PORT}`))
        
    } catch (error) {
        console.log(`Cannot Connect to the server`)
    }
}).catch((error)=>console.log('Invalid Database Connection'))


