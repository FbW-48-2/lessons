const div = document.querySelector('div');
function clickDiv() {
   // alert(' click event')
}
div.addEventListener('click', clickDiv);

div.addEventListener('mouseover',()=>{
    div.style.backgroundColor = "green";
});

div.addEventListener('mouseout',()=>{
    div.style.backgroundColor = "";
});



const link = document.querySelector('a');
link.addEventListener('click' , (event)=>{
    event.preventDefault();
    //div.remove();
    event.target.remove();
  
});

