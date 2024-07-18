"use strict";

let fnum = prompt('какое первое число?');
let op = prompt('какую операцию воспроизвести?');
let snum = prompt('какое второе число');

let result;

if(op == "+"){
   result = (parseInt(fnum) + parseInt(snum));
}if(op == "-"){
    result = (parseInt(fnum) - parseInt(snum));
}
if(op == "*"){
    result = (parseInt(fnum) * parseInt(snum));
}if(op == "/"){
    result = (parseInt(fnum) / parseInt(snum));
}

document.write(fnum + op + snum + "=" + result);