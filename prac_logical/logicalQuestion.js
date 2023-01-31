//Print number which is not divisible by 4 between 1 to 100.
// for(let i = 0; i<=100; i++){
//     if(i%4!=0){
//         console.log(i);
//     }
// }

//Print prime number

// let lowerNum = 1;
// let higherNum = 20;

// for(let i = lowerNum; i<=higherNum; i++){
//     flag = 0;
//     for(let j = 2; j<i; j++){
//         if(i%j==0){
//             flag = 1;
//             break;
//         }
//     }
//     if(i>0 && flag==0){
//         console.log(i);
//     }
// }

// Print reverse of number

// function revNum(num){
//     let revNumber = 0;
//     while(num>0){
//         revNumber = (revNumber*10)+(num%10)
//         num = Math.floor(num/10)
//     }
//     console.log(revNumber);
// }

// revNum(12345)

// Find Missing Element In An Array

// function missElement(arr){
//     let total = ((arr.length+1)*(arr.length+2)/2);
//     for(let i = 0; i<arr.length; i++){
//         total = total - arr[i]
//     }
//     console.log("MissElemet = ",total);
// }
// missElement([1,2,5,4])


//Check string is pallindrome or not

// let str = "madm"
// let newStr = "";
// for(let i = str.length-1; i>=0; i--){
//      newStr+=str[i];
// }
// if(str==newStr){
//     console.log("This is a pallindrome string."); 
// }
// else{
//     console.log("This is not pallindrome string.");
// }

// find fibonacci number using recursion

// function fibonacci(num){
//     if(num<2){
//         return num
//     }
//     return fibonacci(num-1) + fibonacci(num-2)
// }


// let number = 10;
// if(number==0){
//     console.log("Please enter positive number.");
// }
// else{
//     for(let i = 0; i<number; i++){
//         console.log(fibonacci(i));
//     }
// }

// find fibonacci number without using recursion


// let n1 = 0;
// let n2 = 1;
// let nextTerm;
// let num = 8
// for(let i = 0; i<num; i++){
//     console.log(n1);
//     nextTerm = n1+n2;
//     n1=n2;
//     n2=nextTerm
// }


// Reverse number using for loop

let num = 1234
let str = "";
for(let i = num; i>0; i=Math.floor(i/10)){
      let rem = i%10
      str+=rem
    //   console.log(rem);
    
   
}
console.log(str);