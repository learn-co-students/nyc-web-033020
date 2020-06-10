import React from 'react';

const Notes = props => {
    return (
        <div>Just to hold notes </div>
    )
}


/** LEFT SIDE OF ARROW */
/**
 * 1. if there are no arguments or 2+ arguments, you need parens
 * 2. if there is JUST ONE argument, you do not need parens 
 */

const noArgs = () => { console.log('I need parens') }
const twoOrMoreArgs = (a, b) => { console.log('I need parens for both args: ', a, b) }
const justOneArg = myArg => { console.log('for just one, no parens needed', myArg)}



/** RIGHT SIDE AND RETURNS  */
// for simple types (ie strings, numbers, bools) you can implicitly return by just not using curly brackets
let samplePerson = { name: 'Caryn', phrase: 'Do better.' }
const implicitReturnNonObj = (personOjb) => personOjb.name + ' says ' + personOjb.phrase 
// version with backticks 
// const implicitReturnNonObj = (personOjb) => `${personOjb.name} says ${personOjb.phrase}`


// IF YOU'RE WORKING WITH A COMPLEX TYPE LIKE AN OBJECT (...or array)
// to implicitly return, wrap with parens 
const implicitRetObj = () => ({ name: 'Mojo', type: 'cat', superpower: 'shedding' })


// EXPLICIT RETURN WORKS THE SAME FOR ERRRRRRYTHANG
// also best notation for if you have any kind of logic your function needs to do 
const explicitReturn = () => { 
    let catObj = { name: 'Mojo', type: 'cat', superpower: 'shedding' }
    return catObj
}



