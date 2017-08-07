

function addTwo(n1 , n2) {
	return n1 + n2;
	

}

function addThree(n1, n2, n3) {
	return n1 + n2 + n3;


}


function multiplyTwo(n1,n2) {
	return n1 * n2;



}


function increaseByPercentage(total, percentage) {
	var decimal = percentage/100 + 1;
	return total * decimal;


}


function reverseWord(word) {
	// var newWord = word.split('');
	// console.log(newWord)
	// var reversed = '';
	// for(var i = newWord.length -1; i <= 0; i--){
	// 	reversed += word[i];
	// }
	// return reversed;

	return word.split("").reverse().join("");

}

function celciusToFahrenheit(celcius) {
	return celcius * 9/5 + 32;


}

function fahrenheitToCelcius(fahr) {
	return (fahr - 32) * 5 / 9;



}

// BONUS QUESTION
function stripVowels(word) {
	return word.replace(/[aeiou]/gi, "");
  

}


// do not delete
runTests();
