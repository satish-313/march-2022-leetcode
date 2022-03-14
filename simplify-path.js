
const simplifyPath = (path) => {
  const stack = [];
  const p = path.split("/");

  for (let ele of p) {
    if (ele === "" || ele === ".") continue;
    if (ele === "..") {
      stack.pop();
      continue;
    }
    stack.push(ele);
  }

  let str = stack.join("/");
  return "/" + str;
};

console.log(simplifyPath("/a/./b/../../c/"));
