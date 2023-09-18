/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/
// create a function named plannedIntersect(firstArr)
const plannedIntersect = function(firstArr){
  // this function is return another function so there is no need to declare any variable inside
// return copyCat()
// }
// create second function that takes in another array
const copyCat = function(secondArr){
// and itterate through array and if array at i is the matches the other array push it to the empty array
let Result = []
for(let i = 0; i < firstArr.length; i++){
let big = firstArr[i]
if(secondArr.includes(big)){
  Result.push(big)
}
}
return Result
}
return copyCat
}

let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
 console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/

try {
  module.exports = plannedIntersect;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
