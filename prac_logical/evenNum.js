let num = [10,17,1,19,3,2,4,6,11,18,14]
let even = []
let odd = []
let evenCount = 0;
let oddCount = 0;
for(let i = 0; i<num.length; i++){
    if(num[i]%2==0){
        even.push(num[i]) ;
        evenCount++;
    }
    else if(num[i]%2!=0){
        odd.push(num[i])
        oddCount++;
    }
}

console.log("even = ",even);
console.log("evenCount = ",evenCount);
console.log("odd = ",odd);
console.log("oddCount = ",oddCount);