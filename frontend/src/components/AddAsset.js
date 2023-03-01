import React,{ useState } from "react"
import axios from "axios";

export default function AddAsset(){

    const [codeno, setCodeno] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [value, setValue] = useState("");


    function sendData(e){
        e.preventDefault();
        
        const newAsset ={
            codeno,
            name,
            type,
            value
        }

        axios.post("http://localhost:5000/asset/add",newAsset).then(()=>{
            alert("Asset Added");
            window.location.replace("/AllAssets/");
        }).catch((err)=>{
            alert(err)
        })
    }

    return(

        <div className ="container">
                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label for="codeno" className="form-label"></label>
                        <input type="text" className="form-control" id="codeno" placeholder="Code No" 
                        onChange ={(e)=>{
                            setCodeno(e.target.value);
                        }} required/>
                
                    </div>
                    <div className="form-group">
                        <label for="name" className="form-label"></label>
                        <input type="text" className="form-control" id="name" placeholder=" Asset Name"
                        onChange ={(e)=>{
                            setName(e.target.value);
                        }} required/>
                
                    </div>
                    <div className="form-group">
                        <label for="type" className="form-label"></label>
                        <input type="text" className="form-control" id="type" placeholder="Type"
                        onChange ={(e)=>{
                            setType(e.target.value);
                        }} required/>
                
                    </div>
                    <div className="form-group">
                        <label for="value" className="form-label"></label>
                        <input type="text" className="form-control" id="value" placeholder="Value"
                        onChange ={(e)=>{
                            setValue(e.target.value);
                        }} required/>
                
                    </div>
                    
            
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    )
}