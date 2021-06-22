

//localStorage.setItem('background','lightgreen');
console.log(localStorage);

if(localStorage){
    //getting the latest color from local storage 
    document.body.style.background = localStorage.getItem('background')
}

const btnRed = document.querySelector('#btnRed')
const btnGreen = document.querySelector('#btnGreen')
const btnBlue = document.querySelector('#btnBlue');

btnRed.addEventListener('click', ()=>{
    localStorage.setItem('background','red');
    document.body.style.background = localStorage.getItem('background')

});

btnGreen.addEventListener('click', ()=>{
    localStorage.setItem('background','lightgreen');
    document.body.style.background = localStorage.getItem('background')
})
btnBlue.addEventListener('click', ()=>{
    localStorage.setItem('background','lightblue');
    document.body.style.background = localStorage.getItem('background')

});
///////////////////////////////////////////////////////////////////////

//const skills = ['javascript','Github','React','Node.js'];
// add to localstorage 
//localStorage.setItem('skills' , JSON.stringify(skills));

function getFromLocalStorage(){
const storedSkills = localStorage.getItem('skills');

console.log(storedSkills[0]);

console.log(JSON.parse(storedSkills));

const skillsFromStorage = JSON.parse(storedSkills);

skillsFromStorage.forEach(item => {
    console.log(item);
    const h3 = document.createElement('h2');
    h3.innerText = item
    document.body.appendChild(h3)
});
}


////////////////////////////////////////////////////////////////
//add skills to localsorage
const skill = document.querySelector('#skill');
const addSkill = document.querySelector('#addSkill');

addSkill.addEventListener('click', ()=>{
    console.log(skill.value);;
   // 
    // check if the input no empty
    if(skill.value !==''){
        const skillsArr = JSON.parse(localStorage.getItem('skills'));
        console.log(skillsArr);
        skillsArr.push(skill.value);
        localStorage.setItem('skills',JSON.stringify(skillsArr));
        skill.value = '';
        getFromLocalStorage()
    }
})

