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
    let l;
    let h;
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
    // Verifica che non ci siano altre navi nelle stesse caselle o nella griglia intorno
    if (ship.direction === 0) {
      // Nave orizzontale
      for (let i = 0; i < l; i++) {
        // CONTROLLO SULLE STESSE CELLE
        if (this.cells[y][x + i] !== 0) {
          // cella occupata
          return false;
        }

        // CONTROLLO SULLE CELLE INTORNO
        // CELLE SU (escluse quelle esterne alla griglia)
        if(y-1 >= 0){
          if (this.cells[y-1][x + i] !== 0) {
            // cella occupata
            return false;
          }
        }
        // CELLE GIU (escluse quelle esterne alla griglia)
        if(y+1 < H){
          if (this.cells[y+1][x + i] !== 0) {
            // cella occupata
            return false;
          }
        }

        // CELLE SINISTRA - SINISTRA SU - SINISTRA GIU (escluse quelle esterne alla griglia)
        if( i === 0 && x - 1 >= 0 ){
          // SINISTRA
          if (this.cells[y][x - 1] !== 0) {
            // cella occupata
            return false;
          }
          // SINISTRA SU
          if(y-1 >=0){
            if (this.cells[y-1][x - 1] !== 0) {
              // cella occupata
              return false;
            }
          }
          // SINISTRA GIU
          if(y+1 < H){
            if (this.cells[y+1][x - 1] !== 0) {
              // cella occupata
              return false;
            }
          }

        }

        // CELLE DESTRA - DESTRA SU - DESTRA GIU (escluse quelle esterne alla griglia)
        if( i === l-1 && x + i + 1 < L ){
          // DESTRA
          if (this.cells[y][x + i + 1] !== 0) {
            // cella occupata
            return false;
          }
          // DESTRA SU
          if(y-1 >=0){
            if (this.cells[y-1][x + i + 1] !== 0) {
              // cella occupata
              return false;
            }
          }
          // DESTRA GIU
          if(y+1 < H){
            if (this.cells[y+1][x + i + 1] !== 0) {
              // cella occupata
              return false;
            }
          }
        }

      }
    } //NAVE ORIZZONTALE END


    if (ship.direction === 1) {
      // Nave verticale
      for (let i = 0; i < h; i++) {
        // CONTROLLO SULLE STESSE CELLE
        if (this.cells[y + i][x] !== 0) {
          // cella occupata
          return false;
        }

        // CONTROLLO SULLE CELLE INTORNO
        // CELLE SINISTRA (escluse quelle esterne alla griglia)
        if(x-1 >= 0){
          if (this.cells[y+i][x-1] !== 0) {
            // cella occupata
            return false;
          }
        }
        // CELLE DESTRA (escluse quelle esterne alla griglia)
        if(x+1 < L){
          if (this.cells[y+i][x + 1] !== 0) {
            // cella occupata
            return false;
          }
        }

        // CELLE SU - SINISTRA SU - DESTRA SU (escluse quelle esterne alla griglia)
        if( i === 0 && y - 1 >= 0 ){
          // SU
          if (this.cells[y -1 ][x] !== 0) {
            // cella occupata
            return false;
          }
          // SINISTRA SU
          if(x-1 >=0){
            if (this.cells[y-1][x - 1] !== 0) {
              // cella occupata
              return false;
            }
          }
          // DESTRA SU
          if(x+1 < L){
            if (this.cells[y-1][x + 1] !== 0) {
              // cella occupata
              return false;
            }
          }

        }

        // CELLE GIU - SINISTRA GIU - DESTRA GIU (escluse quelle esterne alla griglia)
        if( i === h-1 && y + i + 1 < H ){
          // GIU
          if (this.cells[y + i + 1][x] !== 0) {
            // cella occupata
            return false;
          }
          // SINISTRA GIU
          if(x-1 >=0){
            if (this.cells[y+i+1][x - 1] !== 0) {
              // cella occupata
              return false;
            }
          }
          // DESTRA GIU
          if(x+1 < L){
            if (this.cells[y+i+1][x + 1] !== 0) {
              // cella occupata
              return false;
            }
          }
        }
      }


    } //NAVE VERTICALE END

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
    } else{
      console.log("Ship not placeable");
    }
  }

  receiveAttack(x, y) {
      if(this.cells[y][x] === 0){
          this.cells[y][x] = -1;
          return true;
      }
      else if(this.cells[y][x] !== -1){
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
