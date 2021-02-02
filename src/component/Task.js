import React from 'react';

const Task = ({ task, ...props }) => {
   
   const ActionBit = () =>
   <div align="right">{!task.done
    ? <p><img src="./img/done.png"></img> </p>
    : <p> <img src="./img/close.png"></img></p>
   }
   </div>
   
   
   
   
    return(

         <div className="task">
             <p>{task.title}</p>
             <ActionBit></ActionBit>
         </div>


     );
  

};

export default Task;