/**
 * 322：零钱兑换
 * 思路如下：dp[100] = dp[99] + 1
 * 这句话代表什么意思呢，就是第 100 个的情况是根据第 99 个来决定的，而第 99 个又是根据第 98 个来决定的
 * d[n] = d[n-1] + 1
 * d[n] = d[n-4] + 1
 * d[n] = d[n-5] + 1
 */
const dp = (coins, amount) => {
    let dp = [0];
    for (let i = 1; i <= amount; i++) {
        dp[i] = Infinity;
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(dp([1, 4, 5], 10)) // 2