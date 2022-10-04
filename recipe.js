// MY FIRST JS LINES!
// comments are not for being read from the computer, they are left for myself
// or for other developers taking a look at your code :)

// you can also declare a comment BLOCK with /* */
/*
    sdafsd
    sdfdsfs
    sdfdsfds
    sdfsd
*/

// we cannot uncomment the line below, since myFirstVariable has not been declared yet
// and so trying to read its value results in a crash
// console.log(myFirstVariable)

// variable declaration below!
let stefano
let myFirstVariable
// what is the content of myFirstVariable now? undefined
console.log('value of myFirstVariable just after declaration:', myFirstVariable)

myFirstVariable = 100
// what is the content of myFirstVariable now? it is 100

// so, running this file currently doesn't show anything. why?
// because I'm just creating a variable and assigning to it a value

// let's check the value of myFirstVariable
console.log(
  'value of myFirstVariable after assigning 100 to it:',
  myFirstVariable
)

let thisIsMyFirstVariableIWroteInTheEpicodeCourse // works, not a great nane though! too long :(
let x // works, not a very "speaking" name though :(

let thisBatch = 'FS0422'
console.log(
  'value of thisBatch upon declaration with already a value:',
  thisBatch
)
thisBatch = 'FullStack0422'
console.log('value of thisBatch after re-assignment:', thisBatch)

let anything = 'Stefano'
anything = 50
// anything = 'EPICODE'
console.log('anything?', anything + 60)
console.log('anything is still: ', anything)

let firstWord = 'Hello'
let secondWord = 'World'
let space = ' '
let numberToBeAttached = 100

console.log(firstWord + space + secondWord + space + numberToBeAttached)
console.log(secondWord + space + firstWord)

let firstNumber = 50
let secondNumber = 10
// the result is 20, but we have a reminder of 1

let numbersMultiplied = firstNumber % secondNumber
console.log('numbersMultiplied is: ', numbersMultiplied)

// let's empty the result
numbersMultiplied = null
console.log(
  'numbersMultiplied after setting it to null is: ',
  numbersMultiplied
)

// LET'S BAKE SOME EPICOOKIES!

// every algorithm starts with defining INPUTS
// the input is the starting point of every problem solving process
let sugar = 80
let butter = 120
let flour = 260

// we have to mix the sugar and the butter first, in a separate container
let mediumBowl = sugar + butter

// now we'd like to add to the previous mix the flour
mediumBowl = mediumBowl + flour
// this line can also be done with another syntax --> mediumBowl += flour
console.log('total result in mediumBowl:', mediumBowl)

let myFirstBoolean = true

let firstNumberInAString = '50'
let secondNumberInAString = '100'

console.log(firstNumberInAString + secondNumberInAString)

let emptyString = ''

// booleans are also called "flags"
let myBoolean = false
myBoolean = 99.9999999 < 100 // <-- 50 < 100 is TRUE

console.log('myBoolean is:', myBoolean)

// NEW RECIPE: SPAGHETTI AL RAGU

// INPUTS:
let water = 3000
let salt = 20
let spaghetti = 300
let raguSauce = 250

// OUTPUT:
// we'd like to get the weight of a fully cooked pasta dish :)

console.log('Water 3l', water)
console.log('Salt 20g', salt)
console.log('Spaghetti 300g', spaghetti)
console.log('Delicious Ragu 250g', raguSauce)

console.log('------------ Cooking starts here!! ------------')
console.log("Let's calculate the total weight of a complete pasta dish")

let saltedWater = water + salt
console.log('Waiting for the water to boil, I already added salt', saltedWater)

let droppedSpaghetti = saltedWater + spaghetti
console.log('Dropping spaghetti into salter water', droppedSpaghetti)

console.log('Spaghetti now will absorb some water...')
let absorbtionRate = 1.8
let absorbedSalt = 5

let cookedSpaghettiWeight = spaghetti * absorbtionRate + absorbedSalt
let absorbedWater = cookedSpaghettiWeight - spaghetti - absorbedSalt

let remainingWater = water - absorbedWater
let remainingSalt = salt - absorbedSalt
console.log('remaining water in the pot:', remainingWater)
console.log('remaining salt in the water:', remainingSalt)

let drainedSpaghetti = droppedSpaghetti - remainingWater - remainingSalt
console.log('drained pasta:', drainedSpaghetti)

let finalPastaWithRagu = drainedSpaghetti + raguSauce
console.log('final weight of my pasta dish:', finalPastaWithRagu)
