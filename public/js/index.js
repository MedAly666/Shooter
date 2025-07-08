// src/classes/Player.ts
class Player {
  id;
  name;
  x;
  y;
  angle;
  speed;
  health;
  score;
  constructor(id, name, x = 0, y = 0, angle = 0, speed = 0, health = 100, score = 0) {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.speed = speed;
    this.health = health;
    this.score = score;
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
  rotate(angleDelta) {
    this.angle += angleDelta;
  }
  takeDamage(amount) {
    this.health -= amount;
    if (this.health < 0)
      this.health = 0;
  }
  heal(amount) {
    this.health += amount;
    if (this.health > 100)
      this.health = 100;
  }
}

// src/index.ts
var player = new Player("1", "Player1");
player.move(5, 10);
console.log("Player class extended with move method");
