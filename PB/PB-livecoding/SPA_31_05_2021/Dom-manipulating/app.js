const main = document.querySelector('#main');
//const main = document.getElementById('main');
console.log(main);

// Manipulating classes 
// to add a class we need : .classList.add("className")
main.classList.add('bigText');
console.log(main.classList);
// remove class .classList.remove("className")
main.classList.remove("bold");

console.log(main.className);

// change the class
main.className ="greenText";
console.log(main.className);
main.className +=" bold"
console.log(main.className);

// change the style 
//main.style.background = "coral";
main.style.paddingTop = "50px";
main.style = "border:1px solid green;padding:20px";
main.style.borderTop ="2px solid blue";

// innerText and innerHTML
main.innerText = "hello";
main.innerHTML="<button> click me </button>"
main.innerHTML = "<p> Hello from DOM </p> <button> click me </button>";
//main.innerText = "Hello world";

//console.log(main.querySelector('p'));
//main.innerText = "Hi"
//main.querySelector('p').innerText = "Hi"

// console.log('innerText: ',main.innerText + " hello Hello");
// console.log('innerHTML: ',main.innerHTML + "<div> hello Hello </div>");

//#############################################################
// textContent 
//main.textContent ="text content"
//main.querySelector('p').style.visibility = "hidden"
console.log(main.textContent);




 




 
