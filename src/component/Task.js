import React from 'react';

const Task = ({ task, ...props }) => {
     return(

         <div className="task">
             <p>{task.title}</p>
         </div>


     );
  

};

export default Task;