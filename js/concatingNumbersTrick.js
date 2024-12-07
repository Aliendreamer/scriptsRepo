
// this i found doing aoc 2024 from redit it is a very cool trick to concat two numbers and make execution cheaper
// halfved my execution time in aoc 2024 day 7 at 50%  escaping  expensive string operations
// Explanation:
//result=a×10 digits in b +b
//The mathematical approach significantly reduces runtime by avoiding string operations.
// it is not a script but something i can use any time and is not something I will not forget at one point
const concatNumbers = (a, b) => {
	const pow = Math.floor(Math.log10(b) + 1); // Number of digits in b
	return a * Math.pow(10, pow) + b; // Shift a and add b
};