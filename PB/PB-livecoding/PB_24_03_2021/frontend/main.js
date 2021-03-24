//  <div id="root"></div>

//SPA
let rootElement = document.querySelector("#root");

//rootElement.innerHTML = "javascript here!";

const list = ["Call Alex", "Go to the gym"];

function render() {
  let str = "";
  /**
   str = ""
   str = "<li>Call Alex</li>"
   str = "<li>Call Alex</li> <li>Go to the gym</li>"
   */
  for (var i = 0; i < list.length; i++) {
    str += `<li>${list[i]}</li>`;
  }
  return str;
}

//SPA
rootElement.innerHTML = `
<ul style='list-style: none;'>
${render()}
</ul>
`;
