console.log("new movie form")

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



document.querySelector('#add-movie').addEventListener('click', function(e){
  if(e.target.textContent === 'Show Form'){
    e.target.textContent = 'Hide Form'
    e.target.insertAdjacentElement('afterend', newMovieForm())
  } else {
    e.target.textContent = 'Show Form'
    document.querySelector('#new-movie').remove()
  }
})




function newMovieForm(){

  let form = document.createElement("form")
  form.id = 'new-movie'

  form.innerHTML = `
    <label>Title: </label>
    <input type="text" name="title">
    <br>
    <label>Year: </label>
    <input type="text" name="year">
    <br>
    <label>Genre: </label>
    <input type="text" name="year">
    <br>
    <label>Image URL: </label>
    <input type="text" name="imageUrl">
    <br>
    <input type="submit" value="Add Movie">
  `

  return form
}











