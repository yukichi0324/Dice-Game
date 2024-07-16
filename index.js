let leftDice = 6;
let rightDice = 6;

function rollLeftDice() {
  leftDice = Math.floor(Math.random() * 6 + 1);
  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + leftDice + ".png");
}

function rollRightDice() {
  rightDice = Math.floor(Math.random() * 6 + 1);
  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + rightDice + ".png");
}

let entries = performance.getEntriesByType("navigation");
console.log("entries[0].type: ", entries[0].type);

if (entries[0].type === "reload") {
  rollLeftDice();
  rollRightDice();

  if (leftDice > rightDice) {
    document.querySelector("h1").innerHTML = "🚩 palyer 1 wins!";
  } else if (leftDice < rightDice) {
    document.querySelector("h1").innerHTML = "palyer 2 wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
