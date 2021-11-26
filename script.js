'use strict';

// Три способа объявления переменной var, let, const

// var message = 'Привет',
//   name = 'Матвей',
//   age = 16;

// var messageText = `${message}, меня зовут ${name}, мне ${age + 2} лет`

// alert(messageText)

// var numberValue = 2;
// var stringValue = 'Два';
// var stringValueNew = 'Два снова';

// alert(numberValue + 2); // 4
// alert(numberValue - 2); // 0
// alert(numberValue * 2); // 4
// alert(numberValue / 2); // 1
// alert(numberValue / 0); // Infinity
// alert(-numberValue / 0); // Infinity

// alert(stringValue / 2); // NaN

// let nameFieldChecked = true; // да, поле отмечено
// let ageFieldChecked = false; // нет, поле не отмечено

// var variableValue
// alert(variableValue)

let a = 2;
const b = 3;

a = 4;
console.log(a);
console.log(b);

const user = {
  name: "Мария",
  surname: "Иванова",
  age: 18,
  isOld: false
}

console.log(user.age)
console.log(user.name)
console.log(user.isOld)

user.age = user.age + 2
console.log(user.age)

user.name = "Денис";
user.age = 14;
user.isOld = false;

console.log(user)
