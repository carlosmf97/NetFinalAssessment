import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";


export default function Delete(){

    const [searchParams, setSearchParams] = useSearchParams();
  
    const url = "http://localhost:8080/users/" + searchParams.get("id") + "/delete";
    console.log(url);
    useEffect(async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json; charset=utf-8");
    
      fetch(url, {method : 'DELETE'})
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      }, []);

      window.location.href="/";

      return (
        <div></div>
      )
}