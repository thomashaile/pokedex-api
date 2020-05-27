const evolutionOf = (pokeArray, name) => {
    const pokemon = pokeArray.find(item => item.name === name);
    //if a pokemon does not exist in the pokeArray, return null
    if (!pokemon) {
        return null;
    }

    if ("prev_evolution" in pokemon) {
        return pokeArray.push(...pokemon.prev_evolution); //prev
    }
    pokeArray.push({ "num": pokemon.num, "name": pokemon.name }); //it self
    if ("next_evolution" in pokemon) { pokeArray.push(...pokemon.next_evolution); }; //next
    return pokeArray;
};

module.exports = evolutionOf;


/*
  return an array with all evolutions of a pokemon, including itself:

    [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ]

  if a pokemon does not exist in the pokeArray, return null

    null

  read the ./spec.js file & study the data samples for a better understanding
*/