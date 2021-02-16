let massa = +prompt(`Введите ваш вес в кг!`);

console.log(`Ваш вес ${massa}`);

let height = +prompt(`Ведите ваш рост в см`);


console.log(`Ваш рост ${height}`);
let index = massa / ((height * height) / 100);


console.log(`Ваш индекс тела ${index}`);
if (index <= 16) {
	console.log(`Выраженный дефицит массы тела`);
}
if ((index >= 16) && (index < 18.5)) {
	console.log(`Недостаточная масса тела (дефицит)`);
}
if ((index >= 18.5) && (index < 24)) {
	console.log(`Нормальная масса тела`);
}
if ((index >= 24) && (index < 30)) {
	console.log(`Избыточная масса тела (предожирение)`);
}
if ((index >= 30) && (index < 35)) {
	console.log(`Ожирение I степени`);
}
if ((index >= 35) && (index < 40)) {
	console.log(`Ожирение II степени`);
}
if (index > 40) {
	console.log(`Ожирение III степени`);
}

