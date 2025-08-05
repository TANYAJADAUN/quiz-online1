const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
 const startBtn  = document.querySelector('.startBtn');
 const  timer = document.querySelector('.timer');
 


const quiz=[
{
    question:"Q. What does HTML stand for?",
    choices:["Hyper text Markup Language","Home Tool Markup language", "Hyperlinks and  Text  MarkUp  Language","HighText Marking Languager"],
    answer:"Hyper text Markup Language"
},


{
    question:"Q.What is the correct syntax of doctype in HTML5?",
    choices:["</doctype html>","<doctype html>", "<doctype html!>","<!doctype html>"],
    answer:"<!doctype html>"
},



{
    question:"Q. Which of the following is used to read an HTML page and render it?",
    choices:[" Web server","Web network", "Web browser","Web matrix"],
    answer:"Web browser"
},



{
    question: "Q. Which of the following tag is used for inserting the largest heading in HTML?",
    choices:[" head","<h1>", "<h6>"," heading"],
    answer:"<h1>"
},



{
    question:"Q.  What is DOM in HTML?",
    choices:["Language dependent application programming","Hierarchy of objects in ASP.NET", "Application programming interface","Convention for representing and interacting with objects in html documents"],
    answer:"Convention for representing and interacting with objects in html documents"
}
];
//Making variable
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft  = 15;
let timerID = null;

//Arrow function to show Quuestion
const showQuestions = () =>{
    const questionDetails = quiz[currentQuestionIndex ];
    questionBox.textContent = questionDetails.question;
     
    choicesBox.textContent = "";
    for(let i=0;i<questionDetails.choices.length; i++){
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click',() =>{
            if(choiceDiv.classList.contains('selected')){
                choiceDiv.classList.remove('selected');
            }
            else{
                choiceDiv.classList.add('selected');
            }

    });
    
}
 if(currentQuestionIndex < quiz.length){
    startTimer();
 }

}

//Function to check answers
const checkAnswer = () => { 
    const selectedChoice = document.querySelector('.choice.selected');
    if(selectedChoice.textContent == quiz[currentQuestionIndex].answer){
        //alert("Correct Answer! ");
        displayAlert("Correct Answer!");
        score++;
    }
    else{
       // alert("Wrong Answer!");
        displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer}is the correct answer`);
    }
    timeLeft = 15;
    currentQuestionIndex++;
     if(currentQuestionIndex < quiz.length){
    
    showQuestions();
   }
   else{
    showScore();
    stopTimer();
 
    
   }
    
}
//Function to show score

const showScore = () =>{
    questionBox.textContent = "";
choicesBox.textContent  = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    displayAlert("You have completed this quiz!");
    nextBtn.textContent = "Play Again";
    quizOver =  true;
    timer.style.display = "none";
}
   
  //Functions to show alert
  const displayAlert = (msg)  =>{
    alert.style.display = "block";
   alert.textContent = msg;
   setTimeout(() =>{
alert.style.display = "none";
   },2000);
     
    

}

//Function to Start Timer 
const startTimer = () =>{
    clearInterval(timerID);// check for any exist timers
    timer.textContent = timeLeft;
    const countDown =() =>{
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft == 0){
            const confirmUser  = confirm("Time is Up! Do you want to play the quiz again");
         if(confirmUser){
            timeLeft =15;
            startQuiz();
         }
         else{
            startBtn.style.display = "block";
            container.style.display = "none";
            return;
            
            

         }
        }
    }
  timerID =  setInterval(countDown,1000);
    
}
//Function to stop Timer
const stopTimer = () =>{
    clearInterval(timerID);

}


// Function to shuffle quuestion
const shuffleQuestions = () =>{
    for(let i = quiz.length-1;i>0;i--){
        const j = Math.floor(Math.random() * (i+1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
}
//function to start quiz
const startQuiz = () =>{
    timeLeft = 15;
    timer.style.display = "flex";
    shuffleQuestions();
}
// adding Event listener for start button
startBtn.addEventListener('click',() => {
    startBtn.style.display  = "none";
    container.style.display = "block";
 startQuiz();
});

nextBtn.addEventListener('click',() => {
    const selectedChoice =  document.querySelector('.choice.selected');
    if(!selectedChoice && nextBtn.textContent == "Next"){
       // alert("Select your answer");
        displayAlert("Select your answer");
        return;
    }
    if(quizOver){
    nextBtn.textContent = "Next";
  scoreCard.textContent = "";
  currentQuestionIndex = 0;
  
  quizOver = false;
  score = 0;
  startQuiz();
    }
    else{
    checkAnswer();
    }
});

