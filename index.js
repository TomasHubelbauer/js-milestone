import calculateFlooringMilestone from './calculateFlooringMilestone.js';
import calculateCeilingMilestone from './calculateCeilingMilestone.js';

window.addEventListener('load', () => {
  const numberInput = document.getElementById('numberInput');
  const flooringMilestoneStrong = document.getElementById('flooringMilestoneStrong');
  const ceilingMilestoneStrong = document.getElementById('ceilingMilestoneStrong');
  function calculateMilestones() {
    const number = numberInput.valueAsNumber;
    flooringMilestoneStrong.textContent = calculateFlooringMilestone(number);
    ceilingMilestoneStrong.textContent = calculateCeilingMilestone(number);
    for (const numberSpan of document.getElementsByClassName('numberSpan')) {
      numberSpan.textContent = number;
    }
  }

  numberInput.addEventListener('input', calculateMilestones);
  calculateMilestones();
});
