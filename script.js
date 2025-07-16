"use strict";

const createGrid = function (size = 16) {
  const containerDiv = document.querySelector(".grid__container");
  containerDiv.innerHTML = "";
  for (let row = 0; row < size; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row", `row-${row}`);
    containerDiv.append(rowDiv);
    for (let col = 0; col < size; col++) {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col", `col-${col}`);
      colDiv.addEventListener("mouseenter", () => {
        colDiv.classList.add("hoovered");
      });
      rowDiv.append(colDiv);
    }
  }
};

const editGridSize = function () {
  const btnEdit = document.querySelector(".grid__btn-edit");
  btnEdit.addEventListener("click", () => {
    const value = Number(prompt("Enter a number that is less than 100: "));
    createGrid(value);
  });
};

createGrid();
editGridSize();
