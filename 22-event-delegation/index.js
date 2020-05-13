console.log("events events events")

const movies = [
  {
    title: 'The Goonies',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
    year: 1985,
    genre: 'Adventure',
    score: 0
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

let li = document.createElement("li")
li.className = "movie"

li.innerHTML = `
  <h3>The Goonies</h3>
  <img alt="" src="https://cdn.shopify.com/s/files/1/1416/8662/products/goonies_1985__linen_original_film_art_f_2000x.jpg?v=1586700663" />
  <h4>Year: 1986</h4>
  <h4>Genre: Action/Adventure</h4>
  <h4>Score: <span>0</span> </h4>
  <button class="up-vote">Up Vote</button>
  <button>Down Vote</button>
  <button class="delete">&times;</button>
`

let ul = document.getElementById("movie-list")

ul.appendChild(li)

const deleteButtons = document.getElementsByClassName("delete")
const deleteArray = Array.from(deleteButtons)

deleteArray.forEach(function(button){
  button.addEventListener('click', function(event){
    event.target.parentElement.remove()
  })
})

const upVoteButtons = document.getElementsByClassName("up-vote")
const upVoteArray = Array.from(upVoteButtons)

upVoteArray.forEach(function(button){
  button.addEventListener('click', function(event){
    const li = event.target.parentElement
    const span = li.querySelector('span')
    const currentScore = parseInt(span.textContent)
    const newScore = currentScore + 1
    span.textContent = newScore
  })
})


































// document.querySelector('#add-movie').addEventListener('click', function(e){
//   if(e.target.textContent === 'Show Form'){
//     e.target.textContent = 'Hide Form'
//     e.target.insertAdjacentElement('afterend', newMovieForm())
//   } else {
//     e.target.textContent = 'Show Form'
//     document.querySelector('#new-movie').remove()
//   }
// })




// function newMovieForm(){

//   let form = document.createElement("form")
//   form.id = 'new-movie'

//   form.innerHTML = `
//     <label>Title: </label>
//     <input type="text" name="title">
//     <br>
//     <label>Year: </label>
//     <input type="text" name="year">
//     <br>
//     <label>Genre: </label>
//     <input type="text" name="year">
//     <br>
//     <label>Image URL: </label>
//     <input type="text" name="imageUrl">
//     <br>
//     <input type="submit" value="Add Movie">
//   `

//   return form
// }











