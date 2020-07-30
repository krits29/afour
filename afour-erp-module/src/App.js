import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import QuartersDisplay from "./QuartersDisplay/QuartersDisplay.js"
import Employee from './Employee/Employee.js';

class App extends Component {

  state = {
    employees: [],
    selectedEmployeeId: null
  };

  //using componentDidMount for retrieving http request
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          this.setState({employees: response.data}) //data holds an array of employees
        });
  }

  clickedEmployeeHandler = (id) => {
    this.setState({selectedEmployeeId: id});
  }

  render() {
    const eachEmployee = this.state.employees.map((each) => {
      return (
        <Employee 
          key = {each.id} 
          id = {each.id} 
          name = {each.name} 
          manager = {each.username} 
          status = "Complete"
          clicked = {() => {this.clickedEmployeeHandler(each.id)}}
        />
      )
    });

    return (
      <div >
        <h1>Default COE view</h1>
        
        <div className="dropdown">
          <button >Select Year</button>
          <div className="dropdown-content">
            <a href="#">2021-22</a>
            <a href="#">2020-21</a>
            <a href="#">2019-20</a>
          </div>
        </div>

        <div className="dropdown">
          <button >Select Cycle</button>
          <div className="dropdown-content">
            <a href="#">Jan-Mar</a>
            <a href="#">Apr-Jun</a>
            <a href="#">Jul-Sep</a>
            <a href="#">Oct-Dec</a>
            <a href="#">Apr</a>
            <a href="#">Oct</a>
          </div>
        </div>

        <button className="list">List Employees</button>

        <div className = "row">
          <div className="column">Employee ID</div>
          <div className="column">Name</div>
          <div className="column">Manager</div>
          <div className="column">Status</div>
        </div>
        <div>
          {eachEmployee}
        </div>

        <div>
          <QuartersDisplay id = {this.state.selectedEmployeeId}/>
        </div>

      </div>
    );
  }
}

export default App;
