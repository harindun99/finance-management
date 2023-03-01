//import Header from './components/Header';
//import AddEmployee from "./components/AddEmployee"
//import {BrowserRouter as Router, Route, Switch}from "react-router-dom";
//import AllEmployees from './components/AllEmployees';
//import DeleteEmployee from './components/DeleteEmployee';
//import Statements from './components/Statements';
//import UpdateEmployee from './components/UpdateEmployee';

//import AddAsset from './components/AddAsset';
//import AllAssets from './components/AllAssets';
//import DeleteAsset from './components/DeleteAsset';
//import UpdateAsset from './components/UpdateAsset';

import Layout from './components/Layout/Layout';
import React, { Component } from 'react';


function App() {
    return <Layout/>;
}

export default App;
  
//   return (
//       <Router>
//         <div>
//             <Header/>
//             <div>
//         <Switch>
//           <Route path="/employee/add" exact component = {AddEmployee}>
//           </Route>
//         </Switch>
//       </div>
//       <div>
//         <Switch>
//           <Route path="/employee/" exact component = {AllEmployees}>
//           </Route>
//         </Switch>
//       </div>
//       <div>
//         <Switch>
//           <Route path="/employee/delete/:id" exact component = {DeleteEmployee}>
//           </Route>
//         </Switch>
//       </div>
//       <div>
//         <Switch>
//           <Route path="/employee/update/:id" exact component = {UpdateEmployee}>
//           </Route>
//         </Switch>
//       </div>

//       <div>
//         <Switch>
//           <Route path="/asset/add" exact component = {AddAsset}>
//           </Route>
//         </Switch>
//       </div>
//       <div>
//         <Switch>
//           <Route path="/asset/" exact component = {AllAssets}>
//           </Route>
//         </Switch>
//       </div>
//       <div>
//         <Switch>
//           <Route path="/asset/delete/:id" exact component = {DeleteAsset}>
//           </Route>
//         </Switch>
//       </div>
//       <div>
//         <Switch>
//           <Route path="/asset/update/:id" exact component = {UpdateAsset}>
//           </Route>
//         </Switch>
//       </div>
//         </div>
//       </Router>
//   );
// }
