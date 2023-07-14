import React, { useEffect, useState } from "react";
import Calendar from "./components/calendar/Calendar";
import "./components/calendar/styles/calendar.css"
const App = () =>{
    const [events,setEvents]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then(response => response.json())
        .then(data =>  setEvents(data));
       
    },[])
    return (
        <div className="main-wrapper">
            <Calendar Events={events} />
        </div>
       
    )
}

export default App