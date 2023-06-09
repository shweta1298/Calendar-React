import React, { useContext, useEffect, useState } from 'react'
import Day from './Day';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';

function Month(props) {
    const {
        month
    } = props;
    const { monthIndex, setMonthIndex ,} = useContext(GlobalContext)
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",]
    const [monthName, setMonthName] = useState()
    useEffect(() => {
        setMonthName(dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM, YYYY"))
    }, [monthIndex])
    function handlePrevMonth(e) {
        if (monthIndex - 1 === -1)
            setMonthIndex(11)
        else
            setMonthIndex(monthIndex - 1)
    }
    function handleNextMonth(e) {
        if (monthIndex + 1 === 12)
            setMonthIndex(0)
        else
            setMonthIndex(monthIndex + 1)
    }
    function handleGoToToday(params) {
        setMonthIndex(dayjs().month())
    }
    return (
        <div className='month-container'>
            <div className='month-header'>
                {/* <button onClick={handleGoToToday} className='today-button'>Today</button> */}
                <div className="month-navigation-buttons">
                    <FontAwesomeIcon onClick={handlePrevMonth} icon={faChevronCircleLeft} size="lg" />
                </div>

                <span>{monthName}</span>
                <div className="month-navigation-buttons">
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
                    week.map((day, dayIndex) =>
                        <Day key={dayIndex} day={day} />
                    )
                )}
            </div></div>
    )
}

export default Month