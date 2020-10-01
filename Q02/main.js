console.log('Problem Solving Q: 2 ');

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

function LongestWord_2(sen) {
  // YOUR CODE HERE

  let words = sen.split("");
  // console.log(words);
  punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  const charSpaceArr = words.filter(function (elem, ind) {
    return punctuation.indexOf(elem) === -1;
    
  })

  let longestWord = "";
  const wordArray = charSpaceArr.join('').split(" ");
  wordArray.forEach(function (elem, ind) {
    if (elem.length > longestWord.length) {
      longestWord = elem;
    }

  })

  return longestWord;
  

}

/* 
Examples:
LongestWord_2('lol!- time.'); // => 'time'
LongestWord_2('I** love, cats'); // => 'love'
LongestWord_2('coding&& is awesome'); // => 'awesome'
LongestWord_2('hello|| world'); // => 'hello'
*/


