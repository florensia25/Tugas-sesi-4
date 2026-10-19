
let motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

// Mengelompokkan berdasarkan negara pemenang
let hasil = {};

for (let event of motoGP) {
    let negara = event.winner.country;

    if (!hasil[negara]) {
        hasil[negara] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    hasil[negara].winningCircuits.push({
        name: event.winner.firstName + ' ' + event.winner.lastName,
        winLocation: event.circuit + ', ' + event.location
    });

    hasil[negara].totalWin++;
}

// Menampilkan hasil
console.log(JSON.stringify(hasil, null, 2));


