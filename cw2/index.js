var student = {
    firstName: "Иван",
    lastName: "Иванов",
    group: "IUCA-2025",
    currentMonth: 6,
    isGraduate: false,
    direction: "Информатика",
    monthsCompleted: 5
};
console.log(student);

var bankAccount = {
    accountNumber: "KG123456789",
    currency: "KGS",
    balance: 15000,
    ownerName: "Иван Иванов",
    isBlocked: false
};
console.log(bankAccount);

var name = prompt("Введите ваше имя");
var surname = prompt("Введите вашу фамилию");
console.log("Здравствуйте, " + name + " " + surname + "!");

var num1 = Number(prompt("Введите первое число"));
var num2 = Number(prompt("Введите второе число"));

if (num1 > num2) {
    console.log(num1 + " больше чем " + num2);
} else if (num2 > num1) {
    console.log(num2 + " больше чем " + num1);
} else {
    console.log("Числа равны");
}

var color = prompt("Введите цвет светофора (красный, желтый, зеленый)").toLowerCase();

if (color === "красный") {
    console.log("Стой!");
} else if (color === "желтый") {
    console.log("Жди!");
} else if (color === "зеленый") {
    console.log("Иди!");
} else {
    console.log("Такого цвета в светофоре нет!");
}

function toRoman(num) {
    var romanMap = [
        {value: 1000, symbol: "M"},
        {value: 900, symbol: "CM"},
        {value: 500, symbol: "D"},
        {value: 400, symbol: "CD"},
        {value: 100, symbol: "C"},
        {value: 90, symbol: "XC"},
        {value: 50, symbol: "L"},
        {value: 40, symbol: "XL"},
        {value: 10, symbol: "X"},
        {value: 9, symbol: "IX"},
        {value: 5, symbol: "V"},
        {value: 4, symbol: "IV"},
        {value: 1, symbol: "I"}
    ];

    var result = "";
    for (var i = 0; i < romanMap.length; i++) {
        while (num >= romanMap[i].value) {
            result += romanMap[i].symbol;
            num -= romanMap[i].value;
        }
    }
    return result;
}

while (true) {
    var input = prompt("Введите число от 1 до 3999 (или напишите exit для выхода)");
    if (input === "exit") {
        console.log("Выход из программы.");
        break;
    }
    var number = Number(input);

    if (Number.isInteger(number) && number >= 1 && number <= 3999) {
        console.log(number + " -> " + toRoman(number));
    } else {
        console.warn("Ошибка: введите целое число от 1 до 3999.");
    }
}
