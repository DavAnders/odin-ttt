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

  return {
    display: displayBoard,
    move: makeMove,
  };
})();

Gameboard.display();

const Player = (name, symbol) => {
  return { name, symbol };
};
