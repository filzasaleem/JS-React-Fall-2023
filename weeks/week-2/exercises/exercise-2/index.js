// Functions + Conditionals Exercise


/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/

const theCoders = (driver, navigator) => {
  console.log(
    `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
  );
};
theCoders("filza","tom");
/*
2)
Pass in only ONE name when you call the function and see what happens.
(HINT, you should get undefined...)
*/

/*
3) 
create a function that checks which name is the longest when comparing the coders 
and print out: "The driver has the longest name." or "The navigator has the longest name" 
or if the names ar the same length "The driver and the navigator has equally long names"

*/

const nameLength = (driver, navigator) => {
  if (driver.length > navigator.length)
  {
    console.log("The driver has the longest name");

  }else{
    console.log("The navigator has the longest name");
  }

}

nameLength("filza","haleema")
/*
4) 
to get user input you can use the prompt() and then store that into a variable.
Such as 
let userAge = prompt('How old are you?')
Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
alert('wow you are 33! that's young!')
or alert('23! Younger than Zlatan') or something like that.
Add as many conditonals as you want.
*/
const userAge = () =>{
  let age = parseInt(prompt("How old are you?"));
  if(age<18){
    alert(`${age}!, You are under age`);
  }else if(age == 33)
  {
    alert(`${age}!, Nice we are same age!!!`);
  }
}




//userAge();
const calculationTest = () => {
    const min = 1;
    const max = 30;
    let num1 ,num2 = 0;
    num1 = Math.floor(Math.random() * (max-min+1)) + min;
    num2 = Math.floor(Math.random() * (max-min+1)) + min;
    let result = num1 + num2;
    let userResult = parseInt(prompt(` what is ${num1} + ${num2}?`));
    if(result == userResult){
      alert("yayyy! Good job");
    }else
    {
      alert("correct result is: "+result);
    }


  /*
  5)
  In this function we want to give the user a mathematical calculation to 
  give us the answer to. Something like prompt('What is 5 + 6?')  
  If the answer is correct, congratulate the user. 'Yay! Correct'
  If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
  You choose if to use addition, subtraction, multiplication or division. 
  */
};

calculationTest();

/*
6) **BONUS**
Make the calculation machine we just made show random calculations everytime you invoke the function.
But hey, maybe limit the randomness to be numbers between 0-10?
*/
