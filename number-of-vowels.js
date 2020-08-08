const numberOfVowels = function(data) {
  let totalVowels = 0;
  for(let letter of data) {
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') totalVowels++;
  }
  return totalVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));