// let word1 = 'Dylan';
// let word2 = 'Israel';
// let num1 = 2;
// let num2 = 3;

// // const fullName = `${num1 + num2} ${word2}`;
// let example = 'Hello \n' + 'world';
// // console.log(fullName);
// console.log(example)

// function changeElement(Id){
//     document.getElementById(Id).innerHTML = example;
// }

// changeElement('example'); 

/**Destructing Object */
// const player = {
//     name: 'Lebron James',
//     club: 'LA Lakers',
//     address: {
//       city: 'Los Angeles'
//     }
//   };
  
//   // console.log( player.address.city );
  
//   const { name, club, address: { city } } = player;
  
//   // console.log(`${name} plays for ${club}`);
  
//   console.log(`${name} lives in ${city}`);
  



/*
    **** Challenge ****
    
    For this challenge destruture the following object.
*/

// const student = {
//     name: "Kyle",
//     age: 24,
//     projects: {
//         diceGame: "Two player dice game using JavaScript"
//     }
// }

// const {name, age, projects: {diceGame}} = student;

// let example = `${name} is ${age} years old, his project is ${diceGame}`;

// console.log(example)


/** Destructing array */
// let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

// lastName = 'Clements';

// console.log(lastName)

/** Object Literal */
// function addressMaker(city, state) {
//     //const newAdress = {newCity: city, newState: state};
    
//     const newAdress = {city, state};
//     //output newAdress = {city: city, state: state};
//     console.log(newAdress);
// }

// addressMaker('Austin', 'Texas');

// function addressMaker(address) {
//     const {city, state} = address;
    
//     const newAddress = {
//         city,
//         state,
//         country: 'United States'
//     };
//     console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
// }

// addressMaker({city: 'Austin', state: 'Texas'});

/** For of loop */
// let incomes = [62000, 67000, 75000];
// let total = 0;

// for (const income of incomes) {
//     console.log(income);
//     total += income;
// }

// console.log(total);

// let fullName = "Dylan Coding God Israel";

// for (const char of fullName) {
//     console.log(char);
// }

// const students = [ 
//     { name: "John", city: "New York" },
//     { name: "Peter", city: "Paris"},
//     { name: "Kate", city: "Sidney" }
// ];


// for( const student of students ) {
//     console.log( student.name + " lives in " + student.city );
// }

/** Spread Operator */
// let contacts = ["Mary", "Joel", "Danny"];

// //this gonna make rerference to actual object
// let personalFriends = contacts;
// //this copy the object using spread operator
// let personalFriends2 = [ ...contacts];
// //this can be concat to
// let personalFriends3 = [ "Adit", ...contacts, "Mardiano"];

// contacts.push("John");

// console.log(personalFriends);
// console.log(personalFriends2);
// console.log(personalFriends3);

// let person = {
//     name: "Adam",
//     age: 25,
//     city: "Manchester"
// }

// let employee = {
//     ...person,
//     salary: 50000,
//     position: "Software Developer"
// }

// console.log(employee);

/** Rest Operator  if u didnt know how much the input*/

// function add(nums) {
    
//     console.log(arguments);
// }

// add(4, 5, 7, 8, 12)

// function add(...nums) {
    
//     console.log(nums);
// }

// add(4, 5, 7, 8, 12)

/** arrow function */
//function declaration
// function breakfastMenu() {
//     return "I'm going to scrambled eggs for breakfast";
// }

// //anonymous function
// const lunchMenu = function() {
//     return "I'm going to eat pizza for lunch";
// }

// // const dinnerMenu = (food) => {
// //     return `I'm going to eat a ${food} for dinner`;
// // }
// const dinnerMenu = (food) => `I'm going to eat a ${food} for dinner`;

// console.log( dinnerMenu("chicken salad") );


/**Default Params */
// const leadSinger = (artist = "someone") => {
//     console.log(`${artist} is the lead singer of Cold Play`);
// }

// leadSinger();
// leadSinger("Adit");

/*Challenge*/
// const buyFood = (food = "something") => `I'm going to buy ${food} from the grocery shop`;

// console.log(buyFood());
// console.log(buyFood("milk"));

// function foodShopping( food = "something") {
//     console.log(`I'm going to buy ${food} from the grocery shop`);
// }

// foodShopping();

/** Includes() */

// let numArray = [1,2,3,4,5];

// console.log(numArray.includes(2))

/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

// const listIngredients =  [ "flour", "sugar", "eggs", "butter", "chocolate" ];

// if( listIngredients.includes("chocolate")) {
//     console.log("We are going to make a chocolate cake");
// } else{
//     console.log("We can't make a chocolate cake because we are missing the ingredient chocolate");
// }

/**Var Let Const variable hoisting*/

// if (false) {
//     let exampuru = 5;
// }

// console.log(exampuru)

// var exampuru;

// if (false) {
//     exampuru = 5;
// }

// console.log(exampuru)

// const example = 5;
// example = 10;
// console.log(example)

// const example = [];
// example.push(5)
// console.log(example)

// const example = [];
// example = 10
// console.log(example)

// const example = [];
// example.push(5)
// console.log(example)

// const example = {};
// example.firstName = 'Dylan';

// console.log(example)

/** Import and Export */

import {sayHi, sayBye, data} from './example.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

console.log(data);