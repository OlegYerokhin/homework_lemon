// 1 

// Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.

const coffeeMachine = {
    message: 'Your coffee is ready!',
    start() {
        setTimeout(() => alert(coffeeMachine.message), 3000);
    }
}

// 2

// Создайте функцию hello(), которая выводит приветствие пользователю. Создайте два объекта, содержащие поля firstname, lastname. Используя метод call и функцию hello() приветствуйте каждого из пользователей персонально.

function hello() {
    alert('Hello, ' + `${this.firstname}` + ' ' + `${this.lastname}`);
}

const borat = {
    firstname: 'Borat',
    lastname: 'Sagdiyev'
}

const azamat = {
    firstname: 'Azamat',
    lastname: 'Bagatov'
}

hello.call(azamat);
hello.call(borat);


// 3

// Создайте объект array с методом инициализации начального значения массива, c методами добавления, удаления последнего элемента массива и методом возврата текущего состояния массива. Используйте концепцию chaining для создания цепочки вызовов.

let array = {
    
    arr: [],
    
    getValue() {
        this.arr;
        return this;
    },

    setValue(value) {
        this.arr[0] = value;
        return this;
    },

    push(value) {
        value = +prompt('Enter yovalue you want to add!');
        this.arr.push(value);
        return this;
    },

    pop() {
        this.arr.pop();
        return this;
    }
}

// 4  

// Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии

function countSum(n) {
    return (n != 1) ? n + countSum(n - 1) : 1;
}

// 5

// // Есть следующий код:

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

// // Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:


format.call(country, '', ''); // Ukraine
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(country.population, ['', '']); // undefined

// 6

/* Создайте объект user с полем name. Создайте функцию format с параметрами start и end:


function format(start, end) {
    console.log(start + this.name + end);
}

Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя


userFormat('<<<', '>>>'); // <<<John>>>


Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию;
2. Метод bind().

*/

// Анонимная функция:

const user = {
    name: 'Borat',
    function(start, end) {
        console.log(start + this.name + end);
    }
    
    
}

user.function('<<<', '>>>');

// BIND

const user = {
    name: 'Borat',    
}

function format(start, end) {
    console.log(start + this.name + end);
}

format.bind(this.name)
let newFormat = format.bind(user);
newFormat('<<<','>>>');
