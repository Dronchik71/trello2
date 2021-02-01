import React from 'react';
import Task from './component/Task';
class App extends React.Component{
  constructor() {
    super();
     
     this.state = {
       tasks: [
         {id: 0, title: 'taskc', done: false}
       ]  
     };
  }
      
    render() {
       const { tasks } = this.state;


      return (
        <div className="container" align="center">
           <div align="left">
             <h1>Всего задач: {tasks.length} </h1> 
           </div>
              {tasks.map(task => (
               <Task task={task} key={task.id}></Task>
              ))}
        </div>
        );
    }   
}


export default App;
