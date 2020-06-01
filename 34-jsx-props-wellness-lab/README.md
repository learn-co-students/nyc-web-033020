# Wellness Props Lab!
Welcome to our mini-lab. In this lab, we're making an informational site for a wellness center. It needs to render a pie chart of the factors that contribute to holistic wellness and a table with the information underneath. All of the styling has been completed for you - so as long as you're using the correct components and elements like `tr`, `td`, and `WellnessItem` your app will look exactly like the examples.

Look out for `TODO`s in comments. Use the Core Deliverables listed below to guide you and find the `TODO`s if you're feeling stuck.

IMPORTANT NOTE: This project uses the `styled-components` library for the styling of the `WellnessItem` component. You *do not* need to be concerned with `HoldCSSDeck` or `PieCSSDeck` for the core deliverables. They are essentially custom components defined for you. 

![alt text][core_image]

[core_image]: ./public/WellnessCore.gif "Core Deliverables"

## Skills and Concepts to Practice
- TL;DR Props and Components
- Navigating a React application and component hierarchy
- Identifying props and passing them correctly between parent and child component
- Mapping over arrays to render
- Conditional rendering
- Default Props
- When to use `{}` curlyBois

## Setup
After pulling down your class repo and navigating to the correct folder:
- Run `npm install` in your terminal
- Run `npm start` and your react application will start on port `3000`.
- Remember to `git add .` then `git commit -m "helpful message"` and `git push` when you're done or before lecture. 


## What You Already Have
### Components
- `App`: the top of your application that renders `Wheel` and `GuidanceContainer` components
- `Wheel`: renders the `Pie` styled component and all of the `WellnessItem` components
- `WellnessItem`: renders information for one of each wellness factor in a pie slice
- `GuidanceContainer`: renders a header, the top row of our table, and all of the `GuidanceItem` components. 
- `GuidanceItem`: renders information for one of each wellness factor in a table row


### Additional Files
- `data.js` stores the hardcoded data. Check how it's exported to make sure you're importing it correctly. 
- `styles.js` stores some special styled components made with the `styled-components` library. If you're curious about it, check out the docs below. 


## Deliverables 
### Core Deliverables
- Render all WellnessItems in the Wheel
- Give WellnessItems default prop for color in case you forget!
- Render all GuidanceItems with correct information underneath. Hint for stars: `'⭐️'.repeat(5)` will create a string of 5 stars for you.
- Sort the Guidance Items by number of stars
- Map out the component hierarchy and which components need which props

### Advanced Deliverables
If you get through all of the Core Deliverables, try your hand at the Advanced ones. Check out the gif below for how it should look. 
- Update GuidanceContainer and GuidanceItem to also render a column for `isPriority`. 
- If a WellnessItem is a priority, render its background gold instead of its given color. All you'll need to change is the color prop passed to `PieCSSDeck`.

![alt text][advanced_image]

[advanced_image]: ./public/WellnessAdvanced.gif "Core Deliverables"


## Want some extra fun? 
- Look through the docs for Styled Components. The wheel is primarily styled using that library in `styled.js`. Then try your hand at updating the code in `styles.js` or the components used inside of `WellnessItem`.



## Resources
- [Wellness Images](https://thewellatsacstate.com/about/dimensions-of-wellness)
- [Styled Components](https://styled-components.com/)
- [The Guide I Used for The Wheel](http://cssdeck.com/labs/css3-pie-chart)