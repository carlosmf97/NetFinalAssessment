import React from "react";

export default function Vehicle(props){

    // Get the user and show
    console.log(props);
    const clickUpdateHandler = (e) => {
        window.location.href = "/registerVehicle?id=" + props.props.ownerid;
    }
    const clickDeleteHandler = (e) => {
        window.location.href = "/registerVehicle?id=" + props.props.ownerid;
    }
    const claimRedirect = (e) => {
        window.location.href = "/claims?id=" + props.props.ownerid + "&carid=" + props.props.id;
    }

 return (
            <tr>
                <td>{props.props.brand}</td>
                <td>{props.props.vin}</td>
                <td>{props.props.color}</td>
                <td>{props.props.year}</td>
                <td><button className="updateButton" onClick={claimRedirect}>Claims</button></td>
                <td><button className="updateButton" onClick={clickUpdateHandler}>Update</button></td>
                <td><button className="deleteButton" onClick={clickDeleteHandler}>Delete</button></td>
            </tr>

    )

}