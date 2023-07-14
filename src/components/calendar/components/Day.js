import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';
import { getWeekDayName, isCurrentMonth, isToday } from '../utils/dayUtils';
import EventBar from './Event';

function Day(props) {
    const {
        day,
        weekIndex,
        dayEvents,
    } = props;

    const { monthIndex } = useContext(GlobalContext)

    return (
        <div className={isCurrentMonth(day.month(), monthIndex,) ? 'day-wrapper' : 'inactive-day-wrapper'}>
            {weekIndex === 0 && <div className='weekday-header-wrapper'> {getWeekDayName(day.day())} </div>}
            <div className='day'>
                <div className={isToday(day) ? 'today-title' : 'day-title'}>
                    {day.date()}
                </div>


            </div>
            <div className="day-remaining">
                {isCurrentMonth(day.month(), monthIndex) && dayEvents?.map((event) => <EventBar key={event.id} event={event} />)}
            </div>
        </div>
    )
}

export default Day