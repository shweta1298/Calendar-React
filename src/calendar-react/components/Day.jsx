import dayjs from 'dayjs';
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

function Day(props) {
    const {
        day
    } = props;
    const { monthIndex } = useContext(GlobalContext)

    const isDayInCurrentMonth = day.month() === monthIndex
    function handleDayClick(params) {
        if (!isDayInCurrentMonth) return
    }
    function getCurrentDayClass() {
        if(!isDayInCurrentMonth) 
            return "calendar-day-inactive"
        else if(day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY"))
            return "today"
        else
            return "calendar-day"
    }
    return (
        <div
            onClick={handleDayClick}
            className={getCurrentDayClass()}

        >{isDayInCurrentMonth && day.format("D")}</div>
    )
}

export default Day