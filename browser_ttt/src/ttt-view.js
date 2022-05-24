class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    console.log("view constructed")
  }

  setupBoard() {

    const board = document.createElement('ul');

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const li = document.createElement('li');
        li.dataset.pos = JSON.stringify([i, j]);
        li.dataset.value = 'X';
        board.appendChild(li);
      }
    }
    console.log("board set up");
    this.el[0].appendChild(board);
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
