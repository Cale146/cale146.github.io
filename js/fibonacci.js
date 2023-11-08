document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("fibonacci-container");
  const context = container.getContext("2d");

  const fibonacciColors = ["#ff5733", "#33ff57", "#5733ff", "#ff3357", "#57ff33"];

  function drawFibonacciSpiral(n) {
    //console.log("drawing...");
    let a = 0;
    let b = 1;
    let temp;
    const scale = 50;
    let x = 200; // Adjust these based on your container size
    let y = 200; // Adjust these based on your container size
    let angle = 0;

    for (let i = 0; i < n; i++) {
      //console.log(i);
      context.beginPath();
      context.strokeStyle = fibonacciColors[i % fibonacciColors.length];
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
    }
  }

  // Use requestAnimationFrame to ensure proper setup before drawing
  requestAnimationFrame(function () {
    drawFibonacciSpiral(30); // Adjust the number of iterations as needed
  });
});
