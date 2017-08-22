$(function(event){
	//Initial variables for the game
	//Find game squares
	var $boxes = $('td');

	//Screen for player turn
	var $turnText = $('.playerTurn');

	//Counter for moves and wins
	var counter = 0;
	var winCounter = 0;

	//Arrays to track the moves of players
	var OMoves = [];
	var XMoves = [];
	//An array of winning combinations
	var winningCombinations = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

	// ----------------------------------------

	// Function to run on page load
	function start(){
		// call function to add the X and O box listeners
		addXandOListeners();
		// call function to setup reset listener
		addResetListener();
		
		
	}

	// ----------------------------------------

	// the function to set up X and O listeners
	function addXandOListeners(){
		// Counting down in a for loop
		for (var i = $boxes.length-1; i >= 0; i--){
			var $box = $($boxes[i]);
			$box.on('click', addXorO);
		}
	}

	// ----------------------------------------

	// function to remove all the box's event listeners
	function removeXandOListeners(){
		for (var i = $boxes.length-1; i >= 0; i--){
			var $box = $($boxes[i]);
			$box.off('click', addXorO);
		}
	}

	// ----------------------------------------

	// the function to set up the reset listener
	function addResetListener(){
		$('#reset').on('click', resetBoard);
	}

	// ----------------------------------------

	// function to add X or O to screen
	function addXorO(){
		// this is the box we clicked
		var $box = $(this)
		// Check if the box has already been played
		if ($box.html().length === 0){
			// If the counter is even
			if(counter%2 === 0){
				// Take the data-num from the game square and push into OMoves array
				OMoves.push(parseInt($box.attr('data-num')));
				// Set the box to have O and change class
				$box.html('O').attr('class', 'O');
				// Change the turn screen
				$turnText.html('It is X\'s turn');
				counter++;
				checkWin(OMoves, 'O');
			} else {
				XMoves.push(parseInt($box.attr('data-num')));
				// Set the box to have X and change class
				$box.html('X').attr('class', 'X');
				// Change the turn screen
				$turnText.html('It is O\'s turn');
				counter++;
				checkWin(XMoves, 'X');
			}

			// Cater for a draw; if counter >=9 it's a draw
			if(counter >=9){
				$turnText.html('Game Over! - It\'s a tie!');
			}
		}

	}

	// ----------------------------------------

	// function to check to see who's won
	function checkWin(movesArray, name){
		for (var i = 0; i < winningCombinations.length; i++){
			winCounter = 0;
			for (var j = 0; j < winningCombinations[i].length; j++){
				if (movesArray.indexOf(winningCombinations[i][j]) !== -1){
					winCounter++;
				}
				if (winCounter === 3){
					$turnText.html('Game Over,' + name + ' wins!');
					removeXandOListeners();
				}
			}
		}

	}

	// ----------------------------------------

	// function to do the reset of the board
	function resetBoard(){
		// Reset all boxes to original state
		for (var i = $boxes.length - 1; i >= 0; i--){
			$box = $($boxes[i]);
			$box.html('').attr('class', 'clear');
		}

		// Reset all starting variables
		OMoves = [];
		XMoves = [];
		winCounter = 0;
		counter = 0;
		addXandOListeners();
		$turnText.html('It is O\'s turn');
	}


	start();

})