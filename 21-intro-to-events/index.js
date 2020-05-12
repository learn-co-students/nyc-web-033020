console.log("events events events")


// As a user, when I click the delete button under the Jaws
// movie, the Jaws movie should be removed 

// get the jaws delete button
// add a click listener to it
// remove the li the button is inside of

// const jawsLi = document.querySelector(".movie")
// const button = jawsLi.getElementsByTagName('button')[2]

// button.addEventListener('click', function(event){
//   event.target.parentElement.remove()
// })




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

// √get all the delete buttons from the DOM
// √add a discrete listener on to each button

const deleteButtons = document.getElementsByClassName("delete")
const deleteArray = Array.from(deleteButtons)

deleteArray.forEach(function(button){
  button.addEventListener('click', function(event){
    event.target.parentElement.remove()
  })
})

// As a user, when I click an up vote button, the score
// for that movie should increment by 1

// √get all the up vote buttons
// √add a discrete click listener to each button
// change the text of the span over there

const upVoteButtons = document.getElementsByClassName("up-vote")
const upVoteArray = Array.from(upVoteButtons)

upVoteArray.forEach(function(button){
  button.addEventListener('click', function(event){
    // √get the li
    // √get the span
    // √update the text inside the span

    const li = event.target.parentElement
    const span = li.querySelector('span')
    const currentScore = parseInt(span.textContent)
    const newScore = currentScore + 1
    span.textContent = newScore
  })
})
