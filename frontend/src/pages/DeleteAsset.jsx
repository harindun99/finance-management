import React from "react";
import DeleteAsset from '../components/DeleteAsset';
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet.js'

const DeleteAssets = () => {
    return <Helmet title='DeleteAssets'>
        <CommonSection title ='Delete Asset' />
     <DeleteAsset/>
    </Helmet>
}

export default DeleteAssets;