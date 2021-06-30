import React ,{ Component } from 'react'

class Messages extends Component {
    myState = {
        class :'FBW-48-2',
        developers : ['Max', 'Sara','Lana'],
        color:"lightblue"

    }
  render(){
      return (
      <div>
          <h1 style={{ background:this.myState.color}}> Hello world  { this.myState.class}</h1>
          <p> { this.myState.developers.map((item)=>{
            return  <h5>{ item}</h5>

          })}</p>
          <button onClick = { ()=> this.myState.color ="lightgreen"} > change color </button>
      </div>    
      )

  }
}


export default Messages