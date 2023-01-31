

let arr = [1,3,4,5,7,2,6];

for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<=i; j++){
        if(arr[i]<arr[j]){
        temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp
        }
    }
    
}

console.log(arr);