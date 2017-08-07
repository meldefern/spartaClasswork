var peopleInClass = ["Joe", "Naz", "Melson", "Will", "Kane", "Greg", "Sab", "Melinda", "Div", "Rich"];

console.log(peopleInClass[1]);
for (var i = 0; i < peopleInClass.length; i++){
	console.log(peopleInClass[i]);
}

var person = 0;
var currentPerson = "";
while(peopleInClass[person] != "Melinda"){
	currentPerson = peopleInClass[person];
	console.log(currentPerson);
	person++;
}

var thingsInClassroom = {
	"water bottles": 5,
	mugs: 7,
	people: peopleInClass.length,
	pens: 5,
	radiators: 2,
	"charging macs": 4,


}

for (key in thingsInClassroom) {
	console.log(key);
	console.log(thingsInClassroom[key]);
}