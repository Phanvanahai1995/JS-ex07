"use strict";
// Bài 1

const isPrime = function (n) {
  if (n <= 1) {
    return false;
  } else if (n >= 2) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
};

const SDX = function (n) {
  let nb = n;
  let numberDX = 0;
  while (nb > 0) {
    numberDX = numberDX * 10 + (nb % 10);
    nb = Math.floor(nb / 10);
  }

  if (numberDX === n) {
    return true;
  }
  return false;
};

const nextPrime = function (n) {
  let i = n + 1;
  while (isPrime(i) === false || SDX(i) === false) {
    i++;
  }
  return i;
};

console.log(`Số nguyên tố đối xứng của 13 là ${nextPrime(13)}`);

// Bài 2

var numbers1 = [1, 2];
var numbers2 = [3, 7];

const newArr = function (arr1, arr2, arr3 = []) {
  arr3 = arr1.concat(arr2).sort();
  arr3.shift();
  arr3.pop();
  return arr3;
};

const newNumber = newArr(numbers1, numbers2);

const result = newNumber.reduce((init, number) => {
  return init + number;
}, 0);

console.log(result / newNumber.length);

// Bài 3

const minNumberNotArr = function (arr) {
  let newArr = [];
  arr.sort();
  for (let i = 1; i <= arr[arr.length - 1] + 1; i++) {
    if (!arr.includes(i)) {
      newArr.push(i);
    }
  }

  let result;
  result = newArr.reduce((init, number) => {
    return init < number ? init : number;
  });

  return result;
};

console.log(minNumberNotArr([7, 8, 9, 11, 12]));
console.log(minNumberNotArr([3, 4, -1, 1]));
console.log(minNumberNotArr([1, 2, 0]));
