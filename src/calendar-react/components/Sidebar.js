import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext';

function Sidebar() {
  const { setShowEventModal ,setCurrentEvent} = useContext(GlobalContext)
  function createNewTask(params) {
    setCurrentEvent({
      title:"Create New Task"
    })
    setShowEventModal(true)
  }
  return (
    <div className='sidebar'>

      <button onClick={createNewTask} className="task-button" >
          {/* <FontAwesomeIcon className="plus-icon" icon={faPlusSquare} size="lg" /> */}
        Create Task</button>
    </div>
  )
}

export default Sidebar