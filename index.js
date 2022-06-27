window.addEventListener("DOMContentLoaded", () => {
  let directions = ['N', 'E', 'S', 'W'];
  let directionIndex = 0;
  let currentX = 1, currentY = 0, currentDir = directions[directionIndex];

  document.getElementById("x").innerHTML = currentX;
  document.getElementById("y").innerHTML = currentY;
  document.getElementById("direction").innerHTML = currentDir;
  document.getElementById(`${currentX + "," + currentY}`).innerHTML = "X";
})