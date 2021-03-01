let n = prompt('Введите N: ', ''), k = prompt('Введите степень k: '), sum = 0;

for(i = 0;i<=n;i++){
    sum+=Math.pow(i,k);
}
console.log(sum);
