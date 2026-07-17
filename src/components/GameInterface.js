export function renderInterface(player1,player2) {

    // Genera interfaccia a ogni iterazione
    let gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = ''; // pulizia in caso di reset

    let title = document.createElement("div");
    title.classList.add("title");

    let titleText = document.createElement("h1");
    titleText.textContent = "Battle Ship";
    title.appendChild(titleText);

    // PLAYER 1
    let player1Area = document.createElement("div");
    player1Area.classList.add("player1-area");

    let player1Data = document.createElement("div");
    player1Area.classList.add("player1-data");

    let player1Text = document.createElement("h2");
    player1Text.textContent = "Player 1";
    player1Data.appendChild(player1Text);

    player1Area.appendChild(player1Data);

    let player1Gameboard = document.createElement("div");
    player1Gameboard.classList.add("player1-gameboard");

    console.log(player1)
    for (let cell in player1.gameboard.cells) {
        let player1Cell = document.createElement("div");
        player1Cell.classList.add("square-container");
        player1Gameboard.appendChild(player1Cell);
    }

    player1Area.appendChild(player1Gameboard);

    // PLAYER 2
    let player2Area = document.createElement("div");
    player2Area.classList.add("player2-area");

    let player2Data = document.createElement("div");
    player2Area.classList.add("player2-data");

    let player2Text = document.createElement("h2");
    player2Text.textContent = "Player 2";
    player2Data.appendChild(player2Text);

    player2Area.appendChild(player2Data);

    let player2Gameboard = document.createElement("div");
    player2Gameboard.classList.add("player2-gameboard");

    for (let cell in player2.gameboard.cells) {
        let player2Cell = document.createElement("div");
        player2Cell.classList.add("square-container");
        player2Gameboard.appendChild(player2Cell);
    }

    player2Area.appendChild(player2Gameboard);

    gameContainer.appendChild(title);
    gameContainer.appendChild(player1Area);
    gameContainer.appendChild(player2Area);
}