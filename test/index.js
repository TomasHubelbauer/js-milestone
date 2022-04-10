import { calculateFlooringMilestone, calculateCeilingMilestone } from '../index.js';

window.addEventListener('load', () => {
  const numberInput = document.getElementById('numberInput');
  const flooringMilestoneStrong = document.getElementById('flooringMilestoneStrong');
  const ceilingMilestoneStrong = document.getElementById('ceilingMilestoneStrong');
  function calculateMilestones() {
    const number = numberInput.valueAsNumber;
    flooringMilestoneStrong.textContent = calculateFlooringMilestone(number).milestone;
    ceilingMilestoneStrong.textContent = calculateCeilingMilestone(number).milestone;
    for (const numberSpan of document.getElementsByClassName('numberSpan')) {
      numberSpan.textContent = number;
    }
  }

  numberInput.addEventListener('input', calculateMilestones);
  calculateMilestones();
});
