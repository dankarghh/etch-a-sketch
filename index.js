const grid = document.querySelector(".grid-container");
const reset = document.querySelector(".btnReset");
const btnNewGrid = document.querySelector(".btnNewGrid");

//create function to create initial grid

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    grid.style.gridTemplateColumns = `repeat(16, 1fr)`;
    div.classList.add("square");
    grid.appendChild(div);
  }
};

createGrid();

//create user specified grid with prompted grid size

createNewGrid = () => {
  grid.innerHTML = "";
  let x = prompt(Number);
  for (let i = 0; i < x * x; i++) {
    grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

btnNewGrid.addEventListener("click", createNewGrid);

let square = grid.querySelectorAll("div");

//add event listener to each square and change background if mouseovered

square.forEach((square) =>
  square.addEventListener("mouseover", (e) => {
    square.classList.add("black");
  })
);

reset.addEventListener("click", function (e) {
  grid.innerHTML = "";
  createGrid();
  square = grid.querySelectorAll("div");
  square.forEach((square) =>
    square.addEventListener("mouseover", (e) => {
      square.classList.add("black");
    })
  );
});
