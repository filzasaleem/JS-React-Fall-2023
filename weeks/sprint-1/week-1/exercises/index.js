/*
1) (This has a DEMO solution.)
Create a variable that stores the name of your cafe.
Print out a greeting such as "Welcome to Technigo Cafe! What would you like to order today?"
Where Technigo Cafe is replaced by the name of your cafe that is stored in the variable.
*/
const cafe = "Exercise Cafe";
console.log(`Welcome to ${cafe}! What would you like to order today?`);


const cafeName = "Technigo Cafe";

// TEMPLATE LITERALS === backtick approach’

console.log(`Welcome to ${cafeName}! What would you like to order today?`);

/*
2)
Create a variable that stores the price of a coffee.
Create a variable that stores how many coffees the customer wants.
Print out the total price such as "There you go, that'll be 10 euros"
Where 10 is replaced by the calculation of the total price.
*/
<<<<<<< HEAD
let price=10;
let numberOfCoffe;
console.log(`There you go, that'll be ${price} euros.`);

=======
>>>>>>> 6876a6c8e3eee907499169acc0664058c6473f14

// Good practice Approach

let coffeePrice = 335; 
// Aparently super expensive coffee!

const numberOfCoffees = 10;

let totalPrice = coffeePrice * numberOfCoffees;
let message = `There you go, that'll be ${totalPrice} KR`;
console.log(message);

// Bad practice Approach

let myStatment = `There you go, that'll be ${coffeePrice * numberOfCoffees} KR`;
console.log(myStatment);

/*
3)
Create a variable that stores a boolean.
Print out "You said this coffee is the best, that was actually true"
Where true is replaced by your varible
*/
let feedBack = true;

console.log(`You said the coffee is the best, that was actually ${feedBack}`);

let isBestCofee = true;
console.log(
  `You said this coffee is the best, that was actually ${isBestCofee}`
);

/*
4)
Create a variable called cafeGuests, that shows us how many cafeGuests we have.
Assign it a value.
Print it out.
assign it a new value.
Print it out. => This should give you the new value.
*/
let cafeGuests = 25;
console.log(`Number of guests are ${cafeGuests}`);

cafeGuests = 30;
console.log(`Number of guests are ${cafeGuests}`);

let cafeGuests = 10;
console.log(cafeGuests);
cafeGuests = false;
console.log(cafeGuests);
cafeGuests = ["I", "love", "Hip Hop"];
console.log(cafeGuests);

/*

5)
Create a variable called maxGuests, that shows us how many guests are allowed in the cafe.
Assign it a value.
Print it out.
assign it a new value.
Print it out. => This should give you an error because it shouldn't be able to be changed.
*/
const maxGuests = 50;
console.log(`Maximim number of guests allowed are ${maxGuests}`);
//maxGuests = 55;

const maxGuests = 10;
console.log(maxGuests);
//maxGuests = "I also love rock n roll!";

/*
6)
Create a variable that stores a string.
Print out that string in only UPPERCASE letters.
*/
<<<<<<< HEAD
let lowerCase = "I also love rock n roll.";
let upperCase = lowerCase.toUpperCase();
console.log(upperCase);
=======
let favoriteBand = "black sabbath";
console.log(favoriteBand);
let upperCase = favoriteBand.toUpperCase();
console.log(upperCase);

>>>>>>> 6876a6c8e3eee907499169acc0664058c6473f14
/*
7)
Print out the same string in only lowercase letters.
*/

console.log(upperCase.toLowerCase());

/*
8) **BONUS**
Print out the string "Today we have a special summer deal!". 
Then figure out a way to replace the word "summer" in the string with the word "winter"
Should give you => "Today we have a special winter deal!"
(check for a specific string method...)
*/
<<<<<<< HEAD
let deal = "Today we have a special summer deal!"
console.log(deal);
let modefiedString = deal.replace("summer","winter");
console.log(modefiedString);

=======

let specialDeal = "Today we have a special summer deal!";
let updatedDeal = specialDeal.replace("summer", "winter");
console.log(updatedDeal);
>>>>>>> 6876a6c8e3eee907499169acc0664058c6473f14
