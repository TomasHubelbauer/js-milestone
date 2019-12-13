const { calculateCeilingMilestone, calculateFlooringMilestone } = require('../');

const shift = 2;
console.log('Magnitude shift:', shift);
for (const number of [1, 2, 9, 10, 11, 19, 20, 21, 99, 100, 101, 199, 200, 201, 499, 500, 501, 509, 510, 511, 999, 1000, 1001, 9999, 10000, 10001]) {
  const { milestone: ceilingMilestone, gap: ceilingGap } = calculateCeilingMilestone(number, shift);
  const { milestone: flooringMilestone, gap: flooringGap } = calculateFlooringMilestone(number, shift);
  console.log(`${ceilingMilestone} (gap to ${number + ceilingGap}: ${ceilingGap}) → ${number} ← ${flooringMilestone} (gap to ${number - flooringGap}: ${flooringGap})`);
}
