window.addEventListener("DOMContentLoaded", () => {
  // Game variables
  let directions = ['N', 'E', 'S', 'W'];
  let directionIndex = 0;
  let currentX = 0, currentY = 0, currentDir = directions[directionIndex];

  // Adding the default value to DOM
  const x = document.getElementById("x")
      x.innerHTML = currentX;
      const y = document.getElementById("y")
      y.innerHTML = currentY;
      const direction = document.getElementById("direction")
      direction.innerHTML = currentDir;
      

  // Selecting all grid cells
  const cells = document.querySelectorAll(".cell");

  // Adding the default value to DOM
  document.getElementById(`${currentX + "," + currentY}`).innerHTML = "X";

  // Adding event listeners to the controller buttons
  const fbutton = document.getElementById('f');
      fbutton.addEventListener('click', fHandler);

  const bbutton = document.getElementById('b');
      bbutton.addEventListener('click', bHandler);

  const lbutton = document.getElementById('l');
      lbutton.addEventListener('click', lHandler);

  const rbutton = document.getElementById('r');
      rbutton.addEventListener('click', rHandler);


  // Handling the F click button
  function fHandler () {

    // Check if ship direction is North
    if (currentDir === "N") {
      if (currentY < 4) {
        currentY++;
      } else {
        currentY = 0;
      }
    
      cells.forEach(cell => {
        cell.innerHTML = "";
      })

      // ReAssign DOM
      reAssign();

    }

    // Check if ship direction is South
    if (currentDir === "S") {
      if (currentY > 0) {
        currentY--;
      } else {
        currentY = 4;
      }
    
      cells.forEach(cell => {
        cell.innerHTML = "";
      })

      // ReAssign DOM
      reAssign();
    }

    // Check if ship direction is East
    if (currentDir === "E") {
      if (currentX < 4) {
        currentX++;
      } else {
        currentX = 0;
      }
    
      cells.forEach(cell => {
        cell.innerHTML = "";
      })

      // ReAssign DOM
      reAssign();
    }

    // Check if ship direction is West
    if (currentDir === "W") {
      if (currentX > 0) {
        currentX--;
      } else {
        currentX = 4;
      }
    
      cells.forEach(cell => {
        cell.innerHTML = "";
      })

      // ReAssign DOM
      reAssign();
    }
  }

  // Handling the B click button
  function bHandler () {

    // Check if ship direction is North
    if (currentDir === "N") {
      if (currentY > 0) {
        currentY--;
      } else {
        currentY = 4;
      }
    
      cells.forEach(cell => {
        cell.innerHTML = "";
      })

      // ReAssign DOM
      reAssign();
    }

    // Check if ship direction is South
    if (currentDir === "S") {
      if (currentY < 4) {
        currentY++;
      } else {
        currentY = 0;
      }
    
      cells.forEach(cell => {
        cell.innerHTML = "";
      })

      // ReAssign DOM
      reAssign();
    }

    // Check if ship direction is East
    if (currentDir === "E") {
      if (currentX > 0) {
        currentX--;
      } else {
        currentX = 4;
      }
    
      cells.forEach(cell => {
        cell.innerHTML = "";
      })

      // ReAssign DOM
      reAssign();
    }

    // Check if ship direction is west
    if (currentDir === "W") {
      if (currentX < 4) {
        currentX++;
      } else {
        currentX = 0;
      }
    
      cells.forEach(cell => {
        cell.innerHTML = "";
      })

      // ReAssign DOM
      reAssign();
    }
  }

  // Handling the L click button
  function lHandler () {
    if (directionIndex > 0) {
      directionIndex--;
    } else {
      directionIndex = 3;
    }

    // ReAssign DOM
    reAssignDir();
  }

  // Handling the R click button
  function rHandler () {
    if (directionIndex < 3) {
      directionIndex++;
    } else {
      directionIndex = 0;
    }

    // ReAssign DOM
    reAssignDir();
  }


  // ReAssign DOM functions
  function reAssignDir () {
    currentDir = directions[directionIndex]
    x.innerHTML = currentX;
    y.innerHTML = currentY;
    direction.innerHTML = currentDir;
  }

  function reAssign () {
    x.innerHTML = currentX;
      y.innerHTML = currentY;
      direction.innerHTML = currentDir;
      document.getElementById(`${currentX + "," + currentY}`).innerHTML = "X";
  }
})