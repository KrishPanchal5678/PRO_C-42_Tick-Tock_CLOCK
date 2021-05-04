var hr, mn, sc;

function setup() {
  createCanvas(800,800);
}

function draw() {
  background("black");  
  translate(400 , 400);
  rotate(90)
  angleMode(DEGREES);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hr = map(hr % 12, 0, 24, 0, 360);

  push()
  rotate(hr);
  stroke("blue");
  strokeWeight(7);
  line(0 , 0 , 120 , 0);
  pop();

  noFill()
  stroke("blue")
  strokeWeight(5)
  arc(0 , 0 , 300 , 300 , 0 , hr)
  
  push()
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0 , 0 , 150 , 0);
  pop();

  noFill()
  stroke("green")
  strokeWeight(5)
  arc(0 , 0 , 350 , 350 , 0 , mnAngle)

  push()
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0 , 0 , 185 , 0);
  pop();

  noFill()
  stroke("red")
  strokeWeight(5)
  arc(0 , 0 , 400 , 400 , 0 , scAngle)

  push()
  fill("white")
  circle(0 , 0 , 20)
  pop(); 

  drawSprites();
}