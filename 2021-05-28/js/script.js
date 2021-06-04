// Заливаю только то, что готово на 100%. Остальное допилю позже.
// Пятое задание готово на уровне DOM для объекта PERSON.


// 2 ГОТОВО
// Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата (new Date) минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

let dates = {};

let today = new Date();
dates.firstDate = new Date(new Date().setDate(new Date().getDate()-2));
dates.secondDate = new Date(new Date().setDate(new Date().getDate()-365));

let dateInput = prompt('Введите дату в указанном формате!','2020-06-05');
let userDate = new Date(dateInput);

if (userDate > dates.secondDate && userDate < dates.firstDate) {
    alert('Ахтунг! Дата входит в промежуток!')
} else {
    alert('Ахтунг! Дата не входит в промежуток!')
}

// 3 ГОТОВО
// Создайте объект person, описывающий персону, с произвольным количеством произвольных полей. Запустите цикл, в котором через prompt запрашивается имя свойства. С помощью оператора in или typeof проверьте наличие в объекте этого свойства, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt. Выйти из цикла и закончить проверки можно с помощью клавиши Cancel окна prompt.

let person = {
    firstname: 'Borat',
    lastname: 'Sagdiyev',
    country: 'Kazakhstan',
    moustache: true,
    friend: 'Azamat',

}
// 4 ГОТОВО
// Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update. В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны (которая уже имеет телефон). Какое именно свойство удалять или добавлять - также читается из prompt. Какое значение будет у добавленного свойства - тоже берется из prompt. При нажатии на Отмена при появлении prompt редактирование person заканчивается. И обновленные данные распечатываются в консоли.

for (;;) {
    let actionInput = prompt('Update or delete?','');

    if (actionInput === null) {
        break;
    } else {
        let action = actionInput.toLowerCase();
        if (action === 'update') {
            let updatedData = prompt('Enter data you want to update!','');
            let updatedValue = prompt('Enter value of updated data!','');
    
            person[`${updatedData}`] = `${updatedValue}`;
            console.log(`${updatedData}` + ': ' + `${updatedValue}`);
        } else if (action === 'delete') {
            let deletedData = prompt('Enter data you want to delete!', '');
    
            delete person[`${deletedData}`];
            console.log('deleted data: ' + `${deletedData}`);
        }
    }
}

// 5 ГОТОВО
// Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства (работа с DOM - с использованием методов Native JS).

let element = document.createElement('div'); // create new <div>
document.querySelector('body').appendChild(element);

let listNode = document.createElement('dl');
element.appendChild(listNode);


// // 6 НЕ ГОТОВО
// // Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...). Добавьте этот гаджет персоне, созданной ранее. После этого создайте независимую копию объекта person, не используя встроенный метод Object.assign и JSON.parse, а то есть перебором свойств.

let phone = {
    brandName: prompt('Enter phone\'s brand', 'Oppo'),
    model: prompt('Enter phone\' model', 'Reno 3'),
    platform: prompt('Enter type of platform', 'Android'),
    displayType: prompt('Enter display\'s type', 'SuperAMOLED'),
    ram: prompt('Enter size of RAM', '6 Gb'),
    hdd: prompt('Enter size of hdd', '128 Gb'),
    color: prompt('Enter color of phone', 'Blue'),
    _5G: confirm('Does the phone support 5G technology?')
};

for (let key in person) {
    
    let titleNode = document.createElement('dt');
    listNode.appendChild(titleNode);
    titleNode.innerText = key;

    let definitionNode = document.createElement('dd');
    listNode.appendChild(definitionNode);
    definitionNode.innerText = person[key] || phone.toString() || '-';

    if (key === 'phone') {
        debugger;
        console.log('aaaaaaaa')
        let listNode1 = document.createElement('dl');
        listNode1.appendChild(definitionNode);
        for (let key in person.phone) {
            let phoneNode = document.createElement('dt');
            listNode1.appendChild(phoneNode);
            phoneNode.innerText = key; 

            let techNode = document.createElement('dd');
            listNode1.appendChild(techNode);
            techNode.innerText = phone[key] || '-';      
        }
    }

}