/* eslint-disable no-restricted-syntax */
class Skylabarray {
  constructor(...value) {
    let i = 0;

    for (const j of value) {
      this[i] = j;
      i += 1;
      this.length = i;
    }
  }

  push(input, objectInstance) {
    const i = objectInstance.length;
    this[i] = input;
    this.length = objectInstance.length + 1;
  }
}

module.exports = Skylabarray;
