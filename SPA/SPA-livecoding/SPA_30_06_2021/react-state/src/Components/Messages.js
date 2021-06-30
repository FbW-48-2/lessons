import React ,{ Component } from 'react'

class Messages extends Component {
    state = {
        class :'FBW-48-2',
        developers : ['Max', 'Sara','Lana'],
        color:"lightblue"

    }
  render(){
      return (
      <div>
          <h1 style={{ background:this.state.color}}> Hello world  { this.state.class}</h1>
          <p> { this.state.developers.map((item)=>{
            return  <h5>{ item}</h5>

          })}</p>
          <button onClick = { ()=> this.setState({color:"lightgreen"})}> change color </button>
      </div>    
      )

  }
}


export default Messages