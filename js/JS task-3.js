// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const titles = books.map(book => book.title);
// console.log(titles);  

// const book = {
// 	updateTitle(newTitle) {
// 		// ...
// 	}
// };

// const update = book.updateTitle;

// update("Lord Of The Rings");
/////////////////////////////..........замінити в рядку цифри на букви.............///////////////////////////////////
// function correct(string) {
	
// 	return string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');

// }

//     console.log(correct("L0ND0N")) //"LONDON");
//     console.log(correct("DUBL1N")) //"DUBLIN");
//     console.log(correct("51NGAP0RE")) //"SINGAPORE");
//     console.log(correct("BUDAPE5T")) //"BUDAPEST");
//     console.log(correct("PAR15")) //"PARIS");

//////////////////////////////////............суму числ масиву поділити на довжину масиву...................//////////////////////////

// function findAverage(array) {
//     let total = 0;
//   for (let i = 0; i < array.length; i+=1) {
//     total = total + array[i]
//   }
//   return total/array.length  
// }

//  console.log(findAverage([1,1,1])) // 1);
//  console.log(findAverage([1,2,3])) // 2);
//  console.log(findAverage([1,2,3,4])) // 2.5);

///////////////////////////////......взяти з масиву тільки цифри............................///////////////////////////////////

// function filter_list(l) {
// 	return l.filter(v => typeof v == "number");
// }

//   console.log(filter_list([1,2,'a','b']));      //[1,2])     
//   console.log(filter_list([1,'a','b',0,15]));    //[1,0,15])     
//   console.log(filter_list([1,2,'aasf','1','123',123]));      //[1,2,123])     


/////////////////////////////////........поставити букви по порядку по одній............................./////////////////////////////////////



// function longest(s1, s2) {
//   const arr = s1 + s2;
//   return arr.split('').sort().filter(function (element, index, array) {
//     return element !== array[index - 1];}).join('')
// }

//     console.log(longest("aretheyhere", "yestheyarehere"));    // "aehrsty")
//     console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));    // "abcdefghilnoprstu")
//     console.log(longest("inmanylanguages", "theresapairoffunctions"));    // "acefghilmnoprstuy");  

///////////////////////////////////////.......сума парна чи ні........................///////////////////////////////////

// function oddOrEven(array) {
//    if (array.length < 1) {
//     return 'even'
//    }
//    let summ =0;
//    for (let i = 0; i < array.length; i+=1) {
//     summ += array[i];
//    }
//    if (summ % 2 ===0) {
//     return 'even';
//    }
//    return 'odd'
//  }

// console.log(oddOrEven([0, 1, 5]));    // 'even')
// console.log(oddOrEven([0, 1, 3]));    // 'even')
// console.log(oddOrEven([1023, 1, 2]));    // 'even')
// console.log(oddOrEven([0]));    // 'even')
// console.log(oddOrEven([1]));    // 'odd')
// console.log(oddOrEven([]));    // 'even')

//////////////////////////////////.......квадрат кожного числа рядка.............................//////////////////////////////////////

// function squareDigits(num){
//     const res =  +num.toString().split('').map(a=> a * a).join('');
//     return res   
//   }

 
// console.log(squareDigits(3212));   // 9414);  
// console.log(squareDigits(2112));   // 4114); 
// console.log(squareDigits(0));   // 0);

//////////////////////////////////////...................................///////////////////////////////////////

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// console.log(user);

// ------------------------------


// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i+=1) {
//     console.log('prave total', total)
//     total = total + order[i]
//     console.log('carrent total', total)
//   }
//   console.log(total);
//   return total  
// }
// calculateTotalPrice([5,20,30]);


// -------------------------------------



// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function calculateTotalPrice(orderedItems) {
//     totalPrice = totalPrice + orderedItems;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// function calculateTotalPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     const result = 0;
//       for (const product of products ) 
//         if (product.name === productName){
//       result = product.price * product.quantity;
//         } else {
//           return `Product ${productName} not found!`;
//         }  
//         return result
//   }

// console.log(calculateTotalPrice("Blaster"));// повертає "Product Blaster not found!"
// console.log(calculateTotalPrice("Radar"));// повертає 5200
// console.log(calculateTotalPrice("Droid"));// повертає 2800
// console.log(calculateTotalPrice("Grip"));// повертає 10800
// console.log(calculateTotalPrice("Scanner"));// повертає 8100


// function sum (numbers) {
//   let res = 0;
//   for (let i = 0; i <numbers.length; i ++){
//      res += numbers[i];
//     }
// return res
// }

// console.log(sum([])); //0
// console.log(sum([1, 5.2, 4, 0, -1])); //9.2

// function doubleChar(str) {
// 	let word = '';
//   for (let i = 0; i < str.length; i++){
//   	word = word + str[i] + str[i];
//   };
//   return word;
// };

