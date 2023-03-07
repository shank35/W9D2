class View {
  constructor(game, el) {}

  setupBoard() {
    const ul = document.createElement("ul");

    const li1 = document.createElement("li");
    li1.setAttribute("pos", li1.innerText);

    const li2 = document.createElement("li");
    li1.setAttribute("pos", li2.innerText);

    const li3 = document.createElement("li");
    li1.setAttribute("pos", li3.innerText);

    const li4 = document.createElement("li");
    li1.setAttribute("pos", li4.innerText);

    const li5 = document.createElement("li");
    li1.setAttribute("pos", li5.innerText);

    const li6 = document.createElement("li");
    li1.setAttribute("pos", li6.innerText);

    const li7 = document.createElement("li");
    li1.setAttribute("pos", li7.innerText);

    const li8 = document.createElement("li");
    li1.setAttribute("pos", li8.innerText);

    const li9 = document.createElement("li");
    li1.setAttribute("pos", li9.innerText);

  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}
  
}

module.exports = View;
