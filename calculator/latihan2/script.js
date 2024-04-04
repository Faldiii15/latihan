let data = ["Alfredo", "David","felix"];
let listMhs = document.getElementById("listMhs");

data.forEach(showMahasiswa);

function showMahasiswa(value, index){
    console.log(value);
    // listMhs.innerHTML = "<li>" + value + 
    listMhs.innerHTML += `<li>${value}</li>`;

}
let npm = document.getElementById("npm");
npm.innerHTML = localStorage.getItem("npm");

let nama = document.getElementById("nama");
nama.innerHTML = localStorage.getItem("nama");

// simpan data ke localstorage
localStorage.setItem("email", "mantok@gmail.com");
// data bentuk array
let hobi = ["baca","game","code"];
localStorage.setItem("hobi", hobi)
localStorage.setItem("myhobi", JSON.stringify(hobi));
// data dalam bentuk object
let mhs = {"npm": 2226240040, nama : "risman" };
// cara akses nya
console.log(mhs.npm);
console.log(mhs.nama);
// kombinasi arrya dan object
let nilai = [
    {"kode_mk" : "si001", nama_mk : "pemograman web"},
    {"kode_mk" : "si002", nama_mk : "PAB"},

];
// tampilkan nama_mk pemograman web
console.log(nilai[0].nama_mk);
console.log(nilai[1].nama_mk);
// simpan nilai kedalam localstorage
localStorage.setItem("nilai", JSON.stringify(nilai));
// tampilkan menggunakan for atau forEach
let lsNilai = JSON.parse(localStorage.getItem("nilai"));
for (const [,data] of lsNilai.entries()) {
    console.log(data.kode_mk);
    console.log(data.nama_mk);
    document.getElementById("listMK").innerHTML += `<li>${data.nama_mk}</li>`;
}
