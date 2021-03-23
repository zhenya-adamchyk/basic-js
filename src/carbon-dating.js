const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(str) {
  if (typeof str !== "string" || !parseFloat(str) || parseFloat(str) < 1 || parseFloat(str) > 15) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / str) / (0.693 / HALF_LIFE_PERIOD));
};
