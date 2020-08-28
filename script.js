(function(){
  function buildQuiz(){
    // storing html output // 
    const output = [];

    // for all the questions
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // store answers // 
        const answers = [];

        // for the answers available // 
        for(letter in currentQuestion.answers){

          // added a radio button ref: w3schools // 
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // question and its answers to the output // 
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // output list into 1 string of HTML to display // 
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // collecting answers from containers // 
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // user score // 
    let numCorrect = 0;

    // all questions // 
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if / else statements with color styling // 
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

    // correct answers output
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

  // Question for the quiz //
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

  // starting the quiz //
  buildQuiz();

  // submit button click event // 
  submitButton.addEventListener('click', showResults);
})();