const form = document.querySelector('form');
const input = document.querySelector('#toDo');
const ul =  document.querySelector('#toDos');

ul.addEventListener('click', (e)=>{
    // if(e.target.nodeName === 'I'){
    //     e.target.parentElement.remove()
    // }
    if(e.target.className === 'fas fa-trash-alt'){
        e.target.parentElement.remove()
    }

});

form.addEventListener('submit' ,(event)=>{
  event.preventDefault();
  console.log(input.value);
  
  const li = document.createElement('li');
  li.innerText = input.value;
  const x = document.createElement('i');
  x.className = "fas fa-trash-alt";

  // delete todo
//   x.addEventListener('click',(e)=>{
//       e.target.parentElement.remove();
//   });
   
  li.appendChild(x)
  ul.appendChild(li);
  input.value = "";

});