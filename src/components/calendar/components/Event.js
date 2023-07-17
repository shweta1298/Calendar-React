import React from 'react'

function EventBar(props) {
    const { event } = props;
    return (
        <div key={event.id} className="event-bar-wrapper" >
            <div className='event-bar'>{event.title}</div>
        </div>
    )
}

export default EventBar