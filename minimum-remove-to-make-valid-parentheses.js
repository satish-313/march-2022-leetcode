const minRemoveToMakeValid = (s) => {
  let arr = new Array(s.length).fill(false);
  let set = new Set(["(", ")"]);
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {   
      stack.push(i);
    }

    if (s[i] === ")") {
      if (s[stack[stack.length - 1]] === "(") {
        arr[stack[stack.length - 1]] = true;
        arr[i] = true;
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }

  stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i]) || arr[i]) {
      stack.push(s[i]);
    }
  }

  return stack.join("");
};

console.log(minRemoveToMakeValid("a)b(c)d"));
