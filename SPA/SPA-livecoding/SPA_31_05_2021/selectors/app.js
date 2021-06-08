// getElementById
const main = document.getElementById('main');
//console.log(main);
main.style.color = "red";



// getElementsByTagName
const divs = document.getElementsByTagName('div');
console.log(divs);
//divs[0].style.color = "green"

// divs.forEach(item => {
//     console.log(item);
// });
console.log(typeof divs);
console.log(divs.length);

// getElementsByName
const inputs = document.getElementsByName("email")
console.log(inputs);
inputs[0].value = "john@gmail.com";

//
for( let item of divs){
    console.log('item',item);
}
Array.from(divs).forEach(item=>{
    item.style.border = "1px solid brown"
})
