const champangeTower = (poured, query_row, query_glass) => {
  const dp = Array(101)
    .fill()
    .map(() => Array(101).fill(0));

  dp[0][0] = poured;

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j <= i; j++) {
      if (dp[i][j] >= 1) {
        let half = (dp[i][j] - 1) / 2;
        dp[i + 1][j] += half;
        dp[i + 1][j + 1] += half;
        dp[i][j] = 1;
      }
    }
  }

  return dp[query_row][query_glass];
};

console.log(champangeTower(100000009, 33, 17));
