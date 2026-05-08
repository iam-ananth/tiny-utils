/* Initial Version */
let n = 5;
let output = "";
for(let i = 0;i < n; i++){
    for(let j = 0;j <= i; j++){
        if( j == 0 || i == 4 || i == j) output += '*';
        else output += ' ';
    }
    output += '\n';
}
console.log(output);

/* Optimized Version */
n = 5;
output = "";

for (let i = 0; i < n; i++) {
    if (i === 0) output += '*\n';
    else if (i === n - 1) output += '*'.repeat(n) + '\n';
    else output += '*'.padEnd(i) + '*\n';
}
console.log(output);
