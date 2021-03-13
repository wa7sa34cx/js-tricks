'use strict';

// dog dgo -> true
// dog dfo -> false
// ddog doog -> false

const isSame = (s1, s2) => {
  const letters1 = s1.split('').sort();
  const letters2 = s2.split('').sort();

  return letters1.join() === letters2.join();
};

console.log(isSame('dog', 'dgo'));
console.log(isSame('dog', 'dfo'));
console.log(isSame('ddog', 'doog'));
