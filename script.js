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


const macchina = new Veicolo("Fiat", 2019, "Blu");
macchina.informazioni();
macchina.calcoloEta();
