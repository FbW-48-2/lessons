console.log('js is working');
// selecting html element using element
const h1 = document.querySelector('h1');
console.log(h1 , typeof h1);

const div = document.querySelector("div");
console.log(div);

// select html element using the id with # 
const p = document.querySelector("#article");
console.log(p);
// change the color of p 
p.style.color = "red";

// select html element using the class with . 
const text = document.querySelector(".bigText");
console.log(text);
text.style.fontSize = "25px"

/// querySelectorAll to select more than one element 
// select all paragraphs 

const allP = document.querySelectorAll('p');
allP[0].style.color = "green"
 
// for(let item of allP){
//     item.style.color = "yellow"
// }

allP.forEach(function(item){
  item.style.color = "magenta";
  item.style.fontWeight = "bold"
  item.style.fontSize="30px";

})
h1.style.border= "2px solid red";
//h1.style.visibility = "hidden"


