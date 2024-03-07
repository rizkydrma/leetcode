/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
	    return n;
	}

	const sequence = new Array(n + 1);
	sequence[0] = 1;
	sequence[1] = 1;
	sequence[2] = 2;

	for (let i = 3; i <= n; i++) {
		sequence[i] = sequence[i - 1] + sequence[i - 2];
	}

	return sequence[n];
};