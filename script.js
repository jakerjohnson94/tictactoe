let currentPlayer = "X";
let nextPlayer = "O";

let playerSelections = [];
let playerXSelections = [];
let playerOSelections = [];
const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]
const cells = document.querySelectorAll("td");

for (cell of cells) {
  cell.addEventListener("click", handleClick);
}

function checkWinner(selections) {
  for (combos of winningCombinations) {
    let matches = 0;
    for (cell of combos) {
      if (selections.includes(cell)) {
        matches++;
      } else {
        break;
      }
      if (matches === 3) {
        return true;
      }
    }
  }
}
function checkDraw() {
  return playerOSelections.length + playerXSelections.length >= cells.length;
}

function resetGame() {
  playerXSelections = [];
  playerOSelections = [];
  for (cell of cells) {
    cell.textContent = "";
  }
}
function handleClick(event) {
  const cell = event.target;
  console.log(cell.id);
  cell.textContent = currentPlayer;

  if (currentPlayer === "X") {
    playerSelections = playerXSelections;
    nextPlayer = "O";
  } else {
    playerSelections = playerOSelections;
    nextPlayer = "X";
  }
  playerSelections.push(parseInt(cell.id));


  if (checkWinner(playerSelections)) {
    alert(`Player ${currentPlayer} wins!`);
    resetGame();
  }

  if (checkDraw()) {
    alert("Draw!");
    resetGame();
  }


  currentPlayer = nextPlayer;
}
