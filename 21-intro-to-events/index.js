console.log("events events events")


// As a user, when I click the delete button under the Jaws
// movie, the Jaws movie should be removed 

// get the jaws delete button
// add a click listener to it
// remove the li the button is inside of


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
  <button>&times;</button>
`

let ul = document.getElementById("movie-list")

ul.appendChild(li)

