React Best Practices
====================

## SWBAT

- [ ] Write cleaner React code

## Objectives

- Opinions
  - [ ] Code Organization/file structure 
        - Folders: Components & Containers, orrrr organized by resource
  - [ ] Presentational vs Container components

- Optimizations:
  - [ ] Functional vs Class Components (required for state & lifecycle methods)
  - [ ] Fragments

- Best Practices:
  - [ ] Callbacks (avoid useless wrapping)
  - [ ] "then" callback for setState
  - [ ] Functional setState

- JS tricks/bugs often seen in React:
  - [ ] Arrow functions returning objects () => ({ })
  - [ ] Destructuring  ====> let { likes, name } = this.props
  - [ ] Spread (w/ prepend and append) this.setState({ messages: [...this.state.messages, 'newmessage']})
  - [ ] Objects with the same key/value name ===> let myPerson = {firstName, lastName}
  - [ ] constructor vs. ES7 instance variables ===> ie state = {}
  - [ ] dynamic keys ==>  { [variable]: "as_key" } 

- Too Involved for RN
    - [ ] Hooks
    - [ ] Concurrent Mode 
    - [ ] Redux 
    - [ ] HOCs (less popular since Hooks)

## Resources

[Dan Abramov: Presentational vs Container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
[Pure Components](https://reactjs.org/docs/react-api.html#reactpurecomponent)
[Redux Code Structure](https://redux.js.org/faq/code-structure)
[HOCs](https://reactjs.org/docs/higher-order-components.html)




## Lecture Notes

## First Breakout Session
- Using the wireframes as reference, plan your component hierarchy. 
   - Hierarchy itself (what are the components, the whole tree)
   - Plan where state should be held, methods you'll need, and what to pass as props 



Features
- On app load, show all books (just the covers)
- As user types into the search bar, filter books based on title and/or author

## Second Breakout Session
- Click on an individual book and flip it to show the detail
