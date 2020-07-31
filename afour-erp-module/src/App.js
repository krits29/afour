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
