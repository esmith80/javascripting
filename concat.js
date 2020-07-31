function concat (arr1, arr2) {
  let combinedArr = arr1;
  for(let i = 0; i < arr2.length; i++) {
    combinedArr.push(arr2[i]);
  }
  return combinedArr;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));


