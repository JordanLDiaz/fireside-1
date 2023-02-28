// We have intercepted a letter sent to one of her accomplices 

// A message sent to her associate requires we decode it using a letter within a certain position of a string. 
// Ex: ('Cryptology', 3) should return 'p'
function letterAtPosition(str, position) {
  // console.log('string', position)
  return str[position]
}
// This uses bracket notation to access the character in the string at the specified position. We pass in the str and position as arguments, and return the character at the specified position using bracket notation. 


// It has also been discovered some of the words have been seperated and need to be joined back together, sometimes with an extra seperator, if one is not provided assume that it will be an empty space

// Write a function that will join two strings with an optional seperating character 
function concat(str1, str2, seperator = " ") {
  let concat = str1 + seperator + str2
  return concat

  // or just return str1 + seperator + str2
}
// this joins our two strings using space as a separator since we declared the separator to be = to a space (or empty string which is the default). 

// Our cryptologists have discovered that some of the letters that were seperated out should also be capitalized.

// Write a function that will capitalize the letter at a given position and return it
function capitalizer(str, position) {
  let capitalize = str[position]
  return capitalize.toUpperCase()

  // another way
  // return str[position].toUpperCase();
}
// Here we use toUppercase to capitalize the letter at the given position in the string. in the first solution we just aliased out the letter at the given position to the variable capitalize, and then call the toUpperCase() method before returning the capitalized letter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase



// There are a few key words we need to look for to find if they are in the message
// write a function that will take in two strings and identify if the first string 'includes' the second
function messageContainsPhrase(message, phrase) {

  return message.includes(phrase)
}
// includes() is a built in js method that performs a case-sensitive search to determine whether one string may be found within another string. If the phrase string is found within the message string, this method will return true, else false
// connect to filtering by diet from animal murder mystery
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes