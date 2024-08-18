//1. variabel dengan let
let nama = "Kiki Mahesta";

//tampilkan data
console.log(nama);

//kita ubah nilai variabel nama
nama = "Mahesa";
console.log(nama);

//2. variabel dengan var
var namaDepan = "Kiki";
console.log(namaDepan);
namaDepan = "Mahes";
console.log(namaDepan);

//kelakuan dari let
let namaBelakang = "Surucup";
{
    let namaBelakang = "Surotong";
    console.log(namaBelakang);
}
console.log(namaBelakang);

//kelakuan dari var
var namaTengah = "Keren";
{
    var namaTengah = "Ganteng";
    console.log(namaTengah);
}
console.log(namaTengah);

//kasus khusus tanpa keyword akan jadi var
gorengan = "Bala-bala";
{
    gorengan = "Bakwan";
}
console.log(gorengan);

//3. Const
const Tgl = "11 Februari 2004";
console.log(Tgl)
// Tgl = "08  Oktober 2004"; gak boleh dilakukan karena sudah janji konstan(nilai tetap)
