import React, { useEffect, useState } from "react";
import User from "./User";
import "./Users.css"

export default function Users(){

    // Fetch all users

    const url = "localhost:8080/users";

    const [userData, setUserData] = useState([]);

    useEffect( async () => {
       var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=utf-8");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/users", requestOptions)
        .then(response => response.json())
        .then(response => setUserData(response))
        .catch(error => console.log('error', error));
    }, []);

    


    return(
    <div className="tableContainer"> <table className="usersTable">
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Driver License</th>
            <th>Vehicles</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
        {userData.map( element => { return <User props={element}/>})}
    </table>

    <button className="homeButton"><a href="/">Back to Home</a></button>
    </div>
    )

}