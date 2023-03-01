import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function UpdateAssets(){


    
    const [codeno, setCodeno] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [value, setValue] = useState("");


    const {id} = useParams();


   const getAsset = () => {
    axios.get("http://localhost:5000/asset/get/"+id).then((res) =>{
        const UpdateAssets = {
            codeno: res.data.asset.codeno,
            name: res.data.asset.name,
            type: res.data.asset.type,
            value: res.data.asset.value,
        }

        setCodeno(UpdateAssets.codeno);
        setName(UpdateAssets.name);
        setType(UpdateAssets.type);
        setValue(UpdateAssets.value);

        console.log(res);
    }).catch((err) =>{
        alert(err.message);
    });
   }

   useEffect(() => getAsset(), []);

    return(
            <div className="container">
                <h1>Update Asset</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();

                    const newAsset = {
                        codeno,
                        name,
                        type,
                        value
                    }
                    axios.put("http://localhost:5000/asset/update/"+id, newAsset).then(() =>{
                        alert("Item Updated");
                        window.location.replace("/AllAssets/");
                    }).catch((err)=>{
                        alert(err);
                    })
                }}>

        <div class="mb-3">
        <label for="codeno" className="form-label">Code No</label>
        <input type="text" className="form-control" id="codeno" value={codeno} placeholder="Code No" 
        onChange={(e)=>{
    
            setCodeno(e.target.value);
    
    
        }}  />
        </div>
    
        <div className="mb-3">
        <label for="name" className="form-label">Asset Name</label>
        <input type="text" className="form-control" id="name" value={name} placeholder="Name" onChange={(e)=>{
    
            setName(e.target.value);
    
    
        }} />
        </div>
    
        <div className="mb-3">
        <label for="type" className="form-label">Asset Type</label>
        <input type="text" className="form-control" id="type" value={type} placeholder="Type" onChange={(e)=>{
    
            setType(e.target.value);
    
    
        }} />
        </div>
    
        <div className="mb-3">
        <label for="value" className="form-label">Value Amount</label>
        <input type="text" className="form-control" id="value" value={value} placeholder="Value" onChange={(e)=>{
    
            setValue(e.target.value);
    
    
        }} />
        </div>
       
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
    
            </div>
    
    
        );
    
};