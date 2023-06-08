import React from 'react'

function Day(props) {
    const {
        currentMonth,
        day
    } = props;
    const month=day.format("MMMM")
    const isDayInCurrentMonth=month===currentMonth

    return (
        <div className={isDayInCurrentMonth?'calendar-day':'calendar-day-inactive'}>{isDayInCurrentMonth? day.format("D"):""}</div>
    )
}

export default Day