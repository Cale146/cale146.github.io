document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("fibonacci-container");
  const context = container.getContext("2d");

  const fibonacciColors = ["#ff5733", "#33ff57", "#5733ff", "#ff3357", "#57ff33"];

  function drawFibonacciSpiral(n) {
    console.log("drawing...");
    let a = 0;
    let b = 1;
    let temp;
    let angle = 0;
    const scale = 10;

    for (let i = 0; i < n; i++) {
      console.log(i);
      context.beginPath();
      context.strokeStyle = fibonacciColors[i % fibonacciColors.length];
      context.lineWidth = 2;

      // Calculate the next Fibonacci number
      const c = a + b;
      a = b;
      b = c;

      // Calculate the position
      const x = scale * Math.cos(angle);
      const y = scale * Math.sin(angle);

      // Draw a line
      context.moveTo(200, 200); // Adjust this based on your container size
      context.lineTo(200 + x, 200 + y); // Adjust this based on your container size
      context.stroke();

      // Update the angle for the next iteration
      angle += Math.PI / 2;
    }
  }

  drawFibonacciSpiral(10); // Adjust the number of iterations as needed
});
