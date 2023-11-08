document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("fibonacci-container");
  const context = container.getContext("2d");

  const fibonacciColors = ["#ff5733", "#33ff57", "#5733ff", "#ff3357", "#57ff33"];

  function drawFibonacciSpiral(n, delay) {
    console.log("drawing...");
    let a = 0;
    let b = 1;
    const goldenRatio = 1.61803398875;
    const scale = 5;
    let x = container.width / 2; // Start at the center of the container
    let y = container.height / 2; // Start at the center of the container

    function drawNextLine() {
      context.beginPath();
      context.strokeStyle = fibonacciColors[n % fibonacciColors.length];
      context.lineWidth = 2;

      // Draw a line
      context.moveTo(x, y);
      x += scale * goldenRatio ** (n - 1) * Math.cos(2 * Math.PI * n / goldenRatio);
      y += scale * goldenRatio ** (n - 1) * Math.sin(2 * Math.PI * n / goldenRatio);
      context.lineTo(x, y);
      context.stroke();

      console.log(x + ", " + y); // Log coordinates

      // Calculate the next Fibonacci number
      const c = a + b;
      a = b;
      b = c;

      n--;

      if (n > 0) {
        setTimeout(drawNextLine, delay);
      } else {
        console.log("Finished drawing.");
      }
    }

    drawNextLine();
  }

  // Set the canvas size
  container.width = 400; // Adjust the canvas width as needed
  container.height = 400; // Adjust the canvas height as needed

  // Adjust the number of iterations and delay as needed
  drawFibonacciSpiral(30, 500); // 30 iterations with a 500 ms delay between lines
});
