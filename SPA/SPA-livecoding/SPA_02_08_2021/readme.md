
## [React Context Api](https://reactjs.org/docs/context.html#before-you-use-context)  
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, notifications, spinner or preferred language. 
Context is primarily used when some data needs to be accessible by _many_ components at different nesting levels.

we have this tree, in which the bottom boxes represent separate components:

![enter image description here](https://thepracticaldev.s3.amazonaws.com/i/gevur92qwoxvdjnm12dw.png)

We can easily add state to the bottom components, but to share data with component in the same level to have move state to a higher component and then pass it back down via props.

![enter image description here](https://thepracticaldev.s3.amazonaws.com/i/u20r26dtxyr6ek6krzsb.png)

If we later find out that another component in the same level also needs the data, we have to lift state up again, and pass it back down:

![enter image description here](https://thepracticaldev.s3.amazonaws.com/i/wtlykrxnx8xi12h4wek4.png)

problems begin if a component on a different branch needs the data:

![enter image description here](https://thepracticaldev.s3.amazonaws.com/i/g3xrvthcw24izllvb58w.png)

In this case, we need to pass state from the top level of the application through all the intermediary components to the one which needs the data at the bottom, even though the intermediary levels don't need it. This t process is known as _prop drilling_.

![enter image description here](https://thepracticaldev.s3.amazonaws.com/i/ey25z0hvmy31xiiqqwgq.png)

This is where Context API comes in. 
it  is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language
It provides a way of passing data through the component tree via a Provider-Consumer pair without having to pass props down through every level. :

![enter image description here](https://thepracticaldev.s3.amazonaws.com/i/ckfpokb2cz3ffmn8238i.png)

to begin 
1- we create a new Context and we export it
```javascript
export const UserContext = React.createContext();
```
2- we create the provider 
```javascript
return (

<UserContext.Provider value='Mansour'>
 <Layout />
</UserContext.Provider>
);
```
We also pass the `value` prop to our Provider. This holds the data we want to save
3-  Consuming Context 
we import the context 
```javascript
import UserContext from './UserContext';


```

 ```js
return (
    <UserContext.Consumer>
      { (user) => <div>{user} </div> }
         
      
    </UserContext.Consumer>
  );
```
> we can also work with context using react hooks **useContext** 
 ```js
 import  React, { useContext } from  "react";
 const user = useContext(UserContext);
 // here there is no need to add UserContext.Consumer
 return (
   <div>{user} </div>         
      
    
  );
  ```