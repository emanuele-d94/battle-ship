import {Gameboard} from '../classes/Gameboard';
import {Ship} from '../classes/Ship';
import {expect, test} from "@jest/globals";

// Posizionamento orizzontale 1x1
test('Gameboard isShipPlaceable 1x1 - (0,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,0);
    expect(gameboard.isShipPlaceable(ship,0,0)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (0,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,0);
    expect(gameboard.isShipPlaceable(ship,0,1)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (0,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,0);
    expect(gameboard.isShipPlaceable(ship,0,2)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (1,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,0);
    expect(gameboard.isShipPlaceable(ship,1,0)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (1,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,0);
    expect(gameboard.isShipPlaceable(ship,1,1)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (1,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,0);
    expect(gameboard.isShipPlaceable(ship,1,2)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (2,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,0);
    expect(gameboard.isShipPlaceable(ship,2,0)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (2,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,0);
    expect(gameboard.isShipPlaceable(ship,2,1)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (2,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,0);
    expect(gameboard.isShipPlaceable(ship,2,2)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (0,-1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,0);
    expect(gameboard.isShipPlaceable(ship,0,-1)).toBe(false);
})

test('Gameboard isShipPlaceable 1x1 - (-1,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,0);
    expect(gameboard.isShipPlaceable(ship,-1,0)).toBe(false);
})

test('Gameboard isShipPlaceable 1x1 - (0,3)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,0);
    expect(gameboard.isShipPlaceable(ship,0,3)).toBe(false);
})

test('Gameboard isShipPlaceable 1x1 - (3,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,0);
    expect(gameboard.isShipPlaceable(ship,3,0)).toBe(false);
})

// Posizionamento orizzontale 1x2
test('Gameboard isShipPlaceable 1x2 - (0,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,0);
    expect(gameboard.isShipPlaceable(ship,0,0)).toBe(true);
})

test('Gameboard isShipPlaceable 1x2 - (0,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,0);
    expect(gameboard.isShipPlaceable(ship,0,1)).toBe(true);
})

test('Gameboard isShipPlaceable 1x2 - (0,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,0);
    expect(gameboard.isShipPlaceable(ship,0,2)).toBe(true);
})

test('Gameboard isShipPlaceable 1x2 - (1,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,0);
    expect(gameboard.isShipPlaceable(ship,1,0)).toBe(true);
})

test('Gameboard isShipPlaceable 1x2 - (1,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,0);
    expect(gameboard.isShipPlaceable(ship,1,1)).toBe(true);
})

test('Gameboard isShipPlaceable 1x2 - (1,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,0);
    expect(gameboard.isShipPlaceable(ship,1,2)).toBe(true);
})

test('Gameboard isShipPlaceable 1x2 - (2,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,0);
    expect(gameboard.isShipPlaceable(ship,2,0)).toBe(false);
})

test('Gameboard isShipPlaceable 1x2 - (2,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,0);
    expect(gameboard.isShipPlaceable(ship,2,1)).toBe(false);
})

test('Gameboard isShipPlaceable 1x2 - (2,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,0);
    expect(gameboard.isShipPlaceable(ship,2,2)).toBe(false);
})

test('Gameboard isShipPlaceable 1x2 - (0,-1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,0);
    expect(gameboard.isShipPlaceable(ship,0,-1)).toBe(false);
})

test('Gameboard isShipPlaceable 1x2 - (-1,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,0);
    expect(gameboard.isShipPlaceable(ship,-1,0)).toBe(false);
})

test('Gameboard isShipPlaceable 1x2 - (0,3)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,0);
    expect(gameboard.isShipPlaceable(ship,0,3)).toBe(false);
})

test('Gameboard isShipPlaceable 1x2 - (3,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,0);
    expect(gameboard.isShipPlaceable(ship,3,0)).toBe(false);
})


// Posizionamento orizzontale 1x3
test('Gameboard isShipPlaceable 1x3 - (0,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(3,0);
    expect(gameboard.isShipPlaceable(ship,0,0)).toBe(true);
})

test('Gameboard isShipPlaceable 1x3 - (0,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(3,0);
    expect(gameboard.isShipPlaceable(ship,0,1)).toBe(true);
})

test('Gameboard isShipPlaceable 1x3 - (0,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(3,0);
    expect(gameboard.isShipPlaceable(ship,0,2)).toBe(true);
})

test('Gameboard isShipPlaceable 1x3 - (1,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(3,0);
    expect(gameboard.isShipPlaceable(ship,1,0)).toBe(false);
})

test('Gameboard isShipPlaceable 1x3 - (1,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(3,0);
    expect(gameboard.isShipPlaceable(ship,1,1)).toBe(false);
})

test('Gameboard isShipPlaceable 1x3 - (1,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(3,0);
    expect(gameboard.isShipPlaceable(ship,1,2)).toBe(false);
})

test('Gameboard isShipPlaceable 1x3 - (2,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(3,0);
    expect(gameboard.isShipPlaceable(ship,2,0)).toBe(false);
})

