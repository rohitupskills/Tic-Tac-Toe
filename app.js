let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#resetButton');
let newBtn = document.querySelector('#newGame');
let msgContainer = document.querySelector('.message');
// console.log(msgContainer+"dhwfg");
let turnO = true; //player O

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = ()=>{
    turnO = true;
    enableBox();
    msgContainer.innerText = '';
    for (let prop in myStyles) {
        if (myStyles.hasOwnProperty(prop)) {
            msgContainer.style[prop] = '';
        }
      }
}

const enableBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

boxes.forEach((box) => {
    box.addEventListener('click',() =>{
      console.log("box clicked")
    //   box.innerText = "R"
     if(turnO){
        box.innerText = "O";
        box.style.color = "red";
        turnO = false;
     }else{
        box.innerText = "X";
        box.style.color = "blue";
        turnO = true;
     }
     box.disabled = true;
     checkWinner();
    });
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
let myStyles = {
    width: '40%',
    height: '100px',
    display: 'flex',
    fontSize: 'xx-large',
    color: 'green',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)'
}
let massage = (winner) => {
    // msgContainer.style = myStyles;
    for (let prop in myStyles) {
        if (myStyles.hasOwnProperty(prop)) {
            msgContainer.style[prop] = myStyles[prop];
        }
      }
    msgContainer.innerText = `Congratulations ! Winner is ${winner}`
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(...pattern)
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != '' && pos2Val != '' && pos3Val != '')
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                 
                massage(pos1Val);
               
                disableBoxes();
                // console.log(newDiv);

            }
        }
    }
}

// let newDiv = document.createElement('div');
// let main = document.querySelector('main');
// let body = document.querySelector('body');
// newDiv.classList.add('msgContainer');
// // newDiv.innerText = 
// body.insertBefore(newDiv,main);
newBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);
