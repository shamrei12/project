let a = prompt('Введите 5-и значное число', ''), b,c,d,e,f;
b= Math.trunc(a/10000);
c= Math.trunc(a/1000%10);
d= Math.trunc(a/100%10);
e = Math.trunc(a/10%10);
f = Math.trunc(a%10);
console.log(b + " " + c + " " + d +' ' + e + ' ' + f);
