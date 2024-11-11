class Veicolo {
    constructor(marca, anno, colore) {
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
    }

    calcoloEta(){
        const date = new Date;
        console.log(`Questa vettura ha i seguenti anni: ${date.getFullYear() - this.anno}`);
    }

    informazioni(){
        console.log(`Questa vettura è di marca: ${this.marca}\nQuesta vettura è dell'anno: ${this.anno}\nQuesta vettura è di colore: ${this.colore}`)
    }

}

class Automobile extends Veicolo{

    constructor(marca, anno, colore, porte, carburante) {
        super(marca, anno, colore);
        this.porte = porte;
        this.carburante = carburante;
    }

    informazioni(){
        console.log(`Questa vettura è di marca: ${this.marca}\nQuesta vettura è dell'anno: ${this.anno}\nQuesta vettura è di colore: ${this.colore}\nQuesta vettura ha: ${this.porte}\nQuesta vettura consuma: ${this.carburante}`)
    }

}



const macchina = new Veicolo("Fiat", 2019, "Blu");
macchina.informazioni();
macchina.calcoloEta();


const macchina2 = new Automobile("Opel", 2020, "Nera", "4 porte", "benzina");
macchina2.informazioni();
macchina2.calcoloEta();

