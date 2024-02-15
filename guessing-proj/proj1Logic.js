const buttonCon = document.querySelectorAll(".confetti");
const canvas = document.querySelector("#confettiCanv");

const jsConfetti = new JSConfetti();
let question;
let score = 0;
let scoreElement = document.querySelector(".scoreElement");

let myButtons = document.querySelectorAll("button");








for(button of myButtons){
    button.onclick = checkAnswer;
}



function checkAnswer(event){
    let button = event.target;
    question = button.parentElement;
    


    if(button.classList.contains("correct")){

        button.classList.add("clicked");
        score++;
        scoreElement.innerText = score;
        jsConfetti.addConfetti();
        

    } else {
        button.classList.add("clicked");
        score -=1;
        scoreElement.innerText = score;
        
    }

    disableButtons();

    /*if(score == 7){
        alert("Wow! You must be my best friend!");
    } else if(score <= 6 && score >= 4){
        alert("We must be pretty good friends!");
    } else if(score <= 3 && score > 0){
        alert("We must have just met!");
    } else if(score <= 0){
        alert("Hmmm... do we know each other???")
    }*/
}


function disableButtons(){

    let currentButtons = question.querySelectorAll("button");
    for(let button of currentButtons){
        button.disabled = true;
    }
}