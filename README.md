# Back-End code for api task

## MVC Design Pattern

=>Model
=>View 
=>Controller

### Express

Express is a back-end web application framework of node js, and with the help of express, we can create an API very easily.

### Mongoose

Mongoose acts as a front end to MongoDB, an open source NoSQL database that uses a document-oriented data model. A "collection" of "documents" in a MongoDB database is analogous to a "table" of "rows" in a relational database.

## Task Requriements

=>Write API to create Mentor
    **The Api for Create Mentor**
    http://localhost:8000/mentors

    *req.body*

    ***{
        "name" : "mentor2",
        "email" : "mentor2@gmail.com",
        "course" : "backend"
        } ***
=>Write API to create Student

    **The Api for Create Student**

    http://localhost:8000/students

    *The email must be unique*

    *req.body*
    *** {
        "name" : "student-2",
        "batch" : "bt-1",
        "email" : "student2@gmail.com"
        }***
=>Write API to Assign a student to Mentor

    **The Api for assign a one student to mentor**
    http://localhost:8000/students//assignmentor/:id

    __Select one mentor and Add multiple Student__ 
    
    *In the params*
    req.params = student.id

    __A student who has a mentor should not be shown in List__

    *req.body*
    *** {
            "mentor" : "id"
        } ***



=>Write API to Assign or Change Mentor for particular Student

    **The Api for assign or change a one student to mentor**
    http://localhost:8000/students//assignmentor/:id

   
    
    *In the params*
    req.params = student.id

    __A student who has a mentor should not be shown in List__

    *req.body*
    *** {
            "mentor" : "id"
        } ***


=>Write API to show all students for a particular mentor

    **The api to show all the student for particular mentor**
    http://localhost:8000/students/regularstudent/:id





=>Write an API to show the previously assigned mentor for a particular student

    **The api fro all students**

        http://localhost:8000/students


