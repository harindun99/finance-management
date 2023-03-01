import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AddEmployees from '../pages/AddEmployees'
import AllEmployees from '../pages/AllEmployees'
import DeleteEmployees from '../pages/DeleteEmployees'
import UpdateEmployees from '../pages/UpdateEmployees'

import AddAsset from '../pages/AddAsset'
import AllAssets from '../pages/AllAssets'
import DeleteAsset from '../pages/DeleteAsset'
import UpdateAsset from '../pages/UpdateAsset'
import Statements from '../components/Statements';
import Incomes from '../components/Incomes';
 

const Routers = () => {
    return <Routes>
        <Route path='/' element={<AddEmployees/>}/>
        <Route path='/AddEmployees' element={<AddEmployees/>} />
        <Route path='/AllEmployees' element={<AllEmployees/>} />
        <Route path='/DeleteEmployees/:id' element={<DeleteEmployees/>} />
        <Route path='/employee/update/:id' element={<UpdateEmployees/>} />

        <Route path='/' element={<AddAsset/>}/>
        <Route path='/AddAsset' element={<AddAsset/>} />
        <Route path='/AllAssets' element={<AllAssets/>} />
        <Route path='/DeleteAsset/:id' element={<DeleteAsset/>} />
        <Route path='/asset/update/:id' element={<UpdateAsset/>} />

        <Route path='/statements' element={<Statements/>} />
        {/* <Route path='*' element={<Notfound/>} /> */}
    </Routes> 
}

export default Routers