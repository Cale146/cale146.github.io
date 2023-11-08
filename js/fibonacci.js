document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("fibonacci-container");
  const context = container.getContext("2d");

  const fibonacciColors = ["#ff5733", "#33ff57", "#5733ff", "#ff3357", "#57ff33"];

  function drawFibonacciSpiral(n, delay) {
    console.log("drawing...");
    let a = 0;
    let b = 1;
    let temp;
    const scale = 200;
    let x = 200; // Adjust these based on your container size
    let y = 200; // Adjust these based on your container size
    let angle = 2;

    function drawNextLine() {
      context.beginPath();
      context.strokeStyle = fibonacciColors[n % fibonacciColors.length];
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

      n--;

      if (n > 0) {
        setTimeout(drawNextLine, delay);
      } else {
        console.log("Finished drawing.");
      }
    }

    drawNextLine();
  }

  // Adjust the number of iterations and delay as needed
  drawFibonacciSpiral(30, 500); // 10 iterations with a 500 ms delay between lines
});
