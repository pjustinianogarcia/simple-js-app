// Pokemon list with properties inside IIFE

var pokemonRepository = (function () {
    let repository = [
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

// function to add pokemon
    function add(pokemon) {

        if (typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "types" in pokemon
        ) {
            repository.push(pokemon);
        } else {
            console.log("Pokemon is not in the correct format.");
        }
    }

    function getAll() {
        return repository;
    }

    // created list items as buttons
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        // event listener "click" for each button 
        button.addEventListener("click", function () {
            showDetails(pokemon);
        });
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
    }

    function showDetails(pokemon) {
        console.log(pokemon);

    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
    };
})();

// print out pokemon list
console.log(pokemonRepository.getAll());
pokemonRepository.add({
    name: "Bulbasaur", height: 0.7,
    types: ["grass", "poison"]
});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});








