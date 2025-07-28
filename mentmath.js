document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.getElementById("hover-arrow");
  const buttons = document.querySelectorAll(".nav a");

  function positionArrowOver(button) {
    const arrowLeft = button.offsetLeft + (button.offsetWidth / 2) - (arrow.offsetWidth / 2);
    const arrowTop = button.offsetTop - arrow.offsetHeight - 10;
    arrow.style.left = `${arrowLeft}px`;
    arrow.style.top = `${arrowTop}px`;
    arrow.style.visibility = "visible";
  }

  // Start above the first button
  positionArrowOver(buttons[0]);

  // Move when hovering over buttons
  buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      positionArrowOver(button);
    });
  });
});
