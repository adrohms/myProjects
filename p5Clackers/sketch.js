let origin;
let anchor;
let speed;
let restLength = 20;
let k = 0.02;
let spring;
let gravity;
function setup() {
  createCanvas(650, 500);
  anchor = createVector(325,50);
  ball = createVector(325,200);
  speed = createVector(0,0);
  gravity = createVector(0, 3);
}


function draw() {
  background(120,50,120);
  

  line(anchor.x,anchor.y,ball.x,ball.y);
  circle(ball.x,ball.y,48);
  fill(45, 197, 244);
  stroke(0,0,0);
  strokeWeight(5);
  if(mouseIsPressed){
    ball.x = mouseX;
    ball.y = mouseY;
    speed.set(0,0);
  }
  let v = p5.Vector.sub(ball, anchor); //ball - anchor
  let x = v.mag() - restLength; //distance: origin -> anchor | x from F = -K.x
  v.normalize() //vetor unitário
  let force = v.mult(-1*k*x);
  speed.add(force);
  speed.add(gravity);
  ball.add(speed);
  speed.mult(0.99);
}