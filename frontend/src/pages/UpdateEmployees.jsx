import React from "react";
import UpdateEmployee from "../components/UpdateEmployee";
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet.js'
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

const UpdateEmployees = () => {
    
    return <Helmet title='UpdateEmployees'>
            <CommonSection title ='Update Maintenance' />
        <UpdateEmployee />
    </Helmet>
}

export default UpdateEmployees;