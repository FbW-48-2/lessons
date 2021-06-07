// submit
// keydown
// keyup
//keypress
// blur
//cut
// past

const form = document.querySelector('#form');
const input = document.querySelector('input');
form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    //console.log('form submit');
    console.log(input.value);
});

// keydown 
input.addEventListener('keydown',()=>{
    console.log(' key down... ',input.value );
    
});

input.addEventListener('keyup',()=>{
    console.log(' key up... ' );
    
});

// which button has pressed