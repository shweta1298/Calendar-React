import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Sidebar(props) {
    const { isOpen } = props;
    return (
        <div className={isOpen ? "sidebar-wrapper-open" : "sidebar-wrapper"}>
            {/* <div className="create-task-button-wrapper">
                <button className='create-task-button'>
                    <FontAwesomeIcon
                        icon={faSquarePlus}
                    // title="Next Month"
                    //  className='create-task-button'
                    >
                    </FontAwesomeIcon>
                    <span className='create-task-title'>Create Task</span>

                </button>

            </div> */}
            <div className="small-calendar-wrapper">

            </div>
        </div>
    )
}

export default Sidebar