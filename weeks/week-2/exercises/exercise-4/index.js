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
  "Pidgey"
];


const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(pokemons.length);
};
countThem();

const orderThem = () => {
  // order the pokemons alphabetically
  console.log(pokemons.sort());
};
orderThem();

const flipThem = () => {
  // reverse the order of the pokemons
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

const onlyTheBs = () => {
  let bPokemons = pokemons.filter((pokemon) => {
    return pokemon.charAt(0) == "B"
  });
  // only print the pokemons that starts with B

  console.log(bPokemons);
};
onlyTheBs();


const notTheCs = () => {
  // remove all pokemons that starts with C

  let notCPokemons = pokemons.filter((pokemon) => {
    return pokemon.charAt(0) != "C"
  });
  console.log(notCPokemons);
};
notTheCs();


const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  for(i= 0; i<pokemons.length; i++){
    console.log(`number ${i} - ${pokemons[i]}`);
  }
};
nameAndIdThanks();

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push(name);
 

};

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

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.

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