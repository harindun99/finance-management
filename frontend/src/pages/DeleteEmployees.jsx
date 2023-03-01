import React from "react";
import DeleteEmployee from "../components/DeleteEmployee";
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet.js'

const DeleteEmployees = () => {
    return <Helmet title='DeleteEmployees'>
        <CommonSection title ='Delete Maintenance' />
     <DeleteEmployee/>
    </Helmet>
}

export default DeleteEmployees;