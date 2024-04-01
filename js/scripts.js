// Function to create Pokemon list inside IIFE

const pokemonRepository = (function () {
  const pokemonList = [];

  const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  // Function to load data from external API
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          const pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Function to load aditional data from external API

  function loadDetails(item) {
    const url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Function to add a Pokemon to the list
  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("Pokemon is not in the correct format.");
    }
  }

  // Function to return all Pokemon
  function getAll() {
    return pokemonList;
  }

  // Function to creat list items as buttons
  function addListItem(pokemon) {
    const pokemonList = document.querySelector(".pokemon-list");
    const listpokemon = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add(
      "btn-danger",
      "btn-lg",
      "col-2",
      "mb-2",
      "mx-4",
      "button-uppercase"
    );
    button.setAttribute("data-target", "#exampleModal");
    button.setAttribute("data-toggle", "modal");
    listpokemon.classList.add("list-group-item");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", () => {
      showDetails(pokemon);
    });
  }

  // Function to display Pokemon details in modal
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

// Function to load list of Pokemons when page is opened

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

// Function to connect the modal to Pokemon details
const modal = document.querySelector(".modal");

function showModal(item) {
  const modalBody = document.querySelector(".modal-body");
  const modalTitle = document.querySelector(".modal-title");
  const modalImage = document.createElement("img");
  const modalParagraph = document.createElement("p");

  modalImage.classList.add("modal-img");
  modalImage.src = item.imageUrl;
  modalImage.style.width = "40%";

  modalParagraph.textContent = "Height: " + item.height;

  modalBody.innerHTML = "";
  modalBody.appendChild(modalImage);
  modalBody.appendChild(modalParagraph);

  modalTitle.innerHTML = "<h1>" + item.name + "</h1>";

  modal.classList.add("show");
}

function hideModal() {
  modal.classList.remove("is-visible");
}

window.addEventListener("keydown", (e) => {
  if (e.key === ESC && modal.classList.contains("is-visible")) {
    hideModal();
  }
});

modal.addEventListener("click", (e) => {
  const target = e.target;
  if (target === modal) {
    hideModal();
  }
});
