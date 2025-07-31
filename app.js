// 1-masala: countdown
// function countdown(num) {
//     while (num >= 0) {
//         console.log(num);

//     num--;
//     }
// }
// countdown(5);

// 2. Masala: printEven

// function printEven(arr) {
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//         }
//         i++;
//     }
// }
// 3. Masala: countA

// function countA(str) {
//     let i = 0, count = 0;
//     while (i < str.length) {
//         if (str[i] === 'a') {
//             count++;
//         }
//         i++;
//     }
//     return count;
// }
// 4. Masala: sumArray

// function sumArray(arr) {
//     let i = 0, sum = 0;
//     while (i < arr.length) {
//         sum += arr[i];
//         i++;
//     }
//     return sum;
// }
// 5. Masala: reverseText

// function reverseText(str) {
//     let i = str.length - 1;
//     let reversed = "";
//     while (i >= 0) {
//         reversed += str[i];
//         i--;
//     }
//     return reversed;
// }
// 6. Masala: printNegative

// function printNegative(arr) {
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[i] < 0) {
//             console.log(arr[i]);
//         }
//         i++;
//     }
// }
// 7. Masala: countChars

// function countChars(str) {
//     let i = 0, count = 0;
//     while (i < str.length) {
//         count++;
//         i++;
//     }
//     return count;
// }
// 8. Masala: printOdds

// function printOdds(n) {
//     let i = 1; // Toq sonlar 1 dan boshlanadi
//     while (i <= n) {
//         console.log(i);
//         i += 2; // Har safar 2 ga oshiramiz
//     }
// }
// 9. Masala: findMax

// function findMax(arr) {
//     let i = 1, max = arr[0];
//     while (i < arr.length) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         i++;
//     }
//     return max;
// }
// 10. Masala: countO

// function countO(str) {
//     let i = 0, count = 0;
//     while (i < str.length) {
//         if (str[i] === 'o') {
//             count++;
//         }
//         i++;
//     }
//     return count;
// }
// 11. Masala: countZeros

// function countZeros(arr) {
//     let i = 0, count = 0;
//     while (i < arr.length) {
//         if (arr[i] === 0) {
//             count++;
//         }
//         i++;
//     }
//     return count;
// }
// 12. Masala: sumPositive

// function sumPositive(arr) {
//     let i = 0, sum = 0;
//     while (i < arr.length) {
//         if (arr[i] > 0) {
//             sum += arr[i];
//         }
//         i++;
//     }
//     return sum;
// }
// 13. Masala: printLowercase

// function printLowercase(str) {
//     let i = 0;
//     while (i < str.length) {
//         if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
//             console.log(str[i]);
//         }
//         i++;
//     }
// }
// 14. Masala: printOddIndexes

// function printOddIndexes(arr) {
//     let i = 1; // 1 dan boshlaymiz
//     while (i < arr.length) {
//         console.log(arr[i]);
//         i += 2; // Har safar 2 ga oshiramiz
//     }
// }
// 15. Masala: replaceE

// function replaceE(str) {
//     let i = 0, result = "";
//     while (i < str.length) {
//         if (str[i] === 'e') {
//             result += '3';
//         } else {
//             result += str[i];
//         }
//         i++;
//     }
//     return result;
// }