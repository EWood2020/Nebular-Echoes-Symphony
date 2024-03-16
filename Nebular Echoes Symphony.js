function setup() {
  createCanvas(1920, 1080);
  noLoop(); // Disable continuous drawing
  background(0); // Black background for deep space effect
}

function draw() {
  let cols = 10; // Number of columns in the matrix
  let rows = 5; // Number of rows in the matrix
  let spacingX = width / cols; // Horizontal spacing between fractals
  let spacingY = height / rows; // Vertical spacing between fractals

  // Parameters for the Nebular Echoes shape
  let startRadius = 20; // The radius of the central shape
  let branches = 3; // Number of branches
  let maxDepth = 4; // Maximum depth of recursion
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let posX = i * spacingX + spacingX / 2; // X position for the shape
      let posY = j * spacingY + spacingY / 2; // Y position for the shape
      
      drawNebularEcho(posX, posY, startRadius, branches, maxDepth);
    }
  }
}

function drawNebularEcho(x, y, radius, branches, depth) {
  if (depth === 0) return;

  // Calculate the angle between each branch
  let angleBetween = TWO_PI / branches;
  
  // Draw each branch
  for (let i = 0; i < branches; i++) {
    let angle = angleBetween * i;
    let endX = x + cos(angle) * radius;
    let endY = y + sin(angle) * radius;
    
    stroke(255, 150);
    strokeWeight(2);
    line(x, y, endX, endY);
    
    // Recursive call for each branch
    drawNebularEcho(endX, endY, radius * 0.7, branches, depth - 1);
  }
}
