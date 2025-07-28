let correctAnswer = 0;

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 20);
  const num2 = Math.floor(Math.random() * 20);
  correctAnswer = num1 + num2;
  document.getElementById("question").textContent = `What is ${num1} + ${num2}?`;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "🎉 Correct! Well done!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Oops! The correct answer was ${correctAnswer}.`;
    feedback.style.color = "red";
  }
}

// Generate a question when the page loads
window.onload = generateQuestion;
