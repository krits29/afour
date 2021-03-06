import React, { Component } from "react";
import axios from "axios";
import Employee from "../Employee/Employee.js";
import { Link } from "react-router-dom";
import DefaultDisplay from "../DefaultDisplay/DefaultDisplay.js";

class Employees extends Component {
    state = {
        employees: [],
        selectedEmployeeId: null
    };

    //using componentDidMount for retrieving http request
    componentDidMount() { //?coe_id=AFTC0629
    axios.get("http://localhost:8000/api/employees?") // https://jsonplaceholder.typicode.com/users/
        .then(response => {
          this.setState({employees: response.data}) //data holds an array of employees
        });
    }

    clickedEmployeeHandler = (id) => {
        this.setState({selectedEmployeeId: id});
    }

    render () {
        const eachEmployee = this.state.employees.map((each) => {
            return (
            <Link to = {"/employeeid=" + each.id} key = {each.id}>
              <Employee 
                id = {each.id} 
                //name = {each.name}
                name = {each.first_name + " " + each.last_name} 
                //manager = {each.username}
                manager = {each.manager_name} 
                //status = "Complete"
                status = {each.service_status}
                clicked = {() => {this.clickedEmployeeHandler(each.id)}}
              />
            </Link>
            )
        });

        return (
            <div>
                <DefaultDisplay/>
                {eachEmployee}
            </div>
        );
    }
}

export default Employees;