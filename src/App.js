import React from 'react';
import './App.css';
class App extends React.Component  {
  state ={
    points: 0
  }

  click = () => {
    console.log("clicked!")
    this.setState({ points: this.state.points + 1 })
  }

  render(){
    return (
    <div className="App">
      <div>{this.state.points}</div>
      <br></br>
      <div className="target" onClick={()=>this.click()}/>
    </div>
    );
  } 
}

export default App;

