import React from "react";
import UpdateAsset from '../components/UpdateAsset';
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet.js'
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

const UpdateAssets = () => {
    
    return <Helmet title='UpdateAssets'>
            <CommonSection title ='Update Asset' />
        <UpdateAsset />
    </Helmet>
}

export default UpdateAssets;