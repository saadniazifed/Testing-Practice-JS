const analyzeArray = (num) => {
  //For the average
  let sum = 0;
  let average = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
    average = sum / num.length;
  }

  //For the minimum
  let min = Math.min(...num);

  //For the maximum
  let max = Math.max(...num);

  //For the length
  let length = num.length;
  return { average, min, max, length };
};

const creatingObject = analyzeArray([1, 2, 3, 4]);

(module.exports = analyzeArray), creatingObject;
