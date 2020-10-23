const NUMBER_TYPE_STR = 'number';

function sum(a, b) {
  let a_num, b_num;
  try {
    if ((typeof a === NUMBER_TYPE_STR) 
      || (typeof b === NUMBER_TYPE_STR))  {
        return +a + +b;
    } else {
      throw new TypeError();
    }
  } catch (e) {
    throw new TypeError();
  }
}

module.exports = sum;
