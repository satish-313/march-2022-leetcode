const validateStackSequences = (pushed, popped) => {
  let index = 0, stack = [];

  for (let ele of pushed) {
    if (ele === popped[index]) {
      index += 1;
      while (stack.length > 0 && stack[stack.length - 1] === popped[index]) {
        stack.pop();
        index += 1;
      }
    } else {
      stack.push(ele);
    }
  }

  return stack.length === 0;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
