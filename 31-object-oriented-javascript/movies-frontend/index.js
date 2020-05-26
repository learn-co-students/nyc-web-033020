console.log("OBJECTS")

document.addEventListener("DOMContentLoaded", function(event){

  const ul = document.getElementById("movie-list")
  const select = document.querySelector('select')
  const url = "http://localhost:3000/api/v1/movies"
  const headers = {
    "content-type": "application/json",
    "accept": "application/json"
  }

  function newMovieForm(){
    const form = document.createElement("form")
    form.name = "new-movie"
    form.id = 'new-movie'
  
    form.innerHTML = `
      <label>Title: </label>
      <input type="text" name="title">
      <br>
      <label>Year: </label>
      <input type="text" name="year">
      <br>
      <label>Genre: </label>
      <input type="text" name="genre">
      <br>
      <label>Image URL: </label>
      <input type="text" name="imageUrl">
      <br>
      <input type="submit" value="Add Movie">
    `

    return form
  }

  const renderMovieDetails = movie => {
    document.querySelector('#movie-title').textContent = `${movie.title} is the BEST movie!! 💯`
    document.querySelector('#movie-poster').src = movie.imageUrl
  }

  const clearMovieDetails = () => {
    document.querySelector('#movie-title').textContent = ''
    document.querySelector('#movie-poster').src = ''
  }
  
  select.addEventListener('change', e => {
    const id = e.target.value
    
    if(id === 'none'){
      clearMovieDetails()
    } else {
      fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(renderMovieDetails)
    }
  })
  
  document.addEventListener("submit", function(e){
    e.preventDefault()
    const form = e.target
    
    const year = form.year.value
    const title = form.title.value
    const genre = form.genre.value
    const imageUrl = form.imageUrl.value
    const score = 0

    const movieObj = { 
      year: year, 
      title: title, 
      genre: genre, 
      imageUrl: imageUrl, 
      score: score
    }

    fetch(url,{  
      method: 'POST',
      headers: headers,
      body: JSON.stringify(movieObj)
    })
    .then(response => response.json())
    .then(movieObj => {
      const movie = new Movie(movieObj)

      movie.renderLi(ul)
      movie.renderOption(select)
    })
    
    form.reset()
  })
  
  document.addEventListener("click", function(e){
    if(e.target.className === "up-vote"){
      const li = e.target.parentElement
      const span = li.querySelector('span')
      const currentScore = parseInt(span.textContent)
      const newScore = currentScore + 1
      span.textContent = newScore

      const id = li.dataset.id

      fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify({ score: newScore })
      })
      .then(response => response.json())
      .then(console.log)

    } else if(e.target.className === 'delete'){
      const id = e.target.parentNode.dataset.id
      console.log(id)

      fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: headers
      })
      .then(response => {
        e.target.parentElement.remove()
        // TODO: remove movie from select element
      })

    } else if(e.target.id === 'show-form'){
      e.target.textContent = "Hide Form"
      e.target.id = 'hide-form'
      e.target.insertAdjacentElement("afterend", newMovieForm())

    } else if(e.target.id === 'hide-form'){
      e.target.textContent = "Show Form"
      e.target.id = 'show-form'
      document.querySelector('form').remove()

    }
  })

  const getMovies = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const movies = data.map(obj => {
        return new Movie(obj)
      })

      Movie.renderMovies(movies, ul, select)
    })
  }

  getMovies()
})
