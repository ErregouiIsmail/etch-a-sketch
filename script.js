const parentDiv = document.querySelector(".parent");
const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");
let reset = false;

function inputPrompt() {
  let valide = false;
  while (valide === false) {
    const promptValue = prompt("Chouse your grid size between 1 and 100.", 16);
    if (promptValue == null) {
      break;
    }

    const inputValue = parseInt(promptValue);

    if (!isNaN(inputValue) && inputValue > 0 && inputValue <= 100) {
      valide = true;
      return inputValue;
    }
  }
}

function createGrid(inputValue) {
  if (inputValue != null) {
    inputs.forEach((input) => {
      input.value = inputValue;
      button.textContent = "Reset the gride.";
    });
    gridSize = Math.pow(inputValue, 2);
    const hightAndWidth = 700 / inputValue;
    for (let i = 0; i < gridSize; i++) {
      let childDiv = document.createElement("div");
      childDiv.classList.toggle("child");
      childDiv.style.boxSizing = "border-box";
      childDiv.style.border = "1px solid black";
      childDiv.style.height = hightAndWidth + "px";
      childDiv.style.width = hightAndWidth + "px";
      childDiv.addEventListener("mouseover", () => {
        childDiv.style.backgroundColor = "lightblue";
      });
      // console.log(childDiv);
      parentDiv.appendChild(childDiv);
    }
    reset = true;
  }
}

function resetGrid() {
  const children = document.querySelectorAll(".child");
  children.forEach((child) => {
    child.remove();
  });
  reset = false;
}
button.addEventListener("click", () => {
  if (reset == false) {
    createGrid(inputPrompt());
  } else {
    resetGrid();
    createGrid(inputPrompt());
  }
});
