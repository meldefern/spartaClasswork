document.addEventListener('DOMContentLoaded', function(){

	var myForm = document.getElementById('myForm');
	myForm.addEventListener('submit', function(event){
		
		var formBox = document.getElementById('formBox');
		event.preventDefault();
		myNewDiv(formBox.value);

	function myNewDiv (text){
		var newDiv = document.createElement('div');
		//var main = document.getElementsByTagName('main');
		newDiv.innerHTML = text;
		document.body.appendChild(newDiv);
		
		console.log(formBox.value);
	};
	});
});

