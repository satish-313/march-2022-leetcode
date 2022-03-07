const countOrders = (n) => {
  let res = 1;
  let module = 1e9 + 7;

  for (let i = 1; i <= n; i++) {
    res = (res * i) % module;
    res = (res * (2 * i - 1)) % module;
  }

  return res;
};

console.log(countOrders(2));
