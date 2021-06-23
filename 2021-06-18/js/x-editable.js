document.querySelector('body').addEventListener('click', clickHandler);

function clickHandler(event) { // функция клика на элемент
	if(!event.target.hasAttribute('data-editable')) return;

	const { target: editableElement } = event;
	// console.log('editableElement', editableElement)

	const type = editableElement.getAttribute('data-editable'); // проверка свойства (типа валидных данных)

	const inputElement = document.createElement('input'); //новый инпут
	inputElement.setAttribute('type', type); // назначаем свойство (валидный тип данных)
	inputElement.value = editableElement.innerText;

	editableElement.after(inputElement); // метод after после элемента добавляет указанный элемент 
	editableElement.remove(); // input будет возникать на месте, на котором находился до этого изменяемый элемент
	// inputElement.focus(); // автоматически добавляет курсор
	inputElement.select(); // автоматически выделяет содержимое

	let isDeleted = false;

	inputElement.addEventListener('keyup', function(event) { // сохранение или отмена редактирования элементов
		switch(event.key) {
			case 'Enter': // показатели при нажатии Enter
				editableElement.innerText = inputElement.value;
				inputElement.after(editableElement);
				isDeleted = true;
				inputElement.remove();
				break;
			case 'Escape': // показатели при нажатии Esc
				inputElement.after(editableElement);
				inputElement.remove(); 
				break;
		}
	});

	inputElement.addEventListener('focusout', () => { // обход ошибки blur
		if(isDeleted) return;

		inputElement.after(editableElement);
		inputElement.remove(); 
	})
};