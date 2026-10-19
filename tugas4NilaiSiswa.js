
let studentsScore = [
    {
        name: 'Andi',
        score: 90
    },
    {
        name: 'Rudi',
        score: 80
    },
    {
        name: 'Dira',
        score: 100
    }
];

// Mencari siswa dengan nilai tertinggi
let siswaTertinggi = studentsScore[0];

for (let siswa of studentsScore) {
    if (siswa.score > siswaTertinggi.score) {
        siswaTertinggi = siswa;
    }
}

// Menampilkan hasil
console.log("Siswa dengan nilai tertinggi:");
console.log("Nama: " + siswaTertinggi.name);
console.log("Nilai: " + siswaTertinggi.score);
