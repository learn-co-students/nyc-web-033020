console.log("Rails. Yasss. 🚂🙌🏻")

document.addEventListener("DOMContentLoaded", function(event){

  const ul = document.getElementById("movie-list")
  const url = "http://localhost:3000/movies"
  const headers = {
    "content-type": "application/json",
    "accept": "applicatoin/json"
}

  function createMovieLi(movieObj){
    let li = document.createElement("li")
    li.className = "movie card"
    li.dataset.beef = 'cow'
    li.dataset.id = movieObj.id

    li.innerHTML = `
      <h3>${movieObj.title}</h3>
      <img alt="" src="${movieObj.imageUrl}" />
      <h4>Year: ${movieObj.year}</h4>
      <h4>Genre: ${movieObj.genre}</h4>
      <h4>Score: <span>${movieObj.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button data-purpose="down-vote">Down Vote</button>
      <button class="delete">&times;</button>
    `

    return li
  }

  const renderMovies = movies => {
    ul.innerHTML = ''
    movies.forEach(function(movie){
      const movieLi = createMovieLi(movie)
      ul.append(movieLi)
    })
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

  document.addEventListener("submit", function(e){
    e.preventDefault()
    const form = e.target
    
    const year = form.year.value
    const title = form.title.value
    const genre = form.genre.value
    const imageUrl = form.imageUrl.value
    const score = 0

    const movie = { 
      year: year, 
      title: title, 
      genre: genre, 
      imageUrl: imageUrl, 
      score: score
    }
    
    const movieLi = createMovieLi(movie)
    ul.prepend(movieLi)

    fetch(url,{  
      method: 'POST',
      headers: headers,
      body: JSON.stringify(movie)
    })
    .then(response => response.json())
    .then(console.log)
    
    form.reset()
  })
  
  document.addEventListener("click", function(e){
    if(e.target.className === "up-vote"){
      const li = e.target.parentElement
      const span = li.querySelector('span')
      const currentScore = parseInt(span.textContent)
      const newScore = currentScore + 1
      span.textContent = newScore

    } else if(e.target.className === 'delete'){
      const id = e.target.parentNode.dataset.id
      console.log(id)

      fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: headers
      })
      .then(response => {
        e.target.parentElement.remove()
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
    .then(movies => {
      renderMovies(movies)
    })
  }

  getMovies()
})



































// let genreDropdown = document.querySelector('#genre-select')

// genreDropdown.addEventListener('change', function(e){
//   let genre = e.target.value

//   if(genre === "All"){
//     renderMovies(movies)
//   } else {
//     let selectedMovies = movies.filter(function(movie){
//       return movie.genre === genre
//     })

//     renderMovies(selectedMovies)
//   }
// })