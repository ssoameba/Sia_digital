let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  if (mouseIsPressed){
    let wind = createVector(0.01, 0);
    ball.addForce(wind);
  }
  let gravity = createVector(0, 0.1);
  ball.addForce(gravity);


  ball.update();
  ball.show();
}
