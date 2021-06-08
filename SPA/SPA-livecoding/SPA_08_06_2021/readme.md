## ES6 Modules in javascript

![enter image description here](https://res.cloudinary.com/dmim37dbf/image/upload/v1552471685/import_export.png)

we need ES6 modules in order to effectively reuse, maintain, separate and encapsulate internal behaviour from external behaviour. It’s not about making the system complex, but having the ability to easily scale and delete stuff without breaking the system.
As our application grows bigger, we want to split it into multiple files, so called “modules”. A module may contain a class or a library of functions for a specific purpose.
**A module is just a file. One script is one module. As simple as that.**

-   `export`  keyword labels variables and functions that should be accessible from outside the current module.
-   `import`  allows the import of functionality from other modules.

we must tell the browser that a script should be treated as a module, by using the attribute `<script type="module">`.
we need just  to write in our index.html script : `type = "module"` like this

```javascript 
<script type="module" src="app.js"> </script>
```
and we can use some functions and variables from `main.js` in `app.js`

so we export in main.js and import in app.js
for example we have a function in main.js and we want to use it in app.js 
we add `export` before `function` like that 
```javascript
// 📁 main.js
export function greetUser(user) {
  console.log(`Hello, ${user}!`);
}
```
…Then another file `app.js` for example may import and use it:
```javascript
// 📁 app.js 
import {greetUser} from './main.js';
greetUser('Mansour') // Hello Mansour!

```
we imported the function `greetUser` from `main.js` and no need to write 
```javascript 
<script  src="main.js"> </script>
```
