import calculateFlooringMilestone from './calculateFlooringMilestone.js';
import calculateCeilingMilestone from './calculateCeilingMilestone.js';

const numbers = [0, 1, 8, 9, 10, 11, 98, 99, 100, 101, 199, 200, 201, 998, 999, 1000, 1001, 1099, 1100, 1101, 1999, 2000, 2001, 2999, 3000, 9999, 10000, 10001];

for (const number of numbers) {
  console.log(({ number, flooring: calculateFlooringMilestone(number), ceiling: calculateCeilingMilestone(number) }));
}
