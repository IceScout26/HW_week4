let nilaiRandom = [];
let arrayGenap = [];
let arrayGanjil = [];
let min = Infinity;
let max = -Infinity;
let total = 0;

//fungsi untuk mencari nilai minimum dan maksimum
function minmax(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    return [min, max];
}

//fungsi untuk menjumlahkan seluruh nilai array
function totalArray(array) {
    let total = 0; // Menyimpan total di dalam fungsi ini
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

//fungsi untuk mencari rata-rata nilai array
function averageArray(array) {
    let total = totalArray(array); // Menghitung total di dalam fungsi ini
    let average = total / array.length;
    return average;
}

//fungsi untuk membandingkan nilai genap dan ganjil
function perbandingan(genap, ganjil) {
    if (genap > ganjil) {
        return "genap lebih besar";
    } else if (ganjil > genap) {
        return "ganjil lebih besar";
    } else {
        return "nilai sama besar";
    }
}

for (let i = 0; i < 100; i++) {
    nilaiRandom.push(Math.floor(Math.random() * 50) + 1);
}

for (let i = 0; i < nilaiRandom.length; i++) {
    if (i % 2 === 0) {
        arrayGenap.push(nilaiRandom[i]);
    } else {
        arrayGanjil.push(nilaiRandom[i]);
    }
}

let [minValueGenap, maxValueGenap] = minmax(arrayGenap);
let [minValueGanjil, maxValueGanjil] = minmax(arrayGanjil);

let totalGenap = totalArray(arrayGenap);
let totalGanjil = totalArray(arrayGanjil);

let averageGenap = averageArray(arrayGenap);
let averageGanjil = averageArray(arrayGanjil);

console.log("Semua array random: " + nilaiRandom);

console.log("\nSemua array berindex genap: " + arrayGenap);
console.log("Semua array berindex ganjil: " + arrayGanjil);

console.log(`\nNilai minimum genap: ${minValueGenap}`);
console.log(`Nilai minimum ganjil: ${minValueGanjil}`);
console.log("Perbandingan nilai minimum adalah " + perbandingan(minValueGenap, minValueGanjil));

console.log(`\nNilai maksimum genap: ${maxValueGenap}`);
console.log(`Nilai maksimum ganjil: ${maxValueGanjil}`);
console.log("Perbandingan nilai maksimum adalah  " + perbandingan(maxValueGenap, maxValueGanjil));

console.log("\nTotal array genap: " + totalGenap);
console.log("Total array ganjil: " + totalGanjil);
console.log("Perbandingan total array adalah " + perbandingan(totalGenap, totalGanjil));

console.log("\nRata-rata array genap: " + averageGenap);
console.log("Rata-rata array ganjil: " + averageGanjil);
console.log("Perbandingan rata-rata array adalah " + perbandingan(averageGenap, averageGanjil));