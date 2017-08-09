// Setup initial state variables
player1moves = [];
player2moves = [];
playerturn = 0;
winCombinations = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
scoreCount = 0;
// 
// -------------------------------------------
// gamePlay
function gamePlay(){
//**// playerturn set to true
// //  player1move
// //		-player1 clicks on box
// //		-player1moves.push(---boxattribute---)
// player2move
//		-player2 clicks on box
//		-player2moves.push(---boxattribute---)
//**//
	
// loop ** 5 times before initial comparisons
// compare player1moves array with winning conditions array
//  if notWin
//		playerturn is false
//		player2 turn
//		player2moves
//		make comparison, until win
}
// grab box, return attribute
function getBox(){
	var clickedBox;
	var $boxes = $('td');
	playerturn = 0;


	$boxes.each(function(index, box){
		$(box).on("click",function(){
			clickedBox = ($(box).attr('data-num'));
			if (playerturn%2 == 0){
				player1moves.push(clickedBox);
				console.log('player1moves arr',player1moves)
				$(box).addClass('X');
				$(box).html('X');
			} else {
				player2moves.push(clickedBox);
				console.log('player2moves arr',player2moves)
				$(box).addClass('O');
				$(box).html('O');
			}
			playerturn++;
			if (playerturn > 5){
				//start comparisons
				console.log('i want to compare now')
				compare(player1moves, player2moves);
			}
		})

	});

	
	
	
}
getBox();

// function colorBox(boxes[box]){
// 	boxes[box].addClassName('X');
// }
// -------------------------------------------
// COMPARISON
// compare elements in player1moves array <=== .each
// with array inside winCombinations array
//	if array[0] included in w.c.a[index]w.c[index]
// 		scoreCount++;
//		if scoreCount === 3;
//			win;
//		else
//			continue loop
//			clear scoreCount after every subarray

function compare(player1array, player2array){
	//compare each element in playerarray
	for(var i = 0; i < player1array.length; i++){
		// with each subarray inside wincombinations array
		//console.log('inside playerarray')
		//console.log('scoreCount',scoreCount)
		//console.log('out wc', winCombinations.length)
		for(var subj = 0; subj < winCombinations.length; subj++){
			//console.log('out wc', winCombinations.length)
			//console.log('inside winCombinations subarray')
			//console.log('player1array',[i], 'winCombinations',[subj])
			console.log('wincom subj', winCombinations[subj])
			for (var j = 0; j < winCombinations[subj].length; j++){
				var abc = winCombinations[subj];
				//console.log('subj', abc[j])
				if (player1array[i] == abc[j]){
					scoreCount+= 1;
					console.log(scoreCount)
					if (scoreCount === 3) console.log("win");
				}
			}
		} 
		scoreCount = 0;
	}



}