const getSmallestString = (n, k) => {
  let str = "",
    res = "";

  while (k !== 0) {
    let h = k - --n;

    if (h >= 26) {
      let s = String.fromCharCode(122);
      str += s;
      k = k - 26;
    } else {
      let s = String.fromCharCode(96 + h);
      str += s;
      k = k - h;
    }
  }

  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }

  return res;
};

console.log(getSmallestString(3, 4));
console.log(getSmallestString(3, 27));
console.log(getSmallestString(5, 73));
