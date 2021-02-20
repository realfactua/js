// Индекс масси тела //  моя первая функция JavaScript:%) И оно работает:)
function indexMassBody() {
	let mass = +floatingInputMass.value;		 // переменнЫе  со значением 
	let rost = +floatingInputRost.value;

	let index = mass / (rost * rost) * 10000;	 // формула для расчета Индекса 

	index = Math.round(index); 					 // функция округления до целого числа

	resultIndex.innerHTML = `<h3 class=" m-1 pb-1 p-1 bg-primary text-white">индекс: <big><b>${index}</h3>`; 			   	// вывод в разметку результата расчета формулы 

	let answer = index;  						// присваиваем значение новой переменной 

	if (answer <= 16) { 											// если 
		result.innerHTML = 'Выраженный дефицит массы тела';			// выводим в разметку
	} else if ((answer >= 16.1) && (answer <= 24)) {
		result.innerHTML = 'Нормальная масса тела';
	} else if ((answer >= 24) && (answer <= 30)) {					//	или если  
		result.innerHTML = 'Избыточная масса тела (предожирение)';	// выводим в разметку
	} else if ((answer >= 30) && (answer <= 35)) {
		result.innerHTML = 'Ожирение I степени';
	} else if ((answer >= 35) && (answer <= 40)) {
		result.innerHTML = 'Ожирение II степени';
	} else if ((answer >= 40) && (answer <= 50)) {
		result.innerHTML = 'Ожирение III степени';
	} else {																				// если не чего не подошло  
		result.innerHTML = 'с такими пропорциями долго не протянуть...Покажитесь доктору!'; // выводим в разметку
	}
}
// Депозитный калькулятор !
function DepositeCalc() {
	let summa = +sumInput.value;
	let term = +termInput.value;
	let rate = +rateInput.value;

	let mRate = rate / 12 / 100;

	let depositeTotal;

	if (capInput.checked) {									// если галочка стоит тогда :
		depositeTotal = summa * ((1 + mRate) ** term);
	} else {												// если не стоит тогда :
		depositeTotal = summa + summa * mRate * term;
	}

	resultDeposite.innerHTML = Math.round(depositeTotal);	// выводим в разметку
}
function year() {
	let year = +yearS.value;
	let isYear;
	if ((year % 400 == 0) || (year % 4 == 0) && (year % 100)) {
		isYear = year;
		otvet.innerHTML = ` высокостный`;
	} else {
		otvet.innerHTML = ` невысокостный`;
	}
}
