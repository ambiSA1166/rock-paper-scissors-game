let userScore=0;    
let botScore=0;
let message=document.querySelector("#msg");
const getCompChoice = () => {
    const option=["rock","paper","scissors"];
    const rndmidx = Math.floor(Math.random()*3);
    return option[rndmidx];
}
const drawGame=()=>{
    console.log("the game was draw");
}
const winner=(userWin)=>{
    if(userWin===true){
        console.log("u win!");
        userScore=userScore+1;
        let uScore=document.querySelector("#u");
        uScore.innerText=userScore;
        message.innerText="wow! you win";
        message.style.color="white";
        message.style.backgroundColor="green";
     }
     else{
         console.log("u loose!!");
         botScore=botScore+1;
         let bScore=document.querySelector("#c");
         bScore.innerText=botScore;
         message.innerText="oops! you lost";
         message.style.color="white";
         message.style.backgroundColor="red";
     }
     
}
const playGame=(userChoice)=>{
    console.log("user clicked",userChoice);
    //generate comp choice
    const compChoice=getCompChoice();
    console.log("bot clicked",compChoice);

    if(userChoice===compChoice){
        drawGame();
        message.innerText="it's a draw";
        message.style.color="white";
        message.style.backgroundColor="blue";

    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper"? false : true ;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors"? false : true ;
        }
        else{
            userWin = compChoice === "rock"? false : true ;
        }
        winner(userWin);
    }
    
}


const choices= document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
       })})

       
      