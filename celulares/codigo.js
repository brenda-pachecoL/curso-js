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
            alert("El celular apagado")
        }
    }

    reiniciar(){
        if (this.encendido == true){
            alert("reiciando celular");
        }else{
            alert("el celular esta apagado")
        }
    }

    tomarFotos(){
            alert(`foto tomada en una resolucion de ; ${this.resolucionDeCamara}`);
    }
    tomarVideo(){
        alert(`video en una resolucion de ; ${this.resolucionDeCamara}`);

    }

    hola(){
        alert("hola")
    }    

}

const samsung = new Celulares("azul","150g","5","ful hd","32Gb");
samsung.presioneElBotonEncendido();
samsung.reiniciar();
samsung.tomarFotos();
samsung.tomarVideo();