const indexInArr = () =>{
	const arr = [1, 2, 3, 4, 5];
	const index = arr.indexOf(3);
	const length = arr.length;
	const x = (index + 1+length)%length;
	console.log(x);
}