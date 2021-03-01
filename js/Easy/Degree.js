let a = +prompt('Enter number:', ''), n = +prompt('Enter power:', ''), b = 1;

for (let i = 0; i < n;i++){
    b = b*a;
}
console.log('number '+ b);