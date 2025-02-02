"use strict";
// Шаг 1-2: Создание переменных и вывод в консоль
console.log("Hello TypeScript");
// Примитивные типы
let str = "Hello World";
let num = 42;
let bool = true;
let nullValue = null;
let undefinedValue = undefined;
let arr = [1, 2, 3];
console.log("Исходные значения:");
console.log({ str, num, bool, nullValue, undefinedValue, arr });
// Шаг 3: Изменение значений и повторный вывод
str = "Updated string";
num = 100;
bool = false;
arr.push(4);
console.log("\nИзмененные значения:");
console.log({ str, num, bool, nullValue, undefinedValue, arr });
let numbers = [5, 2, 8, 1];
console.log("\nРабота с массивом:");
console.log("Исходный массив:", numbers);
// Добавление элемента
numbers.push(4);
console.log("После push(4):", numbers);
// Удаление последнего элемента
numbers.pop();
console.log("После pop():", numbers);
// Получение длины
console.log("Длина массива:", numbers.length);
// Сортировка
numbers.sort((a, b) => a - b);
console.log("После сортировки:", numbers);
// Дополнительные типы из примера пользователя (для демонстрации)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Red;
let tuple = ["Alex", 33, true];
console.log("\nДополнительные элементы:");
console.log({ c, tuple });
