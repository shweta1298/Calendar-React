import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

function Sidebar() {
  const { setShowEventModal, setCurrentEvent } = useContext(GlobalContext)
  function createNewTask(params) {
    setCurrentEvent({
      title: "Create New Task"
    })
    setShowEventModal(true)
  }
  return (
    <div className='sidebar'>

      <button onClick={createNewTask} className="task-button" >
        Create Task</button>
    </div>
  )
}

export default Sidebar