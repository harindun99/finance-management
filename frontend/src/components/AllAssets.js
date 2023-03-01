
import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import DeleteAsset from "./DeleteAsset";
import UpdateAsset from "./UpdateAsset";



export default function AllAssets(){

    const [assets, setAssets] = useState([{
        codeno: '',
        name: '',
        type: '',
        value: ''
    }]);

    const [test, setTest] = useState(" - Loading");

    function assetDelete (id) {
      console.log(id)
      axios.delete(`http://localhost:5000/asset/delete/${id}`).then((res) => {
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
        function getAssets() {
            axios.get("http://localhost:5000/asset/").then((res) => {
                setAssets(res.data);
                setTest("");
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getAssets();
    }, [])
    return (
        <div className = "container">
            <h1>Assets Report {test} <button style={{fontSize: "12px", padding: "8px 16px", backgroundColor: "#0000ff", color: "#fff", borderRadius: "5px", border: "none"}} onClick={() => printFile()}>Print</button></h1>

            <div>
               <table class="table">
  <thead>
    <tr>
      <th scope="col">Code No</th>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Value Amount</th>
      
    </tr>
  </thead>
  {assets.map(asset =>
  <tbody>
    <tr id={`tr_${asset._id}`}>
      <td>{asset.codeno}</td>
      <td>{asset.name}</td>
      <td>{asset.type}</td>
      <td>{asset.value}</td>

      {/*<td><a className="btn-primary" href={`/update/${employee._id}`} role="button">Update</a></td>*/}
      <td><Link to={`/asset/update/${asset._id}`}><button className="btn-primary">Update</button></Link></td>
      {/* <td><button className="btn-primary" onClick={() => assetUpdate(asset._id)} role="button">Update</button></td> */}
      <td><button className="btn-primary" onClick={() => assetDelete(asset._id)} role="button">Delete</button></td>
      {/* <td><a className="btn-primary" onClick={employeeDelete (employee._id)} href={`/delete/${employee._id}`} role="button">Delete</a></td> */}
    </tr>
  </tbody>
  )}
</table>

            </div>
        </div>
    )
}