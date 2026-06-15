export class Gameboard {
  cells;
  ships;

  constructor() {
    this.cells = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  }

  isShipPlaceable(ship, x, y) {
    // controllo che la nave possa essere messa lì
    // verifica coordinate valide:
    if(y < 0 || y > this.cells.length -1 || x < 0 || x > this.cells[0].length - 1){
        return false;
    }

    if (this.cells[y][x] === 0) {
      // prima cella libera
          // Se nave orizzontale
          if (ship.direction === 0) {
            // verifico prima di tutto che non superi i bordi
            if (ship.length <= this.cells[y].length - x) {
              // non supera i bordi
              // controllo che non ci siano altre navi nelle caselle
              for (let i = 0; i < ship.length; i++) {
                if (this.cells[y][x + i] === 0) {
                  // cella libera
                } else {
                  // almeno una cella occupata
                  return false;
                }
              }
              // se ho passato il controllo
              return true;
            } else {
              // la nave supera i bordi
              return false;
            }
          }
        // Se nave verticale
        if (ship.direction === 1) {
            // verifico prima di tutto che non superi i bordi
            if (ship.length <= this.cells.length - y) {
                // non supera i bordi
                // controllo che non ci siano altre navi nelle caselle
                for (let i = 0; i < ship.length; i++) {
                    if (this.cells[y+i][x] === 0) {
                        // cella libera
                    } else {
                        // almeno una cella occupata
                        return false;
                    }
                }
                // se ho passato il controllo
                return true;
            } else {
                // la nave supera i bordi
                return false;
            }
        }
    } else {
      // prima cella occupata
      return false;
    }
  }

  placeShip(ship, x, y) {
    // controllo che
  }

  receiveAttack(x, y) {}
}
