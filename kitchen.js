//creates variable name containing value of string "Sam"
var myName = "Sam";
// //constant called states with value 50
var states = 50;
// // variable named sum, adds 5 to 4
var sum = 5 + 4;
//a function called sayHello that displays an alert that says Hello World!
function sayHello() {
    alert('Hello World!');
}
//calls sayHello, Outputs alert of "Hello World!"
sayHello();
// //Creates variable 'msg' with object 'checkAge', to pass in string and number
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
//passes object 'checkAge' into condition.  
//Alerts "Sorry " + name + ", you aren't old enough to view this page!" if age is less than 21  
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ", you aren't old enough to view this page");
    }
    ;
}
//Creates array of strings
var favoriteVeggies = ["peppers", "onions", "green beans", "artichokes", "cabbage", "spinach"];
//Loop to console log all members of array 'favoriteVeggies'
for (var i = 0; i < favoriteVeggies.length; i++) {
    console.log(favoriteVeggies[i]);
}
;
//Object 'pet', with properties 'dogName' and 'breed'
//Logs "My dog's name is Goof. He's a border collie mix".  
//Concatonating strings and 'pet' object's properties: dogName & breed
var pet = {
    dogName: 'Goof',
    breed: ' border collie mix'
};
console.log("My dog's name is " + pet.dogName + ". He's a" + pet.breed + ".");
var friends = [
    {
        name: 'josh',
        age: 38
    },
    {
        name: 'bill',
        age: 12
    },
    {
        name: 'frank',
        age: 23
    },
    {
        name: 'joe',
        age: 20
    },
    {
        name: 'bob',
        age: 25
    }
];
// Conditional function on object checkAge.  Arguments from 'friends' array.
// if age less than 21, logs "Sorry friends.name , you aren't old enough to view this page"
function checkAges(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ", you aren't old enough to view this page");
    }
    ;
}
checkAges(friends[1].name, friends[1].age);
checkAges(friends[0].name, friends[0].age);
checkAges(friends[2].name, friends[2].age);
checkAges(friends[3].name, friends[3].age);
checkAges(friends[4].name, friends[4].age);
// //If string length is odd log 'The world is an odd place!' or log 'The world is nice and even!'
var anyWord = ('Hello World');
function getLength(anyWord) {
    if (anyWord.length % 2 == 1) {
        console.log('The world is an odd place!');
    }
    else {
        console.log('The world is nice and even!');
    }
}
getLength(anyWord);
