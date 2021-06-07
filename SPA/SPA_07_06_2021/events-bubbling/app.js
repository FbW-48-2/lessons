const form = document.querySelector('form');
const div = document.querySelector('div');
const h4 = document.querySelector('h4');

// form.addEventListener('click', ()=>{
//     alert(' form click')
// });

// div.addEventListener('click', ()=>{
//     alert(' div click')
// });

// h4.addEventListener('click', ()=>{
//     alert(' h4 click')
// });

document.addEventListener('click',(event)=>{
    //console.log(event.target.innerText);    
});

const newH4 = document.createElement('h4');
newH4.innerText = ' this is new h4 ';
div.appendChild(newH4);

// const allH4 = document.querySelectorAll('h4');
// allH4.forEach(item => {
//     console.log(item);
//     item.addEventListener('click', ()=>{
//         item.remove();


//     })
// });

form.addEventListener('click', ()=>{
    console.log(' form click')
});

div.addEventListener('click', ()=>{
    console.log(' div click')
});

h4.addEventListener('click', (e)=>{
    console.log(' h4 click');
   // e.stopPropagation()

});

// event bubbling
div.addEventListener('click',(e)=>{
   // console.log(e.target.nodeName);
    //e.stopPropagation();
    if(e.target.nodeName === 'H4'){
      //e.stopPropagation()
      console.log(e.target.nodeName);
       // e.target.remove();
    }

});


 
 

const myH4 = document.createElement('h4');
myH4.innerText = ' new h4 element';
div.appendChild(myH4);

const btn = document.querySelector('button');
btn.addEventListener('click' , (event)=>{
    //event.stopPropagation();
   console.log('btn click');
  
});