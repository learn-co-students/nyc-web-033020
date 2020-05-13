console.log("Delegating means getting someone to do your work for you! ¯\\_(ツ)_/¯")


document.addEventListener("DOMContentLoaded", function(event){

  const movies = [
    {
      title: 'The Goonies',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
      year: 1985,
      genre: 'Adventure',
      score: 100
    },
    { 
      title: 'Free Willy',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
      year: 1993,
      genre: 'Family',
      score: 0  
    },
    { 
      title: 'Top Gun',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
      year: 1986,
      genre: 'Action',
      score: 0  
    },
    { 
      title: 'Mean Girls',
      imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
      year: 2004,
      genre: 'Comedy',
      score: 0  
    },
    { 
      title: 'Parasite',
      imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg',
      year: 2019,
      genre: 'Thriller',
      score: 0  
    },
    {
      title: "What About Bob?",
      year: 1991,
      genre: 'Comedy',
      score: 0,
      imageUrl: "https://www.movieartarena.com/imgs/wab.jpg"
    },
    {
      title: "The Matrix",
      year: 1999,
      genre: 'Science Fiction',
      score: 0,
      imageUrl: "https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0"
    },
    {
      title: "Jaws",
      year: 1984,
      genre: 'Horror',
      score: 0,
      imageUrl: "https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA"
    },
  ]
  const ul = document.getElementById("movie-list")
  
  // let goonies = {
  //   title: 'The Goonies',
  //   year: 1986,
  //   genre: "Adventure",
  //   score: 100,
  //   imageUrl: "https://cdn.shopify.com/s/files/1/1416/8662/products/goonies_1985__linen_original_film_art_f_2000x.jpg?v=1586700663"
  // }
  
  // const gooniesLi = createMovieLi(goonies)
  // ul.append(gooniesLi)

  function createMovieLi(movieObj){
    let li = document.createElement("li")
    li.className = "movie"
    li.innerHTML = `
      <h3>${movieObj.title}</h3>
      <img alt="" src="${movieObj.imageUrl}" />
      <h4>Year: ${movieObj.year}</h4>
      <h4>Genre: ${movieObj.genre}</h4>
      <h4>Score: <span>${movieObj.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button class="delete">&times;</button>
    `

    return li
  }

  function renderMovies(movies){
    // iterate over the array of movies
    // for each movie, we want to build the corresponding HTML
    // then we want to append each movie to the DOM

    movies.forEach(function(movie){
      const movieLi = createMovieLi(movie)
      ul.append(movieLi)
    })
  }

  function newMovieForm(){
    const form = document.createElement("form")
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

  renderMovies(movies)

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
      console.log('delete')
      e.target.parentElement.remove()

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

  // const deleteButtons = document.getElementsByClassName("delete")
  // const deleteArray = Array.from(deleteButtons)

  // deleteArray.forEach(function(button){
  //   button.addEventListener('click', function(event){
  //     event.target.parentElement.remove()
  //   })
  // })

  // const upVoteButtons = document.getElementsByClassName("up-vote")
  // const upVoteArray = Array.from(upVoteButtons)

  // upVoteArray.forEach(function(button){
  //   button.addEventListener('click', function(event){
  //     const li = event.target.parentElement
  //     const span = li.querySelector('span')
  //     const currentScore = parseInt(span.textContent)
  //     const newScore = currentScore + 1
  //     span.textContent = newScore
  //   })
  // })

  // -------------------------

  // √USER STORY
  // As a user, when I click the "Show Form" button 
  // the text inside the button show change to "Hide Form"
  // and I should see a form with field for movie attributes
  // underneath the button

  // PSEUDOCODE
  // listen for clicks on the show form button
  // on click, change button text to "Hide Form"
  // and display the new movie form

  // -------------------------

  // √USER STORY
  // When I fill out the form and click "Add Movie"
  // I should see the new movie and its details


  // PSEUDOCODE
  // listen for a submit on the form
  // on submit, pull the data out of the form
  // use that data to build a new movie element
  // render that element on the DOM

  // -------------------------

  // √USER STORY
  // When I click "Hide Form" button, the form should disappear
  // and the text in the button should change back to "Show Form"

  // PSEUDOCODE
  // listen for clicks on the hide form button
  // on click, change button text to "Show Form"
  // and remove the form from the DOM
})

