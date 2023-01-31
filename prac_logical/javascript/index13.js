// scope in javascript 


// let a = 10;
// let a = 20;
// var a = 112;
// function all(){
//     // var a = 12;
//     var a = 12;
    
// }
// // var a = 20

// {
//     var a = 10;
// }

// console.log(a);

// /** pass by value and pass by reference in javascript **/

// var a = 10;

// function disp(a) {
//     a = 12;
//     console.log(a);
// }

// console.log(a);

// disp();

// console.log(a);

// let obj = {
// //    a: [1,2,3,4]
// a:11,
// // b:12,
// }

// function disp(obj) {
//   obj.a = 22;
//     console.log(obj.a);
// }
// let newObj = {...obj}
// // console.log(newObj.a)
// console.log(obj.a);
// disp(obj);
// // console.log(newObj.a)
// console.log(obj.a);

// let a = [1,2,3,4,5]

// function disp(a) {
//     a[1]=  23;
//     console.log(a[1]);
// }
// let b = [...a]
// console.log(b[1]);

// disp(a)
// console.log(b[1]);

// Map

// let arr = [
//     {name:"virendra",id:11,age:20},
//     {name:"vire1",id:12,age:20},
//     {name:"arpit1",id:12,age:20},
//     {name:"shubh1",id:12,age:20},
//     {name:"vndra2",id:13,age:20},
//     {name:"virdra3",id:14,age:20}
// ]

// let result = arr.map(x=>x.name)
// console.log(result);

// filter

// let result = arr.filter(x=>x.id==12)
// console.log(result);

// reduce

// let result = arr.reduce((acc,curr)=>{
//      return acc + curr.age
// },0)

// console.log(result);


// async-await, promises and callback


// console.log(1);

// function disp(){
//     console.log(2);
// }
// setTimeout(disp,2000)
// console.log(3);

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 1000);

// console.log(3);

// async function example() {
//     console.log(1);
//     await new Promise(resolve => setTimeout(resolve(2), 1000));
//     // console.log(2);
//     console.log(3);
// }
// example();