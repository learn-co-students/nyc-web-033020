/* 

1. Create a Movie class that can instantiate a new movie with the following properties:

  - title
  - year
  - imageUrl
  - genre
  - score

2. Create a instance method for the Movie class called `prettyPrint` that returns a string formatted like this:

  - "Title: The Matrix, Year: 1999, Genre: Science Fiction, Score: 9"

*/  

console.log("movies!")

class Movie{
  constructor(movieObj){
    this.id = movieObj.id
    this.title = movieObj.title
    this.genre = movieObj.genre
    this.imageUrl = movieObj.imageUrl
    this.year = movieObj.year
    this.score = movieObj.score
  }

  prettyPrint(){
    return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}, Score: ${this.score}`
  }

  createMovieLi(){
    let li = document.createElement("li")
    li.className = "movie card"
    li.dataset.beef = 'cow'
    li.dataset.id = this.id

    li.innerHTML = `
      <h3>${this.title}</h3>
      <img alt="" src="${this.imageUrl}" />
      <h4>Year: ${this.year}</h4>
      <h4>Genre: ${this.genre}</h4>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button data-purpose="down-vote">Down Vote</button>
      <button class="delete">&times;</button>
    `

    return li
  }

  renderLi(ulNode){
    const movieLi = this.createMovieLi()
    ulNode.append(movieLi)
  }

  renderOption(selectNode){
    const movieOption = this.createMovieOption()
    selectNode.append(movieOption)
  }

  createMovieOption(){
    const option = document.createElement('option')
    option.textContent = this.title
    option.value = this.id

    return option
  }

  static renderMovies(movies, ulNode, selectNode){
    movies.forEach(function(movie){
      movie.renderLi(ulNode)
      movie.renderOption(selectNode)
    })
  }
}

const matrix = new Movie("The Matrix", 1999, "https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0", "Science Fiction", 4)