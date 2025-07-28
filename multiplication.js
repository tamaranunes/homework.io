let num1, num2;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 12) + 1;
  num2 = Math.floor(Math.random() * 12) + 1;
  document.getElementById("question").textContent = `What is ${num1} × ${num2}?`;
  document.getElementById("answer").value = '';
  document.getElementById("feedback").textContent = '';
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const correctAnswer = num1 * num2;
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "🎉 Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Oh no! It's ${correctAnswer}`;
    feedback.style.color = "blue";
  }
}

function nextQuestion() {
  generateQuestion();
}

window.onload = generateQuestion;
