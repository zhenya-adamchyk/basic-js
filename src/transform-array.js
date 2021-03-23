module.exports = function transform(arr) {
  if (!(Array.isArray(arr))) throw new Error();
  let newArr = [];
  let flag
  for (let i = 0;i < arr.length;i++) {
      if (flag > 0) {
          flag--;
          continue;
      }
    if (arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-prev' && arr[i] !== '--discard-next') {
      newArr.push(arr[i]);  
    }
    if (arr[i] === '--discard-next' && arr[i + 2] ==='--double-prev') {
      flag = 2;
      continue;
    }
     if (arr[i] === '--discard-next' && arr[i + 2] ==='--discard-prev') {
      flag = 2;
      continue;
    }
    if (arr[i] === '--double-next' && i < arr.length - 1) {
      newArr.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && i > 0) {
      newArr.push(arr[i - 1]);
    } else if (arr[i] === '--discard-prev' && i > 0) {
      newArr.pop();
    } else if (arr[i] === '--discard-next' && i < arr.length - 1) {
      flag = 1;
      continue;
    }
  }
  return newArr;
};
