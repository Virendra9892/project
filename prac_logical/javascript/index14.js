// console.log("hi virendra good morning.");


// function disp(cb){
//     console.log("this is normal function.");
//     cb();
// }

// function callback(){
//     console.log("this is callback function.");
// }

// disp(callback);
// setTimeout(disp(callback),2000);


// let arr = [1,2,3,4,5];

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// let arrobj = [
//     {id:1,name:"vire",sal:[{sal1:12233,sal2:11890}]},
//     {id:2,name:"vire1",sal:[{sal1:12233,sal2:11890}]},
//     {id:3,name:"vire2"},
//     {id:4,name:"vire3"}
// ]

// let sal = arrobj.map(x=>x.sal)
// let sal1 = sal.map(x=>x.sal1)
// let sal = arrobj.filter(x=>x.sal).map(x=>x.sal).filter(x=>x.sal2=11890).map(x=>x.sal2)
// console.log(sal);

// let obj = {
//     id: 1,
//     names: {
//         fruit: 1,
//         name: "apple",
//         type: { cat: "fruit", weather: ["winter"],area:[{name1:"kalva",name2:{}}] }
//     }
// }


// let weather = obj.names.type.area.map(x=>x.name2)
// console.log(weather);

// console.log(typeof(weather));


// let arr = [
//     [ 'blue', 'green' ],
//     [ 'green', 'black', 'orange', 'blue' ],
//     [ 'green', 'red' ]
//   ]

// let newArray = [];

// for(let i = 0; i<arr.length; i++){
//     for(let j = 0;j<arr[i].length; j++){
//         newArray.push(arr[i][j]);
//     }
// }
// console.log(newArray);



let arr1 = [
    {
        mood: "happy",
        fish: "robin",
        colours: ["blue", "green"]
    },
    {
        mood: "tired",
        fish: "panther",
        colours: ["green", "black", "orange", "blue"]
    },
    {
        mood: "sad",
        fish: "goldfish",
        colours: ["green", "red"]
    }
]

let colorCount = 0

for(let i = 0; i<arr1.length; i++){
    // if(arr1[i].colours){
    //     colorCount++;                                          ...print 3
    // }                                                             
    
       

    // console.log(arr1[i].colours.length);                       ...print 2 4 2

    // colorCount+=arr1[i].colours.length                         ...print number of colours that are present in colours array 8
}
// console.log(colorCount);                                       ...Print count of color 3





// let arr1 = [
//         [ 'blue', 'green' ],
//         [ 'green', 'black', 'orange', 'blue' ],
//         [ 'green', 'red' ]
//       ]


// let colorCount = 0

// for(let i = 0; i<arr1.length; i++){
//     for(let j = 0; j<arr1[i].length; j++){
//         if(arr1[i][j]){
//             colorCount++;
//         }
//     }
// }
// console.log(colorCount);