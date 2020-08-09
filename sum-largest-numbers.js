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



