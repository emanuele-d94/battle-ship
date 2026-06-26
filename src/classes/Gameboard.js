export class Gameboard {
  cells;
  ships;

  constructor(n) {
    this.cells = Array.from({ length: n }, () => Array(n).fill(0));
    this.ships = [];
  }

  isShipPlaceable(ship, x, y) {
    const L = this.cells[0].length;
    const H = this.cells.length;
    let l = 0;
    let h = 0;
    if (ship.direction === 0) {
      l = ship.length;
      h = 1;
    } else {
      l = 1;
      h = ship.length;
    }

    // Verifica che le coordinate passate non siano negative o superiori a L e H (fuori dalla griglia)
    if (x < 0 || x >= L || y < 0 || y >= H) {
      return false;
    }

    // Verifica che la nave non sia più grande della griglia
    if (l > L || h > H) {
      return false;
    }
    // Verifica che la nave non strabordi dalla griglia
    if (l > L - x || h > H - y) {
      return false;
    }
    // Verifica che non ci siano altre navi nelle stesse caselle
    if (ship.direction === 0) {
      // Nave orizzontale
      for (let i = 0; i < l; i++) {
        if (this.cells[y][x + i] === 0) {
          // cella libera
        } else {
          // almeno una cella occupata
          return false;
        }
      }
    }
    if (ship.direction === 1) {
      // Nave verticale
      for (let i = 0; i < h; i++) {
        if (this.cells[y + i][x] === 0) {
          // cella libera
        } else {
          // almeno una cella occupata
          return false;
        }
      }
    }
    // Verifica che ci sia almeno una casella libera intorno
    // Definiamo i confini del rettangolo di controllo intorno alla nave
    // (Incluso 1 quadrato di "cuscinetto" in ogni direzione)
    const startY = Math.max(0, y - 1);
    const endY = Math.min(H - 1, y + 1);

    const startX = Math.max(0, x - 1);
    const endX = Math.min(L - 1, l + 1);

    // Facciamo un doppio ciclo su questa piccola sotto-griglia
    for (let row = startY; row <= endY; row++) {
      for (let col = startX; col <= endX; col++) {
        if (this.cells[row][col] !== 0) {
          return false; // Trovata un'altra nave
        }
      }
    }
    // se ho passato i controlli
    return true;
  }

  placeShip(ship, x, y) {
    if (this.isShipPlaceable(ship, x, y)) {
      if (ship.direction === 0) {
        // ship horizontal
        for (let i = 0; i < ship.length; i++) {
          this.cells[y][x + i] = ship; // Sommiamo i a x
        }
      } else {
        // ship vertical
        for (let i = 0; i < ship.length; i++) {
          this.cells[y + i][x] = ship; // Sommiamo i a y
        }
      }
      this.ships.push(ship);
    }
  }

  receiveAttack(x, y) {
      if(this.cells[y][x] === 0){
          this.cells[y][x] = -1;
          return true;
      }
      else if(this.cells[y][x] != -1){
          // E' una nave
          this.cells[y][x].hitShip();
          return true;
      } else {
          // punto già colpito
          return false;
      }
  }

  gameOver(){
      for(let ship of this.ships){
          if(ship.sunk === false)
              return false;
      }
    return true;
  }
}
