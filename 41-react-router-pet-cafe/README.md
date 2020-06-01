# Pet Cafe React Router Lab!
Welcome to the Pet Cafe! Here you can visit (currently just) cats, some of whom are up for adoption. You can learn their names, chat with them a little, and see how happy they are. Soon, you'll be able to visit Dogs and Reptiles as well! 

This app is designed to help you practice using the React Router library. All of the components are already set up but currently they're all rendered on the same page! We don't want that!! The user should be able to navigate between pages and bookmark their favorite pets! There is guidance below for what URL should show the user what view. 

In addition, you will get to choose which tools provided by React Router are appropriate to build each behavior. Check the notes below and the React Router docs (linked in SWBATs) in order to choose. 

Look out for `TODO`s in comments. Use the Core Deliverables listed below to guide you and find the `TODO`s if you're feeling stuck.


## Skills and Concepts to Practice
- React Router
- General navigation of a React application 
- Client Side Routing

## Setup
After cloning down the project:
- Run `git checkout -b yourname` in your terminal to create your own branch
- Run `npm install` in your terminal
- Run `npm start` and a JSON server will spin up a mock back-end API and you can access the data at `http://localhost:7001/cats`. Your react application will also start, on port `7002`. The response should contain an array of objects that are structured as follows:
```
[{
"id": 1,
"name": "Crookshanks",
"happiness": -8,
"description": "I hate Scabbers!",
"image": "https://vignette.wikia.nocookie.net/harrypotter/images/f/ff/Crookshanks_FH.png/revision/latest?cb=20161118055031",
"isAdopted": true
},
{
"id": 2,
"name": "Mrs. Norris",
"happiness": -2,
"description": "Get 'em Mr. Filch!",
"image": false,
"isAdopted": true
},
{
"id": 3,
"name": "Binx from Hocus Pocus",
"happiness": 2,
"description": "Bubble bubble toil and trouble!",
"image": false,
"isAdopted": false
}]
```
- Remember to `git add .` then `git commit -m "helpful message"` and `git push` when you're done or before lecture. 


## What You Already Have
### Components
- `App`
- `Auth`: renders the login/signup form
- `Help`: renders the help question form
- `Home`
- `Nav`
- `PetCard`: renders a single pet in the PetIndex
- `PetIndex`: renders all of the pets 
- `PetProfile`: renders a single pet's page


### Additional Files
- `db.json` stores the data for our json-server. Check it out to make sure you know the format of the data.  
- `index.js` inside of components provides an interface to export all of the components inside of that folder from a single source. Check it out! 


## Deliverables 
### Core Deliverables
Endpoints 
- `/` should show `Home` component with the "Welcome to Pet Cafe" screen
- `/pets` should show the `PetIndex` component
- `/pets/:id` should show the `PetProfile` component
- `/login` should show the `Auth` component
- `/help` should show the `Help` component

Deliverables
- Incorporate React Router such that if a user goes to the url bar and manually changes the URL, they view the correct components as described above.
- When a user clicks the buttons in the Navbar, they should be navigated to the correct URL and therefore view the correct components.
- When a user submits a questions in `Help` or submits their login in `Auth`, they should be redirected to `/pets`.
- When a user clicks on `Visit ...` on a `PetCard`, it should navigate them to the correct `/pets/:id` url and `PetProfile` needs to fetch and show the correct cat. 
- When the user clicks `Return to the Cafe Floor` in `PetProfile` they should be sent back to the all pets view. 

### Advanced Deliverables
If you get through all of the Core Deliverables, try your hand at the Advanced ones. Check out the gif below for how it should look. 
- When a user clicks on the arrows in the `PetProfile` navigate to the prior or next pet based on id. This should update both the URL and the view. 
- Conditionally render the arrows in `PetProfile` only when they can be used (ie no back arrow when at `/pets/1`)

## Want some extra fun? 
- Look into the hooks that React Router uses. 
- Check out the React Router v6 Preview Blog and all of the blogs below! 



## Resources
- [React Router Training](https://reacttraining.com/react-router/web/guides/quick-start)
- [React Router V6 Preview](https://reacttraining.com/blog/react-router-v6-pre/)
- [React Router Cheat Sheet](http://www.developer-cheatsheets.com/react-router)


### React Router Tools
- BrowserRouter ie `<BrowserRouter><App /></BrowserRouter>`
- Route ie `<Route path="/home" render={routerProps => <HomePage movies={movies} {...routerProps}/>}/>`
- Switch and exact ie `<Switch>  <Route path="/movies" component={MoviesPage}/>  <Route exact path="/" component={HomePage}/>  </Switch>`
- Link and NavLink ie `<Link to="/">Home</Link>`
- routerProps including history, match and params and methods like `history.push('/home')`
- and more! check the docs! 

