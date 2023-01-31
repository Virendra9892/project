// let concatArr = []
// let arr = [
//     [
//         [
//             ["node", "javascript", "sequelize", "express", "sql"]
//         ]
//     ],
//     [
//         [
//             ["mysql", "postgress", "swagger", "mysql"]
//         ]
//     ]
// ]


// console.log(arr[0][0][0][4])
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[i][j].length; k++) {
//            concatArr = concatArr.concat(arr[i][j][k])
//         }
//     }
// }
// console.log(concatArr)

let str = "";

for(let i = 1; i<=5; i++){
    for(let j = 0; j<i; j++){
        str+="*";
    }
    str+="\n"
}
console.log(str)