/* LOAD VOICES */

window.speechSynthesis.onvoiceschanged = () => {
  // This just ensures voices are fully loaded before you speak
};

/* SPELLING WORDS */

function spell1() {
 
  const word1 = document.getElementById('word1').value.trim().toUpperCase();
  const correctWord = localStorage.getItem('spellingWord1');
  
  if (correctWord && word1 === correctWord.toUpperCase()) {
    alert("Awesome!");
  } 
  
  else {
    alert("Oops! TRY AGAIN.");
  }
}


function spell2() {
 
  const word2 = document.getElementById('word2').value.trim().toUpperCase();
  const correctWord = localStorage.getItem('spellingWord2');
  
  if (correctWord && word2 === correctWord.toUpperCase()) {
    alert("Great spelling!");
  } 
  
  else {
    alert("Oops! TRY AGAIN.");
  }
}

function spell3() {
 
  const word3 = document.getElementById('word3').value.trim().toUpperCase();
  const correctWord = localStorage.getItem('spellingWord3');
  
  if (correctWord && word3 === correctWord.toUpperCase()) {
    alert("You've got skills!");
  } 
  
  else {
    alert("Oops! TRY AGAIN.");
  }
}

function spell4() {
 
  const word4 = document.getElementById('word4').value.trim().toUpperCase();
  const correctWord = localStorage.getItem('spellingWord4');
  
  if (correctWord && word4 === correctWord.toUpperCase()) {
    alert("Smarty pants!");
  } 
  
  else {
    alert("Oops! TRY AGAIN.");
  }
}

function spell5() {
 
  const word5 = document.getElementById('word5').value.trim().toUpperCase();
  const correctWord = localStorage.getItem('spellingWord5');
  
  if (correctWord && word5 === correctWord.toUpperCase()) {
    alert("Super duper!");
  } 
  
  else {
    alert("Oops! TRY AGAIN.");
  }
}

function spell6() {
 
  const word6 = document.getElementById('word6').value.trim().toUpperCase();
  const correctWord = localStorage.getItem('spellingWord6');
  
  if (correctWord && word6 === correctWord.toUpperCase()) {
    alert("Well done!");
  } 
  
  else {
    alert("Oops! TRY AGAIN.");
  }
}

function spell7() {
 
  const word7 = document.getElementById('word7').value.trim().toUpperCase();
  const correctWord = localStorage.getItem('spellingWord7');
  
  if (correctWord && word7 === correctWord.toUpperCase()) {
    alert("This was too easy!");
  } 
  
  else {
    alert("Oops! TRY AGAIN.");
  }
}

function spell8() {
 
  const word8 = document.getElementById('word8').value.trim().toUpperCase();
  const correctWord = localStorage.getItem('spellingWord8');
  
  if (correctWord && word8 === correctWord.toUpperCase()) {
    alert("Superstar!");
  } 
  
  else {
    alert("Oops! TRY AGAIN.");
  }
}

function spell9() {
 
  const word9 = document.getElementById('word9').value.trim().toUpperCase();
  const correctWord = localStorage.getItem('spellingWord9');
  
  if (correctWord && word9 === correctWord.toUpperCase()) {
    alert("You did it again!");
  } 
  
  else {
    alert("Oops! TRY AGAIN.");
  }
}

function spell10() {
 
  const word10 = document.getElementById('word10').value.trim().toUpperCase();
  const correctWord = localStorage.getItem('spellingWord10');
  
  if (correctWord && word10 === correctWord.toUpperCase()) {
    alert("You know your words too well!");
  } 
  
  else {
    alert("Oops! TRY AGAIN.");
  }
}

/* ARROW BUTTONS */

window.addEventListener('DOMContentLoaded', () => {
	const arrow = document.getElementById('hover-arrow');
	const buttons = document.querySelectorAll('.nav a');

	const containerTop = document.querySelector('.nav-container').getBoundingClientRect().top;

	// Position arrow initially (over "Spelling")
	const defaultBtn = buttons[1]; // Spelling
	positionArrow(defaultBtn);

	// Move arrow on hover
	buttons.forEach(btn => {
		btn.addEventListener('mouseenter', () => positionArrow(btn));
	});

	function positionArrow(btn) {
		const rect = btn.getBoundingClientRect();
		arrow.style.left = `${rect.left + rect.width / 2 - 50}px`; // centre the arrow
		arrow.style.top = `${rect.top - containerTop - 90}px`; // adjust arrow height above buttons
	}
});

/* PUBLISH SENTENCE */

function publishSentence(inputId, outputId) {
	const sentenceInput = document.getElementById(inputId);
	const sentence = sentenceInput.value.trim();

	if (sentence !== "") {
		const box = document.getElementById(outputId);
		const output = box.querySelector("p");

		output.textContent = sentence;
		box.style.display = "block";
	}
}

/* PARENT LOAD WORDS */

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 10; i++) {
    const word = localStorage.getItem(`spellingWord${i}`);
    if (word) {
      const span = document.getElementById(`wordLabel${i}`);
      if (span) {
        span.textContent = `"${word}"`;
      }
    }
  }
});

/* PLAY AUDIO OF SPELL WORD */

function speakWord(index) {
  const word = localStorage.getItem(`spellingWord${index}`);
  if (!word) return;

  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US'; // Optional, Fred still sounds like Fred
  utterance.rate = 0.85; // Slightly slower for clarity

  // Load voices and pick Fred if available
  const voices = speechSynthesis.getVoices();
  const fredVoice = voices.find(voice => voice.name === "Fred");

  if (fredVoice) {
    utterance.voice = fredVoice;
  } else {
    console.warn("Fred not found. Using default voice.");
  }

  speechSynthesis.speak(utterance);
}

/* WRITE WORDS */

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 10; i++) {
    const word = localStorage.getItem(`spellingWord${i}`);
    const labelA = document.getElementById(`wordLabel${i}a`);
    const labelB = document.getElementById(`wordLabel${i}b`);
    
    if (word) {
      if (labelA) labelA.textContent = `"${word}"`;
      if (labelB) labelB.textContent = `"${word}"`;
    }
  }
});




