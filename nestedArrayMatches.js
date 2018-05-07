let board = [
  [1, 0, 1],
  [0, 1, 0], 
  [1, 0, 0]
];
const edgeX = board[0].length - 2;
const edgeY = board.length - 2;

function checkHorizontal() {
  for (let y in board) {
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      if (cell !== 0) {
        if (cell === board[y][x + 1] && cell === board[y][x + 2]) {
          console.log(`Horizontal match found at ${x + 1} : ${y + 1}`);
        }
      }
    }
  }
}

function checkVertical() {
  for (let y = 0; y< edgeY; y++) {
    for (let x = 0; x < board[0].length; x++) {
      let cell = board[y][x];

      if (cell !== 0) {
        if (cell === board[y+1][x] && cell === board[y+1][x]) {
          console.log(`Vertical match found at ${x + 1} : ${y + 1}`);
        }
      }
    }
  }
}

function checkDiagonalRight(){
  for (let y = 0; y< edgeY; y++) {
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      if (cell !== 0) {
        if (cell === board[y+1][x+1] && cell === board[y+2][x+2]) {
          console.log(`Down-Right Diagonal match found at ${x + 1} : ${y + 1}`);
        }
      }
    }
  }
}

function checkDiagonalLeft(){
  for (let y = 2; y< board.length; y++) {
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      if (cell !== 0) {
        if (cell === board[y-1][x+1] && cell === board[y-2][x+2]) {
          console.log(`Down-Left Diagonal match found at ${x + 1} : ${y + 1}`);
        }
      }
    }
  }
}




function checkMatches(){
checkHorizontal();
checkVertical();
checkDiagonalRight();
checkDiagonalLeft();
}


checkMatches();