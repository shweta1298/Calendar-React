import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

function EventModal() {
    const { setShowEventModal, currentEvent } = useContext(GlobalContext)
    return (
        <div className='event-modal-container'>
            <div className="modal-title-bar" style={{ backgroundColor: currentEvent.backgroundColor }}>

                <div className="modal-title">{currentEvent.title}</div>
                <div className="close-btn-flex">
                    <FontAwesomeIcon onClick={() => setShowEventModal(false)} className='close-button' icon={faCircleXmark} size='lg'></FontAwesomeIcon>

                </div>
            </div>
            <div className="modal-content">
                <div className='modal-content-row'>
                    <div className="title">Title :</div>
                    <input className="title-input" type='text' value={currentEvent.title}></input>
                </div>

                <div className='modal-content-row'>
                    <div className="date">Date :</div>
                    <input className="date-input" type='date' value={currentEvent.date}></input>
                </div>
                <div className='modal-content-row'>
                    <div className="start-time">Start Time :</div>
                    <input className="start-time-input" type='time' value={currentEvent.eventStartTime}></input>
                </div>

                <div className='modal-content-row'>
                    <div className="end-time">End Time :</div>
                    <input className="end-time-input" type='time' value={currentEvent.eventEndTime}></input>
                </div>

                <div className='modal-content-row'>
                    <div className="desc">Description :</div>
                    <textarea className="desc-input" type='text' value={currentEvent.description}></textarea>
                </div>

                <div className='modal-content-row'>
                    <div className="color">Label Color :</div>
                    <input className="color-input" type='color' value={currentEvent.backgroundColor}></input>
                </div>
                <div className='modal-btn-row'>
                    <button className="save-btn">Save</button>
                    <button className="cancel-btn" onClick={() => setShowEventModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EventModal