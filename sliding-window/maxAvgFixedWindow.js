let arr = [ 3, 4, 85, 2, 9, 10, 1, 56, 2, 7, 8 ];
let k = 3;

function findMaxAvgFixedWindow(arr, k){
    let len = arr.length;
    if( len < k) return null
    let currentSum = 0;
    for( let i = 0; i < k; i++ ){
        currentSum += arr[i]
    }
    let maxSum = currentSum;
    
    for(let i=k;i<len;i++){
        currentSum += arr[i] - arr[i-k];
        if( currentSum > maxSum ) maxSum = currentSum;
    }
    return maxSum / k;
}

console.log(findMaxAvgFixedWindow(arr, k));
