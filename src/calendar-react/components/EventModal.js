import { faCircleXmark, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

function EventModal() {
    const { setShowEventModal } = useContext(GlobalContext)

    return (
        <div className='event-modal-container'>
            <div className="modal-title-bar">
                
                <div className="modal-title">Create Task</div>
                <div className="close-btn-flex">
                <FontAwesomeIcon onClick={() => setShowEventModal(false)} className='close-button' icon={faCircleXmark} size='lg'></FontAwesomeIcon>

                </div>
            </div>
            <div className="modal-content">
                <div className='modal-content-row'>
                    <div className="title">Title :</div>
                    <input className="title-input" type='text'></input>
                </div>

                <div className='modal-content-row'>
                    <div className="start-time">Start Time :</div>
                    <input className="start-time-input" type='time'></input>
                </div>

                <div className='modal-content-row'>
                    <div className="end-time">End Time :</div>
                    <input className="end-time-input" type='time'></input>
                </div>

                <div className='modal-content-row'>
                    <div className="desc">Description :</div>
                    <input className="desc-input" type='text'></input>
                </div>

                <div className='modal-content-row'>
                    <div className="color">Label Color :</div>
                    <input className="color-input" type='color'></input>
                </div>
                <div className='modal-btn-row'>
                    <button className="save-btn">Save</button>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EventModal