import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
      source : 'todos'
    }
  

  }
  async fetchData(url){
    const res = await fetch(url);
    const result = await res.json();
    console.log(result);
    this.setState({ data : result})

  }
  componentDidUpdate(){

  }
  componentDidMount(){
    console.log('component did mount !!');
    this.fetchData(`https://jsonplaceholder.typicode.com/${this.state.source}`);
  }  
  render() {
    return (
      <div>
        <h1>React lifeCycle 3 </h1>
      </div>
    )
  }
}
