import React,{ useState } from "react"
import axios from "axios";

export default function AddEmployee(){

        const [empid, setEmpid] = useState("");
        const [name, setName] = useState("");
        const [age, setAge] = useState("");
        const [gender, setGender] = useState("");
        const [phone, setPhone] = useState("");
        const [position, setPosition] = useState("");
        const [salary, setSalary] = useState("");


        function sendData(e){
            e.preventDefault();
            
            const newEmployee ={
                empid,
                name,
                age,
                gender,
                phone,
                position,
                salary
            }

            axios.post("http://localhost:5000/employee/add",newEmployee).then(()=>{
                alert("Employee Added");
                window.location.replace("/AllEmployees/");
            }).catch((err)=>{
                alert(err)
            })
        }

        return(

            <div className ="container">
                    <form onSubmit={sendData}>
                        <div className="form-group">
                            <label for="empid" className="form-label"></label>
                            <input type="text" className="form-control" id="empid" placeholder="Employee ID" 
                            onChange ={(e)=>{
                                setEmpid(e.target.value);
                            }} required/>
                    
                        </div>
                        <div className="form-group">
                            <label for="name" className="form-label"></label>
                            <input type="text" className="form-control" id="name" placeholder="Employee Name"
                            onChange ={(e)=>{
                                setName(e.target.value);
                            }} required/>
                    
                        </div>
                        <div className="form-group">
                            <label for="age" className="form-label"></label>
                            <input type="text" className="form-control" id="age" placeholder="Age"
                            onChange ={(e)=>{
                                setAge(e.target.value);
                            }} required/>
                    
                        </div>
                        <div className="form-group">
                            <label for="gender" className="form-label"></label>
                            <input type="text" className="form-control" id="gender" placeholder="Gender"
                            onChange ={(e)=>{
                                setGender(e.target.value);
                            }} required/>
                    
                        </div>
                        <div className="form-group">
                            <label for="phone" className="form-label"></label>
                            <input type="text" className="form-control" id="phone" placeholder="Phone Number"
                            onChange ={(e)=>{
                                setPhone(e.target.value);
                            }} required/>
                    
                        </div>
                        <div className="form-group">
                            <label for="position" className="form-label"></label>
                            <input type="text" className="form-control" id="position" placeholder="Employee Position"
                            onChange ={(e)=>{
                                setPosition(e.target.value);
                            }} required/>
                    
                        </div>
                        <div className="form-group">
                            <label for="salary" className="form-label"></label>
                            <input type="text" className="form-control" id="salary" placeholder="Salary Amount"
                            onChange ={(e)=>{
                                setSalary(e.target.value);
                            }} required/>
                    
                        </div>
                        
                
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="reset" className="btn btn-primary">Cancel</button>
                    </form>
            </div>
        )
}