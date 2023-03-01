
import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import DeleteEmployee from "./DeleteEmployee";
import UpdateEmployee from './UpdateEmployee';

export default function AllEmployees(){

    const [employees, setEmployees] = useState([{
        empid: '',
        name: '',
        age: '',
        gender: '',
        phone: '',
        position: '',
        salary: ''
    }]);

    const [test, setTest] = useState(" - Loading");

    function employeeDelete (id) {
      console.log(id)
      axios.delete(`http://localhost:5000/employee/delete/${id}`).then((res) => {
        console.log("deleted", res);
        document.getElementById(`tr_${id}`).style.display = "none";
      }).catch(err => {
        console.log(err.message);
      })
    }

    function printFile () {
      window.print();
    }

    useEffect(() =>{
        function getEmployees() {
            axios.get("http://localhost:5000/employee/").then((res) => {
                setEmployees(res.data);
                setTest("");
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getEmployees();
    }, [])
    return (
        <div className = "container">
            <h1>Employee List {test} <button style={{fontSize: "12px", padding: "8px 16px", backgroundColor: "#0000ff", color: "#fff", borderRadius: "5px", border: "none"}} onClick={() => printFile()}>Print</button></h1>
            
            

            <div>
               <table class="table">
  <thead>
    <tr>
      <th scope="col">Emp ID</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Phone</th>
      <th scope="col">Position</th>
      <th scope="col">Salary Amount</th>
      
    </tr>
  </thead>
  {employees.map(employee =>
  <tbody>
    <tr id={`tr_${employee._id}`}>
      <td>{employee.empid}</td>
      <td>{employee.name}</td>
      <td>{employee.age}</td>
      <td>{employee.gender}</td>
      <td>{employee.phone}</td>
      <td>{employee.position}</td>
      <td>{employee.salary}</td>
      {/*<td><a className="btn-primary" href={`/update/${employee._id}`} role="button">Update</a></td>*/}
      <td><Link to={`/employee/update/${employee._id}`}><button className="btn-primary">Update</button></Link></td>
      <td><button className="btn-primary" onClick={() => employeeDelete(employee._id)} role="button">Delete</button></td>
      {/* <td><a className="btn-primary" onClick={employeeDelete (employee._id)} href={`/delete/${employee._id}`} role="button">Delete</a></td> */}
    </tr>
  </tbody>
  )}
</table>

            </div>
        </div>
    )
}