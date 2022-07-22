const textDisplay = document.getElementById("text");
const phrases = [
  "Hello, I am David I love to read",
  "And I play the guitare",
  "I enjoy coding",
];

let i = 0;
let j = 0;
let currentArray = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;

  if (i < phrases.length) {
    console.log(currentArray);

    if (!isDeleting && j <= phrases[i].length) {
      currentArray.push(phrases[i][j]);
      textDisplay.innerHTML = currentArray.join("");
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentArray.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentArray.join("");
    }
    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentArray = [];
      isDeleting = false;
      i++;

      if (i == phrases.length) i = 0;
    }
  }

  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;

  console.log(time);
  setTimeout(loop, time);
}

loop();
