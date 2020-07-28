import React from 'react';

const employee = (props) => {
    const style = {
        backgroundColor: "whitesmoke",
        border: "2px solid whitesmoke",
        width: "auto",
        height: "auto",
        clear: "both",
        color: "#333333",
        cursor: "pointer"
    };

    return (
        <div className = "employee" style = {style} onClick = {props.clicked}>
            <p className = "column">{props.id}</p>
            <p className = "column">{props.name}</p>
            <p className = "column">{props.manager}</p>
            <p className = "column">{props.status}</p>

        </div>
    );
}

export default employee;