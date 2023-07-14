import React, { useLayoutEffect, useState, useContext } from 'react'
import GlobalContext from './context/GlobalContext'
import { getMonth } from './utils/dayUtils'
import Month from './components/Month'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

function Calendar(props) {
    const { Events } = props;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const { monthIndex, year, showEventModal, setSavedEvents } = useContext(GlobalContext)
    const [currentMonth, setCurrentMonth] = useState(getMonth(year, monthIndex))

    useLayoutEffect(() => {
        setCurrentMonth(getMonth(year, monthIndex))
    }, [year, monthIndex])
    
    return (
        <div className='calendar-wrapper'>
            <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}   />
            <Sidebar isOpen={isSidebarOpen} currentMonth={currentMonth} />
            <Month currentMonth={currentMonth} isSidebarOpen={isSidebarOpen} events={Events}/>
        </div>

    )
}

export default Calendar