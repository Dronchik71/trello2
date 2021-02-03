import React from 'react';
import Task from './component/Task';


class App extends React.Component{
  constructor() {
    super();
     
     this.state = {
       tasks: [
         {id: 0, title: 'задача 1', done: false},
         {id: 1, title: 'задача 2', done: true},
         {id: 2, title: 'задача 3', done: false}
       ]  
     };
  }
       
      doneTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
          let { tasks } = state;
          tasks[index].done = true;
          return tasks;
        });
      };
    
      deleteTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
          let { tasks } = state;
          delete tasks[index];
          return tasks;
        });
      };


    render() {
       const { tasks } = this.state;
       const activeTasks = tasks.filter(task => !task.done);
       const doneTasks = tasks.filter(task => task.done);

      return (
        <div className="container">
           <div>
             <h1>Всего задач: {activeTasks.length} </h1> 
           </div>
              {[...activeTasks, ...doneTasks].map(task => (
               <Task 
               doneTask={() => this.doneTask(task.id)}
               deleteTask={() => this.deleteTask(task.id)}
               task={task}
               key={task.id}/>
              ))}
        </div>
        );
    }   
}


export default App;
