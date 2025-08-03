let userScore = 0;
let compScore = 0;
let Round = 0;
let Draw = 0;

let choices =  document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let Roundpara = document.querySelector("#Round");
let drawpara = document.querySelector("#Draw");


const genCompChoice = () => {
    const options =["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);      
    });
});

const drawGame =()=>{
    msg.innerText = "This Game Was Draw";  
    msg.style.backgroundColor = "#1A2849"
    Draw++;
    drawpara.innerText = Round;
    Round++;
    Roundpara.innerText = Round;
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        Round++;
        userScorePara.innerText = userScore;
        Roundpara.innerText = Round;
        msg.innerText = `${userChoice} Beats ${compChoice} Congratulations You Won :)`;
        msg.style.backgroundColor = "#99BC85"
    }else{
        compScore++;
        Round++;
        compScorePara.innerText = compScore;
        Roundpara.innerText = Round;
        msg.innerText = `${compChoice} beats ${userChoice} :( Better Luck Next time`;
        msg.style.backgroundColor = "#F93827"
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice){
        drawGame();
        return;
    }else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true ;
        }else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

