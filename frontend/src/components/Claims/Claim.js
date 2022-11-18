import React from "react";

export default function User(props){

    // Get the user and show
    console.log(props);
    const clickUpdateHandler = (e) => {
        window.location.href = "/registerClaim?id=" + props.props.id;
    }
    const clickDeleteHandler = (e) => {
        window.location.href = "/deleteClaim?id=" + props.props.id;
    }

 return (
            <tr>
                <td>{props.props.description}</td>
                <td>{props.props.status}</td>
                <td>{props.props.date}</td>
                <td><button className="updateButton" onClick={clickUpdateHandler}>Update</button></td>
                <td><button className="deleteButton" onClick={clickDeleteHandler}>Delete</button></td>
            </tr>

    )

}