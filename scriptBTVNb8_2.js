//Chương Trình Tìm Số Nguyên Tố
do {
    const a = parseInt(prompt("Nhập Một Số Nguyên Dương: "));
    let snt = true;
    if (a == 1) {
        alert("1 Không Phải Là Số Nguyên Tố Và Cũng Không Phải Là Hợp Số");
    } 
     else if (a > 1) {
         for (let i=2; i<a; i++) {
             if (a % i == 0) {
                 snt = false;
                }
            }
         if (snt) {
             alert(`${a} Là Số Nguyên Tố`);
            }
         else {
             alert(`${a} Không Phải Là Số Nguyên Tố`);
            }
        }
    else {
        alert(`${a} Không Phải Là Số Nguyên Tố`);
    }
}
while (true)