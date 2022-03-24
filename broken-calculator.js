const brokenCalc = (startValue, target) => {
  let steps = 0,
    num = startValue;
  if (startValue === target) return steps;

  while (target !== startValue) {
    let q = target % 2;

    console.log(target)
    if (q === 1) {
      target += 1;
      steps += 1;
    } else if (target < num) {
      steps += num - target;
      target = num;
    } else {
      target = Math.floor(target / 2);
      steps += 1;
    }
  }

  return steps;
};

console.log(brokenCalc(1, 1000000000));
// console.log(brokenCalc(1, 10));

