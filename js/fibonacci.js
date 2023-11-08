document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("fibonacci-container");
  const context = container.getContext("2d");

  const fibonacciColors = ["#ff5733", "#33ff57", "#5733ff", "#ff3357", "#57ff33"];
  const scale = 10;
  let a = 0;
  let b = 1;
  let temp;
  let x = 200; // Adjust these based on your container size
  let y = 200; // Adjust these based on your container size
  let angle = 0;
  let iterations = 10; // Adjust the number of iterations
  let currentIteration = 0;

  function drawLine() {
    context.beginPath();
    context.strokeStyle = fibonacciColors[currentIteration % fibonacciColors.length];
    context.lineWidth = 2;

    // Draw a line
    context.moveTo(x, y);
    x += scale * Math.cos(angle);
    y += scale * Math.sin(angle);
    context.lineTo(x, y);
    context.stroke();

    // Calculate the next Fibonacci number
    const c = a + b;
    a = b;
    b = c;

    // Update the angle for the next iteration
    angle += Math.PI / 2;

    currentIteration++;

    if (currentIteration < iterations) {
      requestAnimationFrame(drawLine); // Continue to the next iteration
    } else {
      console.log("Finished drawing.");
    }
  }

  // Start the drawing
  requestAnimationFrame(drawLine);
});
