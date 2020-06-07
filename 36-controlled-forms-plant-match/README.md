# Plant Match Forms Lab!
This is a super helpful application for new plant parents and those trying to start their green thumb. Not sure if you're into a plant? Users can view plants in cards, click on them to view more information and search by their common name. In the more advanced version of the application, they can also search based on what pets they have to make sure their plants are safe for their pets. This lab will help you practice building *fully controlled forms*.

*Important Note*: You are *NOT* expected to work on the `CreatePlantForm` component until the advanced deliverables. 

Look out for `TODO`s in comments. Use the Core Deliverables listed below to guide you and find the `TODO`s if you're feeling stuck.

![alt text][core_image]

[core_image]: ./public/PlantCore.gif "Core Deliverables"

## Skills and Concepts to Practice
- Building fully controlled forms
- Identifying where state should live and passing state values around as props
- Diagraming and understanding a component hierarchy
- Continued practice with event handlers
- Practicing inverse data flow
- POST fetch requests and pessimistic rendering

## Setup
After pulling down your cohort repo and navigating to the correct folder:
- Run `npm install` in your terminal
- Run `npm start` and a JSON server will spin up a mock back-end API and you can access the data at `http://localhost:3001/plants`. Your react application will also start, on port `3000`. The response should contain an array of objects that are structured as follows:
```
[{
"Scientific_Name": "Aphelandra squarrosa",
"Common_Name": "Zebra Plant",
"img_name": "zebra_plant.png",
"Sunlight": "Part shade to full shade",
"Moisture": "Medium",
"Soil_Indicator": "Never dry",
"Plant_Spread": "4.00 to 5.00 feet",
"Plant_Height": "4.00 to 6.00 feet",
"Indoor_Spread": "1.00 to 1.75 feet",
"Indoor_Height": "1.00 to 2.00 feet",
"Toxic_Dogs": false,
"Toxic_Cats": false,
"Plant_Habit": "Herb/Forb/Shrub",
"Type": "Broadleaf evergreen",
"indoor_flowering": true,
"hanging": false,
"Bloom_Period": "Late Summer to Fall",
"Humidity": "High",
"Air_Purifying": "Unknown",
"Ph_Soil": "Acidic",
"Bloom_Description": "Yellow"
},
{
"Scientific_Name": "Calathea zebrina",
"Common_Name": "Calathea Zebra Plant",
"img_name": "calathea_zebra_plant.png",
"Sunlight": "Part shade to full shade",
"Moisture": "Medium",
"Soil_Indicator": "Never dry",
"Plant_Spread": "1.00 to 2.00 feet",
"Plant_Height": "1.00 to 3.00 feet",
"Indoor_Spread": "1.00 to 2.00 feet",
"Indoor_Height": "1.00 to 3.00 feet",
"Toxic_Dogs": false,
"Toxic_Cats": false,
"Plant_Habit": "Herb/Forb",
"Type": "Herbaceous perennial",
"indoor_flowering": "Rarely",
"hanging": false,
"Bloom_Period": "Mid Spring",
"Humidity": "High",
"Air_Purifying": "Unknown",
"Ph_Soil": "Unknown",
"Bloom_Description": "White/Purple"
}]
```
- Remember to `git add .` then `git commit -m "helpful message"` and `git push` when you're done or before lecture. 


## What You Already Have
### Components
- `App` 
- `Navbar` 
- `Login` 
- `HomeView` 
- `MatchContainer` 
- `PlantCard` 
- `CreatePlantForm`: do *not* work on this component until after the core deliverables. 


### Additional Files
- `db.json` stores the data for our json-server. Check it out to make sure you know the format of the data.  


## Deliverables 
### Core Deliverables
While taking on each of the core deliverables, remember the essential elements of creating a controlled form. While you can make a form work in React without it being controlled, this is the right way to do it and something we're checking for.

- √ When the user clicks on `Login` they're shown the `Login` component and the form it contains. 
- √ Make `Login` a fully controlled form. When it submits, it should redirect the user to the plants view. There's some code to help you with the redirect.

- √ On the plants view, when a user types into the search bar, the plants should be filtered. Consider where state should live for this controlled form and how to complete that filter. 

### Advanced Deliverables
If you get through all of the Core Deliverables, try your hand at the Advanced ones. 
- Make the `CreatePlantForm` a fully controlled form that accepts a `Common_Name`, `Scientific_Name`, and `img_name`. When submitted, it needs to persist the new plant to the backend and update the frontend pessimistically *without refreshing the page*. Make sure you post the data to the backend correctly formatted keys. 

- - make fetch POST request to plants api
- - add plant to plant object array in App component

- Add behavior so when a user logs in, it replaces the username in `App` state to the submitted username and updates the greeting.


![alt text][Advanced_image]

[Advanced_image]: ./public/PlantAdvanced.gif "Core Deliverables"

## Want some extra fun? 
- Return to the `Snotify` project and complete the search and filter behavior in that application. 


## Resources
- [React Forms](https://reactjs.org/docs/forms.html)

