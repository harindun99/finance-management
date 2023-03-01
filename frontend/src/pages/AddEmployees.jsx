import React from "react";
import AddEmployee from '../components/AddEmployee';
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet.js'

import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

const AddEmployees = () => {
    return <Helmet title='AddEmployees'>
        <CommonSection title ='Add Employee Details' />
   <AddEmployee/>
    </Helmet>
}

export default AddEmployees;