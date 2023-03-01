import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DeleteEmployees(){


    
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
        const DeleteEmployees = {
            empid: res.data.empid,
            name: res.data.name,
            age: res.data.age,
            gender: res.data.gender,
            phone: res.data.phone,
            position: res.data.position,
            salary: res.data.salary,
        }

        setEmpid(DeleteEmployees.empid);
        setName(DeleteEmployees.name);
        setAge(DeleteEmployees.age);
        setGender(DeleteEmployees.gender);
        setPhone(DeleteEmployees.phone);
        setPosition(DeleteEmployees.position);
        setSalary(DeleteEmployees.salary);
    }).catch((err) =>{
        alert(err.message);
    });
   }

   useEffect(() => getEmployee(), []);

    return(
            <div className="container">
                <h1>Delete Item</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();

                    const newEmployee= {
                        empid,
                        name,
                        age,
                        gender,
                        phone,
                        position,
                        salary
                    }
                    axios.delete("http://localhost:5000/item/delete/"+id,newEmployee).then(() =>{
                        alert("Item Deleted");
                    }).catch((err)=>{
                        alert(err);
                    })
                }}>
        <div class="mb-3">
        <label for="empid" className="form-label">Employee Id</label>
        <input type="text" className="form-control" id="empid" value={empid} placeholder="Employee Id" 
        onChange={(e)=>{
    
            setEmpid(e.target.value);
    
    
        }}  />
        </div>
    
        <div className="mb-3">
        <label for="name" className="form-label">Employee Name</label>
        <input type="text" className="form-control" id="name" value={name} placeholder="Name" onChange={(e)=>{
    
            setName(e.target.value);
    
    
        }} />
        </div>
    
        <div className="mb-3">
        <label for="age" className="form-label">Employee Age</label>
        <input type="text" className="form-control" id="age" value={age} placeholder="Age" onChange={(e)=>{
    
            setAge(e.target.value);
    
    
        }} />
        </div>
    
        <div className="mb-3">
        <label for="gender" className="form-label">Employee Gender</label>
        <input type="text" className="form-control" id="gender" value={gender} placeholder="Gender" onChange={(e)=>{
    
            setGender(e.target.value);
    
    
        }} />
        </div>
    
        <div className="mb-3">
        <label for="phone" className="form-label">Employee Phone Number</label>
        <input type="text" className="form-control" id="phone" value={phone} placeholder="Phone" onChange={(e)=>{
    
            setPhone(e.target.value);
    
    
        }} />
        </div>
    
        <div className="mb-3">
        <label for="position" className="form-label">Position</label>
        <input type="text" className="form-control" id="position" value={position} placeholder="Position" onChange={(e)=>{
    
            setPosition(e.target.value);
    
        }} />
        </div>

        <div className="mb-3">
        <label for="salary" className="form-label">Salary Amount</label>
        <input type="text" className="form-control" id="salary" value={salary} placeholder="Salary" onChange={(e)=>{
    
            setSalary(e.target.value);
    
    
        }} />
        </div>
       
      <button type="submit" className="btn btn-primary">SUBMIT</button>
    </form>
    
    
            </div>
    
    
        );
    
};