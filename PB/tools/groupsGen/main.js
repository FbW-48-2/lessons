// from SPA
let rootElement = document.querySelector("#root");
let pickUpElementButton = document.querySelector("#pick_up");
let teamSizeInput = document.querySelector("#teamSize");

const students = [
  "Ebony",
  "Shinhee",
  "Habid",
  "Lucas",
  "Monishka",
  "Charli",
  "Beda",
  "Jo",
  "Norman",
  "Jonathan",
  "Luana",
  "Priya",
  "Carlos",
  "Christoph",
  "Daniel",
  "Maria Louise",
  "Aimee",
  "Tim",
  "Dalibor",
  "Martin",
  "Francesco",
  "Shreekesh",
];

const genRandomIndex = () => Math.floor(Math.random() * students.length);

const groupSize = (size) => {
  const groupM = [];
  for (let i = 0; i < size; i++) {
    const ElementIndex = genRandomIndex();
    groupM.push(students[ElementIndex]);
    students.splice(ElementIndex, 1);
  }
  return groupM;
};

const getGroups = (groupMemes) => {
  const groups = [];

  for (let i = 0; i < students.length; i++) {
    const groupS = groupSize(groupMemes);
    groups.push(groupS);
  }

  for (let i = 0; i <= students.length; i++) {
    if (students.length > 0) {
      const restStudentsIndex = genRandomIndex();
      const randomGroup = () => Math.floor(Math.random() * groups.length);
      groups[randomGroup()].push(students[restStudentsIndex]);
      students.splice(restStudentsIndex, 1);
    }
  }

  console.log(students);

  return groups;
};

//<li style='text-align: left'>test</li>
function listItemTemplate(memes) {
  let temp = "";
  for (let i = 0; i < memes.length; i++) {
    temp += `<li style='text-align: left'>${memes[i]}</li>`;
  }
  return temp;
}

function render() {
  let teamSize = teamSizeInput.value;
  // from SPA

  const groups = getGroups(teamSize);
  let temp = "";
  for (let i = 0; i < groups.length; i++) {
    temp += `<div > Group: ${i + 1}</div>
    <ol style='color: #000 '>
    ${listItemTemplate(groups[i])}
    </ol>
    <hr>
    `;
  }
  rootElement.innerHTML = temp;
}

// from SPA
pickUpElementButton.addEventListener("click", render);
restartElementButton.addEventListener("click", onRestartHandler);
//console.log(getUniqueElement());
