const instructorWithLongestName = function(instructors) {
  let indexOfLongest = 0;
  let longestName = 0;
  for(let i = 0; i < instructors.length; i++) {
    if(instructors[i].name.length > longestName) {
      longestName = instructors[i].name.length;
      indexOfLongest = i;
    }
  }
  return instructors[indexOfLongest];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));