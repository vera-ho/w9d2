class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {

    this.board = document.createElement('ul');

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const li = document.createElement('li');
        li.dataset.pos = JSON.stringify([i, j]);
        li.dataset.value = '';
        this.board.appendChild(li);
      }
    }
    this.el[0].appendChild(this.board);
  }
  
  bindEvents() {}

  handleClick(e) {
    const pos = JSON.parse(e.target.dataset.pos);
    this.game.playMove(pos);
    let mark = this.game.currentPlayer;
    e.target.dataset.value = mark;
    e.target.textContent = mark;
    e.target.style.backgroundColor = 'white';
    
    if (this.game.winner()) {
      alert(this.game.winner());
    }
  }

  makeMove(square) {}

}

module.exports = View;
