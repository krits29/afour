import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

//axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
// ^ that way we don't have to type in whole url, just the endpoints
// currently using dummy data

//will be accessed everywhere
axios.interceptors.request.use(request => {
    console.log(request);
    return request; // must return otherwise it will block
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response; // must return otherwise it will block
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