test('Gameboard isShipPlaceable 1x3 - (2,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(3,0);
    expect(gameboard.isShipPlaceable(ship,2,1)).toBe(false);
})

test('Gameboard isShipPlaceable 1x3 - (2,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(3,0);
    expect(gameboard.isShipPlaceable(ship,2,2)).toBe(false);
})

test('Gameboard isShipPlaceable 1x3 - (0,-1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(3,0);
    expect(gameboard.isShipPlaceable(ship,0,-1)).toBe(false);
})

test('Gameboard isShipPlaceable 1x3 - (-1,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(3,0);
    expect(gameboard.isShipPlaceable(ship,-1,0)).toBe(false);
})

test('Gameboard isShipPlaceable 1x3 - (0,3)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(3,0);
    expect(gameboard.isShipPlaceable(ship,0,3)).toBe(false);
})

test('Gameboard isShipPlaceable 1x3 - (3,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(3,0);
    expect(gameboard.isShipPlaceable(ship,3,0)).toBe(false);
})

// --



// Posizionamento verticale 1x1
test('Gameboard isShipPlaceable 1x1 - (0,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,1);
    expect(gameboard.isShipPlaceable(ship,0,0)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (0,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,1);
    expect(gameboard.isShipPlaceable(ship,0,1)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (0,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,1);
    expect(gameboard.isShipPlaceable(ship,0,2)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (1,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,1);
    expect(gameboard.isShipPlaceable(ship,1,0)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (1,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,1);
    expect(gameboard.isShipPlaceable(ship,1,1)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (1,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,1);
    expect(gameboard.isShipPlaceable(ship,1,2)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (2,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,1);
    expect(gameboard.isShipPlaceable(ship,2,0)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (2,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,1);
    expect(gameboard.isShipPlaceable(ship,2,1)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (2,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,1);
    expect(gameboard.isShipPlaceable(ship,2,2)).toBe(true);
})

test('Gameboard isShipPlaceable 1x1 - (0,-1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,1);
    expect(gameboard.isShipPlaceable(ship,0,-1)).toBe(false);
})

test('Gameboard isShipPlaceable 1x1 - (-1,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,1);
    expect(gameboard.isShipPlaceable(ship,-1,0)).toBe(false);
})

test('Gameboard isShipPlaceable 1x1 - (0,3)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,1);
    expect(gameboard.isShipPlaceable(ship,0,3)).toBe(false);
})

test('Gameboard isShipPlaceable 1x1 - (3,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(1,1);
    expect(gameboard.isShipPlaceable(ship,3,0)).toBe(false);
})



// Posizionamento verticale 2x1
test('Gameboard isShipPlaceable 2x1 - (0,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,1);
    expect(gameboard.isShipPlaceable(ship,0,0)).toBe(true);
})

test('Gameboard isShipPlaceable 2x1 - (0,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,1);
    expect(gameboard.isShipPlaceable(ship,0,1)).toBe(true);
})

test('Gameboard isShipPlaceable 2x1 - (0,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,1);
    expect(gameboard.isShipPlaceable(ship,0,2)).toBe(false);
})

test('Gameboard isShipPlaceable 2x1 - (1,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,1);
    expect(gameboard.isShipPlaceable(ship,1,0)).toBe(true);
})

test('Gameboard isShipPlaceable 2x1 - (1,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,1);
    expect(gameboard.isShipPlaceable(ship,1,1)).toBe(true);
})

test('Gameboard isShipPlaceable 2x1 - (1,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,1);
    expect(gameboard.isShipPlaceable(ship,1,2)).toBe(false);
})

test('Gameboard isShipPlaceable 2x1 - (2,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,1);
    expect(gameboard.isShipPlaceable(ship,2,0)).toBe(true);
})

test('Gameboard isShipPlaceable 2x1 - (2,1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,1);
    expect(gameboard.isShipPlaceable(ship,2,1)).toBe(true);
})

test('Gameboard isShipPlaceable 2x1- (2,2)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,1);
    expect(gameboard.isShipPlaceable(ship,2,2)).toBe(false);
})

test('Gameboard isShipPlaceable 2x1 - (0,-1)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,1);
    expect(gameboard.isShipPlaceable(ship,0,-1)).toBe(false);
})

test('Gameboard isShipPlaceable 2x1 - (-1,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,1);
    expect(gameboard.isShipPlaceable(ship,-1,0)).toBe(false);
})

test('Gameboard isShipPlaceable 2x1 - (0,3)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,1);
    expect(gameboard.isShipPlaceable(ship,0,3)).toBe(false);
})

test('Gameboard isShipPlaceable 2x1 - (3,0)',()=>{
    const gameboard = new Gameboard();
    const ship = new Ship(2,1);
    expect(gameboard.isShipPlaceable(ship,3,0)).toBe(false);
})


// ToDo Crea una Gameboard con size 10x10
// Il test set puoi farlo considerando navi con lunghezza da 1, 2, 3, 4 e 5

