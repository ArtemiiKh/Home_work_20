// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
// const arr = [`a`, `b`, `c`, `d`];
// const str = `${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`
// alert(str);

//2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
// Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной

// const arr = [2, 5, 3, 9];
// const result = (arr[0] * arr[1] + arr[2] * arr[3]);
// alert(result);

//3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

// const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
// alert(arr[1,1][0])

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.

// const obj = { 
// 	js: [`jQuery`, `Angular`], 
// 	php: `hello`, 
// 	css: `world` 
// }
// alert(obj.js[0]);

//5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.


// const arr = [];
// let str = 'x';
// for (i = 0; i < 5; i++) {
// 	arr.push(str);
// 	str += 'x';
// }

//6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.

// const arr = [];
// for (i = 1; i <= 6; i++) {
//     var str = '';
//         for (j = 0; j < i; j++) {
//         str += i;
//         }
//     arr.push(str);
//     }
// alert(arr);


//7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, 
//которым заполнять массив, а вторым — сколько элементов должно быть в массиве. 
//Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

// function arrayFill(value, element) { 
//     const arr = [];
//     for (i = 0; i < element; i++) {
//         arr.push(value);
//     }
//     return arr;
// }

// console.log(arrayFill('x', 5));

//8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// const arr = [6,5,2,3,4,];
// const quantity = [];
// let sum = 0;

// for(i = 0; i < arr.length; i++){
//     sum += arr[i];
//     quantity.push(arr[i]);
//      if (sum > 10){
//         break;
//      }
// }

// console.log(quantity.length);

//9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// function compare(a, b) {
//     if (a < b) return 1;
//     if (a == b) return 0;
//     if (a > b) return -1;
//   }
//   const arr1 = [3, 4, 1, 2, 7];
//   arr1.sort(compare);

//10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
//Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// const arr = [[1, 2, 3], [4, 5], [6]];
// let result = 0;
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr[i].length; j++) {
//             result += arr[i][j];
//         }
//     }
// console.log(result);

//11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
//Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. 

// const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let result = 0;
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr[i].length; j++) {
//             for ( x = 0; x < arr[i][j].length; x++) {
//                 result += arr[i][j][x];
//             }
//         }
//     }
// console.log(result);