function checkStringInObject(string, obj) {
    if(typeof string != 'string' || typeof obj != 'object') {
        return 'Исходные данные неверны!';
    } else if(Object.keys(obj).includes(string)) {
        return true;
    } else {
        return false;
    }  
}

// Создадим объект для проверки

const student = {
name: 'Igor',
surname: 'Petrov'
}

// Проверим работу функции

console.log(checkStringInObject('name', student)); // true
console.log(checkStringInObject('age', student)); // false
console.log(checkStringInObject(1, student)); // Исходные данные неверны!
console.log(checkStringInObject('surname', undefined)); // Исходные данные неверны!