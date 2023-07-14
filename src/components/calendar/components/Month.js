import React from 'react'
import Day from './Day';
import dayjs from 'dayjs';
function Month(props) {
    const {
        currentMonth,
        isSidebarOpen,
        events,
    } = props;

    function getDayEvents(day) {
        let dayEvents = []
        events?.forEach((event, eventIndex) => {
            if (dayjs(event.date).format("DD-MM-YYYY") === day.format("DD-MM-YYYY"))
                dayEvents.push(event)
        })
        return dayEvents
    }
    return (
        <div className={isSidebarOpen ? "month-view-outer-wrapper-open" : "month-view-outer-wrapper"}>
            <div className="month-wrapper">
                {currentMonth.map((week, weekIndex) => week.map((day) => <Day key={day.day()} day={day} weekIndex={weekIndex} dayEvents={getDayEvents(day)} />))}
            </div>
        </div>
    )
}

export default Month