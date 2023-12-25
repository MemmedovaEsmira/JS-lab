
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


// let btn = document.getElementById("button");
// let output = document.getElementById("outputtext");
// let guessedinfo = document.getElementById("guessedOfNo");

// let number = [Math.floor(Math.random() *100)]
// let guessedOfNo = 0

// button.addEventListener("click",function(){
//     let input = document.getElementById("guessField").value;
//     if(input == number){
//         output.innerHTML = `You guessed right, your number was ${number}` 
//     }
//     else if ( input < number){
//         output.innerHTML = "You guessed too low!"
//     };
//     if ( input > number){
//         output.innerHTML = "You guessed too high!"
//     }
// });