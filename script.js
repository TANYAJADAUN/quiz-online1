const conatiner = document.querySelector('.conatiner');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');

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
// Making variables
let currentQuestionIndex =0;
  
//Arrow function to show questions
const showQuestions=() =>{
  const questionDetails = quiz[currentQuestionIndex];
  questionBox.textContent = questionDetails.question;
   console.log( questionDetails);
}
nextBtn.addEventListener('click',()  =>{
     showQuestions();
}
);