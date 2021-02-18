import React from 'react';


const TaskActions = ({ task, onClickState, onClickDelete }) => { 
  const className = 'task ' + (task.done ? 'task_done' : '');
   
  return(
      <div className={className}>
        {onClickState && 
          <span onClick={onClickState}> 
             
            ✅
             🖌            
          </span>
        }
        {onClickDelete && 
          <span onClick={onClickDelete}> 
            ❌
          </span>
          }
      </div>
  );
};

export default TaskActions;