function chooseStations (arrayOfStations) {
  let goodStations = [];
  for (let i = 0; i < arrayOfStations.length; i++) {
    if (arrayOfStations[i][1] >= 20 && (arrayOfStations[i][2] === 'school' || arrayOfStations[i][2] === 'community centre')) {
      goodStations.push(arrayOfStations[i][0]);
    }
  }
  return goodStations;
  }


/*

  for (let station of stations) {
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}
*/
let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));