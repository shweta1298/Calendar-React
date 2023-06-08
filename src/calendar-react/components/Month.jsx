import React from 'react'
import Day from './Day';

function Month(props) {
    const {
        month
    } = props;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const monthName=month[2][0].format("MMMM")
    return (
        <div className='month-container'>  
            <div className='month-header'>{monthName}</div>
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