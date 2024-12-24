let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userscore=document.querySelector("#user-score");
const comscore=document.querySelector("#comp-score")
const drawGame=()=>{
    msg.innerText="Game Was Drawn. Play Again";
     msg.style.backgroundColor = "black"
    
}
const showWinner=(userWin,userChoice,comchoice)=>{
    if(userWin){
        userScore++;
        userscore.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${comchoice}`;
         msg.style.backgroundColor = "green"
        
    }
    else{
        compScore++;
        comscore.innerText=compScore;
        msg.innerText=`You Lost! ${comchoice} beats Your ${userChoice}`
         msg.style.backgroundColor = "red"
    }
   
}

const genComChoice=()=>{
    const options=["rock","paper","scissor"];
    const index=Math.floor(Math.random()*3)
    return options[index];

}
const playGame=(userChoice)=>{
    console.log("userchoice",userChoice)
    const compChoice=genComChoice();
    console.log("comchoice",compChoice)

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            //Scissor, Paper
           userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            // Scissor, rock
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            //Rock , Paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})