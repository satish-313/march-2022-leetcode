const numberOfArthimaticSlice = (nums) => {
  if (nums.length < 3) return 0;

  let count = 0;
  let prev = 0;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      count += ++prev;
    } else {
      prev = 0;
    }
  }

  return count;
};

console.log(numberOfArthimaticSlice([1, 2, 3, 5, 7]));
