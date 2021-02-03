import React from 'react';

const TaskActions = ({ task, ...props}) => {
   
   const ActionBit = () => (
   <div>{!task.done
     ? <p onClick={props.doneTask}> ✅ </p>
     : <p onClick={props.deleteTask}> ❌ </p>
   }
   </div>
   );
   
   const className = 'task ' + (task.done ? 'task-done' : '');
   
   
    return(

         <div className="task">
             <p>{task.title}</p>
             <ActionBit></ActionBit>
         </div>


     );
  

};

export default TaskActions;