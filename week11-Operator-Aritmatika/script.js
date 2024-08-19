//Operator Aritmatika

//Ekspresi (Expression) dan Statment

// * / + -
// % <- Modulo
// ++ <- Increment
// -- <- Decrement
// ** <- Pangkat atau Power

let x = 10
console.log(x + 1);
console.log(x - 1);
console.log(x * 2);
console.log(x / 4);

//Aritmatika khusus diJAVA sCRIPT
console.log(x % 4); //Sisa Pembagian
console.log(x ** 2);

//Program Biasa
x = x + 1;
console.log(x);
x = x + 1;
console.log(x);

//Menyingkat Penambahan + 1
x++;
x++;
console.log(x);

x = x - 1;
console.log(x);

//Menyingkat Pengurangan - 1
x--;
console.log(x);

//Studi Kausus
let y = 1 + "1";
console.log(y);//akan terlihat string maka harus diparsInt
y = 1 + parseInt("1");
console.log(y);

