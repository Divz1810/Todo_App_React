import React from 'react';
import Input from './input';
import List from './List';
import './App.css';
class App extends React.Component{

  state={
    tasks: ["Make Coffee", "Make Notes"],
    currInput: "",
  }

  handleCurrInput = (value)=>{
    this.setState({currInput:value})
  }

  deleteTask =(singleTask)=>{
    let currTaskArr= this.state.tasks;
    let filteredArray=currTaskArr.filter((element)=>{
      return element !== singleTask;
    })
    this.setState({tasks: filteredArray})
  }

  handleTasks=()=>{
    this.setState({tasks: [...this.state.tasks, this.state.currInput],
      currInput: "",
      });
  };

  render = () =>{
    return (
      <div>
        <Input handleCurrInput= {this.handleCurrInput}  handleTasks={this.handleTasks} currInput={this.state.currInput}/>
        <List tasks= {this.state.tasks} deleteTask= {this.deleteTask} />
      </div>
    );
  }
}

export default App;
