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

//parant.appendChild(element)

//document.body.appendChild(p)

const btn = document.querySelector('#btn');
btn.textContent =" new button text";

const btn2 = document.createElement('button');
btn2.textContent = "button2";
//main.appendChild(btn2)

const img = document.createElement('img');
img.src = "https://5.imimg.com/data5/BX/WZ/UM/SELLER-31579413/photo-manipulation-500x500.jpg";
img.id = "ro"

main.appendChild(img);

const footer = document.querySelector('#footer')
footer.appendChild(btn2);
 //parent.appendChild(element)



//document.querySelector('#ro').style.visibility = "hidden"