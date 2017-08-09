// 1.
// Get all elements with the class 'like'. Store them in a veriable called 'q1'
var $q1 = $('.like');
console.log($q1);

// 2.
// Using the variable from q1, apply the class 'important' to each of the 'like' elements
$($q1).each(function(index, item){
	$(item).addClass('important');
})

// 3.
// Get all elements with the class 'article-title'. Store them in a veriable called 'q3'
// Remove the second one from the dom.
var $q3 = $('.article-title');
$q3.eq(1).remove();
// $($q3).each(function(index, item){
// 	if(index === 1){
// 		item.remove();
// 	}
// })



// 4.
// Find the element with the ID of masthead. Store them in a variable called q4. Remove the class 'border-heavy'
var $q4 = $('#masthead')
$q4.removeClass("border-heavy");

// 5.
// Find all LI elements inside of the nav. Store them in a variable called q5.
// If they have the class 'green', add the class 'bold'
var $q5 = $('nav li');
$($q5).each(function(index, element){
	if($(element).hasClass('green')){
		$(element).addClass('bold');
	}
})
// var $q5 = $('nav li.green');
// $q5.addClass('bold');

// 6.
// Find the element with the ID of 'main-heading', store it in a variable called q6.
// Change the element text to read 'This is the new page heading'
var $q6 = $('#main-heading');
$q6.html("This is the new page heading");

// 7.
// Create the element "<h4>I Am A New Element</h4>". Apeend it to the 'main' element.
$('main').append($('<h4>I Am A New Element</h4>'));