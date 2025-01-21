const pureMultiply = (array, value) => {
    const newArray = [];
  
    array.forEach(element => {
      newArray.push(element * value);
    });
  
    return newArray;
  };
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = pureMultiply(numbers, 2);
  
  // Мутація вихідних даних не відбулася
  console.log(numbers); // [1, 2, 3, 4, 5]
  // Функція повернула новий масив зі зміненими даними
  console.log(doubledNumbers); // [2, 4, 6, 8, 10]
  