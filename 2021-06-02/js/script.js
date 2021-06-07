// 1

// Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.


const arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let sum = 0;

for (key in arr) {

    if (parseInt(arr[key])) {
        sum += +(arr[key]);
    } 
}

alert('Sum = ' + `${sum}`);

// 3

/* Создайте массив со значениями: ‘Angular’, ‘jQuery’
Добавьте в начало массива значение ‘Backbone.js’
Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
Добавьте в массив значение ‘CommonJS’ вторым элементом
Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”*/

let frameworks = ['Angular', 'jQuery'];
frameworks.unshift('Backbone.js');
frameworks.push('React.js', 'Vue.js');
frameworks.splice(1, 0, 'CommonJS');
alert('Это здесь лишнее: ');
alert(frameworks.splice(frameworks.indexOf("jQuery"), 1));
console.log(frameworks);

// 4

// Создайте строку с текстом ‘Как Однажды Жак Звонарь Сломал Городской Фонарь’. Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

let string = 'Как Однажды Жак Звонарь Сломал Городской Фонарь';
let array = string.split(' ');
let firstWrongPlacedWord = array.indexOf('Сломал');
let secondWrongPlacedWord = array.indexOf('Городской');
let secondRemovedWord = array.splice(secondWrongPlacedWord, 1);
let firstRemovedWord = array.splice(firstWrongPlacedWord, 1);
array.splice(4, 0, `${secondRemovedWord}`, `${firstRemovedWord}`);
let newString = array.toString();
newString = newString.split(',').join(' ');
alert(string);
alert(newString);