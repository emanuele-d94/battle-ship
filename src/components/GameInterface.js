import {Ship} from "../classes/Ship";

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

    for (let i = 0;i < player1.gameboard.cells.length ; i++) {
        for(let j = 0; j < player1.gameboard.cells.length ; j++ ) {
            let player1Cell = document.createElement("div");
            let cell = player1.gameboard.cells[i][j]
            player1Cell.id = 'p1('.concat(j,',',i,')');

            if (cell === 0) {
                // --- CASO 1: ACQUA (Miss) ---
                player1Cell.classList.add("square-container");

                // Aggiungiamo l'evento click
                player1Cell.addEventListener("click", (e) => {
                    console.log('MISS SHOT');
                    // Rimuove la classe base e aggiunge quella del colpo mancato
                    e.target.classList.remove("square-container");
                    e.target.classList.add("missed-shot");

                    // Lancio la funzione che aggiorna i numeri sulla gameboard
                    player1.gameboard.receiveAttack(j,i)

                }, { once: true }); // <-- MAGIA: L'evento funziona solo 1 volta!
            } else {
                // --- CASO 2: NAVE (Hit / Sunk) ---
                player1Cell.classList.add("ship");

                // Aggiungiamo l'evento click
                player1Cell.addEventListener("click", (e) => {

                    // Rimuove la classe "ship" standard
                    e.target.classList.remove("ship");

                    // Lancio la funzione che aggiorna i numeri sulla gameboard e colpisce la nave
                    player1.gameboard.receiveAttack(j,i)

                    // Stile nave colpita
                    e.target.classList.add("ship-sunk");

                    // verifico il gameOver
                    if(player1.gameboard.gameOver()){
                        console.log('PLAYER 1 LOST!');
                    }


                }, { once: true }); // <-- Anche qui, disabilita il click successivo
            }

            player1Gameboard.appendChild(player1Cell);
        }
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

    for (let i = 0;i < player2.gameboard.cells.length ; i++) {
        for(let j = 0; j < player2.gameboard.cells.length ; j++ ) {
            let player2Cell = document.createElement("div");
            let cell = player2.gameboard.cells[i][j]
            player2Cell.id = 'p2('.concat(j,',',i,')');

            if (cell === 0) {
                // --- CASO 1: ACQUA (Miss) ---
                player2Cell.classList.add("square-container");

                // Aggiungiamo l'evento click
                player2Cell.addEventListener("click", (e) => {
                    // Rimuove la classe base e aggiunge quella del colpo mancato
                    e.target.classList.remove("square-container");
                    e.target.classList.add("missed-shot");

                    // Lancio la funzione che aggiorna i numeri sulla gameboard
                    player2.gameboard.receiveAttack(j,i)

                }, { once: true }); // <-- MAGIA: L'evento funziona solo 1 volta!
            } else {
                // --- CASO 2: NAVE (Hit / Sunk) ---
                player2Cell.classList.add("ship");

                // Aggiungiamo l'evento click
                player2Cell.addEventListener("click", (e) => {
                    // Rimuove la classe "ship" standard
                    e.target.classList.remove("ship");

                    // Lancio la funzione che aggiorna i numeri sulla gameboard e colpisce la nave
                    player2.gameboard.receiveAttack(j,i)

                    // Stile nave colpita
                    e.target.classList.add("ship-sunk");

                    // verifico il gameOver
                    if(player2.gameboard.gameOver()){
                        console.log('PLAYER 2 LOST!');
                    }

                }, { once: true }); // <-- Anche qui, disabilita il click successivo
            }


            player2Gameboard.appendChild(player2Cell);

        }
    }

    player2Area.appendChild(player2Gameboard);

    gameContainer.appendChild(title);
    gameContainer.appendChild(player1Area);
    gameContainer.appendChild(player2Area);
}