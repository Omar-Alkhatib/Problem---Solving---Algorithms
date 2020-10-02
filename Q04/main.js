console.log('Problem Solving Q: 4 ');

/* Codeland Username Validation */

/*  
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if 
the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

function CodelandUsernameValidation(str) {
  // YOUR CODE HERE
  let stringsNotAllowable = '!"#$%&\'()*+,- ./:;<=>?@[\\]^`{|}~';
  let numbersNotAllowable = '1234567890';
  if (str.length > 4 && str.length < 25) {
    console.log("its between 4 and 24")
  if (stringsNotAllowable.indexOf(str[0]) === -1 && str[0] !== "_" && numbersNotAllowable.indexOf(str[0]) === -1) {
    console.log("it starts with a letter " + str[0])
    if (str[str.length -1] !== "_" ) {
      console.log("it doesnt end with a _")
      result = true
      let stringArray = str.split("");
      console.log(stringArray)

      stringArray.forEach (function (elem, ind){
          if (stringsNotAllowable.indexOf(elem) !== -1) {
            console.log("it contains " +elem)
            result = false;
            return result
          }
         
      })
      return result;
    }
    return false
  }
  return false
}
return false
}

/* 
Examples:
CodelandUsernameValidation('aa_'); // => false
CodelandUsernameValidation('u__hello_world123'); // => true

*/
