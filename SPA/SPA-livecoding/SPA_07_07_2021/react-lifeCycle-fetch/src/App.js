import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
      source : 'users',
      sources : ['users','todos','photos','albums','comments','posts']
    }  

  }
  async fetchData(url){
    const res = await fetch(url);
    const result = await res.json();
    console.log(result);
    this.setState({ data : result})

  }
  updateSource = (val)=>{
    this.setState({source : val});
    this.fetchData(`https://jsonplaceholder.typicode.com/${this.state.source}`);

  }
  
  componentDidUpdate(){
   // 
  }
  componentDidMount(){
   console.log('component did mount !!');
   this.fetchData(`https://jsonplaceholder.typicode.com/${this.state.source}`);
  }  
  render() {
    return (
      <div className="App">
        <h1>React lifeCycle fetch </h1>
        <h3> {this.state.source}</h3>
        {this.state.sources.map(item =>{
          return <button onClick={ ()=> this.updateSource(item) }>{item} </button>
        })}
        { this.state.data.length > 0 ? JSON.stringify(this.state.data) : <h4>no data </h4> }
      </div>
    )
  }
}
