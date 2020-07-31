function lastIndexOf (arr, valueToFind) {
  let indexOf = -1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === valueToFind) indexOf = i;
  }
  return indexOf;
}