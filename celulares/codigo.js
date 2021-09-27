class Celulares{
    constructor(color,peso,rdp,rdc,ram){
       this.color = color;
       this.peso = peso;
       this.resolucionDePantalla = rdp;
       this.resolucionDeCamara = rdc;
       this.memoriaRam = ram;
       this.encendido = false;
    }
    presioneElBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true
        }else{
            alert("El celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if (this.encendido == true){
            alert("reiciando celular");
        }else{
            alert("el celular esta apagado");
        }
    }

    tomarFotos(){
            alert(`foto tomada en una resolucion de ; ${this.resolucionDeCamara}`);
    }
    tomarVideo(){
        alert(`video en una resolucion de ; ${this.resolucionDeCamara}`);

    }
    mobileInfo(){
        return`
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolucion de video: <b>${this.resolucionDeCamara}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>`
        
    }

}
class celularAltaGama extends Celulares {
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial")
    }
    mobileInfoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`
    }

    
}

samsung = new Celulares("azul","150g","5","4k","32Gb","full hd");
lg = new Celulares("rojo","150g","8","4k","8Gb", "hd");
nokia = new Celulares("verde","190g","5","4k","12Gb","hd");
// // samsung.presioneElBotonEncendido();
// // samsung.reiniciar();
// // samsung.tomarFotos();
// // samsung.tomarVideo();
document.write(`
    ${samsung.mobileInfo}<br><br>
    ${lg.mobileInfo}<br>
    ${nokia.mobileInfo}<br>
    `);