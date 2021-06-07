const h4 = document.querySelector('h4');
const div = document.querySelector('div');
const form = document.querySelector('form');


// bubbling

h4.addEventListener('click', ()=>{
    console.log( ' h4 click ');
})

div.addEventListener('click', ()=>{
    console.log( ' div click ');
})

form.addEventListener('click', ()=>{
    console.log( ' form click ');
})  


// capturing
h4.addEventListener('click', ()=>{
    console.log( ' h4 click ');
},true)

div.addEventListener('click', ()=>{
    console.log( ' div click ');
},true)

form.addEventListener('click', ()=>{
    console.log( ' form click ');
}, true);


