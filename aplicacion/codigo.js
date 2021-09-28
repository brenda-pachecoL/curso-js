class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente")
        }
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("app desistalando correctamente")
        }
    }
    appInfo(){
            return `
            Descargas: <b>${this.descargas}</b><br>
            Puntuacion: <b>${this.puntuacion}</b><br>
            Peso: <b>${this.peso}</b><br>

            `
    }

}
app = new App("16mil","3 estrellas","700mb");
app2 = new App("13mil","4 estrellas","600mb");
app3 = new App("10mil","1 estrellas","1200mb");
app4 = new App("16mil","3 estrellas","100mb");
app5 = new App("18mil","2 estrellas","800mb");
app6 = new App("14mil","5 estrellas","600mb");
app7 = new App("11mil","2 estrellas","400mb");
app8 = new App("16mil","1 estrellas","800mb")

 app.instalar()
 app.desinstalar()
 app.abrir()
 app.cerrar()

document.write(`
    ${app.appInfo()}<br>
    ${app2.appInfo()}<br>
    ${app3.appInfo()}<br>
    ${app4.appInfo()}<br>
    ${app5.appInfo()}<br>
    ${app6.appInfo()}<br>
    ${app7.appInfo()}<br>
    ${app8.appInfo()}<br>
    `
);