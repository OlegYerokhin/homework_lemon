// 1

alert('Создайте блок-схему, описывающую алгоритм поиска минимального из трех чисел. Запишите алгоритм программно: создайте три переменные с любыми числовыми значениями; используя только вложенные условные операторы if (НЕ логические операторы), найдите минимальное число и отобразите на экране его значение.');

let first = +prompt('Введите первое число!','');
let second = +prompt('Введите второе число!','');
let third = +prompt('Введите третье число!','');

if (first < second) {
    if (first < third) {
        alert('Первое число - наименьшее!');
    }
} else if (second < third) {
    alert('Второе число наименьшее!');    
} else {
    alert('Третье число наименьшее!');
}

// 2 

alert("По склону Фудзи ползет улитка. Ее скорость определяется в диалоговом окне. Проверить и вывести на экран, улитка двигается вперед, назад или остается на месте (скорость (вектор) положительная, отрицательная или ноль).");

let snailSpeed = prompt('Введите скорость улитки','');

if (snailSpeed > 0) {
    alert('Улитка ползет вперед!');
} else if (snailSpeed < 0) {
    alert('Улитка ползет назад!');
} else {
    alert('Улитка притаилась и ждет!');
}

// 3 

alert("Получите из prompt значение для имени пользователя. Выведите на экран приветствие. Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.");

let username = prompt('Enter your name','');

if (username) {
    alert(`Hello, ${username}!`);
} else if (username === '') {
    alert('Hello, anonymous!');
} else if (!username) {
    alert('Try again!');
}

// 4

alert('У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. В зависимости от общей суммы ваших сбережений вы можете полететь на Мальту изучать английский язык или выпить пива. С помощью условного оператора определите ваши возможности и отобразите на экране в alert.');

let yourBalance = +prompt('Enter your balance!','');
let friendsBalance = +prompt('Enter your friend\'s balance!','');

if (yourBalance + friendsBalance < 5000) {
    alert('Ваш суммарный баланс слишком мал. Немедленно выпейте пива!');
} else {
    alert('У вас неплохой бюджет! Отправляйтесь учить английский язык на Мальту!');
}

// 5

alert('Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.');

let minibusNumber = +prompt('Введите номер приехавшей маршрутки!','');

switch (minibusNumber) {
    case 7: alert('Подходит! Вы едете домой!'); break;
    case 225: alert('Подходит! Вы едете домой!'); break;
    case 255: alert('Подходит! Вы едете домой!'); break;
    default: alert('Не подходит! Ждите дальше!');
}

// 6

alert('В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сентенцию о необходимости идти на работу.');

let day = prompt('Enter today\'s day!','').toLowerCase();

// if (day === 'saturday' || day === 'sunday') {
//     alert('Выходные!');
// } else {
//     alert('Ты ведь соскучился за боссом? Он ждет тебя ровно в 9:00!');
// } 

switch (day) {
    case 'monday': alert('Ты ведь соскучился за боссом? Он ждет тебя ровно в 9:00!'); break;
    case 'tuesday': alert('Ты ведь соскучился за боссом? Он ждет тебя ровно в 9:00!'); break;
    case 'wednesday': alert('Ты ведь соскучился за боссом? Он ждет тебя ровно в 9:00!'); break;
    case 'thursday': alert('Ты ведь соскучился за боссом? Он ждет тебя ровно в 9:00!'); break;
    case 'friday': alert('Ты ведь соскучился за боссом? Он ждет тебя ровно в 9:00!'); break;
    case 'saturday': alert('Выходные!'); break;
    case 'sunday': alert('Выходные!'); break;
    default: alert('Вы ввели какую-то чертовщину!');
}

// 7

alert('Напишите калькулятор обмена валюты USD-UAH. Из первого prompt читается тип операции (регистр символов не имеет значения), из второго - сумма, подлежащая конвертации. Используя switch, рассчитайте результат конвертации. Результат выведите его в alert.');

let operationType = prompt('Какой тип операции Вы хотите провести?','USD-UAH').toUpperCase();
let uahUsd;
let usdUah;
let result;
let answer;

switch (operationType) {
    case 'USD-UAH': usdUah = +prompt('Какую сумму долларов Вы хотите продать?',''); result = (usdUah * 27.46); answer = `Вы получите ${result} гривень!`; break;
    case 'UAH-USD': uahUsd = +prompt('Какую сумму гривень Вы хотите продать?',''); result = (uahUsd / 27.46); answer = `Вы получите ${result} долларов!`; break;
    default: alert('Введите корректные данные!'); answer = 'Невозможно рассчитать!'; break;
}

alert(answer);

// 8

alert('В переменной month хранится текущий месяц (new Date()). Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).');

let month = new Date().getMonth();

switch (month) {
    case 0:
    case 1:
    case 11: alert('Winter!'); break;
    case 2:
    case 3:
    case 4: alert('Spring!'); break;
    case 5:
    case 6:
    case 7: alert('Summer!'); break;
    case 8:
    case 9:
    case 10: alert('Autumn!'); break;
}

// 9

alert('Переменная lang может принимать два значения: \'ru\' и \'en\'. Переменная day принимает значение от 0 до 6-ти. Если lang имеет значение \'ru\', то в переменную result запишите название дня недели на русском языке в соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). Если же lang имеет значение \'en\' – то аналогично, но день недели будет на английском.');

let lang = prompt('Enter your language (ru/en)','').toLowerCase();
let dayNumber = +prompt('Enter day number!(0-6)', '');

if (lang === 'en') {
    switch (dayNumber) {
        case 0: alert('Sunday!'); break;
        case 1: alert('Monday!'); break;
        case 2: alert('Tuesday!'); break;
        case 3: alert('Wednesday!'); break;
        case 4: alert('Thursday!'); break;
        case 5: alert('Friday!'); break;
        case 6: alert('Saturday!'); break;
        default: alert('Enter valid day number!'); break;
        }
    } else if (lang === 'ru') {
        switch (dayNumber) {
            case 0: alert('Воскресенье!'); break;
            case 1: alert('Понедельник!'); break;
            case 2: alert('Вторник!'); break;
            case 3: alert('Среда!'); break;
            case 4: alert('Четверг!'); break;
            case 5: alert('Пятница!'); break;
            case 6: alert('Суббота!'); break;
            default: alert('Enter valid day number!'); break;
        }
    } else {
        alert('Enter valid language!');
    }

// 10

alert(`Исправить ошибки в коде:
var x = prompt('x', 0);
var error;

switch (x) {
    case 0: error = 'На ноль делить нельзя';
    case 1: error = 'На единицу делить бессмысленно';
    case NaN: error = 'Не математическая операция';
}

if (error) {
    alert(error);
} else {
    alert(100 / x);
}`
);

let x = +prompt('x', 0);
let error;

switch (x) {
    case 0: error = 'На ноль делить нельзя'; break;
    case 1: error = 'На единицу делить бессмысленно'; 
}

if (isNaN(x)) {
    error = 'Не математическая операция';
}

alert(error || 100 / x);