const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (position > 0 && position < this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = this.arr.join('~~')
    this.arr = [];
    return res;
  }
};

module.exports = chainMaker;
