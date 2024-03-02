var pokemonRepository = (function() {
    var pokemonList = [
      {
        name: "Bulbasaur",
        height: 0.7,
        types: ["grass", "poison"],
      },
      {
        name: "Ivysaur",
        height: 1,
        types: ["grass", "poison"],
      },
      {
        name: "Venusaur",
        height: 2,
        types: ["grass", "poison"],
      },
    ];
  
    function getAll() {
      return pokemonList;
    }
  
    function add(pokemon) {
      // Check if the parameter is an object and has required properties
      if (typeof pokemon === "object" && "name" in pokemon && "height" in pokemon && "types" in pokemon) {
        pokemonList.push(pokemon);
      } else {
        console.error("Pokemon is not in the correct format.");
      }
    }
  
    return {
      getAll: getAll,
      add: add,
    };
  })();
  
  // Loop through each Pokémon in pokemonRepository and write its name, height
  pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(pokemon.name + " (height: " + pokemon.height + ")<br>");
  });
  




