const ul = document.querySelector('ul');
console.log(ul);

//child nodes
let result;
result = ul.childNodes
result = ul.childNodes[2]


// children
result = ul.children
result = ul.children[0].className
//ul.children[0].style="color:red; font-weight:bold;"
// Array.from(ul.children).forEach(item => {
//     item.style.color = "green"
// });
const [first,second,third] = ul.children // destructuring 

//console.log('first: ',first);

// children of children
result = ul.children[0].children[0]
result.style.color = "red";

// first child
result = ul.firstChild
result = ul.firstElementChild.firstElementChild

// last child
result = ul.lastChild
result = ul.lastElementChild;
result.textContent = "last element child"


//count child elements 
result = ul.childElementCount
result = ul.children.length

// parent node 
result = ul.parentNode;
result = ul.parentElement;
//result = ul.firstElementChild.parentElement
result.style.backgroundColor = "lightgreen";

// next sibling
// change the color of the second li 
result = ul.firstElementChild.nextElementSibling
result.style.color = "blue" ;

// previous sibling
// cahnge the background of the forth item
result = ul.lastElementChild.previousSibling
//result.style.backgroundColor ="#ffffff"
//result.textContent = "ABC";


// const text = document.createTextNode("this is text node")
// ul.firstElementChild.firstElementChild.appendChild(text)
// result = ul.firstElementChild.firstElementChild.childNodes[1];
// result.previousSibling.textContent ="previous "
console.log(result);


// const img = document.createElement('img');
// img.src = "img.jpg";
// // add img to body : document.body
// document.body.appendChild(img)


// const parent = document.querySelector('ul');
// const el = parent.querySelector('li')
// console.log('el: ',el);
// el.style.backgroundColor = 'white'
