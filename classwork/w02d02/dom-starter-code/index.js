// var selected = document.querySelectorAll('li.selected');

// console.log(selected);


// for(var i =0; i < selected.length; i++){
// 	selected[i].innerHTML ='HELLO NIALL';
// };


// adding a new element

// var pTag = document.createElement('p');

// pTag.innerHTML = "THIS IS A NEW P TAG";

// //document.body.appendChild(pTag);

// document.getElementById('wrapper').appendChild(pTag);



var list = ['Niall', 'Ollie', 'Richard', 'Steve', 'Tim', 'Lexie', 'Rob', 'Kieran'];

var ul = document.getElementById('list');
// console.log(oldList);

// for(var i = 0; i < oldList.length; i++){
// 	oldList[i];
// }

function addNewLi (text) {
	var newLi = document.createElement('li');
	newLi.innerHTML = text;
	ul.appendChild(newLi);
}

for (var i = 0; i < list.length; i++){
	addNewLi(list[i]);
}

for (var j = 0; j < ul.children.length; j++){
	if (j%2 == 0) {
		ul.children[j].classList.add('even');
	}
}

var countSpan = document.getElementById('count');
countSpan.innerHTML = ul.children.length;

//Set the class of every other list item to be “even”
//Set the count span to be the number of list items.




