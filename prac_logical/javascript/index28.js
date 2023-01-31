// console.log("good morning virendra");

// let arr = [2,3,5,7,9,1,4,8]

// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<=i; j++){
//         if(arr[i]>arr[j]){
//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         }
//     }
// }
// console.log(arr);



// let num = 100;

// for(let i = 2; i<=100; i++){
//     let isPrime = true;
//     for(let j = 2; j<i; j++){
//         if(i%j==0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(i>1 && isPrime==true){
//         console.log(i);
//     }
// }

let arr = [1,2,3,4,5,6,7,8,9];
// for(let i = 0,j=arr.length-1; i<arr.length/2; i++,j--){
//       [arr[i],arr[j]]=[arr[j],arr[i]]
// }
// console.log(arr);

let i = 0;
// let j = arr.length-1;
// while(i<arr.length/2){
//     [arr[i],arr[j]]=[arr[j],arr[i]]
//     i++;
//     j--;
// }
// console.log(arr);


do{
    console.log(arr[i]);
    i++;
}while(i<arr.length)