

export default class Player {
  constructor(
    public id: string,
    public name: string,
    public x: number = 0,
    public y: number = 0,
    public angle: number = 0,
    public speed: number = 0,
    public health: number = 100,
    public score: number = 0
  ) {}

  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }

  rotate(angleDelta: number) {
    this.angle += angleDelta;
  }

  takeDamage(amount: number) {
    this.health -= amount;
    if (this.health < 0) this.health = 0;
  }

  heal(amount: number) {
    this.health += amount;
    if (this.health > 100) this.health = 100;
  }
}