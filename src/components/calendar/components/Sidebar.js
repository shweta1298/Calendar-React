import { faChevronDown, faChevronUp, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';
import { getMonthName, isCurrentMonth } from '../utils/dayUtils';

function Sidebar(props) {
    const { isOpen, currentMonth } = props;
    const { monthIndex, year } = useContext(GlobalContext)

    return (
        <div className={isOpen ? "sidebar-wrapper-open" : "sidebar-wrapper"}>
            <div className="create-task-button-wrapper">
                <button className='create-task-button'>
                    <FontAwesomeIcon
                        icon={faSquarePlus}
                    // title="Next Month"
                    //  className='create-task-button'
                    size='lg'
                    >
                    </FontAwesomeIcon>
                    <span className='create-task-title'>Create Task</span>

                </button>

            </div>
            <div className="small-calendar-wrapper">
                {/* <div className="small-calendarheader"> */}
                    <div className="navigate-wrapper">
                        <div className="small-calendar-monthname">{getMonthName(monthIndex, year)}</div>

                        <div className="up-button">
                            <FontAwesomeIcon icon={faChevronUp} size='sm' />
                        </div>
                        <div className="down-button">
                            <FontAwesomeIcon icon={faChevronDown} size='sm' />

                        </div>
                    </div>
                {/* </div> */}
                <div className="small-calendar">
                    {currentMonth.map((week, weekIndex) => week.map((day) => {return isCurrentMonth(day.month(), monthIndex) && <div key={day.day()} className='small-calendar-day' >{day.date()}</div>}))}

                </div>
            </div>

        </div>
    )
}

export default Sidebar