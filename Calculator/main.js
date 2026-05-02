const display = document.getElementById("inputBox");
const buttons = document.querySelectorAll(".buttons input");

let expression = "";

// Loop through all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.value;

    // Replace x with *
    if (value === "x") value = "*";

    // Clear
    if (value === "C") {
      expression = "";
      display.value = "";
    }

    // Calculate
    else if (value === "=") {
      try {
        expression = eval(expression).toString();
        display.value = expression;
      } catch {
        display.value = "Error";
        expression = "";
      }
    }

    // Percentage
    else if (value === "%") {
      expression = (parseFloat(expression) / 100).toString();
      display.value = expression;
    }

    // Normal input
    else {
      expression += value;
      display.value = expression;
    }
  });
});