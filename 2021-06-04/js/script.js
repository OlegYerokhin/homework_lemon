// 1

// Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно, то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном модальном окне. Напишите функцию d, которая будет служить коротким именем для debugger, то есть запускать процесс отладки. Используя эти псевдонимы получите значение из prompt и отобразите в alert. А процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага.

function d() {
    debugger;
}
d();

let message;
function p() {
    message = prompt('Enter your message!','');
}
p();

function a(message) {
    alert(message);
}
a(message);

// 2

// Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), которая сравнивает два числа и возвращает большее.

let a = prompt('Enter value A!','');
let b = prompt('Enter value B!','');
let max = (a, b) => a > b ? a : b; 
console.log(max(a, b))

// 3

// Используя синтаксис ES5, напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них.

function min() {
    let result = Infinity;
    
    for(let i in arguments) {
        if (arguments[i] < result) {
            result = arguments[i];
        }
    }
    return result;
}

min();

// 4

// Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину.

const str = prompt('Enter your phrase!')

function findLongestWordLength(str) {
    return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
};
  
console.log(findLongestWordLength(str));

// 5

// Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное и минимальное и возвращает их.

const stringwithNumbers = '4 5 29 54 4 0 -214 542 -64 1 -3 6 -6';
const numbers = stringwithNumbers.split(' ').map(parseFloat);
let j = 0;
let k = 0;


function findMinMax(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > j) {
            j = numbers[i];
        }
    }
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < k) {
            k = numbers[i];
        }
    }
    let message = 'Max of string is ' + `${j}` + ', min of string is ' + `${k}`;
    return message;
}

console.log(findMinMax(numbers));