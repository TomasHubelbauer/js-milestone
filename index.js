module.exports = {
  /**
   * Calculates a ceiling milestone for a number.
   *
   * @param {number} number The number to calculate the milestone for.
   * @param {number} shift The magnitude shift when choosing the milestone level.
   * @returns {number} The milestone
   *
   */
  calculateCeilingMilestone(/** @type {number} */ number, /** @type {number} */ shift = 1) {
    if (number < 0) {
      throw new Error('The number cannot be negative');
    }

    if (shift < 1) {
      throw new Error('The shift must be one or more');
    }

    const digits = Math.ceil(Math.log10(number + 1)) || 1 /* 0 has 1 digit */;
    const magnitude = Math.pow(10, digits > shift ? digits - shift : digits - 1);
    return ~~(number / magnitude) * magnitude;
  },
  /**
   * Calculates a flooring milestone for a number.
   *
   * @param {number} number The number to calculate the milestone for.
   * @param {number} shift The magnitude shift when choosing the milestone level.
   * @returns {number} The milestone
   *
   */
  calculateFlooringMilestone(/** @type {number} */ number, /** @type {number} */ shift = 1) {
    if (number < 0) {
      throw new Error('The number cannot be negative');
    }

    if (shift < 1) {
      throw new Error('The shift must be one or more');
    }

    const digits = Math.ceil(Math.log10(number + 1)) || 1 /* 0 has 1 digit */;
    const magnitude = Math.pow(10, digits > shift ? digits - shift : digits - 1);

    let temp = ~~(number / magnitude) * magnitude;
    if (temp !== number) {
      temp += magnitude;
    }

    return temp;
  }
};
