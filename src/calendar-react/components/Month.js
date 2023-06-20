import React, { useContext, useEffect, useState } from 'react'
import Day from './Day';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';

function Month(props) {
    const {
        month,
        events,
        onDayClicked,
    } = props;
    const { monthIndex, setMonthIndex, year, setYear,savedEvents } = useContext(GlobalContext)
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",]
    const [monthName, setMonthName] = useState()


    useEffect(() => {
        setMonthName(dayjs(new Date(year, monthIndex)).format("MMMM, YYYY"))
    }, [monthIndex, year])


    function handlePrevMonth(e) {
        if (monthIndex - 1 === -1) {
            setYear(year - 1)
            setMonthIndex(11)
        } else
            setMonthIndex(monthIndex - 1)
    }
    function handleNextMonth(e) {
        if (monthIndex + 1 === 12) {
            setYear(year + 1)
            setMonthIndex(0)
        }
        else
            setMonthIndex(monthIndex + 1)
    }
    function handleGoToToday(params) {
        setMonthIndex(dayjs().month())
        setYear(dayjs().year())
    }
    return (
        <div className='month-container'>
            <div className="today-button" onClick={handleGoToToday}>{dayjs().format("dddd, DD MMMM")}</div>
            <div className='month-header'>
                <div className="month-navigate-button-prev">
                    <FontAwesomeIcon onClick={handlePrevMonth} icon={faChevronCircleLeft} size="lg" />
                </div>
                <div className="navigate-months">
                    <span>{monthName}</span>
                </div>
                <div className="month-navigate-button-next">
                    <FontAwesomeIcon onClick={handleNextMonth} icon={faChevronCircleRight} size="lg" />
                </div>


            </div>
            <div className='weekday-header'>
                {
                    days.map((day, idx) =>
                        <div key={idx} className='weekday-name'>{day}</div>
                    )
                }
            </div>
            <div className='month' style={{
                gridTemplateColumns: "repeat(7,1fr)",
                gridTemplateRows: `repeat(${month.length},1fr)`
            }}>
                {month.map((week, weekIndex) =>
                    week.map((day, dayIndex) => {
                        let dayEvents = []
                        // console.log('savedEvents :>> ', savedEvents);
                        savedEvents.forEach((ev) => {
                            if (day.format("YYYY-MM-DD") === ev.date) dayEvents.push(ev)
                        })
                        return <Day
                            key={dayIndex}
                            day={day}
                            onDayClicked={onDayClicked}
                            dayEvents={dayEvents}
                        />
                    }
                    )
                )}
            </div></div>
    )
}

export default Month