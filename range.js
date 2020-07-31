function range (start, end, step) {
  let arrayOfNums = [];
  if(start === undefined || end === undefined || step === undefined) {
    console.log("One of the parameters was undefined.");
  } else if (start > end) {
    console.log("Start is greater than end");
  } else if (step <= 0) {
    console.log("Step equal to or less than 0");
  } else {
    for(let i = start; i <= end; i += step) {
      arrayOfNums.push(i);
    }    
  }
  return arrayOfNums;
}

console.log(range(-5,2,3));