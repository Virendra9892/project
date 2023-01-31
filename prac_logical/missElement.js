function missElement(arr){
    // let missElemt = [];
    let total = ((arr.length+1)*(arr.length+2)/2)
    for(let i = 0; i<arr.length; i++){
        total = total - arr[i]
    }
    console.log(total);
}
missElement([1,3,4,5,6])