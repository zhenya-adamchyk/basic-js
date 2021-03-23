const alphaArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const alpha = {
  A:0,
  B:1,
  C:2,
  D:3,
  E:4,
  F:5,
  G:6,
  H:7,
  I:8,
  J:9,
  K:10,
  L:11,
  M:12,
  N:13,
  O:14,
  P:15,
  Q:16,
  R:17,
  S:18,
  T:19,
  U:20,
  V:21,
  W:22,
  X:23,
  Y:24,
  Z:25,
}

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();
    let startMessage = message.toUpperCase().split('')
    message = message.toUpperCase().replace(/[^a-zA-Z]/gi,'');
    key = key.toUpperCase();
    while (key.length < message.length) {
      key += key;
    }
    const messageArr = message.split('');
    const keyArr = key.split('');
    let rezArr = []
    keyArr.length = (messageArr.length)
    rezArr = messageArr.map((char,ind) => {
      if (alpha[char] + alpha[keyArr[ind]] >= 26) {
        return alpha[char] + alpha[keyArr[ind]] - 26
      } else {
        return alpha[char] + alpha[keyArr[ind]]
      }
    })
    rezArr = rezArr.map(item => item = alphaArr[item]);
    let count = 0;
    startMessage = startMessage.map((item,ind) => {
      if (!(item.match(/[A-Z]/))) {
        count++;
        return item;
      }
      return item = rezArr[ind - count];
    }).join('');
    return this.mode === true ? startMessage : startMessage.split('').reverse().join('');

  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();
    let startMessage = message.toUpperCase().split('')
    message = message.toUpperCase().replace(/[^a-zA-Z]/gi,'');
    key = key.toUpperCase();
    while (key.length < message.length) {
      key += key;
    }
    const messageArr = message.split('');
    const keyArr = key.split('');
    let rezArr = [];
    keyArr.length = (messageArr.length)
    rezArr = messageArr.map((char,ind) => {
      if (alpha[char] - alpha[keyArr[ind]] < 0) {
        return alpha[char] - alpha[keyArr[ind]] + 26
      } else {
        return alpha[char] - alpha[keyArr[ind]]
      }
    })
    rezArr = rezArr.map(item => item = alphaArr[item]);
    let count = 0;
    startMessage = startMessage.map((item,ind) => {
      if (!(item.match(/[A-Z]/))) {
        count++;
        return item;
      }
      return item = rezArr[ind - count];
    }).join('');
    return this.mode === true ? startMessage : startMessage.split('').reverse().join('');

  }
}
module.exports = VigenereCipheringMachine;
