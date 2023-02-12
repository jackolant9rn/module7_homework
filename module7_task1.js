function printkOwnProperties(obj) {
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
        console.log(key + ' = ' + obj[key]);
        }
    }    
}

// Создаем объект skillFactory

const skillFactory = {
  course: 'Frontend'
}

// Создаем объект student по прототипу skillFactory

const student = Object.create(skillFactory);

student.name = 'Ivan';
student.surname = 'Ivanoff';

// Проверяем получившийся объект

console.log(student);

// Используем функцию printOwnProperties для вывода собственных свойств объекта student и их значениий

printkOwnProperties(student);