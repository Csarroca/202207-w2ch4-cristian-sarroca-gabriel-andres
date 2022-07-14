/* eslint-disable no-restricted-syntax */
class Skylabarray {
  constructor(...value) {
    let i = 0;

    for (const j of value) {
      this[i] = j;
      i += 1;
    }
  }
}

module.exports = Skylabarray;
