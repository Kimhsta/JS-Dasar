//Number - 64 bit
let nilai = 10; //integer - Nilai Bilangan Bulat
let nilai_float = 10.121; // float - Nilai Bilangan Desimal
let nilai_big_int = 12132232343245568798897n;//bingInt
console.log(typeof nilai_big_int);

//menggunakan data ini gimana?
let angka = 5.232;
let angka_int = parseInt(angka);
console.log(angka_int);

let angka_2 = 10;
let angka_2_float = parseFloat(angka_2);
console.log(angka_2_float);

//Merubah String
let data = "10.89";
console.log(data);
console.log(parseInt(data));
console.log(parseFloat(data));

//Contoh
let pembelian = "1000";
let pajak = 1200;
let bayar =  parseInt(pembelian) + pajak;
console.log(bayar);
