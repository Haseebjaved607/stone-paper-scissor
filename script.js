let userScore = 0;
let compScore = 0;

const chocies = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_Score = document.querySelector("#user-score")
const comp_Score = document.querySelector("#comp-score")

const genCompChoice = () => {
  //rock,paper,scissior
  let option = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = (userChoice, compChoice) => {
  // console.log("game was draw");
  msg.style.backgroundColor = "#081b31"

  msg.innerText = "game draw"
}

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    user_Score.innerHTML = userScore;
    msg.innerText = `you win ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";

    // console.log("you win.");

  } else {
    msg.innerText = `you lose ${compChoice} beats ${userChoice}`;
    compScore++;
    comp_Score.innerHTML = compScore;
    msg.style.backgroundColor = "red";

    // console.log("you lose.");
  }

}
const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  //generate  computer choice
  const compChoice = genCompChoice();
  console.log("computer choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame()
  }
  else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      userWin = compChoice === "paper" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

chocies.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const resetBtn = () => {
  user_Score.innerHTML =0
  comp_Score.innerHTML = 0
  msg.innerHTML="play your move"
  msg.style.backgroundColor="#081b31"
}

