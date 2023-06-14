import dayjs from 'dayjs';
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

function Day(props) {
    const {
        day,
        onDayClicked,
    } = props;
    const { monthIndex, year } = useContext(GlobalContext)

    const isDayInCurrentMonth = day.month() === monthIndex

    function handleDayClick(e) {
        if (!isDayInCurrentMonth) return
        onDayClicked?.({
            type: "dayClicked",
            event: e,
            month: day.format("MMMM"),
            currentMonth: dayjs().format("MMMM"),
            day: day.format("DD-MM-YYYY"),
            today: dayjs().format("DD-MM-YYYY")
        })
    }
    function getCurrentDayClass() {
        if (!isDayInCurrentMonth)
            return "calendar-day-inactive"
        else if (day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY"))
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