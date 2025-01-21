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

////////////////////////////////////.......найменше число масиву..........////////////////////////////////////////
