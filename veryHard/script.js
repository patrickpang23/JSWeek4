// *VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Note: You may assume that you have an infinite number of each kind of coin.


// I need array for coinValue
// I need a variable for total amount of money
// I need a function that will sort coins from largest to smallest. Inside of function use for loop to go through the numbers.
// I need a function to see how many times a coinValue can go through the total amount, if it can't go through with no remainder, move on to next coin until no remainder is found!
// If no remainder is found, console.log amount of coins.
// If coin value combinations do not return the total amount then console.log -1

coinsValue = [1, 2, 5]
let totalAmount = 11

coinsValue.sort(function (a, b) {
    return b - a;
})

console.log(coinsValue);

const gcd = (...arr) => { // (...) spread syntax, allows objects expression, array expression or strings to be expanded wherever placed.
    const _gcd = (x, y) => (!y ? x : gcd(y, x % y)); // (_) makes it turn into an object. (%) modulus gives remainder of division a sum. (!) means negate.
    return [...arr].reduce((a, b) => _gcd(a, b)); // .reduce() iterates through an array and gives you access to previous and current value where you can make changes to the value and eventually yeild to a single result.
};

console.log(gcd(5, 2, 1));