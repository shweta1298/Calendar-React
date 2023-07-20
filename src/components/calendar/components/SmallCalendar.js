import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { getMonth, getMonthName, isCurrentMonth, isToday } from '../utils/dayUtils'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import GlobalContext from '../context/GlobalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SmallCalendar(props) {
    const {
        currentMonth
    } = props;

    const { monthIndex, year } = useContext(GlobalContext)
    const [month,setMonth]=useState(currentMonth)
    const [monthName,setMonthName]=useState(getMonthName(monthIndex, year))
    useLayoutEffect(()=>{
        setMonth(currentMonth)
        setMonthName(getMonthName(monthIndex, year))
    },[currentMonth,monthIndex,year])
    const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    function handlePrevMonth(e) {
        // setMonth(getMonth(monthIndex-1))
        // if (monthIndex - 1 === -1) {
        //     // setYear(year - 1)
        //     // setMonthIndex(11)
        // } else
            // setMonthIndex(monthIndex - 1)
    }
    function handleNextMonth(e) {
        // if (monthIndex + 1 === 12) {
        //     // setYear(year + 1)
        //     // setMonthIndex(0)
        // }
        // else
            // setMonthIndex(monthIndex + 1)
    }
    return (
        <div className="small-calendar-wrapper">
            <div className="navigate-wrapper">
                <div className="small-calendar-monthname">{monthName}</div>

                <div className="up-button" onClick={handlePrevMonth}>
                    <FontAwesomeIcon icon={faChevronUp} size='sm' />
                </div>
                <div className="down-button" onClick={handleNextMonth}>
                    <FontAwesomeIcon icon={faChevronDown} size='sm' />
                </div>
            </div>
            <div className="weekday-top-header">
                {weekdays.map((weekDay) =>
                    <div key={`${weekDay}`} className='weekday-headername'>
                        {weekDay}
                    </div>)}
            </div>
            <div className="small-calendar">
                {month.map((week) => week.map((day) => {
                    return <div key={day.day()} className={isCurrentMonth(day.month(), monthIndex,) ? "small-calendar-day-wrapper" : "small-calendar-day-inactive-wrapper"}>
                        <div className='small-calendar-day'>
                            <div className={isToday(day) ? 'sc-today-title' : 'sc-day-title'}>
                                {day.date()}
                            </div>


                        </div>
                    </div>
                }))}
            </div>
        </div >
    )
}

export default SmallCalendar