'use strict';

const multiArr = [1, [1, 2, [3, 4]], [2, 4], 5];

const flatArr = arr => {
  let newArr = [];

  arr.forEach(element => {
    newArr = newArr.concat(
      typeof element === 'object' ? flatArr(element) : element
    );
  });

  return newArr;
};

console.log(flatArr(multiArr));
