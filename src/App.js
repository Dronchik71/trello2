import React from 'react';
import Task from './component/Task';
class App extends React.Component{
  constructor() {
    super();
     
     this.state = {
       tasks: [
         {id: 0, title: 'не выполнено', done: false},
         {id: 1, title: 'выполнено', done: true},
         {id: 2, title: 'не выполнено', done: false}
       ]  
     };
  }
      
    render() {
       const { tasks } = this.state;
       const activeTasks = tasks.filter(task => !task.done);
       const doneTasks = tasks.filter(task => task.done);

      return (
        <div className="container" align="center">
           <div align="left">
             <h1>Всего задач: {activeTasks.length} </h1> 
           </div>
              {[...activeTasks, ...doneTasks].map(task => (
               <Task task={task} key={task.id}></Task>
              ))}
        </div>
        );
    }   
}


export default App;
