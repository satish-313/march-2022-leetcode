
const isvalid = (str) => {
  const stack = [str[0]];
  const key = { "(": ")", "[": "]", "{": "}" };
  const reverseKey = { ")": "(", "]": "[", "}": "{" };

  for (let i = 1; i < str.length; i++) {
    if (str[i] in key) {
      stack.push(str[i]);
    } 
    else if (str[i] in reverseKey) {
      if (stack[stack.length - 1] === reverseKey[str[i]]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
  }

  return stack.length === 0;
};

console.log(isvalid("(])"));
