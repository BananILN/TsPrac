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



let initData: number[] = [];
let results: number[] = [];

for(let i:number = 0; i<= 100; i++){
        initData.push(i);

}
console.log(initData);

for(let i:number = 0; i<= initData.length; i++){
    let doub:number = initData[i] + 1; 
    if(doub % 2 ){
        results.push(doub)
    }
}
console.log(results)

let square: number[] = [];
for(let res of results){
    
    
    square.push(Math.sqrt(res));
}
const numberFilter = square.filter( num => num >7)
console.log(numberFilter)
