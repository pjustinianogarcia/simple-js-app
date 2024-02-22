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

// Threshold height for special Pokémon
let thresholdHeight = 1.0;

// Loop through each Pokémon in pokemonList and write its name, height
for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];
    let output = pokemon.name + " (height: " + pokemon.height + ")";
    // Check if the height of the current Pokémon exceeds the threshold
    if (pokemon.height > thresholdHeight) {
        output += " - Wow, that's big!";
    }
    
    // Write the output 
    document.write(output + "<br>");
}






