var wins = 0;
var losses = 0;
playGame();

function playGame(){
	var gamesPlayed = 0;
	var winArray = [];
	while(gamesPlayed < 5){
		var user = prompt("1-Rock\n2-Paper\n3-Scissors");
		var comp = Math.floor(Math.random() * 3) + 1;

		var result = compare(user,comp,winArray);
		gamePlay(user,comp, result);
		gamesPlayed++;
	} 
	winCounter(winArray);
	decide(gamesPlayed, wins, losses);
}

function gamePlay(user,comp,result){
	alert("User: " + user + "		Computer: " + comp);
	if (result == 1){ 
		alert("You win!")
 	}else if (result == 0) {
 		alert("Computer wins!")
 	}else{
		alert("Draw!")
	}
}

function compare (user, comp, winArray){
	// rock beats scissors, scissors beats paper, paper beats rock
	if ((user == 1 && comp == 3) || (user == 2 && comp == 1) || (user == 3 && comp == 2)){
		winArray.push(true);
		return 1;
	} 
	if ((comp == 1 && user == 3) || (comp == 2 && user == 1) || (comp == 3 && user == 2)){
		winArray.push(false);
		return 0;
	}
}

function winCounter(winArray){
	for(var i = 0; i < winArray.length; i++) {
		if (winArray[i] == true) wins++;
		if (winArray[i] == false) losses++;
	}
}

function decide(gamesPlayed, wins, losses){
	if (wins > losses) {
		alert("You win the match!")
	} else if (wins < losses) {
		alert("Computer wins the match!")
	} else {
		alert("It's a draw!")
	}
}