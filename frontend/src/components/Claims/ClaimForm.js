import React from "react";
import "../UserForm.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function UserForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [claimData, setClaimData] = useState([]);
  let [claim, setClaim] = useState([]);

  let url = "http://localhost:8080/users/" + searchParams.get("id") + "/vehicles/" + searchParams.get("carid") + "/claims";

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
      .then((response) => setClaimData(response))
      .catch((error) => console.log("error", error));


  }, []);

  const submitHandler = (e) => {
    
    e.preventDefault();

    let claim = {
        id: searchParams.get("id"),
        vehicleid: searchParams.get("carid"),
        description: document.getElementsByClassName("inputDescription")[0].value,
        status: document.getElementsByClassName("inputStatus")[0].value,
        date: document.getElementsByClassName("inputDate")[0].value,
    }

    console.log(claim);

    setClaim(claim);

    let requestOptions;

    if (searchParams.get("claimid") != undefined) {
        url ="http://localhost:8080/users/" + searchParams.get("id") + "/vehicles/" + searchParams.get("carid") + "/claims" + searchParams.get("claimid");        
        requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(claim),
      };
    } else {
      url ="http://localhost:8080/users/" + searchParams.get("id") + "/vehicles/" + searchParams.get("carid") + "/claims";        

      requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(claim),
      };
    }

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    window.location.href = "/claims";
  };

  return (
    <div>
      <form className="userForm" autoComplete="off">
        <label>Description:</label>
        <input
          type="text"
          className="inputDescription"
        />
        <label>Status:</label>
        <input
          type="text"
          className="inputStatus"
        />
        <label>Date:</label>
        <input
          type="date"
          className="inputDate"
        />
        <input type="submit" className="inputSubmit" onClick={submitHandler} />
      </form>
    </div>
  );
}
