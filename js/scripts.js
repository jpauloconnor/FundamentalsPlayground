//JS File
console.log("Hello World");


function add(x,y){
	console.log(x + y);
}


//Array
												
var classmates = ["Matt", "Tara", "Danielle", "Evan"];


for(var j = 0; j < classmates.length; j++){
	console.log(classmates[j]);
}
//OR//


for(var i in classmates){
	console.log(classmates[i]);
}



var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "IBC";

console.log(classmates);
console.log(typesOfSoda);


var mixedTypeArray = ["Elephant", 100, (5>2)];
var sameType = ["Elephant", "Giraffe", "Duck"];

var randomNumberArray = [57, 58, 92, 10, 11, 83, 20, 28];
function isReallyRandom(randNum){
	if(randomNumberArray.includes(randNum && randNum )){
		//console.log("Got it.")
		return(randomNumberArray.includes(randNum, randNum));
	} else {
		console.log("Nope");
	}
}
console.log(isReallyRandom(21));




/*
var favoriteMovies = ["The Godfather","Pulp Fiction","Reservoir Dogs","Splash"];

for(var movie in favoriteMovies){
	console.log(favoriteMovies[movie]);
}
console.log(favoriteMovies);

for(var i=0;i<favoriteMovies.length;i++){
	console.log(i);
}
*/
/*
for(var i in classmates){
	console.log(classmates[i]);
}
*/



/**********************DO NOT GO ABOVE THIS LINE RIGHT NOW*****************/
/**********************THERE IS TOO MUCH "FUN" ABOVE***********************/

//OBJECT LITERAL
var friend = {
	
	//Properties
	fullname    		: "",
	age					: 0,
	married				: true,
	vocation			: "",
	closeLikeABrother	: true,
	yearsKnown			: 0,
	birthday			: new Date("2000-02-20"),

	//Method
	printVocation   : function(){
		return this.vocation;
	},

	postMessageToWall : function(message){
		return message;
	},

	introduceToSisterInLaw : function(){
		if(this.yearsKnown >= 5 && this.closeLikeABrother == true && this.married == false){
			return "I want you to meet Lizzy.";
		} else {
			return "Have you tried Tinder?";
		}
	},

}

var nickKirkes = Object.create(friend);
nickKirkes.fullname = "Nick Kirkes";
nickKirkes.age = 38;
nickKirkes.married = false;
nickKirkes.vocation = "Project Manager at Sales Force";
nickKirkes.yearsKnown = 20;

var hansKloepfer = Object.create(friend);
hansKloepfer.fullname = "Hans Kloepfer";
hansKloepfer.age = 42;
hansKloepfer.married = false;
hansKloepfer.vocation = "Sailboat Captain";
hansKloepfer.yearsKnown = 31;
hansKloepfer.birthday = ("1975-12-11");

var michael = Object.create(friend);
michael.fullname = "Michael Fiore";
michael.age = 20;
michael.married = false;
michael.vocation = "Software Vigilante";
michael.yearsKnown = 1;


















