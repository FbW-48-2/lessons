import React, { Component } from 'react'

export class Switch extends Component {
    //state = { isOn : true}
    constructor(props){
        super(props)
        this.state = { isOn : true  }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({ isOn : !this.state.isOn }) 
    }
    
    render() {
        return (
            <div>
                <button onClick= {this.clickHandler}> {this.state.isOn ? 'ON' :'OFF'}</button>
            </div>
        )
    }
}

export default Switch
