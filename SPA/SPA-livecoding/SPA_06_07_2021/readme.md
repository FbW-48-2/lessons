
#  React  Component Lifecycle
![enter image description here](https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png)
- Every component has a lifecycle
 
- Lifecycle essentially refers to the birth, life and death
of the component
- Lifecycle methods are functions which are called when
certain time
## Why are lifecycles important to us?

- It helps us understand what the component is
doing
- It gives us control over the component at different
stages in its life

- By understanding lifecycles, we can understand
React Hooks better
- Only with class components can we use lifecycle
methods directly

- For functional components, we can not use lifecycle
methods, but instead (since 2018/19) we use React
Hooks

 - [ ]    **Mounting** –  Birth of your component
-  [ ]     **Update** – Growth of your component
-  [ ]  **Unmount** – Death of your component

![enter image description here](https://hackernoon.com/hn-images/1*sn-ftowp0_VVRbeUAFECMA.png)

![enter image description here](https://pbs.twimg.com/media/DZ-97vzW4AAbcZj?format=jpg&name=large)
[LIFECYCLE ](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
## Common React Lifecycle Methods
-   `render()` We've already been using a lifecycle method, As the name suggests, it handles the rendering of your component to the UI. It happens during the mounting
and updating of your component. **_Render()_  method has to be pure with no side-effects.**
 > You cannot modify the component state within the  _render()_.

## Lifecycles related to mounting
> birth of your component

1. componentWillMount()
2. render()
3. componentDidMount()


## Lifecycles related to component updates
> Growth of your component

1. componentWillUpdate()
2. render()
3. componentDidUpdate()


## Lifecycles related to unmounting
> Death of your component
1. componentWillUnmount()


## Lifecycles and state / props
- When the data for a component changes, that
component must be re-rendered
- When you update state, you are also re-rendering
the component
-  When the props change, you are also re-rendering
the component
### Use Cases
- starting or stopping animations
- setting or cancelling timers
- performing or cancelling network requests
- updating 3rd party UI libraries

