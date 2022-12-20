let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  if (mouseIsPressed){
    let wind = createVector(0.1, 0);
    ball.addForce(wind);
  }
  let gravity = createVector(0, 0.2);
  ball.addForce(gravity);


  ball.update();
  ball.show();
}
