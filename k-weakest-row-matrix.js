const KweakestRows = (mat, k) => {
  const arr = [],res = [];

  for (let i = 0; i < mat.length; i++) {
    let l = 0,mid,r = mat[0].length - 1;

    if (mat[i][r] === 1) {
      arr.push(`${r + 1},${i}`);
      continue;
    }

    if (mat[i][l] === 0) {
      arr.push(0 + "," + i);
      continue;
    }
    while (l <= r) {
      mid = Math.floor((l + r) / 2);

      if (mat[i][mid] === 0 && mat[i][mid - 1] === 1) {
        arr.push(mid + "," + i);
        break;
      } else if (mat[i][mid] === 1) {
        l = mid + 1;
      } else if (mat[i][mid] === 0) {
        r = mid - 1;
      }
    }
  }

  arr.sort((a, b) => {
    let ai = a.split(",")[0];
    let bi = b.split(",")[0];

    return parseInt(ai) - parseInt(bi);
  });

  for (let i = 0; i < k; i++) {
    res.push(parseInt(arr[i].split(",")[1]));
  }

  return res;
};

console.log(
  KweakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);

console.log(
  KweakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    2
  )
);
