function countdown(callback) {
  window.setTimeout(callback, 2000)
};

function createMultiplier(val1) {
  return function (val2) {
    return val1 * val2;
  };
}

function multiplier(x, y) {
  return x * y;
}

doubler = createMultiplier(2);
tripler = createMultiplier(3);
doublerWithBind = multiplier.bind(null, 2);
triplerWithBind = multiplier.bind(null, 3);

