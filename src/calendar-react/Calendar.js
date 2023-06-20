import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import "./styles/Calendar.css"
import { getMonth } from './utils/dayUtils';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import GlobalContext from './context/GlobalContext';
import EventModal from './components/EventModal';
function Calendar(props) {
    const {
        events,
        //customization props
        showSideBar,
        //Event callback props
        onDayClicked,
    } = props;
    const { monthIndex, year ,showEventModal,savedEvents,setSavedEvents } = useContext(GlobalContext)
    const [currentMonth, setCurrentMonth] = useState(getMonth(monthIndex))
    useLayoutEffect(() => {
        setCurrentMonth(getMonth(year, monthIndex))
    }, [year, monthIndex])
    useEffect(()=>{
        setSavedEvents(events)
    },[])
    return (
        <>
            {showEventModal && <EventModal />}
            <div className='main-container'>
                <div className='main-header'>
                    <FontAwesomeIcon className='logo' icon={faCalendar} size='xl' />
                    <span style={{ padding: "10px", fontSize: "larger", fontWeight: 'bold', fontFamily: "sans-serif" }}>
                        React Calendar
                    </span>
                </div>
                <div className="calendar-container">
                    {showSideBar && <Sidebar />}
                    <Month month={currentMonth} onDayClicked={onDayClicked} events={events} />
                </div>
            </div>

        </>
    )
}

export default Calendar