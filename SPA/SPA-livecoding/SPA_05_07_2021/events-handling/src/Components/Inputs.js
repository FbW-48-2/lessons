import React, { Component ,createRef } from 'react'

export class Inputs extends Component {
    input = createRef();
    name = createRef()
    text = '';
    changeHandler(e){
        console.log(this.input.current.value);
        //console.log(e.target.value);
        
    }
    clickHandler(){
        this.input.current.select(); // to select
        //document.execCommand('copy') // to copy 
        this.input.current.focus(); // to focus
        console.log(this.input.current.value);
        console.log(this.name.current.value);
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="your text here...." ref={this.input} onChange={()=>this.changeHandler()} /><br />
                <input type ="text" placeholder ="your name here ..."  ref = {this.name}/> 
                 <div> 
                 <br/>
                 <button onClick= {()=> this.clickHandler()}>  focus </button>
                 </div>
            </div>
        )
    }
}

export default Inputs
