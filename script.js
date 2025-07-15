const conatiner = document.querySelector('.conatiner');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');

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
    answer:" Web browser"
},



{
    question: "Q. Which of the following tag is used for inserting the largest heading in HTML?",
    choices:[" head","<h1>", "<h6>"," heading"],
    answer:"<h1>"
},



{
    question:"Q.  What is DOM in HTML?",
    choices:["Language dependent application programming","Hierarchy of objects in ASP.NET", "Application programming interface","Convention for representing and interacting with objects in html documents"],
    answer:"Hyper text Markup Language"
}
];
//Making variable
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;

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

}

//Function to check answers
const checkAnswer = () => { 
    const selectedChoice = document.querySelector('.choice.selected');
    if(selectedChoice.textContent == quiz[currentQuestionIndex].answer){
        alert("Correct Answer! ");
        score++;
    }
    else{
        alert("Wrong Answer!");
    }
    currentQuestionIndex++;
     if(currentQuestionIndex < quiz.length){
    
    showQuestions();
   }
   else{
    showScore();
    quizOver = true;
   }
    
}
//Function to show score

const showScore = () =>{
    questionBox.textContent = "";
choicesBox.textContent  = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    nextBtn.textContent = "Play Again";
   
        
    

}
showQuestions();
nextBtn.addEventListener('click',() => {
    const selectedChoice =  document.querySelector('.choice.selected');
    if(!selectedChoice && nextBtn.textContent == "Next"){
        alert("Select your answer");
        return;
    }
    if(quizOver){
    nextBtn.textContent = "Next";
  scoreCard.textContent = "";
  currentQuestionIndex = 0;
  showQuestions();
  quizOver = false;
  score = 0;
    }
    else{
    checkAnswer();
    }
});


