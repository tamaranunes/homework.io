let dividend, divisor;

function newQuestion() {
  divisor = Math.floor(Math.random() * 12) + 1;
  const quotient = Math.floor(Math.random() * 12) + 1;
  dividend = divisor * quotient; // ensures clean division

  document.getElementById("question").textContent = `What is ${dividend} ÷ ${divisor}?`;
  document.getElementById("answer").value = '';
  document.getElementById("feedback").textContent = '';
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const correctAnswer = dividend / divisor;
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "🎉 Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Oh dear! It's ${correctAnswer}`;
    feedback.style.color = "red";
  }
}

window.onload = newQuestion;
