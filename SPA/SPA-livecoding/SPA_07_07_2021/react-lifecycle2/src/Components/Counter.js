import React, { Component } from 'react'

export default class Counter extends Component {
  
    componentDidMount(){
        console.log('  componentDidMount started here !!!');
    }
    componentDidUpdate(){
        console.log(' componentDidUpdate is runnng!!');
    }
   clickHandler =()=>{
     this.props.countUp()
   }
   
    render() {
        console.log(' render started here !!!');
        return (
            <div>
               <h1> React LifeCycle</h1> 
               <button onClick = {  this.clickHandler} > {this.props.click} </button> 
            </div>
        )
    }
}
