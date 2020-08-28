
(function(){
  // Function to start quiz // 
  function buildQuiz(){
    // storing html output //
    const output = [];

    // all questions // 
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // answers to be stored // 
        const answers = [];

        // for all the possible answers // 
        for(letter in currentQuestion.answers){

          // html radio button ref: w3schools.com // 
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add with push to output // 
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // adds output list to html // 
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // collect answers // 
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // user score tracking // 
    let numCorrect = 0;

   
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // select answers // 
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if else for correct and incorrect // 
      if(userAnswer === currentQuestion.correctAnswer){
        // add correct to score // 
        numCorrect++;

        // correct answer green // 
        answerContainers[questionNumber].style.color = 'darkgreen';
      }
      // else for wrong answers // 
      else{
        // wrong answer red // 
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // score total // 
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

// functions to allow navigation to work ref: w3schools // 

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }
// next question button // 
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
// back button // 
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables using "const" // 
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
// all questions and answers //       
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
          question: "Which one is a JavaScript package manager?",
          answers: {
            A: "React.js",
            B: "JQuery",
            C: "NPM",
            D: "Node.js",
          },
          correctAnswer: "C"
        },
        {
          question: "What tag is used to mark a begining of a paragraph?",
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

 //starting quiz function // 
  buildQuiz();

  // navigation button variables // 
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // show begining // 
  showSlide(currentSlide);

 // events //
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
