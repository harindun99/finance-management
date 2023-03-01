import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function DeleteAssets(){


    
    const [codeno, setCodeno] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [value, setValue] = useState("");

    const {id} = useParams();


   const getAsset = () => {
    axios.get("http://localhost:5000/asset/get/"+id).then((res) =>{
        const DeleteAssets = {
            codeno: res.data.codeno,
            name: res.data.name,
            type: res.data.type,
            value: res.data.value,
        }

        setCodeno(DeleteAssets.codeno);
        setName(DeleteAssets.name);
        setType(DeleteAssets.type);
        setValue(DeleteAssets.value);
    }).catch((err) =>{
        alert(err.message);
    });
   }

   useEffect(() => getAsset(), []);

    return(
            <div className="container">
                <h1>Delete Item</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();

                    const newAsset= {
                        codeno,
                        name,
                        type,
                        value
                    }
                    axios.delete("http://localhost:5000/item/delete/"+id,newAsset).then(() =>{
                        alert("Item Deleted");
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
       
      <button type="submit" className="btn btn-primary">SUBMIT</button>
    </form>
    
    
            </div>
    
    
        );
    
};