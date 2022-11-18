import React from "react";
import "./Home.css"

export default function Home(){


    return (
    <div className="homediv">
        <div className="linkContainer">
            <h1>All users:</h1>
            <a href="/users"><img alt="all users" className="imgHome" src="https://cdn-icons-png.flaticon.com/512/2936/2936774.png"/></a>
        </div>
        <div className="linkContainer">
            <h1>New user:</h1>
            <a href="/register"><img alt="new user" className="imgHome" src="https://cdn-icons-png.flaticon.com/512/774/774067.png" /></a>
        </div>
        
    </div>
    )
}