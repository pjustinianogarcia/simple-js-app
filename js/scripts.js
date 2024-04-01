// function to create pokemon list

const pokemonRepository = (function() {
  const pokemonList = [];

  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // function to connect the modal
  const modal = document.querySelector('.modal');

  function showModal(item) {
    const modalBody = document.querySelector('.modal-body');
    const modalTitle = document.querySelector('.modal-title');
    const modalImage = document.createElement('img');
    const modalParagraph = document.createElement('p');

    modalImage.classList.add('modal-img');
    modalImage.src = item.imageUrl;
    modalImage.style.width = '40%';

    modalParagraph.textContent = 'Height: ' + item.height;

    modalBody.innerHTML = '';
    modalBody.appendChild(modalImage);
    modalBody.appendChild(modalParagraph);

    modalTitle.innerHTML = '<h1>' + item.name + '</h1>';

    modal.classList.add('show');
  }

  function hideModal() {
    modal.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === ESC && modal.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modal.addEventListener('click', (e) => {
    const target = e.target;
    if (target === modal) {
      hideModal();
    }
  });

  // function to add pokemon
  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('Pokemon is not in the correct format.');
    }
  }

  function getAll() {
    return pokemonList;
  }

  // created list items as buttons
  function addListItem(pokemon) {
    const pokemonList = document.querySelector('.pokemon-list');
    const listpokemon = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn-primary', 'btn-lg', 'col-2', 'mb-2', 'mx-4');
    button.setAttribute('data-target', '#exampleModal');
    button.setAttribute('data-toggle', 'modal');
    listpokemon.classList.add('list-group-item');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', () => {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          json.results.forEach(function(item) {
            const pokemon = {
              name: item.name,
              detailsUrl: item.url,
            };
            add(pokemon);
          });
        })
        .catch(function(e) {
          console.error(e);
        });
  }

  function loadDetails(item) {
    const url = item.detailsUrl;
    return fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        // return(item);
        })
        .catch(function(e) {
          console.error(e);
        });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      // console.log(pokemonDetails)

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

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
