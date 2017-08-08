// Setup initial state variables
var num1;
var num2;
var temp;
var result = 0;
var operatorPressed = false;
// Variables defined in global scope, not the best idea

// Setup eventListeners
var numberButtons = document.getElementsByClassName('number');
var opButtons = document.getElementsByClassName('operator');
var equalsButton = document.getElementsByClassName('eq');
var clearButton = document.getElementsByClassName('clear');

for(var i = 0; i<numberButtons.length; i++){
	var nButton = numberButtons[i];

	nButton.addEventListener('click', function(event){
		console.log(this.value + ' was clicked')

		operatorPressed = true;

		switch(this.value) {
			case("0"):
				temp = 0;
				break;
			case("1"):
				temp = 1;
				break;
			case("2"):
				temp = 2;
				break;
			case("3"):
				temp = 3;
				break;
			case("4"):
				temp = 4;
				break;
			case("5"):
				temp = 5;
				break;
			case("6"):
				temp = 6;
				break;
			case("7"):
				temp = 7;
				break;
			case("8"):
				temp = 8;
				break;
			case("9"):
				temp = 9;
				break;
		}
		console.log(temp);

		if (num1 == null){
			num1 = temp;
			console.log("num1" +num1);
		} else {
			num2 =temp;
			console.log("num2"+num2);
		}

		// if(num1 != 0 && num2 != 0){
		// 	calculate(num1,num2);
		// }
	});
};
for(var i = 0; i<opButtons.length; i++){
	var opButton = opButtons[i];

	opButton.addEventListener('click', function(event){
		console.log(this.value + ' was clicked')

		operatorPressed = true;

		switch(this.value) {
			case("+"):
				temp = '+';
				break;
			case("-"):
				temp = '-';
				break;
			case("*"):
				temp = '*';
				break;
			case("/"):
				temp = '/';
				break;
		}
	});
};

equalsButton[0].addEventListener('click', function(event){
	console.log(this.value + ' was clicked')

	operatorPressed = true;

		switch(this.value) {
			case("="):
				temp = '=';
				break;
		}
});

clearButton[0].addEventListener('click', function(event){
	console.log(this.value + ' was clicked')

	operatorPressed = true;

		switch(this.value) {
			case("c"):
				temp = 'c';
				break;
		}

});

// function calculate(num1, num2){
	
// }

// switch(operator) {
// 	case('+'):
// 		num1 + num2;
// 		break;
// 	case('-'):
// 		num1 - num2;
// 		break;
// 	case('*'):
// 		num1 * num2;
// 		break;
// 	case('/'):
// 		num1 / num2;
// 		break;
// }

// var display = document.getElementsByClassName('display');
// console.log(display);		
// display[0].addEventListener('click', function(){
// 	event.preventDefault();
// 	updatedDisplay(display.)
// })

// Functions for calculator



// myForm.addEventListener('submit', function(event){
		
// 		var formBox = document.getElementById('formBox');
// 		event.preventDefault();
// 		myNewDiv(formBox.value);

// 	function myNewDiv (text){
// 		var newDiv = document.createElement('div');
// 		//var main = document.getElementsByTagName('main');
// 		newDiv.innerHTML = text;
// 		document.body.appendChild(newDiv);
		
// 		console.log(formBox.value);
// 	};

