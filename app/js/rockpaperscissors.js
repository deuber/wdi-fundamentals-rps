////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move = move || getInput();
}

function getComputerMove(move) {
    return move = move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    var winner;
    //force lower case
    playerMove = playerMove.toLowerCase(); 
    //Exit if not correct input
    if ((playerMove != 'rock')&&(playerMove != 'scissors')&&(playerMove != 'paper')){
        throw new Error("Exiting program, please try again with correct input");
    }
    if ((playerMove==="rock"&& computerMove==="scissors") 
        ||(playerMove==="scissors"&& computerMove==="paper")
        || (playerMove==="paper"&& computerMove==="rock")){
    winner= "player";
    }
    else if (playerMove===computerMove){
        winner= "tie";
    }
    else {
        winner= "computer";}
    return winner;
}




function playToFive() {
    console.log("Let's play Rock, Paper, Scissors, first one to 5 wins");
    var playerWins = 0;
    var computerWins = 0;
    while(playerWins<5 && computerWins<5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove) ;
        if (winner == 'player'){
            playerWins = playerWins +  1;
        }   
        else {
            computerWins = computerWins + 1;
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
        if (playerWins == 5){
            console.log("Yea, You Won")
        }else{
            console.log("Sorry You Lost")
        }
    
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors, first one to " + x  + " wins");
    var playerWins = 0;
    var computerWins = 0;
    while(playerWins<x && computerWins<x) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove) ;
        if (winner == 'player'){
            playerWins = playerWins +  1;
        }   
        else if (winner == 'computer'){
            computerWins = computerWins + 1;
        }else
        {
            console.log('Tie, no winner')
        }

        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
        if (playerWins == x){
            console.log("Yea, You Won")
        }else{
            console.log("Sorry, you lost")
        }
    
    return [playerWins, computerWins];
}



//playTo(2)
//playToFive()
