module.exports = function createDreamTeam(str) {
  if (!Array.isArray(str)) return false;
  return str.filter(el => typeof el === "string").map(word => word.trim().slice(0, 1).toUpperCase()).sort().join('');
};
