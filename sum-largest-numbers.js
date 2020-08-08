
const sumLargestNumbers = function(data) {
  let biggest = data[0];
  let biggestIndex = -1;
  for(let i = 0; i < 2; i++) { // 2 loops, 1st loop finds biggest number and records index of that number in data array
    
    for(let j = 0; j < data.length; j++) { 
      if(biggestIndex === j) { // if 
        continue;
      } else if (biggest <= data[j]) {
          biggest = data[j];
          biggestIndex = j; // if data[0] is the biggest number, j will never be set 
        }
      }

    }
  };
/*
const sumLargestNumbers = (values) => { 
  let largestA = 0;
  let largestB = 0;

  for(let value of values) {
      if(value > largestA) {
          largestB = largestA;
          largestA = value;
      } else if (value > largestB) {
          largestB = value;
      }
  }
  return largestA + largestB;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
*/


