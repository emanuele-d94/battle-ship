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
    console.log('SHIP HIT');
    this.hit++;
    this.isSunk();
  }

  isSunk() {
    if (this.hit >= this.length) {
      console.log('SHIP SUNK')
      this.sunk = true;
    }
  }
}
