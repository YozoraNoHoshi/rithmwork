$(function() {
  $('#catch-em-all').on('click', control);

  async function control(event) {
    event.preventDefault();
    try {
      let pokemonListResults = await grabPokeList();
      let pokemons = await getPokemon(pokemonListResults, 3);
      await getPokemonSpecies(pokemons, pokemons);
    } catch (err) {
      console.log(err);
    }
  }

  async function grabPokeList() {
    return await $.getJSON(`https://pokeapi.co/api/v2/pokemon/`);
  }

  async function getPokemon(results, count) {
    let pokemons = results.results;
    let promiseList = [];
    for (let i = 0; i < count; i++) {
      let id = Math.floor(Math.random() * pokemons.length + 1);
      let promise = $.getJSON(`${pokemons[id].url}/`);
      promiseList.push(promise);
    }
    return await Promise.all(promiseList);
  }

  async function getPokemonSpecies(results, pokemons) {
    let speciesList = results.map(value => {
      return $.getJSON(`${value.species.url}`);
    });

    let flavorTextList = await Promise.all(speciesList);
    flavorTextList.forEach((value, idx) => {
      let language = value.flavor_text_entries.find(
        value => value.language.name === 'en'
      );
      // console.log(`${value.name}: ${language.flavor_text}`);
      buildPokeCard(
        value.name,
        pokemons[idx].sprites.front_default,
        language.flavor_text
      );
    });
  }

  function buildPokeCard(name, image, flavor_text) {
    let $pokeContainer = $('#pokemon-container');

    let $name = $('<div>').text(`${name}`);
    let $image = $('<div>').append($('<img>').attr('src', image));
    let $flavorText = $('<div>').text(`${flavor_text}`);
    let $card = $('<div>')
      .addClass('col-4')
      .append($name)
      .append($image)
      .append($flavorText);

    $pokeContainer.append($card);
  }
});
