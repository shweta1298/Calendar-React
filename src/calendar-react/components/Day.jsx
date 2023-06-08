import React from 'react'

function Day(props) {
    const {
        currentMonth,
        day
    } = props;
    const month=day.format("MMMM")
    const isDayInCurrentMonth=month===currentMonth
    function handleDayClick(params) {
        if(!isDayInCurrentMonth) return

        console.log('day :>> ', day);

    }
    return (
        <div 
            onClick={handleDayClick}
            className={isDayInCurrentMonth?'calendar-day':'calendar-day-inactive'}
            
        >{isDayInCurrentMonth? day.format("D"):""}</div>
    )
}

export default Day