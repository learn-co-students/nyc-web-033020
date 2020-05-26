console.log("Callbacks")


let doubler = num => num * 2

let myMap = (array, callback) => {
  // return a new array
  // with an new item for each original item
  // new items will be the return of the callback function

  const newArray = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const newValue = callback(element)
    newArray.push(newValue)
  }

  return newArray
}