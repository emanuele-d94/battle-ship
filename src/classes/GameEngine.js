import {Ship} from "./Ship";
import {Gameboard} from "./Gameboard";
import {Player} from "./Player";
import {renderInterface} from "../components/GameInterface";

export function game(gameState){
    let players = setup();
    renderInterface(players.player1, players.player2);
}

function setup(){
    console.log("Game started!");

    let player2Gameboard = new Gameboard(10)
    let player2 = new Player("computer",player2Gameboard);
    // Metto le navi nella board del computer in modo fisso
    // Direction: 0 horizontal 1 vertical
    let player2_ship_1 = new Ship(1,0)  // 1x1 horizontal
    let player2_ship_2 = new Ship(2,1)  // 1x2 vertical
    let player2_ship_3 = new Ship(3,0)  // 1x3 horizontal
    let player2_ship_4 = new Ship(4,1)  // 1x4 vertical
    let player2_ship_5 = new Ship(5,0)  // 1x5 horizontal

    player2.gameboard.placeShip(player2_ship_1,0,0)   // (0,0)
    player2.gameboard.placeShip(player2_ship_2,2,2)   // (2,2) (2,3)
    player2.gameboard.placeShip(player2_ship_3,4,4)   // (4,4) (5,4) (6,4)
    player2.gameboard.placeShip(player2_ship_4,2,5)   // (6,4) (6,5) (6,6) (6,7)
    player2.gameboard.placeShip(player2_ship_5,5,9)   // (5,9) (6,9) (7,9) (8,9) (9,9)

    console.log('Player2 cells: ',player2.gameboard.cells)

    let player1Gameboard = new Gameboard(10)
    let player1 = new Player("user",player1Gameboard);

    let player1_ship_1 = new Ship(1,0)  // 1x1 horizontal
    let player1_ship_2 = new Ship(2,1)  // 1x2 vertical
    let player1_ship_3 = new Ship(3,0)  // 1x3 horizontal
    let player1_ship_4 = new Ship(4,1)  // 1x4 vertical
    let player1_ship_5 = new Ship(5,0)  // 1x5 horizontal

    player1.gameboard.placeShip(player1_ship_1,0,0)   // (0,0)
    player1.gameboard.placeShip(player1_ship_2,2,2)   // (2,2) (2,3)
    player1.gameboard.placeShip(player1_ship_3,4,4)   // (4,4) (5,4) (6,4)
    player1.gameboard.placeShip(player1_ship_4,2,5)   // (6,4) (6,5) (6,6) (6,7)
    player1.gameboard.placeShip(player1_ship_5,5,9)   // (5,9) (6,9) (7,9) (8,9) (9,9)

    console.log('Player1 cells: ',player2.gameboard.cells)


    return {'player1':player1,'player2':player2}
}
