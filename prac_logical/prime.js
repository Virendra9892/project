// let higherNum = 19;
// let lowerNum = 1;

// for(let i = lowerNum; i<=higherNum; i++){
//     let flag = 0;
//     for(let j = 2; j<i; j++){
//         if(i%j==0){
//             flag =1;
//             break;
//         }
//     }
//     if(i>1 && flag==0){
//         console.log(i);
//     }  
// }


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
        console.log(i)
    }
}
