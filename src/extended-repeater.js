module.exports = function repeater(str, options) {
  let add = '';
  let rez = '';
  str = str + '';
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 0;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 0;
  }
  if (options.addition === null || options.addition === false || options.addition === true) {
    options.addition = options.addition + '';
  }
  if (!options.separator) {
    options.separator = '+'
  }
  if (!options.additionSeparator && options.addition) {
    options.additionSeparator = '|'
  }
  if (options.addition) {
    add = add + options.addition;
  }
  if (options.additionSeparator && options.additionRepeatTimes !== 0) {
    add = add + options.additionSeparator;
  }
  if (options.additionRepeatTimes) {
    add = add.repeat(options.additionRepeatTimes);
    if (options.additionSeparator) {
      add = add.slice(0, add.length - options.additionSeparator.length);
    }
  }
  if (options.repeatTimes > 0) {
    str = str + add + options.separator;
  } else {
    str = str + add;
  }
  
  if (options.repeatTimes) {  
    rez = str.repeat(options.repeatTimes);
  }
  rez = rez.slice(0, rez.length - options.separator.length);
  if (rez) {
      return rez
  } else {
       return str
  }
};
  