const twoCitySchedCost = (costs) => {
  let cost = 0,
    refund = [];

  for (let [a, b] of costs) {
    cost = cost + a;
    refund.push(b - a);
  }

  refund.sort((a, b) => a - b);

  for (let i = 0; i < Math.floor(costs.length / 2); i++) {
    cost = cost + refund[i];
  }

  return cost;
};

console.log(
  twoCitySchedCost([
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
  ])
);

console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469],
  ])
);

console.log(
  twoCitySchedCost([
    [515, 563],
    [451, 713],
    [537, 709],
    [343, 819],
    [855, 779],
    [457, 60],
    [650, 359],
    [631, 42],
  ])
);
