// this function takes an array of objects and a speed, adds a value to the array which has a date-time and a speed (it's confusing because the array is called 'cars' and you expect to look at it and see a make/model/color, etc... but the object is supposed to represent a series of speed recordings at times of day to track frequency and speed - cars is a bad name for this array IMO)
const carPassing = function (cars, speed) {

  cars.push({ time: Date.now(), speed: speed });
  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 38;

carPassing(cars, speed);