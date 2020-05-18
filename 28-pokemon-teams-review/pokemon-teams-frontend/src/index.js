/*

* When a user loads the page, they should see all
trainers, with their current team of Pokemon.

  - √DOMContentLoaded listener
  - √fetch to get trainers and pokemon - GET /trainers
  - √render the trainers and their respective pokemon

* Whenever a user hits Add Pokemon and they have
space on their team, they should get a new Pokemon.

  - √click listener on the add pokemon button
  - √fetch request - POST /pokemons
  - √render the new pokemon to the team - pessimistically render

* Whenever a user hits Release Pokemon on a specific
Pokemon team, that specific Pokemon should be released from
the team.

  - √click listener on release
  - √DELETE request to /pokemons/id
  - √remove pokemon from DOM - optimistic or pessimistic?

*/


const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", e => {
  const getTrainers = () => {
    fetch(TRAINERS_URL)
    .then(response => response.json())
    .then(trainers => {
      // for each trainer, render a card with a ul
      // for each trainer's pokemon, render a li
      const main = document.querySelector('main')

      trainers.forEach(trainer => {
        const div = document.createElement('div')
        div.className = 'card'
        div.dataset.id = trainer.id

        div.innerHTML = `
          <p>${trainer.name}</p>
          <button class="add" data-trainer-id="${trainer.id}">Add Pokemon</button>
        `

        const ul = document.createElement('ul')

        trainer.pokemons.forEach(pokemon => {
          const li = pokemonLi(pokemon)
    
          ul.append(li)
        })

        div.append(ul)
        main.append(div)
      })
    })
  }

  const pokemonLi = pokemon => {
    const li = document.createElement('li')
    li.innerHTML = `
      ${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button>
    `

    return li
  }
  

  const createPokemon = trainerId => {
    fetch(POKEMONS_URL, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ trainer_id: trainerId })
    })
    .then(response => response.json())
    .then(pokemon => {
      console.log(pokemon)
      // let's find the correct trainer's div
      // find the ul inside that div
      // append the pokemon li

      if(pokemon.error){
        console.log(pokemon.error)
      } else {
        const div = document.querySelector(`[data-id="${trainerId}"]`)
        const ul = div.querySelector('ul')
        const li = pokemonLi(pokemon)
        ul.append(li)
      }
    })
  }

  const removePokemon = pokemonId => {
    fetch(`${POKEMONS_URL}/${pokemonId}`, {
      method: "DELETE"
    })
  }
  
  document.addEventListener("click", e => {
    if(e.target.className === "add"){
      const trainerId = e.target.dataset.trainerId
      createPokemon(trainerId)

    } else if (e.target.className === 'release'){
      const pokemonId = e.target.dataset.pokemonId
      removePokemon(pokemonId)
      e.target.parentNode.remove()

    }
  })

  getTrainers()
})