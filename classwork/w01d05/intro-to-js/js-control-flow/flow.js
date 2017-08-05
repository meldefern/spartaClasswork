var moneyInPocket = parseInt(prompt("how much ya got?"));

if (moneyInPocket > 10) {
	console.log("another drink please");
} else if (moneyInPocket == 7) {
	console.log("Just a half")
} else {
	console.log("get me an uber");
}

//if (something) console.log("Doing something");


switch(moneyInPocket){
	case 10:
		console.log("shandy");
		break;
	case 20:
		console.log("jaegerbomb");
		break;
	case 30:
		console.log("prosecco");
		break
	default:
		console.log("champers");
}