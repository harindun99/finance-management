import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateEmployees(){


    
    const [empid, setEmpid] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");


    const {id} = useParams();


   const getEmployee = () => {
    axios.get("http://localhost:5000/employee/get/"+id).then((res) =>{
        const UpdateEmployees = {
            empid: res.data.employee.empid,
            name: res.data.employee.name,
            age: res.data.employee.age,
            gender: res.data.employee.gender,
            phone: res.data.employee.phone,
            position: res.data.employee.position,
            salary: res.data.employee.salary,
        }

        setEmpid(UpdateEmployees.empid);
        setName(UpdateEmployees.name);
        setAge(UpdateEmployees.age);
        setGender(UpdateEmployees.gender);
        setPhone(UpdateEmployees.phone);
        setPosition(UpdateEmployees.position);
        setSalary(UpdateEmployees.salary);

    }).catch((err) =>{
        alert(err.message);
    });
   }

   useEffect(() => getEmployee(), []);

    return(
            <div className="container">
                <h1>Update Employee</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();

                    const newEmployee = {
                        empid,
                        name,
                        age,
                        gender,
                        phone,
                        position,
                        salary
                    }
                    axios.put("http://localhost:5000/employee/update/"+id,newEmployee).then(() =>{
                        alert("employee Updated");
                        window.location.replace("/AllEmployees/");
                    }).catch((err)=>{
                        alert(err);
                    })
                }}>

        <div class="form-group">
        <label for="empid" className="form-label">Employee Id</label>
        <input type="text" className="form-control" id="empid" value={empid} placeholder="Employee Id" 
        onChange={(e)=>{
    
            setEmpid(e.target.value);
    
    
        }}  />
        </div>
    
        <div className="form-group">
        <label for="name" className="form-label">Employee Name</label>
        <input type="text" className="form-control" id="name" value={name} placeholder="Name" onChange={(e)=>{
    
            setName(e.target.value);
    
    
        }} />
        </div>
    
        <div className="form-group">
        <label for="age" className="form-label">Employee Age</label>
        <input type="text" className="form-control" id="age" value={age} placeholder="Age" onChange={(e)=>{
    
            setAge(e.target.value);
    
    
        }} />
        </div>
    
        <div className="form-group">
        <label for="gender" className="form-label">Employee Gender</label>
        <input type="text" className="form-control" id="gender" value={gender} placeholder="Gender" onChange={(e)=>{
    
            setGender(e.target.value);
    
    
        }} />
        </div>
    
        <div className="form-group">
        <label for="phone" className="form-label">Phone Number</label>
        <input type="text" className="form-control" id="phone" value={phone} placeholder="Phone" onChange={(e)=>{
    
            setPhone(e.target.value);
    
    
        }} />
        </div>

        <div className="form-group">
        <label for="position" className="form-label">Position</label>
        <input type="text" className="form-control" id="position" value={position} placeholder="Position" onChange={(e)=>{
    
            setPosition(e.target.value);
    
    
        }} />
        </div>

        <div className="form-group">
        <label for="salary" className="form-label">Salary Amount</label>
        <input type="text" className="form-control" id="salary" value={salary} placeholder="Salary" onChange={(e)=>{
    
            setSalary(e.target.value);
    
    
        }} />
        </div>
       
      <button type="submit" className="btn btn-primary">UPDATE</button>
    </form>
    
    
            </div>
    
    
        );
    
};