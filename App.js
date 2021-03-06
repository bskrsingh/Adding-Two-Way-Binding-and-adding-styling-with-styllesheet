import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{

state = {
 person : [
   {name:"Bhaskar", age:26},
   {name:"Ashutosh", age:39},
   {name:"Akhilesh", age:40}
 ]
}

switchNameHandler = (replaceName) =>{
  console.log("switch name !");
  this.setState({
    person: [
      {name:replaceName, age:26},
      {name:"Ashutosh Sonnvanshi", age:39},
      {name:"Akhilesh Singh", age:40}
    ]
  })
}

nameChangeHandler = (event) =>{
  this.setState({
    person: [
      {name:event.target.value, age:26},
      {name:"Ashutosh Sonnvanshi", age:39},
      {name:"Akhilesh Singh", age:40}
    ]
  })
}


render(){
//inline css start
  const style = {
    border:'1px solid #e3e3e3',
    font: "12px",
    background: "#000",
    color: '#fff',
    padding: '10px',
    cursor: 'pointer'
  };
//end css
  return (
    <div className="App">
      <h1>Hello Learing React</h1>
      <button style={style} onClick={()=>this.switchNameHandler("Bhaskar Singh")}>Switch</button>
      <Person name={this.state.person[0].name} age={this.state.person[0].age} 
      changed={this.nameChangeHandler}
      />
      <Person click={this.switchNameHandler.bind(this, 'Bhaskar Singh')} name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies is playing Games</Person>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
    </div>
  )
//return React.createElement("div", {className:'App'}, React.createElement("h1", null, "Hi I am comming"));
  }
}

export default App;
