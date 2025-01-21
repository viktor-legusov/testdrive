// function squareSum(numbers){
//   let arr = 0;
//     for (let number of numbers) {
//       arr += number**2
//     }
//     return arr
//   }

//   console.log(squareSum([1,2])) // 5
//   console.log(squareSum([0, 3, 4, 5])) // 50
//   console.log(squareSum([])) // 0

// var summation = function (num) {
//   let summ = 0;
//   for (let i = 1; i <= num; i++){
//     summ += i;
//   }
//     return summ
// }


// console.log(summation(1)); //1
// console.log(summation(2)); //3
// console.log(summation(8)); //36

// function areYouPlayingBanjo(name) {    
//   if (name[0].toLowerCase() === 'r' ) {
//     return `${name} plays banjo`;
//   }
//   return `${name} does not play banjo`;
// }


// console.log(areYouPlayingBanjo("Adam")); //"Adam does not play banjo"
// console.log(areYouPlayingBanjo("Paul")); //"Paul does not play banjo"
// console.log(areYouPlayingBanjo("Ringo")); //"Ringo plays banjo"
// console.log(areYouPlayingBanjo("bravo")); //"bravo does not play banjo"
// console.log(areYouPlayingBanjo("rolf")); //"rolf plays banjo"

// function countBy(x, n) {
//   let z = [];
//  for (let i = 0; i <= x.length; i ++) {
//         if (x[i] % n ===0) {
//            z.push(x[i])
//         }
//             }
//   return z;
// }

// console.log(countBy(1,10), [1,2,3,4,5,6,7,8,9,10]); //"Array does not match"
// console.log(countBy(2,5), [2,4,6,8,10]); //"Array does not match"