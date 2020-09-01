const USER_ARRAY = [1, 2, 3, 4, 5, 6];

const makeChunks = (inputArray, chunkSize) => {
  const resultArray = [];
  for (let index = 0; index < inputArray.length; index += chunkSize) {
    resultArray.push(inputArray.slice(index, index + chunkSize));
  }
  return resultArray;
};

const maxSum = (inputArray, elementLimit) => {
  let maxValue = 0;
  if (inputArray.length) {
    for (let index = 0; index < inputArray.length; index++) {
      const result = inputArray
        .slice(index, index + elementLimit)
        .reduce((acc, element) => acc + element, 0);
      maxValue = Math.max(maxValue, result);
    }
    return maxValue;
  }
  return null;
};

// Problem No 2 : calculate the maximum sum of 'n' consecutive elements in the array.
console.log(maxSum(USER_ARRAY, 3));

// Problem No 3 : split an array into multiple small arrays of size as entered by the user
console.log(makeChunks(USER_ARRAY, 2));
