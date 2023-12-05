document.addEventListener("DOMContentLoaded", function () {
  let startScreen = document.querySelector(".start-screen");
  let startButton = document.getElementById("start-button");

  fetch("../data/questions.json")
      .then((response) => response.json())
      .then((questions) => {
        displayQuestion(questions[questionIndex]);
      })
      .catch((error) =>
        console.error("Erreur de chargement des questions:", error)
      );
});


// document.addEventListener("DOMContentLoaded", function () {
//   let questionIndex = 0; // Déclarer questionIndex ici pour une portée globale

//   // Charger les questions depuis le fichier JSON
//   fetch("../data/questions.json")
//     .then((response) => response.json())
//     .then((questions) => {
//       displayQuestion(questions[questionIndex]);
//     })
//     .catch((error) =>
//       console.error("Erreur de chargement des questions:", error)
//     );

//   // Fonction pour démarrer le timer
//   function startTimer(duration, nextQuestionCallback) {
//     let timer = duration;
//     const timerElement = document.getElementById("timer"); // Assurez-vous d'ajouter un id "timer" à l'élément HTML correspondant

//     const timerInterval = setInterval(function () {
//       timerElement.textContent = timer; // Mettre à jour l'affichage du timer

//       if (--timer < 0) {
//         clearInterval(timerInterval); // Arrêter le timer lorsque le décompte atteint zéro
//         nextQuestionCallback(); // Appeler la fonction de rappel pour passer à la question suivante
//       }
//     }, 1000); // Mettre à jour le timer chaque seconde
//   }

//   // Fonction pour afficher une question
//   function displayQuestion(question) {
//     const questionElement = document.querySelector(".card-body h3");
//     const choicesElements = document.querySelectorAll(".card-body span");
//     const feedbackElement = document.querySelector(".card-body p");

//     questionElement.textContent = question.question;

//     choicesElements.forEach((choice, index) => {
//       choice.textContent = question.choice[index];
//     });

//     feedbackElement.textContent = "";

//     const goodRespElement = document.querySelector(".card-body .goodResp");
//     const badRespElement = document.querySelector(".card-body .badResp");
//     goodRespElement.textContent = question.reponse;
//     badRespElement.textContent = question.reponse;

//     startTimer(5, function () {
//       console.log("Temps écoulé. Passer à la question suivante.");
//       // Afficher le feedback
//       feedbackElement.textContent =
//         "Temps écoulé. Passer à la question suivante";

//       choicesElements.forEach((choice) => {
//         choice.style.pointerEvents = "none";
//       });

//       // Appel de displayQuestion avec la question suivante après un délai
//       setTimeout(function () {
//         questionIndex++;
//         if (questionIndex < questions.length) {
//           // Réinitialiser la sélection des réponses
//           choicesElements.forEach((choice) => {
//             choice.style.pointerEvents = "auto";
//           });
//           // Appel de displayQuestion avec la question suivante
//           displayQuestion(questions[questionIndex]);
//         } else {
//           console.log("Fin du quiz.");
//           // Afficher le feedback
//           feedbackElement.textContent = "Fin du quiz";
//         }
//       }, 2000); // Délai de 2 secondes avant de passer à la question suivante
//     });
//   }
//   // Appeler displayQuestion pour afficher la première question
//   displayQuestion(questions[questionIndex]);

//   // Fonction pour gérer le clic sur le bouton "Suite"
//   const submitButton = document.querySelector(".card-footer button");
//   submitButton.addEventListener("click", function () {
//         // Ajoutez ici la logique pour passer à la question suivante
//         // (par exemple, en appelant displayQuestion avec la question suivante)
//         questionIndex++;
//         if (questionIndex < questions.length) {
//           displayQuestion(questions[questionIndex]);
//         } else {
//           console.log("Fin du quiz."); // ou autre logique de fin
//         }
//       });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let questionIndex = 0; // Déclarer questionIndex ici pour une portée globale

//   // Charger les questions depuis le fichier JSON
//   fetch("../data/questions.json")
//     .then((response) => response.json())
//     .then((loadedQuestions) => {
//       // Remplir l'array de questions avec les questions chargées
//       const questions = loadedQuestions;

//       // Appeler displayQuestion pour afficher la première question
//       displayQuestion(questions[questionIndex]);

//       // Fonction pour gérer le clic sur le bouton "Suite"
//       const submitButton = document.querySelector(".card-footer button");
//       submitButton.addEventListener("click", function () {
//         // Ajoutez ici la logique pour passer à la question suivante
//         // (par exemple, en appelant displayQuestion avec la question suivante)
//         questionIndex++;
//         if (questionIndex < questions.length) {
//           displayQuestion(questions[questionIndex]);
//         } else {
//           console.log("Fin du quiz."); // ou autre logique de fin
//         }
//       });
//     })
//     .catch((error) =>
//       console.error("Erreur de chargement des questions:", error)
//     );

//   // Fonction pour démarrer le timer
//   function startTimer(duration, nextQuestionCallback) {
//     let timer = duration;
//     const timerElement = document.getElementById("timer");

//     const timerInterval = setInterval(function () {
//       timerElement.textContent = timer;

//       if (--timer < 0) {
//         clearInterval(timerInterval);
//         nextQuestionCallback();
//       }
//     }, 1000);
//   }

//   // Fonction pour afficher une question
//   function displayQuestion(question) {
//     const questionElement = document.querySelector(".card-body h3");
//     const choicesElements = document.querySelectorAll(".card-body span");
//     const feedbackElement = document.querySelector(".card-body p");

//     questionElement.textContent = question.question;

//     choicesElements.forEach((choice, index) => {
//       choice.textContent = question.choice[index];
//     });

//     feedbackElement.textContent = "";

//     const goodRespElement = document.querySelector(".card-body .goodResp");
//     const badRespElement = document.querySelector(".card-body .badResp");
//     goodRespElement.textContent = question.reponse;
//     badRespElement.textContent = question.reponse;

//     startTimer(5, function () {
//       console.log("Temps écoulé. Passer à la question suivante.");
//       // Afficher le feedback
//       feedbackElement.textContent =
//         "Temps écoulé. Passer à la question suivante";

//       choicesElements.forEach((choice) => {
//         choice.style.pointerEvents = "none";
//       });

//       // Appel de displayQuestion avec la question suivante après un délai
//       setTimeout(function () {
//         questionIndex++;
//         if (questionIndex < questions.length) {
//           // Réinitialiser la sélection des réponses
//           choicesElements.forEach((choice) => {
//             choice.style.pointerEvents = "auto";
//           });
//           // Appel de displayQuestion avec la question suivante
//           displayQuestion(questions[questionIndex]);
//         } else {
//           console.log("Fin du quiz.");
//           // Afficher le feedback
//           feedbackElement.textContent = "Fin du quiz";
//         }
//       }, 2000); // Délai de 2 secondes avant de passer à la question suivante
//     });
//   }
// });

