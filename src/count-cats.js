module.exports = function countCats(catarr) {
  let a = catarr.flat(Infinity);
  a = a.filter(el => el === '^^');
  return a.length;
};
