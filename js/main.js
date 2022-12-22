var travel = [
    ["Vusal","Hafiz","Rza"],
    ["Tofiq","Aysel","Fatime",
        [
        'Tahire ve Aynur', true, "2+2", [
            "Maraqlı"
        ],
        ],
        ["IATC","ADNSU"]
    ],
    ["Azərbaycan","Italiya","Argentina","Türkiyə"]
]


// Menim adim Tofiqdir. Men ADNSU telebesiyem ve IATCde tehsil aliram.

console.log("Menim adim "+travel[1][0]+"dir."+" Men "+travel[1][4][1]+" telebesiyem ve "+travel[1][4][0]+"de tehsil aliram.")


// IATC       = T
// Tofiq      = o
// Hafiz      = f
// Fatime     = i
// Maraqlı    = q

console.log(travel[1][4][0][2]+travel[1][0][0]+travel[0][1][2]+travel[1][2][3]+travel[1][3][3][0][5])
