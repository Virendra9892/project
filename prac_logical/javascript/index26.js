// console.log("Virendra Pathak Is Good Boy")

// let str = "";
// for(let i = 1; i<=15; i++){
//     for(let j= 0; j<i; j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)


// let str = "rfirjjongjbggijtrboijtr";
// let str1 = "bvfruvbfivn";
// console.log("newstr = ",str+"*"+str1)

// let str =  "*";

// for(let i = 0; i<5; i++){
//     for(let j = 0; j<5-i; j++){
//         str+="*"
//     }
//     str+="\n"
// }

// console.log(str)

// function even(num){
   
// }

// let num = 6;
// if(num%2 == 0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

// let num = [2,1,3,4,6,7,8,5];
// let evenNum = []
// let oddNum = []
// for(let i = 0; i<num.length; i++){
//     if(num[i]%2==0){
//         evenNum.push(num[i])
//     }
//     else{
//         oddNum.push(num[i])
//     }
// }
// console.log("even = ",evenNum)
// console.log("odd = ",oddNum)

// let n = 100;
// let prime = []
// for(let i = 2; i<=n; i++){
//     let isPrime = true
//     for(let j = 2; j<i; j++){
//         if(i%j===0){
//             isPrime = false
//             break;
//         }
//     }
//     if(isPrime==true){
//         // console.log(i)
//         prime.push(i)
//     }
// }
// console.log(prime)

// let n = 100;
// let newArr =[];

// for(let i = 0; i<=n; i++){
//     if(i%2==0){
//         newArr.push(i)
//     }
// }
// console.log(newArr)

// let str = "madam";
// // console.log(str.length)
// // console.log(str[1])
// console.log(str.charAt(1))
// let newStr = "";
// for(let i = str.length-1; i>=0; i--){
//     //   newStr+=str.charAt(i)
//     newStr+=str[i]
// }
// // console.log(newStr)
// if(str==newStr){
//     console.log("string is pallindrome")
// }
// else{
//     console.log("string is not pallindrome");
// }


// let comAr = []
// let arr = ["virendra","shubham","arpit","kinjal","virendra","shwetank","arpit"]
// for(let i = 1; i<arr.length; i++){
//     for(let j = 0; j<i; j++){
//         if(arr[i]==arr[j]){
//             comAr.push(arr[i])
//         }
//     }
// }
// console.log(comAr)


// let arr = [2,3,4,5,61,7,9,11]
// let max = -Infinity;
// let secMax = -Infinity;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>max){
//         secMax = max;
//         max = arr[i]
//     }
//     else if(arr[i]>secMax && arr[i]<max){
//         secMax = arr[i]
//     }
// }
// console.log(secMax)

// let max = -Infinity;
// let secMax = -Infinity;
// let arr = [5,1,3,7,6,2,18,9]
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>max){
//         secMax = max;
//         max = arr[i]
//     }
//     else if(arr[i]>secMax && arr[i]<max){
//         secMax = arr[i]
//     }
// }
// console.log(secMax)

// let arr = [4,2,1,3,5,6,7,9,10]
// let newArr = []

// for(let i = 0; i<arr.length; i++){
//     let isPrime = true;
//     for(let j = 1; j<i; j++){
//         if(arr[i]%arr[j]==0){
//             isPrime=false;
//             break;
//         }
//     }
//     if(i>1 && isPrime==true){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)
// let arr= [10,2,99,3,4,5,6,7,11] 
    
// let newArr = [];

// for(let i= 0;i<arr.length; i++){
//     let flag = 0
//     for(let j = 1;j<i; j++){
//         if(arr[i]%arr[j]==0){
//              flag = 1;
//              break;
//         }
       
//     }
//     if(i>1 && flag==0){
//     newArr.push(arr[i]) 
//     }
// }
// console.log(newArr)\


// let lowerNum = 1;
// let higherNum = 10;

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


// let newArr = []
// let n = 100;
// for(let i = 2; i<=n; i++){
//     let isPrime = true;
//     for(let j = 2; j<i; j++){
//         if(i%j==0){
//             isPrime=false;
//             break;
//         }
//     }
//     if(isPrime==true){
//         newArr.push(i)
//     }
// }
// console.log(newArr);

// let arr = [21,3,4,15,87.5,87.9,7,10,12,11]
// let newArr = []
// let max = 0;
// for(let i = 0; i<arr.length; i++){
//      if(arr[i]>max){
//         max=arr[i]
//      }
// }
// console.log(max)

// let arr = [21,3,4,15,87.5,87.9,7,2,10,12,11]
// let min = arr[0];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<min){
//         min=arr[i]
//     }
// }
// console.log(min)

// let a = 10;
// let b = 12;
// let temp ;
// [a,b] = [b,a]
// console.log("a = ",a);
// console.log("b = ",b);

// temp = a;
// a = b;
// b = temp;

// console.log("a = ",a);
// console.log("b = ",b);

// function revNum(num){
//     let revNumber = 0;
//     while(num>0){    
//     revNumber = (revNumber*10)+(num%10);
//     num = Math.floor(num/10);
//     }
//     return revNumber
// }

// let out = revNum(12345)
// console.log(out)








