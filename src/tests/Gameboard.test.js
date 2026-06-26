import { Gameboard } from '../classes/Gameboard';
import { Ship } from '../classes/Ship';
import { expect, test } from '@jest/globals';

//Test generalizzato
test('Gameboard isShipPlaceable 5x1', () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(5, 0);

  expect(gameboard.isShipPlaceable(ship, -1, -1)).toBe(false);

  expect(gameboard.isShipPlaceable(ship, 0, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 1, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 2, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 3, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 4, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 5, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 6, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 7, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 8, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 9, 0)).toBe(false);

  expect(gameboard.isShipPlaceable(ship, 10, 0)).toBe(false);

  expect(gameboard.isShipPlaceable(ship, 0, 9)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 1, 9)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 2, 9)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 3, 9)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 4, 9)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 5, 9)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 6, 9)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 7, 9)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 8, 9)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 9, 9)).toBe(false);

  expect(gameboard.isShipPlaceable(ship, 10, 10)).toBe(false);

  // Se c'è una nave 1x1 nella stessa riga:
  const ship1 = new Ship(1, 0);
  gameboard.cells[0][0] = ship1;
  expect(gameboard.isShipPlaceable(ship, 0, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 1, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 2, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 0, 1)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 0, 2)).toBe(true);
});

// Test generalizzato
test('Gameboard isShipPlaceable 5x1 with 1x1 in (0,0)', () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(5, 0);

  // Se c'è una nave 1x1 nella riga sopra:
  const ship1 = new Ship(1, 0);
  gameboard.cells[0][0] = ship1;
  expect(gameboard.isShipPlaceable(ship, 1, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 2, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 0, 1)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 1, 1)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 2, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 2, 1)).toBe(true);
});

test('Gameboard isShipPlaceable 1x1 with 1x1 in (0,0)', () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(1, 0);

  // Se c'è una nave 1x1 nella riga sopra:
  const ship1 = new Ship(1, 0);
  gameboard.cells[0][0] = ship1;
  expect(gameboard.isShipPlaceable(ship, 0, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 1, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 2, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 3, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 4, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 5, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 6, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 7, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 8, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 9, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 10, 0)).toBe(false);
});

test('Gameboard isShipPlaceable 5x1 with 4x1 in (0,0)', () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(5, 0);

  // Se c'è una nave 1x1 nella riga sopra:
  const ship1 = new Ship(4, 0);
  gameboard.cells[0][0] = ship1;
  gameboard.cells[0][1] = ship1;
  gameboard.cells[0][2] = ship1;
  gameboard.cells[0][3] = ship1;
  expect(gameboard.isShipPlaceable(ship, 0, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 1, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 2, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 3, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 4, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 5, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 6, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 7, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 0, 1)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 1, 1)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 2, 1)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 3, 1)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 4, 1)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 5, 1)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 6, 1)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 7, 1)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 0, 2)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 1, 2)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 2, 2)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 3, 2)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 4, 2)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 5, 2)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 6, 2)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 7, 2)).toBe(false);
});

test('Gameboard isShipPlaceable 1x5 with 1x1 in (0,0)', () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(5, 1);

  // Se c'è una nave 1x1 nella riga sopra:
  const ship1 = new Ship(1, 0);
  gameboard.cells[0][0] = ship1;
  expect(gameboard.isShipPlaceable(ship, 0, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 1, 0)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 2, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 0, 1)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 1, 1)).toBe(false);
  expect(gameboard.isShipPlaceable(ship, 2, 0)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 2, 1)).toBe(true);

  expect(gameboard.isShipPlaceable(ship, 5, 5)).toBe(true);
  expect(gameboard.isShipPlaceable(ship, 5, 6)).toBe(false);
});

test('Gameboard placeShip', () => {
  const gameboard = new Gameboard(10);

  const ship1 = new Ship(1, 0);
  gameboard.placeShip(ship1, 0, 0);
  const ship2 = new Ship(2, 0);
  gameboard.placeShip(ship2, 0, 2);
  const ship3 = new Ship(3, 0);
  gameboard.placeShip(ship3, 0, 4);
  const ship4 = new Ship(4, 0);
  gameboard.placeShip(ship4, 0, 6);
  const ship5 = new Ship(5, 0);
  gameboard.placeShip(ship5, 0, 8);

  const cells = [
    [ship1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship2, ship2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship3, ship3, ship3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship4, ship4, ship4, ship4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship5, ship5, ship5, ship5, ship5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  expect(gameboard.cells).toEqual(cells);
});

test('receiveAttack register a missed shot', () => {
    const gameboard = new Gameboard(10);

    // Spariamo a coordinate x=3, y=4
    gameboard.receiveAttack(3, 4);

    expect(gameboard.cells[4][3]).toBe(-1);
});

test('receiveAttack hits a ship', () => {
    const gameboard = new Gameboard(10);
    const ship = new Ship(3, 0); // Nave orizzontale di lunghezza 3

    // Spiamo la nave
    const hitSpy = jest.spyOn(ship, 'hitShip');

    gameboard.placeShip(ship, 2, 2); // Occupa [2][2], [2][3], [2][4]

    // Spariamo al centro della nave!
    gameboard.receiveAttack(3, 2);

    // Verifiche:
    expect(hitSpy).toHaveBeenCalledTimes(1); // La nave deve aver ricevuto il danno
    expect(gameboard.cells[2][3]).toBe(ship); // La griglia contiene ancora l'oggetto nave
    expect(gameboard.cells[2][3].hit).toBe(1); // La nave è stata colpita una volta

    // Verifica che la nave non sia ancora affondata
    expect(gameboard.cells[2][3].sunk).toBe(false); // La nave è stata colpita una volta

    // Affondo la nave!
    gameboard.receiveAttack(2, 2);
    gameboard.receiveAttack(4, 2);
    // Verifica che la nave sia affondata
    expect(gameboard.cells[2][2].hit).toBe(3); // La nave è stata colpita una volta
    expect(gameboard.cells[2][4].hit).toBe(3); // La nave è stata colpita una volta
    expect(gameboard.cells[2][3].sunk).toBe(true); // La nave è stata colpita una volta

    // Verifica di non colpire lo stesso posto due volte
    expect(gameboard.receiveAttack(5,2)).toBe(true); // Colpita l'acqua
    expect(gameboard.receiveAttack(5,2)).toBe(false); // Non posso colpire due volte
});


test('gameOver', () => {
    const gameboard = new Gameboard(10);
    const ship1 = new Ship(5, 0); // Nave orizzontale di lunghezza 5
    const ship2 = new Ship(3, 1); // Nave verticale di lunghezza 3

    gameboard.placeShip(ship1, 5, 5); // Occupa [5][5], [6][5], [7][5], [8][5], [9][5]
    gameboard.placeShip(ship2, 9, 6); // Occupa [9][6], [9][7], [9][8]

    // Affondiamo nave1
    gameboard.receiveAttack(5, 5);
    gameboard.receiveAttack(6, 5);
    gameboard.receiveAttack(7, 5);
    gameboard.receiveAttack(8, 5);
    gameboard.receiveAttack(9, 5);

    //Qualche colpo a vuoto
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(4, 4);

    // Game Not Over:
    expect(gameboard.gameOver()).toBe(false)

    // Affondiamo nave2
    gameboard.receiveAttack(9,6);
    gameboard.receiveAttack(9,7);
    gameboard.receiveAttack(9,8);

    // Game Over:
    expect(gameboard.gameOver()).toBe(true)
});