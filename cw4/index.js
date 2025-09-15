let nach = parseInt(prompt("начало массива: "));
let n = parseInt(prompt("напиши до какого числа будет массив: "));
let s = parseInt(prompt("шаг в массиве: "));

let l = [];

if (n > nach) {
    for (let i = nach; i < n; i += s) {
        l.push(i);
    }
} else {
    for (let i = nach; i > n; i -= Math.abs(s)) {
        l.push(i);
    }
}

console.log(l.join(" "));




var str = "123456789";
var reversed = "";
for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);




var card = "4815154823541789";
var maskSymbol = "X";
var first = "";
for (var i = 0; i < 6; i++) {
    first += card[i];
}
var last = "";
for (var i = card.length - 4; i < card.length; i++) {
    last += card[i];
}
var middle = "";
for (var i = 0; i < card.length - 10; i++) {
    middle += maskSymbol;
}
var maskedCard = first + middle + last;

console.log(maskedCard);


const maskSymbol2 = String(prompt("выберите свой символ: "));
var middle2 = "";
for (var i = 0; i < card.length - 10; i++) {
    middle2 += maskSymbol2;
}
console.log(first + middle2 + last);
