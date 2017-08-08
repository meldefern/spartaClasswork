// write code here

document.addEventListener('DOMContentLoaded', function(){

	var button = document.getElementById('myButton');
	button.addEventListener('click', function(){
	console.log("button was clicked");
	});

	console.log(button);

	
	var myForm = document.getElementById('myForm');
	myForm.addEventListener('submit', function(event){
		//console.log(this); //this referring to the thing this is applied to, i.e. here form
		var firstNameField = document.getElementById('firstname');
		if (!firstNameField.value){
			console.log('you must enter something');
		}

		event.preventDefault();
		console.log("Form submitted");
	});

	var buttons = document.querySelectorAll('.myButtons');

	for(var i = 0; i<buttons.length; i++){
		var button = buttons[i];

		button.addEventListener('click', function(event){
			console.log(this.value + ' was clicked')
		});
	};


});





