"use strict";

const containerDiv = document.querySelector(".grid__container");

const createGrid = function (size) {
  for (let row = 0; row < size; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row", `row-${row}`);
    containerDiv.append(rowDiv);
    for (let col = 0; col < size; col++) {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col", `col-${col}`);
      rowDiv.append(colDiv);
    }
  }
};

createGrid(10);
