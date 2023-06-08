import React, { useState } from 'react'
import "./styles/Calendar.css"
import { getMonth } from './utils/dayUtils';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    return (
        <>
            <div className='main-container'>
                <div className='main-header'>
                    {/* <div className='logo' /> */}
                    <span style={{ padding: "10px", fontSize: "larger", fontWeight: 'bold', fontFamily: "sans-serif" }}>
                        React Calendar
                    </span>
                </div>
                <div className="calendar-container">
                    <Sidebar />
                    <Month month={currentMonth} />
                </div>
            </div>

        </>
    )
}

export default Calendar