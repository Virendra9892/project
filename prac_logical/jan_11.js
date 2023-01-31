// Print Prime Number

// let lowerNum = 1;
// let higherNum = 20;
// for(let i = lowerNum; i<=higherNum; i++){
//     let flag = 0;
//     for(let j = 2; j<i; j++){
//         if(i%j==0){
//             flag = 1;
//             break;
//         }
//     }
//     if(i>1 && flag==0){
//         console.log(i);
//     }
// }

// Find Fibonacci Number Using Recursion

// function fibonacci(num){
//     if(num<2){
//         return num
//     }
//     else{
//         return fibonacci(num-1)+fibonacci(num-2)
//     }
// }
// let number = 5;
// if(number==0){
//     console.log("please enter positive number.");
// }
// else{
//     for(let i = 0; i<number; i++){
//         console.log(fibonacci(i));
//     }
// }

// Find fibonacci number without using recursion

// let num1 = 0;
// let num2 = 1;
// let nextTerm ;
// for(let i = 0; i<5; i++){
//     console.log(num1);
//     nextTerm = num1+num2;
//     num1=num2;
//     num2=nextTerm
// }

// Find reverse of number.

// function revNumber(number){
//     let revNum = 0;
//     while(number>0){
//     revNum = (revNum*10)+(number%10);
//     number = Math.floor(number/10);
//     }
//     console.log(revNum)
// }
//  revNumber(12345);

// Find the reverse of string and check given string in pallindrome or not

// let str = "madam";
// let newStr = "";
// for(let i = str.length-1; i>=0; i--){
//     newStr+=str[i]
// }
// // console.log(newStr);
// if(newStr==str){
//     console.log("this is pallindrome string");
// }
// else{
//     console.log("this is not a pallindrome string");
// }

// swap to number without using third variable

// let a = 10;
// let b = 20;
// [a,b]=[b,a]
// console.log("a = ",a);
// console.log("b = ",b);

// swap to number using third variable

// let a = 10;
// let b = 20;
// let c ;

// c=a;
// a=b;
// b=c;

// console.log("a = ",a);
// console.log("b = ",b);

// find the factorial of number

// let number = 5;
// let fact = 1;
// for(let i = 1; i<=number; i++){
//     fact = fact*i
// }
// console.log(fact);