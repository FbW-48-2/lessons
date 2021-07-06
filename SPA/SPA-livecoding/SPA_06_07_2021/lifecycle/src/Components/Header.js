import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : 'Header Title'
        }
        console.log('lifecycle : 0 - Constructor')
    }
    componentWillMount(){
      
        console.log('lifecycle : 1 - componentWillMount')

    }
    componentDidMount(){
        console.log('lifecycle : 3 - componentDidMount')
    }
    componentWillUpdate(){

        console.log('lifecycle update : 1 - componentWillUpdate')

    }
    changeTitle(){
        this.setState({ title : this.props.newTitle})
    }
    componentDidUpdate(){
        console.log('lifecycle update : 3 - componentDidUpdate')

    }
    componentWillUnmount(){
        console.log('lifecycle unmount : 1 - componentWillUnmount');
        alert('Component will unmount good bye !!!')
    }



   
    render() {
        console.log('lifecycle : 2 - render')
        return (
            <div className="Header">
                <h2>state :  {this.state.title }</h2>
                <h2>props :  {this.props.newTitle }</h2>
                <button onClick={ ()=> this.changeTitle() }>change title </button>
            </div>
        )
    }
}
