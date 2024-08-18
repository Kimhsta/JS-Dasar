//Operasi String

//1. Char At
let dataString = "abcde";
let dataChar = dataString.charAt(0);
console.log(`character pada index 0 = ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`character pada index 1 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`character pada index 2 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`character pada index 3 = ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`character pada index 4 = ${dataChar}`);
dataChar = dataString.charAt(5);
console.log(`character pada index 5 = ${dataChar}`); //Tidak ada charakter pada string

//2. Menyambung String
let namaDepan = "Kiki";
let namaBelakang = "Mahesa";
let namaLengkap =  namaDepan.concat(' ',namaBelakang, ' si keren');
console.log(namaLengkap);

//3. Mengambil Index
console.log(namaLengkap.indexOf('k'));
console.log(namaLengkap.indexOf('n'));
console.log(namaLengkap.indexOf('a'));
console.log(namaLengkap.indexOf('h'));

//4. Mengambil Substring
let namaLengkap_5_12 = namaLengkap.substring(5,12);
console.log(namaLengkap_5_12);
console.log(namaLengkap.substring(12,5));

//5. Slice-Potong
console.log(namaLengkap.slice(5,12));
console.log(namaLengkap.slice(12,5)); //Menjadi Kosong

//6. Replace
let namaBaru = namaLengkap.replace('Kiki Mahesa','Kiki Mahesta');
console.log(namaBaru);

//7. Tolower
console.log(namaLengkap.toLowerCase());

//8. Uppercase
console.log(namaLengkap.toUpperCase());

//9. Extract Data Number
let dataString2 = '10';
console.log(typeof dataString2);
let dataInteger = parseInt(dataString2);
console.log(dataInteger);
console.log(typeof dataInteger);

let dataString3 = '10.125';
console.log(typeof dataString3);
let dataFloat = parseFloat(dataString3);
console.log(dataFloat);
console.log(typeof dataFloat);