import React, {useState, useEffect} from 'react';
import axios from "axios";


export default function Incomes (){

    const [totalassets, setTotalassets] = useState("Loading...");

    useEffect(() =>{
        function Incomes() {
            axios.get("http://localhost:5000/asset/totalassets").then((res) => {
                setTotalassets(res.data);
                console.log(res);
            }).catch((err) =>{
                console.log(err);
            });
        }
    
        Incomes();

    },[]);

    return(
        <div>
            <h1>
                <label for="fname">Total Assets:</label>
                <input type="text" id="fname"  name="fname" disabled value={totalassets} />
            </h1>
        </div>  
        )
}