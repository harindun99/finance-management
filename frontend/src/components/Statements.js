import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function Statements() {

    const [expenditures, setExpenditures] = useState("Loading...");
    const [totalassets, setTotalassets] = useState("Loading...");

    useEffect(() =>{
        function Statements() {
            axios.get("http://localhost:5000/employee/expenditures").then((res) => {
                setExpenditures(res.data);
                console.log(res);
            }).catch((err) =>{
                console.log(err);
            });

            axios.get("http://localhost:5000/asset/totalassets").then((res) => {
                setTotalassets(res.data);
                console.log(res);
            }).catch((err) =>{
                console.log(err);
            });
        }
    
        Statements();

    },[]);

       return(
            <div>
                <h1>
                    <label for="fname">Expenditure:</label>
                    <input type="text" id="fname"  name="fname" disabled value={expenditures} />
                </h1>

                <h1>
                    <label for="fname">Total Assets:</label>
                    <input type="text" id="fname"  name="fname" disabled value={totalassets} />
                </h1>

                <h1>
                    <label for="fname">Net Income:</label>
                    <input type="text" id="fname"  name="fname" disabled value={totalassets - expenditures} />
                </h1>
            </div>
          
            )
}