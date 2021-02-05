// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

let greeting = 'Hello';
let school = 'OWU';
let country = 'ua';
let one = 1;
let ten = 10;
let maxMinus = -999;
let specialNumber = 123;
let NumberPi = 3.14;
let numberE = 2.7;
let oneMoreNumber = 16;
let isOkay = true;
let isNotOkay = false;
console.log(greeting, school, country, one, ten, maxMinus, specialNumber, NumberPi, numberE, oneMoreNumber, isOkay, isNotOkay);
alert(greeting);
alert(school);
alert(country);
alert(one);
alert(ten);
alert(maxMinus);
alert(specialNumber);
alert(NumberPi);
alert(numberE);
alert(oneMoreNumber);
alert(isOkay);
alert(isNotOkay);
document.write(greeting, school, country, one, ten, maxMinus, specialNumber, NumberPi, numberE, oneMoreNumber, isOkay, isNotOkay);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let userName = prompt('Ваше ім\'я');
let userSurame = prompt('Ваше прізвище?');
let userAge = prompt('Скільки Вам років?');
document.write('Вітаю, ' + userName + ' ' + userSurame + '. ' + 'Тобі ' + userAge + ' років.');

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

let userInfo = userName + userSurame + userAge;

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

let numberOne = prompt('Число перше');
let numberTwo = prompt('Число друге');
let numberThree = prompt('Число третє');
console.log(Number(numberOne));
console.log(Number(numberTwo));
console.log(Number(numberThree));

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.

let applePrice = prompt('Вартість яблук');
let bananaPrice = prompt('Вартість бананів');
let tangerinePrice = prompt('Вартість мандаринів');
let grapePrice = prompt('Вартість винограду');

let applePriceNum = Number.parseInt(applePrice);
let bananaPriceNum = Number.parseInt(bananaPrice);
let tangerinePriceNum = Number.parseInt(tangerinePrice);
let grapePriceNum = Number.parseInt(grapePrice);

let resultSum = (applePriceNum + bananaPriceNum + tangerinePriceNum + grapePriceNum);

console.log (resultSum);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. 
//   Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

let toyotaPrice = parseFloat(prompt('Вартість Тойоти'));
let teslaPrice = parseFloat(prompt('Вартість Тесли'));
let mercedesPrice = parseFloat(prompt('Вартість Мерседеса'));

let result = (toyotaPrice + teslaPrice + mercedesPrice);

console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.

let tablePrice = parseFloat(prompt('Ціна стола'));
let chairPrice = parseFloat(prompt('Ціна стільця'));
let sofaPrice = parseFloat(prompt('Ціна дивана'));

let tablePriceRound = Math.round(tablePrice);
let chairPriceRound = Math.round(chairPrice);
let sofaPriceRound = Math.round(sofaPrice);

let furnitureResult = (tablePriceRound + chairPriceRound + sofaPriceRound);

console.log(furnitureResult);

// - За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25 

let integer = prompt('Введіть число');
let power = prompt('Введіть степінь');

let mathResult = Math.pow(integer, power);

console.log(mathResult);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log (typeof a);
console.log (typeof b);
console.log (typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true

console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(5 === 6);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 < 10);
console.log(10 > 10);
console.log(10 !== 10);
console.log(123 === '123');
console.log(123 == '123');
