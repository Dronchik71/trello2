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
          const cloneTasks = JSON.parse(JSON.stringify(tasks)) //read me https://yandex.ru/turbo/nuancesprog.ru/s/p/4443/
          const index = cloneTasks.findIndex(t => task.id === t.id); //read me https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

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
    setTasks(cloneTasks); //read me https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  };

//todo добавь действия возврата из удаленных

  const activeTasks = tasks.filter(task => !task.done);
  const doneTasks = tasks.filter(task => task.done);

  addTask = task => {
  this.setState(state => {
    let { tasks } = state;
    tasks.push({
      id: tasks.length !== 0 ? task.length : 0,
      title: task,
      done: false
    });
  });
 };


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
        <TaskInput addTask={this.addTask}></TaskInput>
         </div>

   </div>
    );
 
}
 


export default App;
