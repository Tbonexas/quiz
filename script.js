(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Who invented Javascript?",
    answers: {
      A: "Douglas Crockford",
      B: "Tim Armstrong",
      C: "Brendan Eich",
      D: "Jim Carrey",
    },
    correctAnswer: "C"
  },
  {
    question: "What does HTML stand for?",
    answers: {
      A: "High Text Marking Logs",
      B: "Hyper Text Markup Language",
      C: "Hopeful Time Management List",
      D: "None of the above",
    },
    correctAnswer: "B"
  },
  {
    question: "What does CSS stand for?",
    answers: {
      A: "Cool Styling Stuff",
      B: "Collection Style Sections",
      C: "Cascading Style Sheets",
      D: "Cascading Section Smoothing",
    },
    correctAnswer: "C"
  },
  {
    question: "Which of the following is a JavaScript package manager?",
    answers: {
      A: "React.js",
      B: "JQuery",
      C: "NPM",
      D: "Node.js",
    },
    correctAnswer: "C"
  },
  {
    question: "Which of the following tags is used to mark a begining of a paragraph?",
    answers: {
      A: "p",
      B: "br",
      C: "div",
      D: "ID",
    },
    correctAnswer: "A"
  },
  {
    question: "Which of the following is a container?",
    answers: {
      A: "select",
      B: "body",
      C: "form",
      D: "both (a) and (b)",
    },
    correctAnswer: "D"
  },
];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
// (function(){
//   function buildQuiz(){
//     // variable to store the HTML output
//     const output = [];

//     // for each question...
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {

//         // variable to store the answers
//         const answers = [];

//         // and for each available answer...
//         for(letter in currentQuestion.answers){

//           // html radio button ref w3 //
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }

//         // add this question and its answers to the output
//         output.push(
//           `<div class="question"> ${currentQuestion.question} </div>
//           <div class="answers"> ${answers.join('')} </div>`
//         );
//       }
//     );

//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join('');
//   }



// function showScore() {
//   // gathers the answers from the quiz //
//   const answerContainer = quizContainer.querySelector(".answers");
//   // user score //
//   let numCorrect = 0;
//   myQuestions.forEach( (currentQuestion, questionNumber) => {
//     // to find the selected answer //
//     const answerContainer = answerContainers[questionNumber];
//     const selector = `input[name=question${questionNumber}]:checked`;
//     const userAnswer = (answerContainer.querySelector(selector) || {}).value;
//     // if statements for answers //
//     if(userAnswer === currentQuestion.correctAnswer){
//       //add to number of correct answers //
//       numCorrect++;
//       // style the answers to green if correct //
//       answerContainers[questionNumber].style.color = "lightgreen";
//     }
//     else {
//       //wrong answers will be red // 
//       answerContainers[questionNumber].style.color = "red";
//     }
//   });
// // this shows correct answers to the total // 
// scoreContainer.innerHTML = '${numCorrect} out of ${myQuestions.length}';
// }
// const quizContainer = document.getElementById("quiz");
// const scoreContainer = document.getElementById("score");
// const submitButton = document.getElementById("submit");

// // questions for the quiz // 
// const myQuestions = [
//   {
//     

// //start things off //
// buildQuiz();

// // Event listeners
// submitButton.addEventListener('click', showResults);
// })();