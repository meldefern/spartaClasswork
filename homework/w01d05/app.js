var rounds = 5;
var playerWin = [];
var trueCount = 0;
var falseCount = 0;

for (var i=0; i < rounds; i++) {
	var player = prompt("1 - Rock\n2 - Paper\n3 - Scissors?");

	var comp = Math.floor((Math.random() * 3) + 1);

	alert("1 - Rock\n2 - Paper\n3 - Scissors\n\nYou: "+player+"		Computer: "+comp);

	// winning player moves
	// rock beats scissors, paper beats rock, scissors beats paper
	if ((player == 1 && comp == 3)||(player == 2 && comp == 1)||(player == 3 && comp == 2)) {
		alert("You Win!");
		playerWin.push(true);
	} else if ((comp == 1 && player == 3) || (comp == 2 && player == 1) || (comp == 3 && player == 2)) {
		alert("Computer Wins!");
		playerWin.push(false);
	} else {
		alert("Draw!");
	}
}

for (var j=0; j<playerWin.length; j++){
	if (playerWin[j] == true) trueCount++;
	if (playerWin[j] == false) falseCount++;
}
 
if (trueCount > falseCount) {
		alert("You win the Match!");
	} else if (falseCount > trueCount) {
		alert("Computer wins the Match!");
	} else {
		alert("Match ended in a draw!");
	}

