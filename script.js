"use strict";

const createGrid = function (size) {
  const containerDiv = document.querySelector(".grid__container");
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

createGrid(10);
