do {
    const operator = prompt("Nhập Phép Tính (+, -, * hoặc /)");
    let a = prompt("Nhập Số Thứ Nhất:");
    let b = prompt("Nhập Số Thứ Hai:");
    let result;
    switch (operator) {
        case "+":
            result = Number(a) + Number(b)
            break;
        case "-": 
            result = Number(a) - Number(b)
            break;
        case "*":
            result = Number(a) * Number(b)
            break;
        case "/":
            result = Number(a) / Number(b)
            break;         
    }
    alert(`${a} ${operator} ${b} = ${result}`);
}
while (true)