// Get the screen element
const screen = document.querySelector(".number");

// Get all the buttons
const buttons = document.querySelectorAll(".btn");

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;

    if (buttonText === "C") {
      // Clear the screen
      screen.textContent = "0";
    } else if (buttonText === "=") {
      // Evaluate the expression
      try {
        const result = eval(screen.textContent);
        screen.textContent = result;
      } catch (error) {
        screen.textContent = "Error";
      }
    } else {
      // Append the button text to the screen
      if (screen.textContent === "0") {
        screen.textContent = buttonText;
      } else {
        screen.textContent += buttonText;
      }
    }
  });
});
