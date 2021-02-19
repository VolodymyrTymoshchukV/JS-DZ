// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
let spaceOdyssey = [1948, 1968, 2001, 2010, 3001];
console.log(spaceOdyssey);

let streets = ['Hrushevskogo', 'Sadova', 'Shevchenka', 'Pekarska', 'Stara'];
console.log(streets);

let abrakadabra = ['Ivan', 4567, 'Petro', true, 'Olha'];
console.log(abrakadabra);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arriva = [abrakadabra[3], abrakadabra[0], spaceOdyssey[2], streets[4]];
console.log(arriva);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let divBlocks = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
for (let i = 0; i < divBlocks.length; i++) {
     document.write(`<div>Hello ${divBlocks[i]}</div>`);
     document.write('<hr>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let divBlocks2 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
for (let i = 0; i < divBlocks2.length; i++) {
     document.write(`<div> ${divBlocks2[i]} ${i} </div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i <10) {
     document.write('<h2>Довільний текст</h2>');
     i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 0;
while (i <10) {
     document.write(`<h2>Довільний текст ${i}</h2>`);
     i++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let houseNumbers = [45, 23, 6, 8, 467, 12, 64, 78, 56, 457];
for (let i = 0; i < houseNumbers.length; i++) {
     console.log(houseNumbers[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let firstNames = ['Ivan', 'Tamara', 'Sonya', 'Taras', 'Olya', 'Maryna', 'Pavlo', 'Victor', 'Galyna', 'Ihor'];
for (let i = 0; i < firstNames.length; i++) {
     console.log(firstNames[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let randomElements = ['Sofa', 345, true, '356', 'mavka', 56784, 345, 'yeeeea', false, 'hahaha'];
for (let i = 0; i < randomElements.length; i++) {
     console.log(randomElements[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let randomElements2 = ['Sofa', 345, true, '356', 'mavka', 56784, 345, 'yeeeea', false, 'hahaha'];
for (let i = 0; i < randomElements2.length; i++) {
     if(typeof randomElements2[i] === 'boolean'){
     console.log(randomElements2[i]);
     }
     else {
     }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let randomElements3 = ['Sofa', 345, true, '356', 'mavka', 56784, 345, 'yeeeea', false, 'hahaha'];
for (let i = 0; i < randomElements3.length; i++) {
     if(typeof randomElements3[i] === 'number'){
     console.log(randomElements3[i]);
     }
     else {
     }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let randomElements4 = ['Sofa', 345, true, '356', 'mavka', 56784, 345, 'yeeeea', false, 'hahaha'];
for (let i = 0; i < randomElements4.length; i++) {
     if(typeof randomElements4[i] === 'string'){
     console.log(randomElements4[i]);
     }
     else {
     }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let boxData = [];
boxData[1] = true;
boxData[2] = 'Lalala';
boxData[3] = 56474;
boxData[4] = false;
boxData[5] = false;
boxData[6] = 6758;
boxData[7] = 56;
boxData[8] = 'Info';
boxData[9] = true;
boxData[10] = 'Wow';
for (let i = 0; i < boxData.length; i++) {
     console.log(boxData[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
     console.log(i);
     document.write(`${i} <br>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
          console.log(i);
          document.write(`${i} <br>`);
     }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
let stepRule = 0;
for (let i = 0; i < 100; i++) {
     console.log(stepRule);
     document.write(`${stepRule} <br>`);
     stepRule+=2;
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
     if (i%2 === 0) {
          console.log(i);
          document.write(`${i} <br>`);
     }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
     if (i%2 !== 0) {
          console.log(i);
          document.write(`${i} <br>`);
     }
}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for (let m = 0; m <= 2; m++) {
     for (let s = 0; s < 60; s++) {
          document.write((`min: ${m}, sec: ${s}`))
          if (m === 2) 
          break
     }
     
}

// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for (let h = 0; h <= 2; h++) {
     for (let m = 0; m < 60; m++) {
          if (h === 2 && m === 0) 
          break
          for (let s = 0; s < 60; s++) {
               document.write((`hour: ${h}, min: ${m}, sec: ${s} <br>`))
               if (h === 2 && m === 0 && s === 0) 
               break
          }
          
     }
     
}
 

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let letterBox = [ 'a', 'b', 'c'];
let word = '';
for (let i = 0; i < letterBox.length; i++) {
     word = word + letterBox[i];
}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let i = 0;
let letterBox2 = [ 'a', 'b', 'c'];
let word2 = '';
while (i < letterBox2.length) {
     word2 = word2 + letterBox2[i];
     i++;
}
console.log(word2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let letterBox3 = [ 'a', 'b', 'c'];
let word3 = '';
for (const glue of letterBox3) {
     word3 = word3 + glue;
}
console.log(word3);

// =================
// =================
// =================
// =================

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let letters = ['a', 'b', 'c'];
for (let i = 1; i < letters.length; i++) {
     letters.push(1);
     letters.push(2);
     letters.push(3);
     break;
}
console.log(letters);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let numbers = [1, 2, 3];
let reverseNumbers = numbers.reverse();
console.log(reverseNumbers);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let someNumbers = [1, 2, 3];
someNumbers.push(4);
someNumbers.push(5);
someNumbers.push(6);
console.log(someNumbers);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let moreNumbers = [1, 2, 3];
moreNumbers.unshift(6);
moreNumbers.unshift(5);
moreNumbers.unshift(4);
console.log(moreNumbers);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let extension = ['js', 'css', 'jq'];
let extension2 = extension.reverse();
extension.shift();
extension.shift();
document.write(extension);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let files = ['js', 'css', 'jq'];
let files2 = files.reverse();
files.pop();
files.pop();
console.log(files2);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let test1 = [1, 2, 3, 4, 5];
console.log(test1.slice(3));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let test2 = [1, 2, 3, 4, 5];
console.log(test2.slice(0, 2));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
let test3 = [1, 2, 3, 4, 5];
let secondStep = test3.splice(1, 2);
console.log(test3);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let test4 = [1, 2, 3, 4, 5];
test4.splice(3, 0, 'a', 'b', 'c');
console.log(test4);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let test5 = [1, 2, 3, 4, 5];
test5.splice(1, 0, 'a', 'b');
test5.splice(6, 0, 'c');
test5.splice(10, 0, 'e');
console.log(test5);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numbersBox = [3, 546, 23, 567, 233, 45, 66, 88, 12, 876];
for (let i = 0; i < numbersBox.length; i++) {
     if (numbersBox[i]%2 === 0) {
          console.log(numbersBox[i]);
     }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let numbersBox2 = [3, 546, 23, 567, 233, 45, 66, 88, 12, 876];
let emptyBox2 = [];
for (let i = 0; i < numbersBox2.length; i++) {
     emptyBox2.push(numbersBox2[i]);
}
console.log(emptyBox2);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let numbersBox3 = [3, 546, 23, 567, 233, 45, 66, 88, 12, 876];
let emptyBox3 = [];
for (let i = 0; i < numbersBox3.length; i++) {
     emptyBox3[i]=(numbersBox3[i]);
}
console.log(emptyBox3);


// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let numberContainer = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
let i = 0;
while (i < numberContainer.length) {
          console.log(numberContainer[i]);
          i++;
}

// 2. перебрати його циклом for
for (let i = 0; i < numberContainer.length; i++) {
     console.log(numberContainer[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let i = 0;
while (i < numberContainer.length) {
     if (numberContainer[i]%2 !== 0) {
          console.log(numberContainer[i])
     }
     i++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < numberContainer.length; i++) {
          if (numberContainer[i]%2 !== 0) {
          console.log(numberContainer[i])
     }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let i = 0;
while (i < numberContainer.length) {
     if (numberContainer[i]%2 === 0) {
          console.log(numberContainer[i]);
     }
     i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні значення
for (let i = 0; i < numberContainer.length; i++) {
          if (numberContainer[i]%2 === 0) {
          console.log(numberContainer[i])
     }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < numberContainer.length; i++) {
     if (numberContainer[i]%3 === 0) {
          numberContainer[i] = 'okten';
     }
}
console.log(numberContainer);

// 8. вивести масив в зворотньому порядку.

for (let i = 9; i < numberContainer.length && i >= 0; i--) {
     console.log(numberContainer[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// В ЗВОРОТНЬОМУ ЦИКЛІ:
// 7.
for (let i = 9; i < numberContainer.length && i >= 0; i--) {
     if (numberContainer[i]%3 === 0) {
          numberContainer[i] = 'okten';
     }
}
console.log(numberContainer);

// 6.
for (let i = 9; i < numberContainer.length && i >= 0; i--) {
          if (numberContainer[i]%2 === 0) {
          console.log(numberContainer[i])
     }
}

// 5.
let i = 9;
while (i < i < numberContainer.length && i >= 0) {
     if (numberContainer[i]%2 === 0) {
          console.log(numberContainer[i]);
     }
     i--;
}

// 4.
for (let i = 9; i < numberContainer.length && i >= 0; i--) {
          if (numberContainer[i]%2 !== 0) {
          console.log(numberContainer[i])
     }
}

// 3.
let i = 9;
while (i < numberContainer.length && i >= 0) {
     if (numberContainer[i]%2 !== 0) {
          console.log(numberContainer[i])
     }
     i--;
}

// 2. 
for (let i = 9; i < numberContainer.length && i >= 0; i--) {
     console.log(numberContainer[i]);
}

// 1.
let i = 9;
while (i < numberContainer.length && i >= 0) {
          console.log(numberContainer[i]);
          i--;
}


// 10
//  створити пустий масив та :
let empty = [];
let empty2 = [];

// 1. заповнити його 50 парними числами за допомоги циклу.
// 2. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
     i%2 === 0 ? empty[i] = i : empty2[i] = i;
}
console.log(empty);
console.log(empty2);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
let randomBox = [];
for (let i = 0; i < 20; i++) {
     randomBox[i] = Math.floor((Math.random()*732-8)+8);
}
console.log(randomBox);

//  2. вывести на консоль  каждый третий елемент
for (let i = 2; i < randomBox.length; i+=3) {
     console.log(randomBox[i]);
}

//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
for (let i = 2; i < randomBox.length; i+=3) {
     if (randomBox[i]%2 === 0) {
          console.log(randomBox[i]);
     }
}

//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
let anotherBox = [];
for (let i = 2; i < randomBox.length; i+=3) {
     if (randomBox[i]%2 === 0) {
          anotherBox.push(randomBox[i]);
     }
}
console.log(anotherBox);

//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
for (let i = 0; i < randomBox.length; i++) {
     if (randomBox[i+1]%2 === 0) {
          console.log(randomBox[i]);
     }
}

//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

let newBox = [100,250,50,168,120,345,188];
for (let i = 0; i < newBox.length; i++) {
     summBox = (newBox[0] + newBox[1] + newBox[2] + newBox[3] + newBox[4] + newBox[5] + newBox[6]) / newBox.length;
}
console.log(summBox);


// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randomBox = [];
for (let i = 0; i < 20; i++) {
     randomBox[i] = Math.floor((Math.random()*732-8)+8);
}
let multiBox = [];
for (let i = 0; i < randomBox.length; i++) {
     multiBox[i] = randomBox[i]*5;
}
console.log(multiBox);


// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.
let findNumber = [234, false, 35, 2345, 'test', false, 222, 'Eu'];
let onlyNumber = [];
for (let i = 0; i < findNumber.length; i++) {
     if (typeof findNumber[i] === 'number') {
          onlyNumber = findNumber[i]
          console.log(onlyNumber);
     }
}
