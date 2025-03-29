// console.log("Hello TypeScript");

// let str: string = "Hello World";
// let num: number = 42;
// let bool: boolean = true;
// let nullValue: null = null;
// let undefinedValue: undefined = undefined;
// let arr: number[] = [1, 2, 3];

// console.log("Исходные значения:");
// console.log({ str, num, bool, nullValue, undefinedValue, arr });

// str = "Updated string";
// num = 100;
// bool = false;
// arr.push(4);

// console.log("\nИзмененные значения:");
// console.log({ str, num, bool, nullValue, undefinedValue, arr });

// let numbers: number[] = [5, 2, 8, 1];

// console.log("\nРабота с массивом:");
// console.log("Исходный массив:", numbers);

// numbers.push(4);
// console.log("После push(4):", numbers);


// numbers.pop();
// console.log("После pop():", numbers);


// console.log("Длина массива:", numbers.length);


// numbers.sort((a, b) => a - b);
// console.log("После сортировки:", numbers);


// enum Color { Red, Green, Blue }
// let c: Color = Color.Red;



// let initData: number[] = [];
// let results: number[] = [];

// for(let i:number = 0; i<= 100; i++){
//         initData.push(i);

// }
// console.log(initData);

// for(let i:number = 0; i<= initData.length; i++){
//     let doub:number = initData[i] + 1; 
//     if(doub % 2 ){
//         results.push(doub)
//     }
// }
// console.log(results)

// let square: number[] = [];
// for(let res of results){
    
    
//     square.push(Math.sqrt(res));
// }
// const numberFilter = square.filter( num => num >7)
// console.log(numberFilter)



function findElement<T> (arr: T[], target: T){
          return  arr.indexOf(target) 
}

const numbers = [1, 2, 3, 4, 5];
const target = 3;
const index = findElement(numbers, target);
console.log(`Индекс элемента ${target} в массиве: ${index}`);



function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const person1 = { name: 'Alice', age: 30 };
const person2 = { age: 25, city: 'New York' };
const mergedPerson = mergeObjects(person1, person2);
console.log(mergedPerson); 