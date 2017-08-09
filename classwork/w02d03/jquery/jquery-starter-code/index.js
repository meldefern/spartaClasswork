$(function(event) {
	console.log('DOM is ready');
	 var count = $("#count");
	 var items = $('li');
	 var done = $('li.done');
	 console.log(items);

	 var li = $('<li>NewItem</li>');
	 $('#list').append(li);

	 // $('#list').append($('<li>NewItem</li>'));
	 // $('#list').prepend($('<li>NewItem</li>'));

	 var todos = ['Food shop', 'Wash Clothes', 'Pay Bills'];

	 $(todos).each(function(index,todo){
	 	console.log(todo);
	 })

	 var a = $('#count').html();
	 $('#count').html('5');

	 $('#count').css('color', 'green');

	 // adding class to li elements
	 $('li').addClass('done');

	 // changing html of id count with text 10, and css color red
	 $('#count').html('10').css('color', 'red');

	 // creating button with id myButton and appending it to body
	 var button = $('<button id="myButton">Click</button>');
	 $('body').append(button);

	 // event listener
	 $('#myButton').on('click', function(){
	 	console.log('button clicked');
	 })
	 
});