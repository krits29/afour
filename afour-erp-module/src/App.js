import React, { Component } from 'react';
import './App.css';
import QuartersDisplay from "./QuartersDisplay/QuartersDisplay.js";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Employees from "./Employees/Employees.js";
import DefaultDisplay from './DefaultDisplay/DefaultDisplay';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path = "/" exact component = {DefaultDisplay}/>
          <Route path = "/list-employees" component = {Employees}/>
          <Route path = "/employeeid=:eachId" component = {QuartersDisplay}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
