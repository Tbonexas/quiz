//HTML elements //
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");



// Choice button IDs //
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// Rick and Morty Quiz Question index
var quizQuestions = [
    {
    question: "What is Ricks Last name?",
    choiceA: "Jacobs",
    choiceB: "Stevens",
    choiceC: "Sanchez",
    choiceD: "Blake",
    correctAnswer: "c"},
  {
    question: "What is Mortys last name?",
    choiceA: "Smith",
    choiceB: "Sanchez",
    choiceC: "Michaels",
    choiceD: "None of the above",
    correctAnswer: "a"},
   {
    question: "What is the name of the theme park rick builds in a homeless man?",
    choiceA: "KidneyLand",
    choiceB: "Anatomy Park",
    choiceC: "Project Homeless",
    choiceD: "Internal Mountain",
    correctAnswer: "b"},
    {
    question: "What is Ricks catchphrase?",
    choiceA: "That's all she wrote",
    choiceB: "Great work, Morty",
    choiceC: "AAAAND THATS THE WAY",
    choiceD: "Wubba Lubba Dub Dub",
    correctAnswer: "d"},
    {
    question: "Who are the blue characters helping Jerry with his golf swing?",
    choiceA: "MeeSeeks",
    choiceB: "Cithilus",
    choiceC: "DingleBops",
    choiceD: "Plumbus",
    correctAnswer: "a"},  
    {
    question: "What is Mortys favorite superhero team called?",
    choiceA: "The Avengers",
    choiceB: "Mr. Meeseks Tribe",
    choiceC: "The Vindicators",
    choiceD: "None of the Above",
    correctAnswer: "c"},
    {
    question: "In his successful pop song, Rick told people to “get” what?",
    choiceA: "Outta Da Way",
    choiceB: "SCHWIFTY",
    choiceC: "Mo-Money",
    choiceD: "Bent",
    correctAnswer: "b"},
    {
    question: "What did Rick’s love potion turn Earth’s people into?",
    choiceA: "Blancharts",
    choiceB: "Munsters",
    choiceC: "Cronenbergs",
    choiceD: "EaglePeeps",
    correctAnswer: "c"},
    {
    question: "Which item helps Rick travel through the different universes?",
    choiceA: "Portal Gun",
    choiceB: "Ray Gun",
    choiceC: "Time Hopper",
    choiceD: "Launcher",
    correctAnswer: "a"}, 
    {
    question: "Which game did Rick and Morty play in the final episode of season 3?", 
    choiceA: "Mine Craft",
    choiceB: "Call of Duty",
    choiceC: "Minesweeper",
    choiceD: "Battlefront",
    correctAnswer: "a"}, 
    {
    question: "In the episode Raising Gazorpazorp, what does Morty name his “child?”", 
    choiceA: "Jesse",
    choiceB: "Lil' Mort",
    choiceC: "Morty JR.",
    choiceD: "Gazorpa",
    correctAnswer: "c"}, 

    {
    question: "What is Ricks Universe Number?", 
    choiceA: "C-63",
    choiceB: "C-137",
    choiceC: "Z-199",
    choiceD: "Doesnt have one",
    correctAnswer: "b"},

    {
    question: "In the Anatomy Park episode, which theme park ride does Rick care about most?", 
    choiceA: "Blood River",
    choiceB: "Hose Ride",
    choiceC: "Mole-liath",
    choiceD: "Pirates of the Pancreas",
    correctAnswer: "d"},               
            
   
    
];
// Other variables (global) //
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 45;
var timerInterval;
var score = 0;
var correct;

// This function goes through the array containing the quiz questions to generate the questions and answers. //
function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// Start Quiz function, Timer, hides start button, and displays first question. //
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}
// This function shows end of the quiz or if time runs out // 
function showScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "Whoa, look! " + score + " out of " + quizQuestions.length + " correct!";
}

// On click of the submit button, shows array of high scores already saved in local stoage and pushes the new user name and score into local storage. Then shows high scores. // 
submitScoreBtn.addEventListener("click", function highscore(){
    
    // this is an alert if you do not add initials to the quiz upon completion// 
    if(highscoreInputName.value === "") {
        alert("Whoa! No initials? Who are you?");
        return false;
    }else{
        // variables for user scores //
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
    
        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();

    }
    
});

// This function clears high scores and generates a new high score list from local storage // // ref w3 for function //
function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
}

// displays the high scores and hides all of the other //
function showHighscore(){
    startQuizDiv.style.display = "none"
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";

    generateHighscores();
}

// This function clears the local storage of the high scores and text from the high score board. //
function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}

// This sets all the variables back to their original values and shows the home page. //
function replayQuiz(){
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 76;
    score = 0;
    currentQuestionIndex = 0;
}

// This function checks the response to each answer 
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is correct.
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
       
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is wrong.
    }else{
        showScore();
    }
}

// This button starts quiz. //
startQuizButton.addEventListener("click",startQuiz);
