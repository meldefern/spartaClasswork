// Setup initial state variables
player1moves = [];
player2moves = [];
playerturn = 0;
winCombinations = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
matchFound = 0;
// 
// -------------------------------------------
// gamePlay
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
// grab box, return attribute
function gamePlay(){
	var clickedBox;
	var $boxes = $('td');
	playerturn = 0;

	$boxes.each(function(index, box){
		$(box).on("click",function(){
			clickedBox = ($(box).attr('data-num'));
			if (playerturn%2 == 0){
				player1moves.push(clickedBox);
				console.log('player1moves arr',player1moves)
				$(box).addClass('X').html('X');
				$('.playerTurn').html("It is O's turn");
			} else {
				player2moves.push(clickedBox);
				console.log('player2moves arr',player2moves)
				$(box).addClass('O').html('O');
				$('.playerTurn').html("It is X's turn");
			}
			
			if (playerturn >= 4){
				//start comparisons
				if (playerturn%2 == 1){
					compare(player2moves);
				} else {
					compare(player1moves);
				}
			}
			playerturn++;
		})

	});

	$('#reset').on('click', function(){
		//clear variables
		player1moves = [];
		player2moves = [];
		playerturn = 0;
		matchFound = 0;
		//clear display
		$boxes.each(function(index, box){
			$(box).removeClass('X').html('');
			$(box).removeClass('O').html('');
		})
	})
	
	
}
gamePlay();

// -------------------------------------------
// COMPARISON
// compare elements in player1moves array <=== .each
// with array inside winCombinations array
//	if array[0] included in w.c.a[index]w.c[index]
// 		matchFound++;
//		if matchFound === 3;
//			win;
//		else
//			continue loop
//			clear matchFound after every subarray

function compare(playerArray){
	//compare each element in playerarray
		// with each subarray inside wincombinations array
	$(winCombinations).each(function(i, combo){
		$(combo).each(function(j, gridPos){
			$(playerArray).each(function(index, element){
				if (element == gridPos){
					matchFound++;
					console.log(matchFound)
					if (matchFound === 3) {
						$('.playerTurn').html("WIN");
						// stop loop
						return false;
					}
				}
			})
		})
		//reset matchFound after each combination
		matchFound = 0;
	})


}

