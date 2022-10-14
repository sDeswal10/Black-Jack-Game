
let cardsArr =[];
let sum;
let winOrLoss = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
console.log(sum);
let sumEl = document.querySelector("#sum");
let cardsEl = document.querySelector("#cards");

let player = {
    name: "Sachin",
    chips: 200
}
let playerEl = document.getElementById("player");
playerEl.textContent = player.name + ": $" + player.chips;
function randomCard(){
    let randomCard = Math.floor(Math.random()*13) +1 ;
    if(randomCard>10){
        return 10;
    } else if(randomCard ===1){
        return 11;
    }else{
        return randomCard;
    }
}
function startGame(){
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    cardsArr = [firstCard,secondCard];
    sum = cardsArr[0] + cardsArr[1];
    return renderGame();
}
function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(let i=0; i<cardsArr.length; i++){
        cardsEl.textContent += cardsArr[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
if (sum === 21){
    message = "Hurray! You have BlackJack. You won the game.";
    winOrLoss = true;
    if(sum===21){
        document.querySelector("#startGame").textContent = "RESULT";
        }
} else if(sum>21){
    message = "Sorry! You lost";
    isAlive = false;
    
} else{
    message = "Want to draw a new card";
}
messageEl.textContent = message;
}
function newCard(){
    if(isAlive===true && winOrLoss === false){
    let newCardValue = randomCard();
    sum += newCardValue;
    if(sum>21 || sum===21){
    document.querySelector("#startGame").textContent = "RESULT";
    }
    cardsArr.push(newCardValue);
    renderGame();
    console.log(cardsArr);
}
}


