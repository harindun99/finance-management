const router = require("express").Router();
let Employee = require("../models/Employee");

//Add Employees to database.

router.route("/add").post((req,res)=> {

    const empid = req.body.empid;
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const phone = req.body.phone;
    const position = req.body.position;
    const salary= req.body.salary;

    const newEmployee = new Employee({

        empid,
        name,
        age,
        gender,
        phone,
        position,
        salary

    })

    newEmployee.save().then(() => {
        res.json("Employee Added")
    }).catch((err) => {
        console.log(err);
    })
})

//Fetched All data from Database.

router.route("/").get((req,res) => {

    Employee.find().then((employees) =>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })
})

//Update Employee data in Database.

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {empid,name,age,gender,phone,position,salary} = req.body;

    const updateEmployee = {
        empid,
        name,
        age,
        gender,
        phone,
        position,
        salary
    }

    const update = await Employee.findByIdAndUpdate(userId, updateEmployee)
    .then(() =>{
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})

//Delete employee data from Database.

router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await Employee.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

//Fetched Specific user data from Database.

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Employee.findById(userId)
    .then((employee) => {
        res.status(200).send({status: "User fetched",employee})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

//This code segment use to extract specific jason object from String array
//In this case it's extract all the salary values from every jason object, and getting the Total value by Addition.
//After that it will pass the value to the client side.

router.route("/expenditures").get((req,res) => {

    Employee.find().then((employees) =>{

        let total_expenditures = 0;

        for (let i = 0; i < employees.length; i++) {
            total_expenditures += parseInt(employees[i].salary);
        }

        res.json(total_expenditures);
        
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;