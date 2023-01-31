// function reverseNum(num){
//     let revNumber = 0;
//      while(num>0){
//         revNumber = (revNumber*10)+(num%10)
//         num = Math.floor(num/10)
//      }
//      return revNumber
// }

// let result = reverseNum(12345);
// console.log(result)

function reverseNum(num){
    let revNum = 0;
    while(num>0){
        revNum = (revNum*10)+(num%10);
        num = Math.floor(num/10)
    }
    console.log(revNum);
}

reverseNum(12345)















































