window.addEventListener('load', () => {
  const numberInput = document.getElementById('numberInput');
  const flooringMilestoneStrong = document.getElementById('flooringMilestoneStrong');
  const ceilingMilestoneStrong = document.getElementById('ceilingMilestoneStrong');
  function calculateMilestones() {
    const number = numberInput.valueAsNumber;
    flooringMilestoneStrong.textContent = module.exports.calculateFlooringMilestone(number);
    ceilingMilestoneStrong.textContent = module.exports.calculateCeilingMilestone(number);
    for (const numberSpan of document.getElementsByClassName('numberSpan')) {
      numberSpan.textContent = number;
    }
  }

  numberInput.addEventListener('input', calculateMilestones);
  calculateMilestones();
});
