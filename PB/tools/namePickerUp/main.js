let rootElement = document.querySelector("#root");
let pickUpElementButton = document.querySelector("#pick_up");
let restartElementButton = document.querySelector("#restart");

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

const getUniqueElement = () => {
  const ElementIndex = genRandomIndex();
  const getStudent = students[ElementIndex];
  students.splice(ElementIndex, 1);
  return getStudent;
};

function onPickUpHandler() {
  rootElement.innerHTML = getUniqueElement();
}

function onRestartHandler() {
  rootElement.innerHTML = "";
}

pickUpElementButton.addEventListener("click", onPickUpHandler);
restartElementButton.addEventListener("click", onRestartHandler);
//console.log(getUniqueElement());
