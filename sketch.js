var student = {
name:"Ryan",
class:"7C",
rollNumber:11,
favouriteSubject: "Science",
marks:[30,35,40,42,48]
};

var ball = {
  x:50,
  y:30,
  r:30,
  velocityX:0,
  velocityY:0,
  shapeColor:["blue", "red", "green", "purple"]
};

function setup() {
  createCanvas(400, 400);
  console.log (student.name)
  console.log(student.class)
  console.log (student.rollNumber)
  student.rollNumber = 30
  console.log(student.rollNumber)
  console.log(student.favouriteSubject)
  console.log  (student.marks[2])
}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.r);
  fill(ball.shapeColor[2]);
  ball.velocityX = 1
  ball.x = ball.x + ball.velocityX
}