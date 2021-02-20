/*
let code;
do {
	code = prompt('Ведите код');

	if (code == '4321') {
		alert('Добро пожаловать!')
	} else {
		alert('Fuck you');
	}
} while (code != '4321');


let counter = 1;

while (counter <= 10) {
	console.log(counter)
	counter++;
}


for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
		console.log()
	}
}


let secret = Math.random();
secret = secret * 100;
secret = Math.floor(secret);
secret = secret + 1;

let isWinner = false;

for (let i = 1; i <= 10; i++) {

	let variant = +prompt('Ваш вариант:');

	if (variant == secret) {

		alert(`Вы угадали!Поздравляем!`);
		isWinner = true;
	} else if (variant < secret) {
		alert(`Ваше число меньше секретного числа! Попытка :${i}`);
	} else {
		alert(`Ваше число большое секретного!  Попытка :${i}`);
	}
}
if (isWinner == false) {
	alert(`Game over is number ${secret}`)
}


let sum = 1000;
let rate = 24;
let mRate = rate / 12 / 100;
let term = 180;

for (let i = 1; i <= term; i++) {
	let mProfit = sum * mRate;
	console.log(`Месяц ${i} : ${mProfit} грн`);
	sum = sum + mProfit;
}

console.log(sum)











let sum1 = -1;
while (sum1 <= 99) {
	sum1++;
	console.log(sum1);
}

let sum2 = 20;
for (let i = 1; i <= 37; i++) {
	sum2++;
	console.log(sum2);
}
let sum3;
for (let i = 1; i <= 101; i++) {
	if (i % 2 == 0) {
		sum3 = i;
		console.log(sum3);
	}
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
	sum = sum + i;
	console.log(sum);
}
*/


// ?????????????????????????

let count = 0;
for (let i = 3; i <= 100; i++) {
	for (let j = 2; j <= i - 1; j++) {
		if (i % j == 0) {
			isPrime = false;
			break;
		} else {
			isPrime = true;
		} if (isPrime == true) {
			console.log(isPrime);
		}
	}
}