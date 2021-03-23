module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const level = 1;
      if (arr.some(elem => Array.isArray(elem))) {
        const flatArr = arr.flat();
        return level + this.calculateDepth(flatArr)
      }         
    return level;
  }
};