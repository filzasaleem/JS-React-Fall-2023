/*
1) (This has a DEMO solution.)
Create a variable that stores the name of your cafe.
Print out a greeting such as "Welcome to Technigo Cafe! What would you like to order today?"
Where Technigo Cafe is replaced by the name of your cafe that is stored in the variable.
*/
const cafe = "Exercise Cafe";
console.log(`Welcome to ${cafe}! What would you like to order today?`);


/*
2)
Create a variable that stores the price of a coffee.
Create a variable that stores how many coffees the customer wants.
Print out the total price such as "There you go, that'll be 10 euros"
Where 10 is replaced by the calculation of the total price.
*/
let price=10;
let numberOfCoffe;
console.log(`There you go, that'll be ${price} euros.`);


// Good practice Approach

// Bad practive Approach

/*
3)
Create a variable that stores a boolean.
Print out "You said this coffee is the best, that was actually true"
Where true is replaced by your varible
*/
let feedBack = true;

console.log(`You said the coffee is the best, that was actually ${feedBack}`);

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

//maxGuests = "I also love rock n roll!";
/*
6)
Create a variable that stores a string.
Print out that string in only UPPERCASE letters.
*/
let lowerCase = "I also love rock n roll.";
let upperCase = lowerCase.toUpperCase();
console.log(upperCase);
/*
7)
Print out the same string in only lowercase letters.
*/

/*
8) **BONUS**
Print out the string "Today we have a special summer deal!". 
Then figure out a way to replace the word "summer" in the string with the word "winter"
Should give you => "Today we have a special winter deal!"
(check for a specific string method...)
*/
let deal = "Today we have a special summer deal!"
console.log(deal);
let modefiedString = deal.replace("summer","winter");
console.log(modefiedString);

