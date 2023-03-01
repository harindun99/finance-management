
import React from "react";
import {Link} from 'react-router-dom';

function Header(){
    return(
        <nav class="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Finance Records</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
            <li className="nav-item">
              <Link to = "/employee/" className = "nav-link">Salary Sheet</Link>
            </li>
            <li className="nav-item">
              <Link to = "/asset/" className = "nav-link">Assets</Link>
            </li>
            {/*<li className="nav-item">
              <Link to = "/#" className = "nav-link">Statements</Link>
    </li>*/}
            <li className="nav-item">
              <Link to = "/employee/add" className = "nav-link">Add Employee Details</Link>
            </li>
            <li className="nav-item">
              <Link to = "/asset/add" className = "nav-link">Add Assets Data</Link>
            </li>
          </ul>
    </div>
  </div>
</nav>
    )
}
export default Header;