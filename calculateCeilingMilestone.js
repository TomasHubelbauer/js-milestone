export default function calculateCeilingMilestone(/** @type {number} */ number) {
  if (number < 0) {
    throw new Error('The number cannot be negative');
  }

  const digits = Math.ceil(Math.log10(number + 1)) || 1 /* 0 has 1 digit */;
  const magnitude = Math.pow(10, digits - 1);
  return ~~(number / magnitude) * magnitude;
}
