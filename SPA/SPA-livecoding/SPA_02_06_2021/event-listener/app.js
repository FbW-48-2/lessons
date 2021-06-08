// document.addEventListener('click' ,function (){
//  console.log(' click event....', Date.now());
// });

const main = document.querySelector('#main')
main.style.width = "300px"
main.style.height = "300px"
main.style.border = "1px solid black"
main.innerText = 'main div ... '

main.addEventListener('click',()=>{
 console.log(' main div click event ');
 main.style.border = '3px dotted green';
 
});
main.addEventListener('dblclick',()=>{
 console.log(' main div double click event ');
});
main.addEventListener('mouseover' , ()=>{
    main.style.backgroundColor = 'lightgreen';
    main.style.marginLeft = '100px'
    // const city = window.prompt(' please Enter your city')
    // main.innerText = ' your city is :'+city
})

function mouseOutHandler() {
    main.style.backgroundColor = 'white';
    main.style.marginLeft = '0px' 
}
main.addEventListener('mouseout' , mouseOutHandler );

main.addEventListener('mousedown', ()=>{
    document.body.style.backgroundColor = 'coral';
});
main.addEventListener('mouseup', ()=>{
    document.body.style.backgroundColor = 'white';
});
// mouseenter
// mouseleave 

// mouse move 
document.addEventListener('mousemove', (e)=>{
    console.log('moving the mouse');
    //    console.log(e.type);
    console.log('MouseX :', e.offsetX);
    console.log('MouseY :', e.offsetY);
    main.innerText = `MouseX : ${e.offsetX} , MouseY : ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},30)`
    // main.style.position = 'absolute'
    // main.style.left = `${e.pageX}px`
    // main.style.top = `${e.pageY}px`
//    main.style.borderRadius =`${e.pageY}px`
});




