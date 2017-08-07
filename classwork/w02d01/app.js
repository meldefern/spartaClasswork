var mainMenu= prompt("Select between number and word menu \n a: number\n b: word ");
switch(mainMenu){
	case "a":
		number();
		break;
	case "b":
		word();
		break;
}

function number() {
	var number1 = parseInt(prompt("Enter first number: "));
	var menu = prompt("Operation( + - / * ) \n Raise to the power (**)\n Square Root (sqr) Leave second number blank\n Largest of 2 (max2)\n Largest of 3 (max3) ");
	var number2 = parseInt(prompt("Enter second number: "));
	var result = 0;
	switch(menu){
		case "+":
			result = add(number1, number2);
			break;
		case "-":
			result = subtract(number1, number2);
			break;
		case "*":
			result = multiply(number1, number2);
			break;
		case "/":
			result = divide(number1, number2);
			break;
		case "**":
			result= power(number1, number2);
			break;
		case "sqr":
			result= square(number1);
			break;
		case "max2":
			result=max2(number1, number2);
			break;
		case "max3":
			result = max3(number1,number2);
			break;
		default:
			console.log("Error");
	}
	console.log(result);

	function add(number1, number2) {
		var result = number1 + number2;
		return result;
	}

	function subtract(number1, number2) {
		var result = number1 - number2;
		return result;
	}

	function multiply(number1, number2) {
		var result = number1 * number2;
		return result;
	}

	function divide(number1, number2) {
		var result = number1 / number2;
		return result;
	}
	function power(number1, number2) {
		var result = number1 ** number2;
		return result;
	}
	function square(number1) {
		var result = Math.sqrt(number1);
		return result;
	}
	function max2(number1, number2){
		if (number1 > number2) return number1;
		if (number2 > number1) return number2;
	}

	function max3(number1, number2){
		var number3 = prompt("Enter a third number: ");
		if ((number1 > number2) && (number1 > number3)) return number1;
		if ((number2 > number1) && (number2 > number3)) return number2;
		if ((number3 > number1) && (number3 > number2)) return number3;
	}
}

function word(){
var menu = prompt("Word Menu:\n1- Number of words in a sentence");
var sentence = prompt("Enter your sentence: ");
var result = "";

switch (menu){
	case "1":
		result = noOfWords(sentence);
		break;
}

console.log(result);

function noOfWords(sentence){
	var sentenceArray = sentence.split(" ");
	return sentenceArray.length;
}

}