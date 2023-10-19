// Arrays Exercise

const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey",
];

<<<<<<< HEAD

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(pokemons.length);
};
countThem();
=======
console.log("Iteration 01");
const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  let mySentence = `I have ${pokemons.length} pokemons`;
  console.log(mySentence);
};
countThem();
console.log("----");
>>>>>>> 6876a6c8e3eee907499169acc0664058c6473f14

console.log("Iteration 02");
console.log("Using sort() method");
const orderThem = () => {
  // order the pokemons alphabetically
<<<<<<< HEAD
  console.log(pokemons.sort());
};
orderThem();
=======
  let orderedPokemons = pokemons.sort((pokemonOne, pokemonTwo) =>
    pokemonOne > pokemonTwo ? 1 : -1
  );
  console.table(orderedPokemons);
};
orderThem();
console.log("----");
>>>>>>> 6876a6c8e3eee907499169acc0664058c6473f14

console.log("Iteration 03");
console.log("Using sort() method - reversed");
const flipThem = () => {
  // reverse the order of the pokemons
<<<<<<< HEAD
  console.log(pokemons.reverse());
};
console.log(pokemons);
flipThem();
const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  let bigPokemons = [];
  for(let i = 0; i< pokemons.length; i++){
    bigPokemons[i] = pokemons[i].toUpperCase();

  }
 // console.log(bigPokemons);
  return bigPokemons;

};
//let bigPokemons = makeThemBig();
console.log(makeThemBig());
=======
  // order the pokemons alphabetically
  let reversedPokemons = pokemons.sort((pokemonOne, pokemonTwo) =>
    pokemonOne > pokemonTwo ? -1 : 1
  );
  console.table(reversedPokemons);
};
flipThem();
console.log("----");

console.log("Iteration 04");
const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  pokemons.forEach((pokemon) => console.log(pokemon.toUpperCase()));
};
makeThemBig();
console.log("----");
>>>>>>> 6876a6c8e3eee907499169acc0664058c6473f14

console.log("Iteration 05");
console.log("Using filter() method + string method startsWith()");
const onlyTheBs = () => {
  let bPokemons = pokemons.filter((pokemon) => {
    return pokemon.charAt(0) == "B"
  });
  // only print the pokemons that starts with B
<<<<<<< HEAD

  console.log(bPokemons);
};
onlyTheBs();

=======
  let filteredPokemons = pokemons.filter((pokemon) => pokemon.startsWith("B"));
  console.log(filteredPokemons);
  // filteredPokemons.forEach((pokemon) => console.log(pokemon));
};
onlyTheBs();
>>>>>>> 6876a6c8e3eee907499169acc0664058c6473f14

console.log("Using forEach() method + string method startsWith()");
const onlyTheBsTwo = () => {
  // only print the pokemons that starts with B
  pokemons.forEach((pokemon) => {
    if (pokemon.startsWith("B")) {
      console.log(pokemon);
    }
  });
};
onlyTheBsTwo();
console.log("----");

console.log("Iteration 06");
const notTheCs = () => {
  // remove all pokemons that starts with C
<<<<<<< HEAD

  let notCPokemons = pokemons.filter((pokemon) => {
    return pokemon.charAt(0) != "C"
  });
  console.log(notCPokemons);
};
notTheCs();

=======
  let filtered = pokemons.filter((pokemon) => !pokemon.startsWith("C"));
  filtered.forEach((pokemon) => console.log(pokemon));
};
notTheCs();
console.log("----");
>>>>>>> 6876a6c8e3eee907499169acc0664058c6473f14

console.log("Iteration 07");
const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
<<<<<<< HEAD
  for(i= 0; i<pokemons.length; i++){
    console.log(`number ${i} - ${pokemons[i]}`);
  }
};
nameAndIdThanks();
=======
  // Using forEach
  console.log("Using forEach() method");
  pokemons.forEach((pokemon, id) => {
    let myString = `Number ${id} - ${pokemon}`;
    console.log(myString);
  });
  // Using forLoop
  console.log("---");
  console.log("Using map() method");
  pokemons.map((pokemon, id, position) => {
    let myString = `Number ${id} - ${pokemon}`;
    console.log(myString);
  });
};
nameAndIdThanks();
console.log("----");
>>>>>>> 6876a6c8e3eee907499169acc0664058c6473f14

console.log("Iteration 08");
const catchPokemon = (name) => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push(name);
<<<<<<< HEAD
 

=======
  console.log(`${name} has been caught and added to the pokemons array!`);
>>>>>>> 6876a6c8e3eee907499169acc0664058c6473f14
};
catchPokemon("Raichu");
console.log(pokemons);
console.log("----");

<<<<<<< HEAD
catchPokemon("Zubat");
console.log(pokemons);

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
  let pokemon = pokemons.find((pokemon) => pokemon == name);
  if (pokemon != undefined)
  {
    console.log("yes you catched "+ name);
  }else {
    console.log("no you didn't catch "+ name);
  }


};
didICatchIt("Zubat");
=======
console.log("Iteration 09");
const didICatchIt = (name) => {
  // check the pokemons to see if a specific pokemon is in the array
  // pokemons.includes(name);
  if (pokemons.includes(name)) {
    console.log(`Cool, I already caught this pokemon: ${name}`);
  } else {
    console.log(`You have not catched this pokemon '${name}' yet, go for it!`);
  }
};
didICatchIt("Mewtwo");
console.log("----");
>>>>>>> 6876a6c8e3eee907499169acc0664058c6473f14

console.log("Iteration 10");
const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
<<<<<<< HEAD

  pokemons.splice(2, 0, 'Clefairy');
};
addInThirdPlace();

console.log(pokemons);
// ***BONUS***
const theLongestName = () => {


  const longestName = pokemons.reduce(function(longest, currentName) {
    // Compare the length of the current name with the longest name found so far
    return currentName.length > longest.length ? currentName : longest;
  }, "");

   console.log(longestName);
  // return name;
};

theLongestName();

// for(i = 1; i<length; i++){
//   if(pokemons[i].length >= nameLength){
//     nameLength = pokemons[i].length;
//     name.push(pokemons[i]);
//   }

// }
=======
  // Explanation
  //The addPokemonToThirdPosition function uses the splice method to insert the Pokémon at the 3rd position, with a confirmation message logged afterwards. By modifying the pokemon variable inside the function, different Pokémon names can be added. The slice method, with arguments 2 and 0, extracts a portion of the pokemons array starting from the 2nd position, creating an empty slice that doesn't include any elements after the starting index.
  const pokemon = "Clefairy";
  pokemons.splice(2, 0, pokemon);
  console.log(
    `${pokemon} has been added to the 3rd position of the pokemons array!`
  );
};
addInThirdPlace();
console.log(pokemons);
console.log("----");

console.log("Iteration 11 ");
console.log("Bonus");
// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  const sortedPokemons = pokemons.sort((a, b) => b.length - a.length);
  longestNamePokemon = sortedPokemons[0];

  // Get the character count of the longestNamePokemon
  const characterCount = longestNamePokemon.length;
  console.log(longestNamePokemon, characterCount);
  console.log(
    `The pokemon with the longest name is ${longestNamePokemon} with ${characterCount} characters under his name`
  );
};
theLongestName();

console.log("----");
>>>>>>> 6876a6c8e3eee907499169acc0664058c6473f14
