function sum(a, b) {
  let a_num, b_num;
  try {
    if ((typeof a !== 'number') || (typeof b !== 'number'))  {
      throw new TypeError();
    } else {
      return Number(a) + Number(b);
    }
  } catch (e) {
    throw new TypeError();
  }
}

module.exports = sum;
