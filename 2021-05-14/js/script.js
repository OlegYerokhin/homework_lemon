//1

alert(`Найдите и исправьте ошибки в коде:\n 
'use strict';

var x = prompt('Введите Х', '1')
    y = prompt('Введите Y', '1');

alert( 'Сумма: ' + x + y );`)

'use strict';

let x = +prompt ('Введите Х', '1');
let y = +prompt ('Введите Y', '1');

alert( 'Сумма: ' + (x + y) );

//2

alert("Задача 2 \n \nСоздайте три переменные. Присвойте первой переменной случайное целочисленное значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Распечатайте все три.")

let a = Math.trunc(Math.random() * 100);
let b = a * 3;
let c = a + b;
alert(a);
alert(b);
alert(c);

//3

alert("Задача 3 \n \nСоздайте переменные firstName и lastName для хранение имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие (“What’s up John Doe”), используя конкатенацию и экранирование символов. Имя и фамилию выводите заглавными буквами независимо от того, как они были введены.")

let firstName = prompt("What's your name?","John");
let lastName = prompt("What's your last name?","Doe");
let nameFirstLetter = firstName[0].toUpperCase();
let surnameFirstLetter = lastName[0].toUpperCase();
let nameOtherLetters = firstName.slice(1);
let surnameOtherLetters = lastName.slice(1);
let finalName = nameFirstLetter+nameOtherLetters;
let finalSurname = surnameFirstLetter+surnameOtherLetters;
alert( 'What\'s up ' + finalName + ' ' + finalSurname );

//4

alert("Задача 4 \n \nСоздайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне.")

let xx = +prompt('Введите число X','4');
let yy = +prompt('Введите число Y','2');
let sum = xx+yy;
alert(sum);
let residual = xx-yy;
alert(residual);
let productOfNumbers = xx*yy;
alert(productOfNumbers);
let quotient = xx/yy;
alert(quotient);

//5

alert("Задача 5 \n \nКосмический корабль летит с Земли на Луну. Расстояние равно 384 400 км. Скорость полета корабля определяется в prompt. Рассчитайте, за какое время ваш космический корабль доберется до Луны. Используйте осмысленные названия переменных для хранения значений.")

const DISTANCE = 384400;
let spaceshipSpeed = +prompt('Введите скорость космического корабля','1000');
let arrivalTime = DISTANCE / spaceshipSpeed / 24;
alert('Your ship will arrive in ' + arrivalTime.toFixed(1) + ' days!');

//6

alert("Задача 6 \n \nНапишите программу, которая без использования оператора сравнения определяет, является ли целое число, введенное пользователем, нечётным (true/false). Результат отобразите в alert.")

let number = +prompt('Введите число','42');
let checkNumber = !!(number % 2);
alert('Число четное? Ответ: ' + !checkNumber);

//7

alert("Задача 7 \n \nНапишите программу, которая проверяет (true/false), является ли значение, введенное пользователем, числом. Напишите так же код, который проверяет, что введенное значение является строковым символом, то есть не-числом. Результат отобразите в alert.")

let someValue = prompt('Введите что-нибудь!','');
let valueCheck = +someValue;
let numberCheck = !!valueCheck;
alert('Введенное значение было числом: ' + numberCheck);

//8 - не совсем понял условие задачи

alert("Задача 8 \n \nНапишите калькулятор для конвертации единиц измерения количества информации (байт, килобайт, мегабайт, гигабайт). Значения считаются из prompt, результаты отображаются в alert. Используйте константы там, где это логически оправдано.")

let value = prompt('Введите объем данных в байтах','1024');
const kbytes = value/1024;
const mbytes = value/1024/1024;
const gbytes = value/1024/1024/1024;
alert(`Введенное число равняется ${kbytes} килобайт, ${mbytes} мегабайт, ${gbytes} гигабайт!`);

//9

alert("Задача 9 \n \nУ Чжуан-цзы было N яблок, Цзэн-Цзы съел несколько. Чжуан-Цзы обвиняет Цзэн-Цзы в том, что он съел все яблоки, но Цзэн-Цзы возражает. Запишите повествование в переменных и выражениях, читая значения из prompt. Не используя операторы сравнения, покажите, правду говорит Цзэн-Цзы или ложь.")

let zhuangziApples = +prompt('Сколько яблок у Чжуан-Цзы?','8');
let zengziEats = +prompt('Сколько яблок съел Чжэн-Цзы?','8');
const zhuangziTalks = alert('Чжуан-Цзы: "Ты сожрал все мои яблоки!"');
const zengziTalks = alert('Чжэн-Цзы: "Ты чё пес!"');
const zhuangziAnswers = alert('Чжуан-Цзы: "Да я на тебя в суд подам!"');
const zengziAnswers = alert('Чжэн-Цзы: "Считать научись!"');
const zhuangziLearns = alert('Чжуан-Цзы учится...');
const zhuangziLearned = alert('Чжуан-Цзы научился считать!');
const zhuangziCountingAlert = alert('Чжуан-Цзы считает...');
let zhuangziCounting = Math.abs(zhuangziApples) - Math.abs(zengziEats);
let result = !!zhuangziCounting;
alert('Тот факт, что Чжэн-Цзы съел все яблоки - ' + !result);


//10

alert("Задача 10 \n \nНа сайте есть три колонки разной высоты, заданной в единицах измерения веб (значения вводятся в prompt в формате “50px”, “20px”...). Используя функцию из библиотеки Math, найдите наибольшее значение из трех и покажите его. Учтите, что Math.max не работает со строками.")

let firstColumn = parseInt(prompt('Введите высоту колонки 1','20px'));
let secondColumn = parseInt(prompt('Введите высоту колонки 2','45px'));
let thirdColumn = parseInt(prompt('Введите высоту колонки 3','29px'));
let theTallestColumn = Math.max(firstColumn, secondColumn, thirdColumn);
alert(theTallestColumn + "px");