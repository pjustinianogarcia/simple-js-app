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

for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];
    document.write(pokemon.name + " (height: " + pokemon.height + ")");
}






