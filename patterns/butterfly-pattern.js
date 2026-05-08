/* Initial Version made by Myself */
let n = 10;
let output = "";
for(let i = 1; i < n; i++){
    for(let j = 1; j <= i; j++){
        if( i > 5 ){
            output += "*".repeat(n - i);break;
        } else output += '*';
    }
    for(let j = i; j < n; j++){
        if(i == 5) continue;
        if(j > 5){
            output += " ".repeat( Math.abs(n - (j * 2)) );break;
        } else {
            output += " ".repeat(n - (j * 2));break;
        }
    }
    for(let j = 1; j <= i; j++){
        if( i > 5 ){
            output += "*".repeat(n - i);break;
        } else output += '*';
    }
    output += '\n';
}
console.log(output);

/* Optimized Version with AI */
let n1 = 10;
let output1 = '';
for(let i=1; i < n1;i++){
    let starCount = i <= n1/2 ? i : n1 - i;
    let spaceCount = n1 - (2 * starCount);
    let star = "*".repeat(starCount);
    let space = " ".repeat(spaceCount);
    output1 += star + space + star + '\n';
}
console.log(output1);
