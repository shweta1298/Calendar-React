import dayjs from 'dayjs';
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

function Day(props) {
    const {
        day,
        dayEvents,
        onDayClicked,
    } = props;
    const { monthIndex, setShowEventModal,setCurrentEvent } = useContext(GlobalContext)
    const isDayInCurrentMonth = day.month() === monthIndex

    function handleDayClick(e) {
        if (!isDayInCurrentMonth) return
        onDayClicked?.({
            type: "dayClicked",
            event: e,
            month: day.format("MMMM"),
            currentMonth: dayjs().format("MMMM"),
            day: day.format("DD-MM-YYYY"),
            today: dayjs().format("DD-MM-YYYY"),
            events:dayEvents
        })
        setShowEventModal(true)
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

        >
            {isDayInCurrentMonth && day.format("D")}
            <div className="event-container">
                {dayEvents.map((dayEv,idx) =>
                    <div
                        key={`${day}${idx}`}
                        title={dayEv.description}
                        className='event'
                        onClick={()=>setCurrentEvent(dayEv)}
                        style={{ backgroundColor: dayEv.backgroundColor, color:dayEv.color }}>
                        {dayEv.title}
                    </div>)}
            </div>
        </div>
    )
}

export default Day