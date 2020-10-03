console.log('Problem Solving Q: 5 ');

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 
elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the 
second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return 
a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is 
no intersection, return the string false.
*/

function FindIntersection(strArr) {
  // YOUR CODE HERE

  let firstString = strArr[0].split(",").join("").split(" ").join(",");
  let secondStringArr = strArr[1].split(",").join("").split(" ");
  // console.log(firstString);
  // console.log(secondStringArr);

  const resultArr = secondStringArr.filter(function (elem, ind) {

    return firstString.indexOf(elem) !== -1;
    
  })

  if (resultArr.length === 0){
    return false;
  }
  else { return resultArr.join(","); }
  
}

/* 
Examples:
FindIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
FindIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
*/

