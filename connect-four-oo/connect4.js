/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

class Game {
  constructor(height, width, players) {
    this.height = height;
    this.width = width;
    this.board = this.makeBoard();
    this.playerList = players;
    this.currPlayer = players[0];
    this.handle = this.handleClick.bind(this);
    this.makeHtmlBoard();
  }

  makeBoard() {
    let board = [];
    for (let y = 0; y < this.height; y++) {
      board.push(Array.from({ length: this.width }));
    }
    return board;
  }

  makeHtmlBoard() {
    let boardHTML = document.getElementById('board');
    boardHTML.innerHTML = '';

    // make column tops (clickable area for adding a piece to that column)
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
    top.addEventListener('click', this.handle);

    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }

    boardHTML.append(top);

    // make main part of board
    for (let y = 0; y < this.height; y++) {
      const row = document.createElement('tr');

      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }

      boardHTML.append(row);
    }
  }

  findSpotForCol(x) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  placeInTable(y, x) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.style.backgroundColor = this.currPlayer.color;
    piece.style.top = -50 * (y + 2);

    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
    this.board[y][x] = this.currPlayer;
  }

  endGame(msg) {
    alert(msg);
  }

  handleClick(evt) {
    // get x from ID of clicked cell
    const x = +evt.target.id;

    // get next spot in column (if none, ignore click)
    const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }

    // place piece in board and add to HTML table
    this.board[y][x] = this.currPlayer;
    this.placeInTable(y, x);

    let nextPlayerIndex = this.playerList.indexOf(this.currPlayer) + 1;

    // check for tie
    if (this.board.every(row => row.every(cell => cell))) {
      return this.endGame('Tie!');
    }

    // check for win
    if (this.checkForWin()) {
      return this.endGame(`Player ${nextPlayerIndex} won!`);
    }

    // switch players
    // this.currPlayer = this.currPlayer === 1 ? 2 : 1;
    this.currPlayer = this.playerList[nextPlayerIndex % this.playerList.length];
  }

  _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < this.height &&
        x >= 0 &&
        x < this.width &&
        this.board[y][x] === this.currPlayer
    );
  }

  checkForWin() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

        // find winner (only checking each win-possibility as needed)
        if (
          this._win(horiz) ||
          this._win(vert) ||
          this._win(diagDR) ||
          this._win(diagDL)
        ) {
          return true;
        }
      }
    }
  }
}

class Player {
  constructor(color) {
    this.color = color;
  }
}

window.onload = function() {
  document.getElementById('new-game').addEventListener('click', function() {
    let listofPlayers = [];
    for (let player of document.querySelectorAll('input')) {
      listofPlayers.push(new Player(player.value));
    }
    let boardGame = new Game(6, 7, listofPlayers);
  });
};
