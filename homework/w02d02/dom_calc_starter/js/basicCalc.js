// Setup initial state variables
var num1;
var num2;
var temp;
var op;
var result = 0;
document.getElementsByClassName('display')[0].value = result;
// Variables defined in global scope, not the best idea
// Setup eventListeners
var numberButtons = document.getElementsByClassName('number');
var opButtons = document.getElementsByClassName('operator');
var equalsButton = document.getElementsByClassName('eq');
var clearButton = document.getElementsByClassName('clear');

for(var i = 0; i<numberButtons.length; i++){
	var numButton = numberButtons[i];

	numButton.addEventListener('click', function(event){

		temp = parseInt(this.value);

		if (num1 == null){
			num1 = temp;
			document.getElementsByClassName('display')[0].value = num1;
		} else {
			num2 =temp;
			document.getElementsByClassName('display')[0].value = num2;
		}
	});
};
for(var i = 0; i<opButtons.length; i++){
	var opButton = opButtons[i];

	opButton.addEventListener('click', function(event){
		switch(this.value) {
			case("+"):
				op = '+';
				break;
			case("-"):
				op = '-';
				break;
			case("x"):
				op = '*';
				break;
			case("/"):
				op = '/';
				break;
		}
	});
};

equalsButton[0].addEventListener('click', function(event){
		calculate(num1, num2, op);
});

clearButton[0].addEventListener('click', function(event){
		num1 = null;
		num2 = null;
		temp = null;
		op = null;
		result = null;
		document.getElementsByClassName('display')[0].value = 0;
});

// Functions for calculator
function calculate(num1, num2, op){
	switch(op) {
	case('+'):
		result = num1 + num2;
		break;
	case('-'):
		result = num1 - num2;
		break;
	case('*'):
		result = num1 * num2;
		break;
	case('/'):
		result = num1 / num2;
		break;
	}
	document.getElementsByClassName('display')[0].value = result;
}

