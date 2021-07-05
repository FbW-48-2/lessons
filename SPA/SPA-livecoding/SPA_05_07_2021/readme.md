
#  Handling Events
![enter image description here](https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/08/react-events.png?fit=1200,600&ssl=1)
- React events are named using camelCase.
- we pass a function as the event handler.
```html
 
<button onClick={clickHandler}> click me </button>
 
```
- in react we use `preventDefault` with the event object 
```js
 function handleSubmit(e) {
    e.preventDefault();    console.log('You clicked submit.');
  }
```
- in react we don't need to call `addEventListener` but we provide a listener when the element is initially rendered.
- when we have a class component we need to be carful about `this` we should bind `this.handleClick` and 
pass it to `onClick`
```js
class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOn: true};

    // This binding is necessary to make `this` work in the callback 
       this.handleClick = this.handleClick.bind(this);  }

  handleClick() {
  this.setState({      isOn: !this.state.isOn    })   
  }
  render() {
    return (
      <button onClick={this.handleClick}>        {this.state.isOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Switch />,
  document.getElementById('root')
);
```
- If we don't want to call  `bind` we cann add arrow function in the callback
 ```html
 <button onClick={() => this.handleClick()}>    Click me    </button> 
 ```
 
## Controlled Components
_In a controlled component, the form data is handled by the state _within the component_. The state within the component serves as _“the single source of truth”_ for the input elements that are rendered by the component._
- **_there is 2 points tell us that this is a controlled component._**
1.  The input has a value attribute from the state.
2.   We have an onChange event handler declared.

##  Uncontrolled Components
Uncontrolled components act more like traditional HTML form elements. The data for each input element is stored in the DOM, not in the component. Instead of writing an event handler for all of your state updates, we use a **_ref_** to retrieve values from the DOM.
```html 
<input type="text" placeholder="Your text here.."

ref={this.input} 

onChange={(event) => this.handleChange(event.target.value)}

/>
```
```js
import React, { Component } from 'react';

class App extends Component {

constructor(props){

super(props);

this.handleChange = this.handleChange.bind(this);

this.input = React.createRef();

}

handleChange = (newText) => {

console.log(newText);

}

render() {

return (

<div className="App">

<div className="container">

<input type="text" placeholder="Your text here.."

ref={this.input} 

onChange={(event) => this.handleChange(event.target.value)}

/>

</div>

</div>

);

}

}

export default App;
```