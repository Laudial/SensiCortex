//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

fetch("../data/questions.json")
  .then((quizArray) => response.json());
  
// //Questions and choice array
// const quizArray = [
//   {
//     id: "0",
//     question: "Which is the most widely spoken language in the world?",
//     choice: ["Spanish", "Mandarin", "English", "German"],
//     correctAnswer: "Mandarin",
//   },
//   {
//     id: "1",
//     question: "Which is the only continent in the world without a desert?",
//     choice: ["North America", "Asia", "Africa", "Europe"],
//     correctAnswer: "Europe",
//   },
//   {
//     id: "2",
//     question: "Who invented Computer?",
//     choice: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
//     correctAnswer: "Charles Babbage",
//   },
// ];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort choice
    i.choice.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //choice
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.choice[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.choice[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.choice[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.choice[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correctAnswer or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let choice = question.querySelectorAll(".option-div");

  //if user clicked answer == correctAnswer option stored in object
  if (userSolution === quizArray[questionCount].correctAnswer) {
    userOption.classList.add("correctAnswer");
    scoreCount++;
  } else {
    userOption.classList.add("incorrectAnswer");
    //For marking the correctAnswer option
    choice.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correctAnswer) {
        element.classList.add("correctAnswer");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all choice
  choice.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};

// let questionIndex = 0;

// // Charger les questions depuis le fichier JSON
// fetch("../data/questions.json")
//   .then((response) => response.json())
//   .then((questions) => {
//     displayQuestion(questions[questionIndex]);
//   })
//   .catch((error) =>
//     console.error("Erreur de chargement des questions:", error)
//   );

// // Feedback de la réponse
// function feedback(iscorrectAnswer, message) {
//   const feedbackElement = document.getElementById("feedback");
//   if (iscorrectAnswer) {
//     feedbackElement.textContent = message || "correctAnswer";
//   } else {
//     feedbackElement.textContent = message || "IncorrectAnswer";
//   }
// }

// // Fonction pour démarrer le timer
// function startTimer(duration, nextQuestionCallback) {
//   let timer = duration;
//   const timerElement = document.getElementById("timer");

//   const timerInterval = setInterval(function () {
//     timerElement.textContent = timer;

//     if (--timer < 0) {
//       clearInterval(timerInterval);
//       nextQuestionCallback();
//     }
//   }, 1000);
// }

// // Fonction pour afficher une question
// function displayQuestion(question) {
//   // Afficher la question
//   const questionElement = document.querySelector(".card-body h3");
//   const choicesElements = document.querySelectorAll(".card-body span");
//   questionElement.textContent = question.question;

//   // Afficher les choix de réponses
//   choicesElements.forEach((choice, index) => {
//     choice.textContent = question.choice[index];
//   });

//   // Réinitialiser le feedback
//   feedback(false);

//   // Afficher les réponses
//   const goodRespElement = document.querySelector(".card-body .goodResp");
//   const badRespElement = document.querySelector(".card-body .badResp");
//   goodRespElement.textContent = question.reponse;
//   badRespElement.textContent = question.reponse;

//   // Démarrer le timer
//   startTimer(5, function () {
//     console.log("Temps écoulé. Passer à la question suivante.");
//     // Afficher le feedback
//     feedback(false, "Temps écoulé. Passer à la question suivante");
//   });

//   // Gestion du clic sur une réponse
//   choicesElements.forEach((choice) => {
//     choice.style.pointerEvents = "none";
//   });

// }
