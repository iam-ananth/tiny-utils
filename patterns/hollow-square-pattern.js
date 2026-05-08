/* Initial Version */
let n = 5;
let output = "";
for(let i = 0;i < n; i++){
    for(let j = 0;j < n; j++){
        if( i == 0 || i == n - 1  ) { output += '*';continue; }
        if( j == 0 || j == n - 1 ) output += '*';
        else output += ' ';
    }
    output += '\n';
}
console.log(output);

/* Optimized Version */
n = 5;
const solid = '*'.repeat(n);
const hollow = '*' + ' '.repeat(n - 2) + '*';

output = "";
for (let i = 0; i < n; i++) {
    output += (i === 0 || i === n - 1 ? solid : hollow) + '\n';
}
console.log(output);
