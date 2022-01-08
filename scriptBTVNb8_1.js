// Chương Trình Máy Tính Cơ Bản
do {
const operator = prompt("Nhập Phép Tính (+, -, * hoặc /): ")
let a = parseFloat(prompt("Nhập Số Thứ Nhất"));
let b = parseFloat(prompt("Nhập Số Thứ Hai"));
let result;
if (operator == "+") {
    result = Number(a) + Number(b);
}
else if (operator == "-") {
    result = Number(a) - Number(b);
}
else if (operator == "*") {
    result = Number(a) * Number(b);
}
else if (operator == "/") {
    result = Number(a) / Number(b);
}
alert(`${a} ${operator} ${b} = ${result}`);
}
while (true)