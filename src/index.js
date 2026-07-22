import './style.css';
import {game} from "./classes/GameEngine";

let gameState = {
    currentTurn : '',
    isGameOver : false
}

game(gameState);
