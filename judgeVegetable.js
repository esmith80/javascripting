const judgeVegetable = function (veggies, metric) {
  let winner = "winner";
  let winningMetric = 0;
  //test code *******************
 
  for(let i = 0; i < veggies.length; i++) {
    console.log(veggies[i][metric]);
    if (veggies[i][metric] > winningMetric) {
      winner = veggies[i].submitter;
      winningMetric = veggies[i][metric];
    }
  }
  return winner;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));

