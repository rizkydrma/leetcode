/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    	const arrayA = a.split('');
	const arrayB = b.split('');

	let pointerA = arrayA.length - 1;
	let pointerB = arrayB.length - 1;

	let sisa = 0;
	const res = [];

	while (pointerA >= 0 || pointerB >= 0 || sisa) {
		const digitA = arrayA[pointerA] ? arrayA[pointerA] : 0;
		const digitB = arrayB[pointerB] ? arrayB[pointerB] : 0;

		const total = Number(digitA) + Number(digitB) + sisa;
		const hasil = total % 2; // 1:2 || 3:2
		sisa = Math.floor(total / 2); // 0.5 => 0 || 1.5 // 1

		res.unshift(hasil);

		pointerA -= 1;
		pointerB -= 1;
	}

	return res.join('');
};
