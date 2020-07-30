import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

//will be accessed everywhere
axios.interceptors.request.use(request => {
    console.log(request);
    return request; // must return otherwise it will block
}, error => {
    console.error(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response; // must return otherwise it will block
}, error => {
    console.error(error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
