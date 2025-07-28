let num1, num2;

function newQuestion() {
  num1 = Math.floor(Math.random() * 20) + 1;
  num2 = Math.floor(Math.random() * 20) + 1;

  if (num2 > num1) {
    [num1, num2] = [num2, num1]; // ensure positive result
  }

  document.getElementById("question").textContent = `What is ${num1} - ${num2}?`;
  document.getElementById("answer").value = '';
  document.getElementById("feedback").textContent = '';
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const correctAnswer = num1 - num2;
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "🎉 Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Oops! It's ${correctAnswer}`;
    feedback.style.color = "red";
  }
}

window.onload = newQuestion;
