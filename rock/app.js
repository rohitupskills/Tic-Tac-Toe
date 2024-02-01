let userScrore = 0;
let comScore = 0;

let choises = document.querySelectorAll('.choise');

const msg = document.querySelector('#msg');

let compScrorePara = document.querySelector('#compScrore');
let userScorePara = document.querySelector('#userScore');


const drawGame = () => {
    console.log("Game Is Draw");
    msg.innerText = "Game is Draw Play Again !"
    msg.style.backgroundColor = "black";
}
const playGame = (userChoise) => {
    //   console.log('User choise',userChoise);
      const compChoise = genCompChoise();
    //   console.log('Comp Choise',compChoise);
      if(compChoise === userChoise){
        drawGame();
      }else{
        let userWin = true;
        if(userChoise === 'rock'){
            //scissors rock
            userWin = compChoise === 'paper' ? false : true;
        }else if(userChoise === 'paper'){
            //rock scissors
            userWin = compChoise === 'scissors' ? false : true;
        }else{
            //rock paper
            userWin = compChoise === 'rock' ? false : true;
        }
        showWinner(userWin);
      }

}

const showWinner = (userWin) => {
    if(userWin === true){
        // console.log("you win");
        msg.innerText = "You Win !"
        msg.style.backgroundColor = "green";
        userScrore++;
        userScorePara.innerText = userScrore;
    }
    else{
        // console.log("you lose");
        msg.innerText = "You lose"
        msg.style.backgroundColor = "red";
        comScore++;
        compScrorePara.innerText = comScore;
    }
}

const genCompChoise = () => {
    const option = ['rock','scissors','paper'];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

choises.forEach((choise) => {
    // console.log(choise);
    choise.addEventListener('click',()=>{
        let userChoise = choise.getAttribute('id');
    //   console.log('choise was clicked',userChoise);
      playGame(userChoise);
       
    });
})
