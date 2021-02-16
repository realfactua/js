



let year = prompt('Введите год');
if ((year % 400 == 0) || (year % 4 == 0) && (year % 100)) {
	console.log(`yes`);
} else {
	console.log(`non`)
}
