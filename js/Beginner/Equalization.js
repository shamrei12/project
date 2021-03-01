let a, b, f, x;
alert('Введите цифры a, b и f:');
a = prompt('a=', '');
b = prompt('b=', '');
f = prompt('f=', '');
x = (a + b - f/a) + f * a * a -(a+b);
console.log(Math.round(x));