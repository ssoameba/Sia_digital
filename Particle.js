class Particle {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

 //   this.c = color(0);
    
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    this.w = 50;
    this.wall = 45;
  }

  addForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.checkEdge();
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  }


  checkEdge() {
    if (this.pos.y >= height - this.w/2) {
      this.vel.y = this.vel.y * -1;
      this.pos.y = height - this.w/2;
    }
    
    if (this.pos.x >= width - this.wall) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = width - this.wall;
    } else if (this.pos.x <= this.wall) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = this.wall;
    }
  }


  show() {
    fill(this.r, this.g, this.b);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);

    if(this.pos.x >= width) {
      this.w = this.w * 1.1;
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
    } else if(this.pos.x <= 0) {
      this.w = this.w * 1.1;
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
    }
  }
}
