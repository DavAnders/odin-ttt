const Gameboard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  const isValidMove = (index) => board[index] === "";

  const makeMove = (index, symbol) => {
    if (isValidMove(index)) {
      board[index] = symbol;
      return true;
    }
    return false;
  };

  const displayBoard = () => {
    console.log(board.slice(0, 3).join(" | "));
    console.log(board.slice(3, 6).join(" | "));
    console.log(board.slice(6, 9).join(" | "));
  };

  const getBoard = () => board;

  const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return {
    display: displayBoard,
    move: makeMove,
    getBoard,
    reset,
  };
})();

const Player = (name, symbol) => {
  return { name, symbol };
};

const GameController = () => {
  const players = [];
  let currentPlayerIndex = 0;

  const setPlayers = (name1, symbol1, name2, symbol2) => {
    players = [Player(name1, symbol1), Player(name2, symbol2)];
  };

  const checkWin = () => {
    const board = Gameboard.getBoard();
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns

      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      if (checkLineWin(line, board)) {
        return true;
      }
    }
    return false;
  };

  function checkLineWin(line, board) {
    const firstSymbol = board[line[0]];
    if (firstSymbol === "") return false;
    for (let i = 1; i < line.length; i++) {
      if (board[line[i]] !== firstSymbol) {
        return false;
      }
    }
    return true;
  }

  const checkTie = () => {
    const board = Gameboard.getBoard();
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        return false;
      }
    }
    return true;
  };

  const nextTurn = () => {
    currentPlayerIndex = 1 - currentPlayerIndex; // cool toggle trick
  };

  const resetGame = () => {
    Gameboard.reset();
    currentPlayerIndex = 0;
  };

  return { setPlayers, checkWin, checkTie, nextTurn, resetGame };
};
