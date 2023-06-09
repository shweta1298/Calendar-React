import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Sidebar() {
  function createNewTask(params) {
    console.log("create new task");
  }
  return (
    <div className='sidebar'>

      <button onClick={createNewTask} class="task-button" >
          {/* <FontAwesomeIcon className="plus-icon" icon={faPlusSquare} size="lg" /> */}
        Create Task</button>
    </div>
  )
}

export default Sidebar