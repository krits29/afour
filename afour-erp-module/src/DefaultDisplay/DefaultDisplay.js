import React, { Component } from "react";
import { Link } from "react-router-dom";

class DefaultDisplay extends Component {
    render() {
        return(
            <div>
              <h1><Link to = "/">Default COE view</Link></h1>
            
              <div className="main-selection">
                <select className="dropdown">
                  <option>Select Year</option>
                  <option>2021-22</option>
                  <option>2020-21</option>
                  <option>2019-20</option>
                </select>
              </div>
    
              <div className="main-selection">
                <select className="dropdown">
                  <option>Select Cycle</option>
                  <option>Jan-Mar</option>
                  <option>Apr-Jun</option>
                  <option>Jul-Sep</option>
                  <option>Oct-Dec</option>
                  <option>Apr</option>
                  <option>Oct</option>
                </select>
              </div>
    
              <button className="list">
                <Link to = {{pathname: "/list-employees"}}>List Employees</Link>
              </button>
    
              <br/>
              <br/>
              <div className = "row">
                <div className="column">Employee ID</div>
                <div className="column">Name</div>
                <div className="column">Manager</div>
                <div className="column">Status</div>
              </div>
            </div>
        );
    }
}

export default DefaultDisplay;