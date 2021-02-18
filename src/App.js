import React, {useState} from 'react';
import Task from './component/Task';
import TaskInput from './component/TaskInput';

function App(){
  const [tasks, setTasks] = useState([
    {id: 0, title: 'задача 1', done: false},
    {id: 1, title: 'задача 2', done: true},
    {id: 2, title: 'задача 3', done: false}
  ]);



  const [deletedTasks, setDeletedTesks] = useState([]);

  const handleSetStateTask = task => {
    const cloneTasks = JSON.parse(JSON.stringify(tasks)) 
    const index = cloneTasks.findIndex(t => task.id === t.id); 
    
    cloneTasks[index].done = !task.done;
    setTasks(cloneTasks);
  };

  const handleDeleteTask = id => {
    const cloneTasks = JSON.parse(JSON.stringify(tasks)); 
    const cloneDeletedTasks = JSON.parse(JSON.stringify(deletedTasks)); 
    const index = cloneTasks.findIndex(task => task.id === id);
    const deleted = cloneTasks.splice(index, 1);

    cloneDeletedTasks.push(deleted[0]);
    setDeletedTesks(cloneDeletedTasks);
    setTasks(cloneTasks); 
  };



  const activeTasks = tasks.filter(task => !task.done);
  const doneTasks = tasks.filter(task => task.done);

  return (
    <div className="container">
      <div>
        <div>Total: {tasks.length} </div> 
      </div>    
      <hr/>   
      <div>Active</div>
      <div>
        {activeTasks.map(task => (
            <Task 
              onClickState={() => handleSetStateTask(task)}
              onClickDelete={() => handleDeleteTask(task.id)}
              task={task}
              key={task.id}/>
            ))}
      </div>     
      <hr/>         
      <div>Done</div>
      <div>
        {doneTasks.map(task => (
          <Task 
            onClickState={() => handleSetStateTask(task)}
            onClickDelete={() => handleDeleteTask(task.id)}
            task={task}
            key={task.id}/>
        ))}
      </div>    
      <hr/>   
      <div>Deleted</div>
      <div>
        {deletedTasks.map(task => (
          <Task 
            task={task}
            key={task.id}/>
        ))}
        </div>
        <TaskInput></TaskInput>

    </div>
    );

}

export default App;
