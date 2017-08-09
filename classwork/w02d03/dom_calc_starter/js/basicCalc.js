// Set initial state variables
// find numbers
var numbers = document.getElementsByClassName('number');
// find operators
var operators = document.getElementsByClassName('operator');
// equals
var eq =  document.getElementsByClassName('eq')[0];
// clear
var clear = document.getElementsByClassName('clear')[0];
// display
var display = document.getElementsByClassName('display')[0];
// variable for first number in calculation
var first_number = null;
// variable for second number in calculation
var second_number = null;
// variable for operator clicked
var operator = null;
// variable for answer of calculations
var answer = null;

// Setup event listeners
function setupEventListeners(){
	// numbers event listeners
	for (var i = 0; i < numbers.length; i++){
		numbers[i].addEventListener('click', updateAndDisplayNumber);
	}
	// operators event listeners
	for (var i = 0; i < operators.length; i++){
		operators[i].addEventListener('click', updateAndDisplayOperator);
	}

	// equals event listeners
	eq.addEventListener('click', function(){
		calculation(first_number, operator, second_number);
	});

	// clear event listeners
	clear.addEventListener('click', clearCalc);

}

// Functions for calculator
// add // subtract // divide // multiply
function add(firstNumber, secondNumber){
	return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber){
	return firstNumber - secondNumber;
}
function divide(firstNumber, secondNumber){
	return firstNumber / secondNumber;
}
function multiply(firstNumber, secondNumber){
	return firstNumber * secondNumber;
}

// calculation
function calculation(firstNumber, operator, secondNumber){
	switch (operator){
		case '+':
			display.value = add(firstNumber, secondNumber);
			break;
		case '-':
			display.value = subtract(firstNumber,secondNumber);
			break;
		case 'x':
			display.value = multiply(firstNumber, secondNumber);
			break;
		case '/':
			display.value = divide(firstNumber, secondNumber);
			break;
	}
}

// clear the calculator
function clearCalc(){
	first_number = null;
	second_number = null;
	operator = null;
	display.value = "";
}

// display and store the buttons clicked
function updateAndDisplayNumber(){
	var btn = this.value;
	display.value = btn;

	if (first_number === null){
		first_number = parseFloat(btn);
	} else {
		second_number = parseFloat(btn);
	}

}

// display and store the operator
function updateAndDisplayOperator(){
	operator = this.value;
	display.value = operator;
}


setupEventListeners();
