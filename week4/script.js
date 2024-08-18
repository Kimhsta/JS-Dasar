let dataString = "data string";
console.log(dataString);

//1. Escaping String(\; \" \\ \n \r \t \b \f)
let data1 = 'Ucup berkata "apa kabar dunia?"';
console.log(data1)
let data2 = "Ucok berkata \"Kurang baik cik!\"";
console.log(data2);
let data3 = "Ucup berjala-jalan ditepi pantai,\nKeren";
console.log(data3);

//2. Literal String(template literal string)
let namaDepan =  "Otong";
let namaBelakang = "Surotong";
let umur = 20;
let namaLengkap = umur + "" + namaDepan + "" +  namaBelakang; //menjadi masalah
console.log(namaLengkap);

// lebih elegan supaya tidak bikin error
let biodata= `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);