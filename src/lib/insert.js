'use strict';

const insertionSort = (array) => {
  if (!array) {
    return undefined;
  }
  for (let i = 0; i < array.length; i++) {
    const temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = temp;
  }
  return array;
};

export default insertionSort;
