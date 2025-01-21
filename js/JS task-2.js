const changeEven = (numbers, value) => {
    const res = [];
    numbers.forEach(element => {
      if (element % 2 === 0) {
        res.push(element + value)
      } else {
        res.push(element)
      }
    });
    return res
  }
  console.log(changeEven([1, 2, 3, 4, 5], 10));
