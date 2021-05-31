 // create new elements 

 // document.write
//  document.write(' <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6z0iPv2GWyZpb3Rl2FaJN1Aq9_ZM0g3OLXQ&usqp=CAU"  />')

//  document.write('<script src="./new.js"></script>')

const main = document.querySelector('#main');
// create html element
const p = document.createElement('p');

// add classes or content 
p.innerText =" this is new paragraph created with js";

// add the element to the parent 

main.appendChild(p);


