import React from 'react';

import TaskActions from './TaskActions';


const Task = ({ task,onClickState, onClickDelete }) => {
    return(
         <div className="task">
             <p>{task.title}</p>
             <TaskActions onClickState={onClickState} onClickDelete={onClickDelete} task={task}/>
         </div> 
     );
};

export default Task;