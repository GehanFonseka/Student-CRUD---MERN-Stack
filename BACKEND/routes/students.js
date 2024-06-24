const router = require("express").Router();
let Student = require("../models/Student")//import models student file ../means go outside of this routes file and the rest is the path

//creating the CREATE operation

http://Localhost:8070/student
router.route("/add").post((req,res)=>{
     
     const name = req.body.name;
     const age = Number(req.body.age);
     const gender = req.body.gender;

     const newStudent = new Student({
        name,
        age,
        gender
     })

     newStudent.save().then(()=>{
        res.json("Student Added")
     }).catch((err)=>{
        console.log(err);
     })

})//this is a funtion to get the student details by a request line 9-11 AND creating new object by line 13-17.save that in the database(line 19)
//response to the request by json format line 20 AND if error occurs display that by line 21-23


//creating the READ operation

http://Localhost:8070/student

router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
      
})

http://Localhost:8070/student/update/
router.route("/update/:id").put(async(req, res) => {

    let userID = req.params.id;
    const {name, age, gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userID, updateStudent)
    .then(() => {
        res.status(200).send({status: "User Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })   
})

http://Localhost:8070/student/delete/
router.route("/delete/:id").delete(async(req,res) => {

    let userID = req.params.id;

    await Student.findByIdAndDelete(userID).then(() => {
        res.status(200).send({status: "User Deleted"})
    }).catch((err)=>{
        console.log(err.massege);
        res.status(500).send({status: "Error with delete user", error: err.massege})
    })
})

//only one user's data read
router.route("/get/:id").get(async (req,res)=>{
    let userID = req.params.id;
    const user = await Student.findById(userID)
    .then((student)=>{
        res.status(200).send ({status: "User fetched", student})
    }).catch((err)=>{
        connsole.log(err.massege)
        res.status(500).send({status:" Error with get user" , error:err.massege})
    })
})


module.exports = router;//export the module



