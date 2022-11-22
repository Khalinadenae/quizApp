let q1correctAnswer = document.getElementById('question1answer');
let q2correctAnswer =  document.getElementById('question2answer');
let q3correctAnswer =  document.getElementById('question3answer');

function checkAnswers(){
    if (document.getElementById('Miami').checked === true){
        q1correctAnswer.innerHTML = "Correct. "
        q1correctAnswer.style.color = "green";
  
    } else {
    q1correctAnswer.innerHTML = "Incorrect. The correct answer is Miami. "
    q1correctAnswer.style.color = "red";
    }   
  
    if (document.getElementById('George').checked === true){
         q2correctAnswer.innerHTML = "Correct."
         q2correctAnswer.style.color = "green";
    } else {
        q2correctAnswer.innerHTML = "Incorrect. The correct answer is George Washingotn. "
        q2correctAnswer.style.color = "red";
    }

    if (document.getElementById('tight_rope').checked === true){
        q3correctAnswer.innerHTML = "Correct"
        q3correctAnswer.style.color = "green";
    } else{
        q3correctAnswer.innerHTML = "Incorrect. The correct answer is Tight Rope";
        q3correctAnswer.style.color = "red";
    }
}

