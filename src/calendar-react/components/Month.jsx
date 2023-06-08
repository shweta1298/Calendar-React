import React, { useState } from 'react'
import Day from './Day';

function Month(props) {
    const {
        month
    } = props;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const [monthName, setMonthName] = useState(month[2][0].format("MMMM"))
    const displayMonthName = month[2][0].format("MMMM, YYYY")
    function handlePrevMonth(e) {
        console.log('prevMonth :>> ',);

    }
    function handleNextMonth(e) {
        console.log('nextMonth :>> ',);

    }
    return (
        <div className='month-container'>
            <div className='month-header'>
                {/* <div
                    onClick={handlePrevMonth}
                    className='month-navigation-buttons'
                >{"<"}</div> */}
                <button onClick={handlePrevMonth}
                    className='month-navigation-buttons'>{"<"}</button>
                <span  >{displayMonthName}</span>
                <button onClick={handleNextMonth}
                    className='month-navigation-buttons'>{">"}</button>

                {/* <div
                    onClick={handleNextMonth}
                    className='month-navigation-buttons'

                >{">"}</div> */}
            </div>
            <div className='weekday-header'>
                {
                    days.map((day, idx) =>
                        <div key={idx} className='weekday-name'>{day}</div>
                    )
                }
            </div>
            <div className='month'>
                {month.map((week, weekIndex) =>
                    week.map((day, dayIndex) =>
                        <Day key={dayIndex} day={day} currentMonth={monthName} />
                    )
                )}
            </div></div>
    )
}

export default Month