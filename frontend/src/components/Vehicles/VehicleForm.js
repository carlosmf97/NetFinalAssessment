import React from "react";
import "./UserForm.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function VehicleForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vehicleData, setVehicleData] = useState([]);
  let [vehicle, setVehicle] = useState([]);

  let url = "http://localhost:8080/users/" + searchParams.get("id");

    useEffect(async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json; charset=utf-8");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((response) => setVehicleData(response))
      .catch((error) => console.log("error", error));


  }, []);

  const submitHandler = (e) => {
    
    e.preventDefault();

    let vehicle = {
        id: searchParams.get("carid"),
        brand: document.getElementsByClassName("inputBrand")[0].value,
        year: document.getElementsByClassName("inputYear")[0].value,
        color: document.getElementsByClassName("inputColor")[0].value,
        vin: document.getElementsByClassName("inputVin")[0].value
    }

    console.log(vehicle);

    setVehicle(vehicle);

    let requestOptions;

    if (searchParams.get("carid") != undefined) {
        url ="http://localhost:8080/users/" + searchParams.get("id") + "/vehicles/" + searchParams.get("carid");        
        requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vehicle),
      };
    } else {
        url = "http://localhost:8080/users" +searchParams.get("id")+"/vehicles";
      requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vehicle),
      };
    }

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    window.location.href = "/vehicles" + searchParams.get("id");
  };

  return (
    <div>
      <form className="userForm" autoComplete="off">
        <label>Brand:</label>
        <input
          type="text"
          className="inputBrand"
          defaultValue={userData.username}
        />
        <label>VIN:</label>
        <input
          type="text"
          className="inputVin"
          defaultValue={userData.lastname}
        />
        <label>Color:</label>
        <input
          type="email"
          className="inputColor"
          defaultValue={userData.email}
        />
        <label>Year:</label>
        <input
          type="text"
          maxLength={4}
          className="inputYear"
          defaultValue={userData.phone}
        />
        <input type="submit" className="inputSubmit" onClick={submitHandler} />
      </form>
    </div>
  );
}
