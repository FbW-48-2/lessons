const btn = document.querySelector('button');
const stop = document.querySelector('#stop');
// btn.addEventListener('click' ,()=>{
//     document.body.style.backgroundColor = 'lightgreen'
// });

function changeBackground (){
    console.log( document.body.style.backgroundColor);
    const bodyBg = document.body.style.backgroundColor
    document.body.style.backgroundColor = bodyBg  == 'lightgreen' ? "" :"lightgreen"
}
btn.addEventListener('click' ,changeBackground);

stop.addEventListener('click' , ()=>{
    btn.removeEventListener('click' , changeBackground )
});






