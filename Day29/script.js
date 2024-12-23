const questions = [
    {
        question: "Which is the oldest language in the world?",
        answers:[
            
                {text: "Hebrew", correct: false},
                {text: "Sanskrit", correct: true},
                {text: "Arabic", correct: false},
                {text: "Tamil", correct: false}
                
            
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers:[
            
                {text: "Australia", correct: true},
                {text: "Artic", correct: false},
                {text: "Antartica", correct: false},
                {text: "Africa", correct: false}
                
            
        ]
    },
    {
        question: "Which is the largest country in the world?",
        answers:[
            
                {text: "China", correct: false},
                {text: "Canada", correct: false},
                {text: "United States", correct: false},
                {text: "Russia", correct: true}
                
            
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answers:[
            
                {text: "The Arctic Ocean", correct: false},
                {text: "The Indian Ocean", correct: false},
                {text: "The Pacific Ocean", correct: true},
                {text: "The Atlantic Ocean", correct: false}
                
            
        ]
    },
    {
        question: "Which is the largest river in the world?",
        answers:[
            
                {text: "Amazon River", correct: false},
                {text: "Congo River", correct: false},
                {text: "Nile River", correct: true},
                {text: "Yangtze River", correct: false}
                
            
        ]
    },

];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;

   questionElement.innerHTML= questionNo+". "+currentQuestion.question;

   currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
   });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);//to remove all previous answers
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();