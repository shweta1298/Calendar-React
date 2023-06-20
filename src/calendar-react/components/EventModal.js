import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext'

function EventModal() {
    const { setShowEventModal, currentEvent, setCurrentEvent, savedEvents, setSavedEvents } = useContext(GlobalContext)
    const [title, setTitle] = useState(currentEvent.title)
    const [description, setDescription] = useState(currentEvent.description)
    const [backgroundColor, setBackgroundColor] = useState(currentEvent.backgroundColor)
    const [color, setColor] = useState(currentEvent.color)
    const [date, setDate] = useState(currentEvent.date)
    const [startTime, setStartTime] = useState(currentEvent.eventStartTime)
    const [endTime, setEndTime] = useState(currentEvent.eventEndTime)
    function addNewEvent(e) {
        let newEvents = [...savedEvents]
        newEvents.push({
            title: title,
            date: date,
            backgroundColor: backgroundColor,
            color: color,
            description: description,
            eventStartTime: startTime,
            eventEndTime: endTime,
            allDayEvent: false,
        })
        setSavedEvents([...newEvents])
        setShowEventModal(false)
    }
    return (
        <div className='event-modal-container'>
            <div className="modal-title-bar" style={{ backgroundColor: backgroundColor }}>

                <div className="modal-title">{title}</div>
                <div className="close-btn-flex">
                    <FontAwesomeIcon onClick={() => {
                        setShowEventModal(false);
                        setCurrentEvent({
                            ...currentEvent,
                            backgroundColor: "#182640d3",
                            color: "white",
                            title: "Create New Task"
                        })
                    }} className='close-button' icon={faXmark} size='sm'></FontAwesomeIcon>

                </div>
            </div>
            <div className="modal-content">
                <div className='modal-content-row'>
                    <div className="title">Title :</div>
                    <input className="title-input" type='text' value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>

                <div className='modal-content-row'>
                    <div className="date">Date :</div>
                    <input className="date-input" type='date' value={date}
                        onChange={(e) => setDate(e.target.value)}
                    ></input>
                </div>
                <div className='modal-content-row'>
                    <div className="start-time">Start Time :</div>
                    <input className="start-time-input" type='time' value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    ></input>
                </div>

                <div className='modal-content-row'>
                    <div className="end-time">End Time :</div>
                    <input className="end-time-input" type='time' value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    ></input>
                </div>

                <div className='modal-content-row'>
                    <div className="desc">Description :</div>
                    <textarea className="desc-input" type='text' value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <div className='modal-content-row'>
                    <div className="color">Label Color :</div>
                    <input className="color-input" type='color' value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                    ></input>
                </div>
                <div className='modal-btn-row'>
                    <button className="save-btn" onClick={addNewEvent}>Save</button>
                    <button className="cancel-btn" onClick={() => {
                        setShowEventModal(false);
                        setCurrentEvent({
                            backgroundColor: "#182640d3",
                            color: "white",
                            title: "Create New Task"
                        })
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EventModal