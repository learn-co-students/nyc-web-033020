const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  

// √* add a click listener to the button
// √* on click, make a fetch (GET) request to that URL
// √* parse that json data
// √* modify the corresponding parts of the DOM

  const baseUrl = "https://randomuser.me/api/"
  const button = document.querySelector("button")

  button.addEventListener("click", event => {

    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data.results)
      const person = data.results[0]
      console.log(person)
      
      const profilePicture = person.picture.large
      document.querySelector("#profile_picture").src = profilePicture

      const title = person.name.title
      const first = person.name.first
      const last = person.name.last
      document.querySelector('#fullname').textContent = `${title} ${first} ${last}`

      const email = person.email
      document.querySelector('#email').textContent = email

      // Continue this pattern of pulling data from the
      // json and manipulating the DOM ad nauseum
      
    })
  
    // this console.log will get executed before the `.then` callbacks because promise are Async
    console.log("I COME AFTER THE FETCH REQUEST") 
  })
});
