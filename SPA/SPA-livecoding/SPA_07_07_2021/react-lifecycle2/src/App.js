import React, { Component } from 'react'
import './App.css';
import Counter from './Components/Counter';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        click : 0
    }
    }
    countUp = ()=>{
      this.setState({click : this.state.click +1 })
     
  }
  render() {
    return (
      <div>
        <Counter click = {this.state.click} countUp = {this.countUp} />
      </div>
    )
  }
}
