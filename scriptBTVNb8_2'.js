do {
 const a = prompt("Nhập Một Số Nguyên Dương: ");
    let snt = true;
    switch (snt) {
        case a==1:
            alert("1 Không Là Số Nguyên Tố Và Cũng Không Là Hợp Số.")
            break;
        case a>1:
            for (let i=2; i<a; i++) {
                switch (snt) {
                    case a % i == 0:
                        snt = false
                        break;
                }
            }
                switch (snt) {
                    case true:
                        alert(`${a} Là Số Nguyên Tố.`)
                        break;
                    default:
                        alert(`${a} Không Là Số Nguyên Tố.`)    
                        break;
                }
            break;
        default:
            alert(`${a} Không Là Số Nguyên Tố.`)
            break;
    }
}
while (true)