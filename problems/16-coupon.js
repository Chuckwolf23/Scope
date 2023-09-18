/***********************************************************************
Write a function named: coupon(discount). The coupon function will intake a
number to apply as a discount, and will return a function that accepts an array
of prices. Every call to the function returned by coupon will return the array
of prices with the discount applied.

Example 1:
let tenPercent = coupon(0.1);
console.log(tenPercent([10, 20, 30])); // [ 9, 18, 27 ]

Example 2:
let twentyPercent = coupon(0.2);
console.log(twentyPercent([10, 20, 30])); // [ 8, 16, 24 ]


***********************************************************************/
// write a function named coupon
let coupon = function(discount){
// create a new function for it to call on
let newArr = []
let newamount = function(array){
//args need to be an array
for(let i = 0; i < array.length; i++ ){
// would need to itterate throught the array
  let amount = array[i]
  let applied = discount * amount
   let confirmed = amount - applied
newArr.push(confirmed)


}
return newArr
}
return newamount
// return discounted price on the array/
}
let tenPercent = coupon(0.1);
console.log(tenPercent([10, 20, 30])); // [ 9, 18, 27 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = coupon;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
