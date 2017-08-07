var gamesPlayed = 0;
var wins = 0;
playGame();

function playGame(){
	while(gamesPlayed < 5 || wins < 3){
		var user = prompt("1-Rock\n2-Paper\n3-Scissors");
		var comp = Math.floor(Math.random() * 3) + 1;

		var result = compare(user,comp);
		gamePlay(user,comp, result);
		winCounter(result);

		gamesPlayed++;
	} 
}

function gamePlay(user,comp,result){
	alert("User: " + user + "		Computer: " + comp);
	if (result == true) alert("You win!");
	if (result == false) alert("Computer wins!");
	if (result == null) alert("Draw!")
}

function compare (user, comp){
	if ((user == 1 && comp == 3) || (user == 2 && comp == 1) || (user == 3 && comp == 2)){
		return true;
	}
	if ((comp == 1 && user == 3) || (comp == 2 && user == 1) || (comp == 3 && user == 2)){
		return false;
	}
}

function winCounter(result){
	if (result == true) win++;
}