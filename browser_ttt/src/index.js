const View = require("./ttt-view.js");
const Game = require("../ttt_node/game.js")
document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const game = new Game();

  const el = document.getElementsByClassName("ttt");

  const gv = new View(game, el);

});
