import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = { 'color': 'Pick one', status: 'Pick one' };
  }
  render() {
    return (
      <div className="App">
        <div id="traffic-light" className={this.state.color}>
          <h1>{this.state.status}</h1>
        </div>
        <ul id="color-selector">
          <li><button className="green" onClick={()=>this.setState({'color': 'green', status: 'green :)'})}>GREEN</button></li>
          <li><button className="amber" onClick={()=>this.setState({'color': 'amber', status: 'amber :|'})}>AMBER</button></li>
          <li><button className="red" onClick={()=>this.setState({'color': 'red', status: 'red :('})}>RED</button></li>
        </ul>
      </div>
    );
  }
}

export default App;
