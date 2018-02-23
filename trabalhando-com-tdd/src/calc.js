const calc = {
  sum(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mult(a, b) {
    return a * b;
  },
  div(a, b) {
    return b === 0 ? 'Não é possível dividir por zero' : a / b;
  },
};

export default calc;
