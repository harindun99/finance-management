import React from "react";
import AddAsset from '../components/AddAsset';
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet.js'

import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

const AddAssets = () => {
    return <Helmet title='AddAsset'>
        <CommonSection title ='Add Assets Data' />
   <AddAssets/>
    </Helmet>
}

export default AddAsset;