//'Bulbasaur', 'Ivysaur', 'Venusaur'
let pokemonList = []

pokemonList = [
    {
        name: "Bulbasaur",
        height: 0.7,
        types: ['grass', 'poison']
    },
    {
        name: "Ivysaur",
        height: 1,
        types: ['grass', 'poison']
    },
    {
        name: "Venusaur",
        height: 2,
        types: ['grass', 'poison']
    }
];





// Loop through each Pokémon in pokemonList and write its name, height
pokemonList.forEach(function(pokemon) {
    document.write(pokemon.name + " (height: " + pokemon.height + ")<br>");
});






