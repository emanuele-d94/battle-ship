import {Gameboard} from '../classes/Gameboard';
import {Ship} from '../classes/Ship';
import {expect, test} from "@jest/globals";

//Test generalizzato
test('Gameboard isShipPlaceable 5x1',()=>{
    const gameboard = new Gameboard(10);
    const ship = new Ship(5,0);

    expect(gameboard.isShipPlaceable(ship,-1,-1)).toBe(false);

    expect(gameboard.isShipPlaceable(ship,0,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,1,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,2,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,3,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,4,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,5,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,6,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,7,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,8,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,9,0)).toBe(false);

    expect(gameboard.isShipPlaceable(ship,10,0)).toBe(false);

    expect(gameboard.isShipPlaceable(ship,0,9)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,1,9)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,2,9)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,3,9)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,4,9)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,5,9)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,6,9)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,7,9)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,8,9)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,9,9)).toBe(false);

    expect(gameboard.isShipPlaceable(ship,10,10)).toBe(false);

    // Se c'è una nave 1x1 nella stessa riga:
    const ship1 = new Ship(1,0);
    gameboard.cells[0][0] = ship1;
    expect(gameboard.isShipPlaceable(ship,0,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,1,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,2,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,0,1)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,0,2)).toBe(true);

})

// Test generalizzato
test('Gameboard isShipPlaceable 5x1 with 1x1 in (0,0)',()=>{
    const gameboard = new Gameboard(10);
    const ship = new Ship(5,0);

    // Se c'è una nave 1x1 nella riga sopra:
    const ship1 = new Ship(1,0);
    gameboard.cells[0][0] = ship1;
    expect(gameboard.isShipPlaceable(ship,1,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,2,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,0,1)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,1,1)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,2,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,2,1)).toBe(true);

})

test('Gameboard isShipPlaceable 1x1 with 1x1 in (0,0)',()=>{
    const gameboard = new Gameboard(10);
    const ship = new Ship(1,0);

    // Se c'è una nave 1x1 nella riga sopra:
    const ship1 = new Ship(1,0);
    gameboard.cells[0][0] = ship1;
    expect(gameboard.isShipPlaceable(ship,0,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,1,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,2,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,3,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,4,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,5,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,6,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,7,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,8,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,9,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,10,0)).toBe(false);
})

test('Gameboard isShipPlaceable 5x1 with 4x1 in (0,0)',()=>{
    const gameboard = new Gameboard(10);
    const ship = new Ship(5,0);

    // Se c'è una nave 1x1 nella riga sopra:
    const ship1 = new Ship(4,0);
    gameboard.cells[0][0] = ship1;
    gameboard.cells[0][1] = ship1;
    gameboard.cells[0][2] = ship1;
    gameboard.cells[0][3] = ship1;
    expect(gameboard.isShipPlaceable(ship,0,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,1,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,2,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,3,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,4,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,5,0)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,6,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,7,0)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,0,1)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,1,1)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,2,1)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,3,1)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,4,1)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,5,1)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,6,1)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,7,1)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,0,2)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,1,2)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,2,2)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,3,2)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,4,2)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,5,2)).toBe(true);
    expect(gameboard.isShipPlaceable(ship,6,2)).toBe(false);
    expect(gameboard.isShipPlaceable(ship,7,2)).toBe(false);
})