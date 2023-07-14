import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronLeft, faChevronRight, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';
import { getMonthName } from '../utils/dayUtils';
function Header(props) {
    const {
        isSidebarOpen,
        setIsSidebarOpen
    } = props;
    const { monthIndex, year, setMonthIndex, setYear, showEventModal, setSavedEvents } = useContext(GlobalContext)
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
    function handleGoToToday() {
        setMonthIndex(dayjs().month())
        setYear(dayjs().year())
    }
    function toggleSidebar(e) {
        setIsSidebarOpen(!isSidebarOpen)
    }
    return (
        <div className="header-wrapper">
            <div className="toggle-button-wrapper">
                <button className='toggle-button' onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} className='toggle-button' />
                </button>
            </div>
            <div className='headername-wrapper'>
                <span className='header-name'>Calendar React</span>
            </div>
            <div className="month-header-wrapper">
                <div className="prevmonth-button-wrapper">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className='prevmonth-button'
                        onClick={handlePrevMonth}
                    />
                </div>

                <span className='month-header'>
                    {getMonthName(monthIndex, year)}
                </span>

                <div className="nextmonth-button-wrapper" >
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className='nextmonth-button'
                        onClick={handleNextMonth}
                    />
                </div>
            </div>


            <div className="today-button-wrapper" >
                <button className='today-button' onClick={handleGoToToday}>Today</button>
            </div>
            <div className="change-view-wrapper">
                <select className='change-view-button' name="view" id="view" defaultValue={"Month"}>
                    <option value="Month" >Month</option>
                    <option value="Week">Week</option>
                    <option value="Day">Day</option>
                </select>
            </div>



        </div>
    )
}

export default Header