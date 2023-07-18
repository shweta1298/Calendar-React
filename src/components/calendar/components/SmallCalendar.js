import React, { useContext } from 'react'
import { getMonthName, getWeekDayName, getWeekDayShort, isCurrentMonth } from '../utils/dayUtils'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import GlobalContext from '../context/GlobalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SmallCalendar(props) {
    const {
        currentMonth
    } = props;
    const { monthIndex, year } = useContext(GlobalContext)
    return (
        <div className="small-calendar-wrapper">
            <div className="navigate-wrapper">
                <div className="small-calendar-monthname">{getMonthName(monthIndex, year)}</div>

                <div className="up-button">
                    <FontAwesomeIcon icon={faChevronUp} size='sm' />
                </div>
                <div className="down-button">
                    <FontAwesomeIcon icon={faChevronDown} size='sm' />
                </div>
            </div>
            <div className="small-calendar">
                {currentMonth.map((week, weekIndex) => week.map((day) => {
                    return <div
                        key={day.day()}
                        className={isCurrentMonth(day.month(), monthIndex,) ? "small-calendar-day" : "small-calendar-day-inactive"}>
                        {weekIndex === 0 && <div className='small-calendar-weekday-header-wrapper'> {getWeekDayShort(day.day())} </div>}
                        {day.date()}
                    </div>
                }))}
            </div>
        </div>
    )
}

export default SmallCalendar