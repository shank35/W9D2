const View = require("./ttt-view.js");
// require appropriate file
const Game = require("../ttt_node/game.js");
// require appropriate file


const game = new Game();



document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".ttt");
  const view = new View(game, container);
});
