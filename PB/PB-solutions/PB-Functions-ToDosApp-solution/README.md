### ToDos List App

* "Shopping"
* "Home work"
* "Go to the gym"

### create TODOs App

#### create function
##### Add item
* create function to Insert new items to toDosStore

##### Add Items
* create function to insert array of todos

##### Remove Item
* create function to remove any item by order number
* the function takes one Argument as item order number

##### Edit Item
* create function to edit any item by order number
* the function takes 2 Arguments ==> the first Argument is item order number and the Second Argument is new item value

##### Edit Items
* creat function to edit todos by passing array of todos order numbers 

##### Read TodosList
* RenderToDosListTemplate function
* this function prints the end Results as string template.
* check if toDosStore is empty return a message (To do list stor is empty)
* else return todos template


##### Call Stack
```js
insertTodo("test1");
insertTodo("test2");
insertTodo("test4");
insertTodo("test5");
removeTodo(3);
removeTodo(5);
insertTodo("Call Alex");
editTodo(3, "Pay bills");
editTodo(5, "Visiting Tommy");
createTodos(["Go to supermarket", "Meet with Ghassan", "New test"]);

updateTodos(
  [2, 4, 6],
  ["Meet with PR department", "By milk", "Check the internet connection"]
);
```

* render to do template
```js
console.log(RenderToDosListTemplate());
// toDosStore is empty ==> To do list is empty


/*ToDo List: 
 1- Shopping 
 2- Meet with PR department 
 3- Pay bills 
 4- By milk 
 5- Visiting Tommy 
 6- Check the internet connection 
 7- Go to supermarket 
 8- Meet with Ghassan 
 9- New test
 */ 
```

