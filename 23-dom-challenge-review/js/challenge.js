// √DOMContentLoaded listener

// √get the timer from the DOM
    // The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
    // The ID value returned by setInterval() is used as the parameter for the clearInterval() method.
// √use setInterval to get the timer to increment by 1 every second

// √get the + and - buttons from the DOM
// √add event listener(s?) to the buttons
// √increment/decrement the counter depending on the button

// √get the like button
// √add a click listener to it
// √implement some relatively complicated logic around keeping track of likes

// √get the pause button
// √add a click listener to it
// √stop the counter
// √disable all those other buttons
// √replace the text in the button with resume

// √get the resume
// √add click listener to it
// √do the opposite of the pause behavior

// √get the form
// √listen for submit
// √get the comment out of the form
// √render the comment on the DOM


document.addEventListener('DOMContentLoaded', function(e){
  const counter = document.getElementById('counter')
  const likesList = document.querySelector('ul')
  const commentsList = document.querySelector('#list')
  const likeCount = {}

  let intervalId = setInterval(function(){
    incrementCounter(1)
  }, 1000)

  document.addEventListener("click", function(e){
    if(e.target.id === "minus"){
      incrementCounter(-1)
    } else if(e.target.id === "plus"){
      incrementCounter(1)
    } else if(e.target.id === "heart"){
      // if a number is being liked for the first time - shouldn't be in the likeCOunt object
        // √initialize that like in our likeCount object
        // √create an li with the appropriate message
        // √render that li to the DOM
      

      // if a number is being like for the more than first time
        // √incrememnt the number of likes that number has in our likeCOunt object
        // √find the existing li and modify it

        const currentNum = counter.textContent

        if(likeCount[currentNum]){
          likeCount[currentNum]++
          let li = document.getElementById(currentNum)
          li.textContent = `${currentNum} has been liked ${likeCount[currentNum]} times 🚀`
        } else {
          likeCount[currentNum] = 1
          const li = document.createElement("li")
          li.id = currentNum
          li.textContent = `${currentNum} has been liked 1 time 🤡`
          likesList.append(li)
        }
    } else if(e.target.id === "pause"){
      clearInterval(intervalId)

      document.getElementById('minus').disabled = true
      document.getElementById('plus').disabled = true
      document.getElementById('heart').disabled = true
      document.getElementById('submit').disabled = true

      e.target.textContent = 'resume'
      e.target.id = 'resume'
    } else if(e.target.id === 'resume'){
      intervalId = setInterval(function(){
        incrementCounter(1)
      }, 1000)   

      document.getElementById('minus').disabled = false
      document.getElementById('plus').disabled = false
      document.getElementById('heart').disabled = false
      document.getElementById('submit').disabled = false

      e.target.textContent = 'pause'
      e.target.id = 'pause'
    }
  })

  document.addEventListener("submit", function(e){
    e.preventDefault()
    const form = e.target
    const comment = form.beef.value
    const p = document.createElement('p')
    p.textContent = comment
    
    form.reset()
    commentsList.append(p)
  })

  function incrementCounter(num){
    counter.textContent = parseInt(counter.textContent) + num
  }

})

