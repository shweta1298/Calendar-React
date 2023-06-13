import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import "./styles/Calendar.css"
import { getMonth } from './utils/dayUtils';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import GlobalContext from './context/GlobalContext';
function Calendar(props) {
    const {
        //customization props
        showSideBar,
    } = props;
    const { monthIndex, year } = useContext(GlobalContext)
    const [currentMonth, setCurrentMonth] = useState(getMonth(monthIndex))
    useLayoutEffect(() => {
        setCurrentMonth(getMonth(year, monthIndex))
    }, [year,monthIndex])
    return (
        <>
            <div className='main-container'>
                <div className='main-header'>
                    <FontAwesomeIcon className='logo' icon={faCalendar} size='xl' />
                    <span style={{ padding: "10px", fontSize: "larger", fontWeight: 'bold', fontFamily: "sans-serif" }}>
                        React Calendar
                    </span>
                </div>
                <div className="calendar-container">
                    {showSideBar && <Sidebar />}
                    <Month month={currentMonth} />
                </div>
            </div>

        </>
    )
}

export default Calendar