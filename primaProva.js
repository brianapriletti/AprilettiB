const a = null;
const array = [];
const data = new Date;
function funzione() { };
const simbolo = Symbol;

console.log(
    typeof a,
    typeof array,
    typeof data,
    typeof funzione,
    typeof simbolo,
)

const pc = {

    componenti: [ {
        nome: "CPU",
        vel: 2.4,
        prezzo: 2300,
       
    },
    {
        monitor: "AOC",
        refreshRate: 144,
        mouse: "g502",
        tastiera: "logitech",
        prezzo: 400,
    }
    ]
    ,

    getTotale() {

        let totale = 0;

        for(let i = 0; i < this.componenti.length; i++){

            let n = this.componenti[i].prezzo;
            totale += n;
        }
        return totale;
    },
}

console.log(pc.getTotale());

//SISTEMI ASINCRONI
//PORCACCIO IDDIO GUARDATE LE FUNZIONI ASINCRONE CHE NON CE SI CAPITO UN CAZZO!!!!!!!!!!!

    



