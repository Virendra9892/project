// console.log("hey virendra good morning")

// find second largest element in an array
// let arr = [4,8,12,5,6,2,1,3];
// let secMax = -Infinity;
// let max = -Infinity;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>max){
//         secMax=max;
//         max=arr[i]
//     }
//     else if(arr[i]>secMax && arr[i]<max){
//         secMax=arr[i]
//     }
// }
// console.log(secMax)

// let arr = [
//     {id:1,name:"Virendra",salary:13554},
//     {id:1,name:"Shubham",salary:12553},
//     {id:1,name:"Arpit",salary:11554},
//     {id:1,name:"Kinjal",salary:10554},
//     {id:1,name:"Virendra",salary:14554}
// ]

// let str = "";
// for(let i = 1; i<=5; i++){
//     for(let j = 0; j<i; j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)


// let str = "";
// for(let i = 0; i<5; i++){
//     for(let j = 0; j<5-i; j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)
// let newArr = []
// let arr = ["vire","shub","arpi","kinj","shub","arpi",2,5,7,1,5,9,1]
// for(let i = 1; i<arr.length; i++){
//     for(let j = 0; j<i; j++){
//         if(arr[i]==arr[j]){
//            newArr.push(arr[i])
//         }
//     }
// }
// console.log(newArr)

// let arr = [11,2,1,8,3,4]
// let max = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }

// let min = arr[0]
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<min){
//         min=arr[i]
//     }
// }
// console.log(min);
// let newArr = []
// let n = 100;
// for(let i = 2; i<=n; i++){
//     let isPrime = true;
//    for(let j = 2; j<i; j++){
//     if(i%j==0){
//         isPrime=false
//         break;
//     }
//    }
//    if(i>1 && isPrime==true){
//     //  console.log(i)
//     newArr.push(i)
//    }
// }
// console.log(newArr);

// let fact = 1;
// for(let i= 1; i<=5; i++){
//     fact*=i
// }
// console.log(fact)

// let str = "madam madam";
// let newStr = ""
// for(let i = str.length-1; i>=0; i--){
//     newStr+=str[i]
// }
// // console.log(newStr)
// if(str==newStr){
//     console.log("This is pallindrome string");
// }
// else{
//     console.log("this is not pallindrome string");
// }



// function revNum(num){
//     let revNumber= 0;
//         while(num>0){   
//         revNumber = (revNumber*10)+(num%10);
//         num = Math.floor(num/10)
//     }
//     return revNumber
// }

// let out = revNum(54321);
// console.log(out);


