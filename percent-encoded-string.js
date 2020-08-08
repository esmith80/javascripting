const urlEncode = function(text) {
  let startIndex = 0;
  let endIndex = 0;
  let url = "";
  let i = 0;
//check for whitespace on the front end and mark the first non-space character of 'text'
  for(i = 0; i < text.length; i++) {
    if(text[i] === " ") {
      continue;
    } else {
      startIndex = i;
      break;
    }
  }
//check for whitespace on back end of string and mark the last non-space character of 'text'
  for(i = text.length - 1; i > 0; i--) {
    if(text[i] === " ") {
      continue;
    } else {
      endIndex = i;
      break;
    }
  }
//create url skipping over upfront whitespace and stopping before backend whitespace
  for(i = startIndex; i <= endIndex; i++) {
    if(text[i] === " ") {
      url += '%20';
    } else {
      url += text[i];
    }
  }
  return url;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));