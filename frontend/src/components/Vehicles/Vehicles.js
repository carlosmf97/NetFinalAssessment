import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { redirect } from "react-router";
import User from "../User";
import "../Users.css"

export default function Vehicles(){

    // Fetch all users
    const [searchParams, setSearchParams] = useSearchParams();

    const url = "http://localhost:8080/owners/" + searchParams.get("id") + "/vehicles";   

    const [vehicleData, setVehicleData] = useState([]);

    useEffect( async () => {
       var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=utf-8");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(response => setVehicleData(response))
        .catch(error => console.log('error', error));
    }, []);

    const createNewVehicle = () => {
        window.location.href = "/registerVehicle"
    }


    return(
    <div className="tableContainer"> 
    <button onClick={createNewVehicle}>Create new vehicle</button>
    <table className="usersTable">
        <tr>
            <th>Brand</th>
            <th>Vin</th>
            <th>Color</th>
            <th>Year</th>
            <th>Claims</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
        {vehicleData.map( element => { return <User props={element}/>})}
    </table>

    <button className="homeButton"><a href="/">Back to Home</a></button>
    </div>
    )

}