
## React [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
![enter image description here](https://nikhilkumaran.dev/images/blog/useReducer.png)
Context api with useReducer is a way to manage global state throughout your application
`useReducer` is usually preferable to `useState` when you have complex state logic.

- The `useReducer` hook returns a `dispatch` function and the state 
```js 
import  React,  {  useReducer  }  from  "react"; 
const [state, dispatch] = useReducer( reducer, initialState  );

 
function reducer(state, action) {
   
}
```
 
- the `dispatch` function is what we call to update our state 
-  the `useReducer` take two parameters : `reducer` function and `initialState`
- the `reducer` function take two parameters : the current state and the action object
- the `action` have the data the we will pass to `dispatch` function (anything we pass to dispatch will be the value of action in reducer function)
```js 
 
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
 
```