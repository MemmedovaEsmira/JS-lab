
// task-1

// let hrs = document.getElementById (".hrs");
// let min = document.getElementById (".min");
// let sec = document.getElementById (".sec");


// function updateClock() {
//    let date = new Date();
//    let hrs = date.getHours();
//    let min = date.getMinutes();
//    let sec = date.getSeconds();
//    if (hrs > 12) {
//       hrs -= 12;
//    }
//    if (hrs === 0) {
//       hrs = 12;
//    }
//    if (min < 10) {
//       min = "0" + min;
//    }
//    if (sec < 10) {
//       sec = "0" + sec;
//    }
//    let time = hrs + ":" + min + ":" + sec;
//    document.getElementById("clock").innerHTML = time;
 
// }
// setInterval(updateClock, 1000);



// task-2


// let randomNum = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;

// const guessField = document.getElementById("guessField");
// const button = document.getElementById("button");
// const hint = document.getElementById("hint");
// const attemptsText = document.getElementById("attempts");

// button.addEventListener("click", checkGuess);

// function checkGuess() {
//   const userValue = Number(guessField.value);
//   attempts++;

//   if (userValue === randomNum) {
//     hint.textContent = "Congratulations, you guessed it!";
//   } else if (userValue < randomNum) {
//     hint.textContent = "You guessed too low!";
//   } else {
//     hint.textContent = "You guessed too high!";
//   }

//   attemptsText.textContent = "Attempts: " + attempts;
// }