// console.log(doubleChar("abcd"));
// console.log(doubleChar("Adidas"));
// console.log(doubleChar("1337"));
// console.log(doubleChar("illuminati"));
// console.log(doubleChar("123456"));
// console.log(doubleChar("%^&*("));

/////////////////////////////////.................................//////////////////////////////

// function sumArray(array) {
//     if(array == null) {
//         return 0} else if (array.lengt <2) {
//             return 0
//         } else        
// {array = array.sort((a, b) => a - b).slice(1, -1)};
// let summ = 0;
// for (let i = 0; i <array.length; i ++){
//       summ += array[i];}
// return summ
// }

// console.log( sumArray(null)                     );     // 0 );
// console.log( sumArray([ ])                      );     // 0 );
// console.log( sumArray([ 3 ])                    );     // 0 );
// console.log( sumArray([ 3, 5 ])                 );     // 0 );
// console.log( sumArray([ 6, 2, 1, 8, 10 ])       );     // 16 );
// console.log( sumArray([ 0, 1, 6, 10, 10 ])      );     // 17 );
// console.log( sumArray([ -6, -20, -1, -10, -12 ]));     // -28 );
// console.log( sumArray([ -6, 20, -1, 10, -12 ])  );     // 3 );

////////////////////////////////////////............неправильно.............................//////////////////////////

// function invert(array) {
//     return array[i*-1];
//  }

//  console.log(invert([1,2,3,4,5]));     // [-1,-2,-3,-4,-5]);
//  console.log(invert([1,-2,3,-4,5]));     // [-1,2,-3,4,-5]);
//  console.log(invert([]));     // []);
//  console.log(invert([0]));     // [0]);

/////////////////////////////////......якщо в рядку є Х.........................//////////////////////////////

// function check(a, x) {
//     for (const i of a) {
//       if ( x === i) {return true};
//       return false
//     }
//   }

// console.log(check([66, 101], 66));  // true
// console.log(check([101, 45, 75, 105, 99, 107], 107));  // true
// console.log(check(['t', 'e', 's', 't'], 'e'));  // true
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'));  // false

////////////////////////////////..........остання і перша букви повинні бути однаковими...........////////////////////////////////////

// function feast(beast, dish) {
//     const firstLastWordAnimals = beast[0] + beast.toString().slice(-1);
//     const firstLastWordEach = dish[0] + dish.toString().slice(-1);
//     if (firstLastWordAnimals === firstLastWordEach) {
//         return true;
//     }
//     return false
//     }

// console.log(feast("great blue heron", "garlic naan"))     // true
// console.log(feast("chickadee", "chocolate cake"))     // true
// console.log(feast("brown bear", "bear claw"))     // false

/////////////////........задом наперед...............//////////////////

// function solution(str){
//     return str.split("").reverse().join("");
//   }

//   console.log(solution('world'));    // 'dlrow'
//   console.log(solution('hello'));    // 'olleh'
//   console.log(solution(''));    // ''
//   console.log(solution('h'));    // 'h'

//////////////////.......Дано масив цілих чисел, вилучіть найменше значення(в одному екземплярі)............//////////////////

// function removeSmallest(numbers) {
//     numbers = numbers.slice(0);
//     const min = Math.min(...numbers);
//     numbers.splice(numbers.indexOf(min), 1);
//     return numbers;
//   }

// console.log(removeSmallest([1, 2, 3, 4, 5]));    // [2, 3, 4, 5]
// console.log(removeSmallest([5, 3, 2, 1, 4]));    // [5, 3, 2, 4]
// console.log(removeSmallest([2, 2, 1, 2, 1]));    // [2, 2, 2, 1]
// console.log(removeSmallest([]));    // []

/////////////////////////...........знайти перший елемент масиву, який не є послідовним....................../////////////////////////////

// function firstNonConsecutive(arr) {
//     for (let i = 0; i < arr.length - 1; ++i) {
//       if (arr[i] + 1 !== arr[i + 1]) {
//         return arr[i + 1]
//       }
//     }
//     return null
//   }

//  console.log(firstNonConsecutive([1,2,3,4,6,7,8]));

///////////////////////////........повернути рядок без ком...................//////////////////////////////

// function smash (words) {
//     return words.join(' ');
//    const res = words.toString().replace(/,/g, ' ');
//    return res
//  };

// console.log(smash([]));        // ""
// console.log(smash(["hello"]));        // "hello"
// console.log(smash(["hello", "world"]));        // "hello world"
// console.log(smash(["hello", "amazing", "world"]));        // "hello amazing world"
// console.log(smash(["this", "is", "a", "really", "long", "sentence"]));        // "this is a really long sentence"
