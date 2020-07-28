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
        <button className="year">Year</button>
        <button className="quarter">Quarter</button>
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
