let str = `To use the "sliding window" technique correctly, you should maintain the sum during the loop and only divide by k at the very end (or calculate the average from the sum each time without overwriting the sum itself).aeiou`;
let k = 7;
/* Initial Version */
function findMaxVowelsInaSubString(str, k){
    let len = str.length;
    if( len < k) return null
    let vowelsCount = 0;
    let options = [ 'a', 'e', 'i', 'o', 'u' ];
    let startPos = 0;
    let endPos = k-1;
    for( let i = 0; i < k; i++ ){
        options.some((vow) => {
            if( str[i].toLowerCase().includes(vow) === true ) vowelsCount++;
        })
    }
    let maxCount = vowelsCount;
    for(let i=k;i<len;i++){
        options.some((vow) => {
            if( str[i].toLowerCase().includes(vow) === true ) vowelsCount++;
            if( str[i-k].toLowerCase().includes(vow) === true ) vowelsCount--;
        })
        if( vowelsCount > maxCount ) { 
            maxCount = vowelsCount;
            startPos = i-k+1;
            endPos = i;
        }
    }
    return { maxCount: maxCount , startPos: startPos, endPos: endPos };
}
/* Optimized Version */
function findMaxVowelsInaSubStringOptimized(str, k){
    let len = str.length;
    if( len < k) return null
    const vowels = new Set([ 'a', 'e', 'i', 'o', 'u' ])
    let currentCount = 0;
    for( let i = 0; i < k; i++ ){
        if( vowels.has(str[i].toLowerCase()) ) currentCount++;
    }
    let maxCount = currentCount;
    let bestStart = 0;
    for(let i=k;i<len;i++){
        if( vowels.has(str[i].toLowerCase()) ) currentCount++;
        if( vowels.has(str[i - k].toLowerCase()) ) currentCount--;
        if( currentCount > maxCount ) { 
            maxCount = currentCount;
            bestStart = i - k + 1;
        }
    }
    return { maxCount: maxCount , startPos: bestStart, endPos: bestStart + k - 1 };
}
console.log(findMaxVowelsInaSubString(str, k));
console.log(findMaxVowelsInaSubStringOptimized(str, k));
