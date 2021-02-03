import React from 'react';
import TaskActions from './TaskActions';


const Task = ({ task }) => {
   
  
    return(

         <div className="task">
             <p>{task.title}</p>
             <TaskActions task={task}/>
         </div>


     );
  

};

export default Task;