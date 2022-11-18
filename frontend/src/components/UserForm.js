import React from "react";
import "./UserForm.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function UserForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userData, setUserData] = useState([]);
  let [user, setUser] = useState([]);

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
      .then((response) => setUserData(response))
      .catch((error) => console.log("error", error));


  }, []);

  const submitHandler = (e) => {
    
    e.preventDefault();

    let user = {
        id: searchParams.get("id"),
        username: document.getElementsByClassName("inputName")[0].value,
        lastname: document.getElementsByClassName("inputSurname")[0].value,
        email: document.getElementsByClassName("inputEmail")[0].value,
        phone: document.getElementsByClassName("inputPHone")[0].value
    }

    console.log(user);

    setUser(user);

    let requestOptions;

    if (searchParams.get("id") != undefined) {
        url ="http://localhost:8080/users/" + searchParams.get("id");        
        requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      };
    } else {
        url = "http://localhost:8080/users";
      requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      };
    }

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    window.location.href = "/users";
  };

  return (
    <div>
      <form className="userForm" autoComplete="off">
        <label>Name:</label>
        <input
          type="text"
          className="inputName"
          defaultValue={userData.username}
        />
        <label>Surname:</label>
        <input
          type="text"
          className="inputSurname"
          defaultValue={userData.lastname}
        />
        <label>Email:</label>
        <input
          type="email"
          className="inputEmail"
          defaultValue={userData.email}
        />
        <label>Phone number:</label>
        <input
          type="text"
          maxLength={9}
          className="inputPHone"
          defaultValue={userData.phone}
        />
        <input type="submit" className="inputSubmit" onClick={submitHandler} />
      </form>
    </div>
  );
}
