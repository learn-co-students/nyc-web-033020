console.log("DOM Manipulation is so cool.")

// √build an li for the goonies with the associate HTML
// √get the ul
// √append the li to the end of the ul

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

