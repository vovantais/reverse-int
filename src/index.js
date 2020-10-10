
module.exports = function reverse(num) {
	let newNum = '';
	if (num > 0) {
		return +(num.toString().split('').reverse().join(''));
	}
	if (num < 0) {
		newNum = num.toString().slice(1);
		return +(newNum.split('').reverse().join(''));
	}
}
