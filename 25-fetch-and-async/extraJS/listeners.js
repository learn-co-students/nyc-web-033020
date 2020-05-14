console.log("listening")

// when a user clicks on the welcome image it should display a baby sloth

// √get the welcome image from the DOM
// √add a click listener to the welcome image
// modify the img tag to display the sloth picture

const image = document.querySelector('#welcome-image')

image.addEventListener("click", function(event){
  event.target.src = "https://www.getaway.co.za/wp-content/uploads/2020/03/Baby-sloth.png"
})

// when a user hovers over the picture i want to see a turquoise border, and i want the border to disappear when the mouse moves off the image

// add a mouseenter event
// add a turquoise border

image.addEventListener('mouseenter', function(beef){
  beef.target.style.border = "solid thick turquoise"
})

// add a mouseleave event
// remove the border

image.addEventListener('mouseleave', function(beef){
  beef.target.style.border = ''
})