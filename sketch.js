const NUM_DOTS = 100;
const LINK_THRESHOLD = 200;
let ballArray = []
;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Populate all arrays
  for (let i = 0; i < NUM_DOTS; i++) {
    ball = {
      xpos: random (0, width),
      ypos: random (0, height),
      xdir: random (-1, 1),
      ydir: random (-1, 1),
      size: random (10, 20),
      colour: random (0, 255),
    };
    ballArray.push(ball);
  }
}

function draw() {
  background(30);
  // For each ball
  for (let i = 0; i < ballArray.length; i++) {
    // TO-DO: For all other balls, 
    // calculate the distance between this ball and the other ball
    for( let j=0; j<ballArray.length;j++){
      let distance  = calcDistance (ballArray[i],ballArray[j]);
      // If the distance is closer than LINK_THRESHOLD,
      // draw a line between both balls
      let monoColor = 255 - 255 * distance / LINK_THRESHOLD;
      if (distance < LINK_THRESHOLD) {
        stroke(monoColor, 70, 80);
        line(ballArray[i].xpos,ballArray[i].ypos,ballArray[j].xpos,ballArray[j].ypos);
      }
    }
    // TO-DO: Update position of this ball
      ballArray[i].xpos = ballArray[i].xpos + ballArray[i].xdir;
      ballArray[i].ypos = ballArray[i].ypos + ballArray[i].ydir;
    // TO-DO: If the ball has hit the borders, bounce
    if (ballArray[i].xpos < 0 || ballArray[i].xpos > width) {
      ballArray[i].xdir = -ballArray[i].xdir;
    }
    if (ballArray[i].ypos < 0 || ballArray[i].ypos > height) {
      ballArray[i].ydir = -ballArray[i].ydir;
    }
    ellipse(ballArray[i].xpos, ballArray[i].ypos, 1, 1);
  }
}

function calcDistance(ball1, ball2) {
  let dist = sqrt((ball1.xpos - ball2.xpos) ** 2 + (ball1.ypos - ball2.ypos) ** 2);
  return dist;
}


