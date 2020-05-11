console.log("Welcome to Mod 3")

/*
 Questions
 1. debugger - similar to binding.pry or byebug
 2. loops - for loops -> `.forEach`, `for`, `for...in`, `for...of`
 3. switch - equivalent to `case` in Ruby
 4. console.log, console.dir
 5. string interpolation - when you put a variable in a string, Ruby -> "#{some_variable}", JS -> `${someVar}`
 6. DOM Manipulation

 Why JS?

  - allows to more dynamically interact with users
  - allows us to be more efficient with resources (e.g., cut down on response-request cycle)

  THREE PILLARS
  1. Control what the user sees - DOM Manipulation
  2. Capture user input beyond just forms - Events handling
  3. Make HTTP requests - fetch

 How JS?

 - load js into our HTML document with <script> tags
 - the order of your script tag matters - js closer to the top will get evaluated first
 - console is a dynamic js environment that we can use to test code and it will reflect our current js
 

 Some data types
 - undefined
  - indicates that something doesn't have a definition

 -null
  - indicates the absense of a value
  - same a nil in Ruby

 - Number
  - both decimals and integers
  - NaN is technicall part of the number data type
  - 0 is falsey in JS

 - String
  - double or single quotes
  - use backticks if you want to interpolate

 - Object Literals
  - similar to hash to Ruby
  - dot notation and square bracket
  
 - Array
  - pretty much the same idea as in Ruby

 Functions


*/

function sayName(name) {
  console.log(`Hi, my name is ${name}`)
}

let sayLastName = function(lastName){
  console.log(`This person's last name is ${lastName}`)
}