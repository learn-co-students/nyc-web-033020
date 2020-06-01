console.log("this is so much fun!")

/************ Function called on an Object ***************/

// `this` references the object executing the current function

const steven = {
  name: "Steven",
  sayName: function(){
    console.log(`Hi, my name is ${this.name}`)
  }
}



/************ Simple Function Call ***********************/
this.name = "Winslow"

function sayName(){
  console.log(`Hi, my name is ${this.name}`)
}


/************ Bind/Call/Apply ****************************/

sayName() // => "Winslow" because the this object is the window

function sayNameLocationTime(location, time){
  console.log(`${this.name} says hello from ${location} at ${time}`)
}

// => call and comma both start with "C"
// sayNameLocationTime.call(steven, "LIC", "10:49") 

// => apply and array both start with "A"
// sayNameLocationTime.apply(steven, ["LIC", "10:50"])

// sayNameLocationTime.bind(steven, "LIC", "10:55")


let neikko = {
  node: document.querySelector('#this'),
  name: "Neikko",
  sayThis: function(){ console.log("This: ", this)},
  initialize: function(){
      this.node.addEventListener("click", this.sayThis.bind(this))
  }
}

/************ Function Called with New Keyword ***********/

class Person {
  constructor(name, favColor){
    this.name = name,
    this.favColor = favColor
  }
}


// function Person(name, favColor) {
//   this.name = name
//   this.favColor = favColor
// }

const ian = new Person("Ian", "chartreuse")

/************ Arrow Functions ****************************/

// arrow functions DO NOT get their own `this`
// can't use "new", "bind", "call", or "apply" on arrow functions

let perky = {
  name: "Perky",
  whatIsThis: this,
  traditionThis: function() { return this.name },
  arrowThis: () => this.name
}




















// let neikko = {
//   node: document.querySelector('#this'),
//   name: "Neikko",
//   sayThis: function(){ console.log("This: ", this)},
//   initialize: function(){
//       this.node.addEventListener("click", this.sayThis.bind(this))
//   }
// }

// dog.initialize()

// let perky = {
//   name: "Perky",
//   whatIsThis: this,
//   traditionalThis: function() { return this },
//   arrowThis: () => this
// }