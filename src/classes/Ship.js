export class Ship {
  length;
  direction;
  hit;
  sunk;

  constructor(length, direction) {
    this.length = length;
    this.direction = direction; // 0 horizontal , 1 vertical
    this.hit = 0;
    this.sunk = false;
  }

  hitShip() {
    this.hit++;
  }

  isSunk() {
    if (this.hit >= this.length) {
      this.sunk = true;
    }
  }
}
