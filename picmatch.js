const questionBox = document.getElementById('question-box');
const optionsDiv = document.getElementById('options');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');

let currentAnswer = null;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  feedback.textContent = '';

  const isAddition = Math.random() < 0.5;
  let num1, num2, answer;

  if (isAddition) {
    answer = getRandomInt(1, 10);
    num1 = getRandomInt(0, answer);
    num2 = answer - num1;
    questionBox.textContent = `What is ${num1} + ${num2}?`;
  } else {
    answer = getRandomInt(1, 10);
    num1 = getRandomInt(answer, 10);
    num2 = num1 - answer;
    questionBox.textContent = `What is ${num1} - ${num2}?`;
  }

  currentAnswer = answer;
  displayOptions(answer);

  nextBtn.style.display = 'none';
}

function displayOptions(correct) {
  optionsDiv.innerHTML = '';
  const options = new Set([correct]);

  // Generate 2 incorrect options
  while (options.size < 3) {
    const random = getRandomInt(1, 10);
    options.add(random);
  }

  // Shuffle and render
  Array.from(options).sort(() => 0.5 - Math.random()).forEach(num => {
    const img = document.createElement('img');
    img.src = `media/${numberToWord(num)}.png`;
    img.alt = `${num} Apples`;
    img.className = 'option';
    img.style.width = '15%';
    img.onclick = () => checkAnswer(num);
    optionsDiv.appendChild(img);
  });
}

function numberToWord(n) {
  const words = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
  return words[n];
}

function checkAnswer(selected) {
  if (selected === currentAnswer) {
    feedback.textContent = "🎉 Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Oh no! It's ${currentAnswer}`;
    feedback.style.color = "blue";
  }

  nextBtn.style.display = 'inline-block'; // ✅ Show the Next button
}


// Start the first question
generateQuestion();

