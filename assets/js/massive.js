let massive = ['alla', 'olla', 'Kolya'];

massive.push('Vasya');
massive.unshift('Katya');
for (let item of massive) {
	console.log(`Hello ${item}`);
}

const limit = 6000;
let addPay = 0;
let mas = [7000, 9800, 2500, 7000, 5000, 3500, 19000, 1200, 12000];

for (let item of mas) {

	if (item < limit) {
		let diff = limit - item;
		addPay = addPay + diff;
	}


}
console.log(addPay);

