# Snotify Events & State Lab!
Welcome to S-not-ify! It's like Spotify... but it's not. In this lab we're getting into events and state in React. After the core labs on Learn, you should be able to complete these core deliverables if you have a solid grasp of how events and state work in React. If it's tough at first *do not despair*. Choosing where state should live, creating event handlers in the right location, and passing information to the right place and invoking methods in the right places is *really hard at first*. The more practice you get, the faster you'll feel confident in your skills. 

In this app, you'll need to load songs from a json-server when a button in the Navbar is clicked and then use state and events to build a lot of other core functionality. 

As with all applications, start first with what the feature is or what you want the user experience to be. Then determine what is needed to actually create that behavior in code. Start first with your end user and you'll build a better product. 

Lastly, you will have to change code that you are not told explicitly to. Decide based on the feature/deliverable what code needs to be written or changed and then go do it! Play around with the code and test often. 

*Important Note*: You are *NOT* expected to work on the `Filter` or `search` behavior during this lab. Those should be revisited after you work on the Forms labs and lecture. 

Look out for `TODO`s in comments. Use the Core Deliverables listed below to guide you and find the `TODO`s if you're feeling stuck.

![alt text][core_image]

[core_image]: ./public/SnotifyCore.gif "Core Deliverables"

## Skills and Concepts to Practice
- Functional v. Class Component notation
- Creating state using ES6 syntax and/or constructor syntax
- Choosing where to locate state and passing that data down to child components
- Updating state correctly using setState
- Creating methods to setState and invoking those methods in other components
- Using event handler methods to respond to user interaction 
- Function references v. invocations for event handlers
- ES6 Arrow functions and binding 

## Setup
After pulling down your cohort repo and navigating to the right folder:
- Run `npm install` in your terminal
- Run `npm start` and a JSON server will spin up a mock back-end API and you can access the data at `http://localhost:6001/songs`. Your react application will also start, on port `6002`. The response should contain an array of objects that are structured as follows:
```
[{
"id": 1,
"title": "Formation",
"artist": "Beyonce",
"url": "https://www.youtube.com/embed/WDZJPJV__bQ",
"genre": "Hip Hop",
"favorite": false
},{
"id": 2,
"title": "This is America",
"artist": "Childish Gambino",
"url": "https://www.youtube.com/embed/VYOjWnS4cMY",
"genre": "Hip Hop",
"favorite": false
},{
"id": 3,
"title": "Changes",
"artist": "2Pac ft Talent",
"url": "https://www.youtube.com/embed/eXvBjCO19QY",
"genre": "Hip Hop",
"favorite": false
}]
```
- Remember to `git add .` then `git commit -m "helpful message"` and `git push` when you're done or before lecture. 


## What You Already Have
### Components
- `App`: the top of your application that renders Navbar and the `MainContainer` component.
- `MainContainer`: renders underneath the Navbar and contains the `SongList` component and `Queue` component.
- `SongList`: Renders a `SongItem` component for each song object and contains a `Filter` component.
- `Filter`: YOU DO NOT NEED TO WORK WITH THIS UNTIL AFTER FORMS.
- `Queue`: Renders all the songs in the queue and an `iframe` for the current song video.
- `SongItem`: Renders the information for a single song. Props are pre-populated but click handlers are not.


### Additional Files
- `db.json` stores the data for our json-server. Check it out to make sure you know the format of the data.  


### Process Recommendations
Feeling stuck? Try following the steps below for each deliverable:
- Decide what element is where the event will occur. *This is where your `onClick` or other event will be, and where your method will be `invoked`*
- Decide if something in state will need to be updated, and if so where. *This is where your event handler will need to be `defined`*
- Define your event handler in the right location. Make sure it is a bound function. If you're not sure how to change state yet, just have it `console.log('in the ___ method')` or `console.log(this.state)`.
- Pass that method down to the component where it will be invoked (see bullet point 1) as props and invoke it in the onClick. *Make sure you only see your console.log once the user interaction occurs*
- Update your event handler to update state in the correct way! Maybe the method needs arguments, maybe not. That's for you to decide! 


## Deliverables 
### Core Deliverables
High level, you have to decide where state needs to live, create methods to update state, and pass those methods to where they eventually need to be invoked. Very little guidance is provided purposefully to make you think about where state should live. 
- Draw out the component hierarchy so you can use it as a guide to plan where state should live and how to pass props.
- Fetch all songs successfully from the backend when the `Get Songs` button is clicked
- Render all songs in the `SongList`
- When `Liked` is clicked on a given song in the `SongList`, its like count should increase. This *DOES NOT* need to persist to the backend. 
- When the heart is clicked on a given song in the `SongList`, toggle its favorite value. This should persist to the backend so when the page refreshes it is still (not) a favorite. Hint: remember a little thing called a `PATCH` request?

### Advanced Deliverables
If you get through all of the Core Deliverables, try your hand at the Advanced ones. Check out the gif below for how it should look. 
- When `Play Now` is clicked on a given song in the `SongList`, that song's video should appear in the `Queue`. Hint: you'll need some way to track which song has been clicked, and then have to get all of the details for that song down to the `Queue`. 
- When `Add to Queue` is clicked on a given song in the `SongList`, that song's title and artist should appear underneath the `Queue`. You should be able to add a song more than once to the queue. Think about how the queue should be represented. 
- Add the ability to delete a song from the `Queue`. Add a button to the `li` for each song. If that songs appears more than once, it should only delete the instance the user clicks to delete. 

![alt text][advanced_image]

[advanced_image]: ./public/SnotifyAdvanced.gif "Core Deliverables"


## Want some extra fun? 
After we get through Forms labs and lecture, come back to this to practice those concepts. 
- In `Navbar`, allow the user to enter a search term into a *fully controlled* form to search through the songs in `SongList`. 
- In `Filter`, allow the user to select a genre and filter the songs in `SongList`. 



## Resources
- [Styled Components](https://styled-components.com/)

## Notes on Future Labs
- In this lab, we provided support like `onClick={null /* Put your click handler here */}`. We will not provide those kinds of guides in the future. You'll have to decide which element needs the event handler. 
