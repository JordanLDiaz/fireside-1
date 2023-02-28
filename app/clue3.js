// We know the getaway car will be used in the heist, it will help track it if we can figure out the plate number of the car. While all plates are a combo of numbers and letters, forgers will change only the numbers to better blend in.

// We know its a fake plate, and without revealing to much the sum of certain numbers in a plate will equal other numbers in the plate.

// Write a function that uses the addition operator to add two numbers together
function add(x, y) {
  return x + y
}

// Further calculations are identified through cubes
// Write a function that returns the Cubed value of x
function cubed(x) {
  // return x * x * x
  return Math.pow(x, 3)
}
// Built in method in JS used to raise a number to a given power. It takes in 2 arguments, the first is the base number, and the second is the exponent or power https://www.w3schools.com/js/js_math.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math


// Having narrowed down the number of cars, we will now be splitting up the team to hit the streets and check plates, to make sure we handle each days cars evenly we need to divide the number of cars out by the number of team members

// Write a function that will divide two numbers, and will format the returned value
// as a whole number. (No Decimals)
function divideWholey(cars, teamMembers) {
  let wholeNum = cars / teamMembers
  // Math.floor also works here for some reason even though its technically rounded
  return Math.trunc(wholeNum)

  // simpler ...  return Math.trunc(cars / teamMembers);
}
// First we create the variable wholeNum and assign it the value of cars / teamMembers. Then we take this variable and pass it through the Math.trunc built in js method, which rounds down the result to the nearest integer. 


// The sum of all numbers on a plate should be even, if its not the car is suspect

// Write a function that takes in a number and determines if it is even. 
// It should return a boolean value - true if it is even, false if it is odd.
function isEven(num) {
  if (num % 2 == 0) {
    return true
  } else return false
}

// We have found the pattern used in the forgery, its a series of randomly generated numbers between two values, with this we can take the plates we have and find the one out of place plate

// Given 2 numbers, generate a random number within that range. 
// Make it inclusive so that the starting and ending numbers are part 
// of the range. HINT ** Utilize Javascript's Math Class (To the Google!)
function numberGenerator(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min)

  // another way...
  // let newMin = min;
  // let newMax = max;

  // if (min > max) {
  //   max = newMin;
  //   min = newMax;
  // }

  // let randomNumber = Math.floor(Math.random() * (max - min) + min);

  // console.log(
  //   "The random number",
  //   randomNumber + " The min:",
  //   min + " The max:",
  //   max
  // );
  // console.log(min, randomNumber, max);

  // return randomNumber;
}
// We are ultimately trying to return a random number between the min and max we are passing through the function. We can use JS's built in Math.random to randomly generate a number between 0 and 1, but since we need it within a specified range, we need to get the difference between the min and max, which gives us the range, but then add 1 so its inclusive of the entire range. Then we multiply that by Math.Random() which will get us a random number between 0 and the range. then we add the min value to shift the range up to the correct starting point. Then we use Math.Round to round the result to the nearest integer. 
// connect to selecting random animal from array and assigning it as murderer from animal murder mystery