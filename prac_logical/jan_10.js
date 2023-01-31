// print even number

// let num = [10,2,3,5,6,4,8,9,7]
// let even = [];
// for(let i = 0; i<num.length; i++){
//      if(num[i]%2==0){
//         even.push(num[i])
//      }
// }
// console.log(even)

// Print Odd number

// let num = [7,1,2,4,6,3,9,5]
// let odd = []
// for(let i = 0; i<num.length; i++){
//     if(num[i]%2!=0){
//         odd.push(num[i])
//     }
// }
// console.log(odd);


// Print Print Number 1 to n

let lowerNum = 1;
let higherNum = 20;
for(let i = lowerNum; i<=higherNum; i++){
    let flag = 0;
    for(let j = 2; j<i; j++){
        if(i%j==0){
            flag = 1;
            break;
        }
    }
    if(i>1 && flag==0){
        console.log(i);
    }
}


