
// // let usuario1 = prompt("¿cual es tu nombre");
// // let apellido = prompt ("¿cual es tu apellido?");


// // if (usuario1 == "aranza" && apellido == "martinez"){
// //     document.write("bienvenida " + usuario1 + apellido);
// // }
// // else if(usuario1== "Brenda" && apellido == "pacheco"){
// //      document.write("bienvenida " + usuario1 + apellido);
// // }
// // else{
// //      document.write("no estas invitad@");
// // 

// // array
// // let frutas= ["banana", "manzana", "pera",5 ,false ,6];
// // document.write(frutas[4]);

// // arrays asociativos

// // let pc1= {
// //     nombre: "brendapc",
// //     procesador: "Intel core I7"
// // }
// // document.write(pc1["nombre"]); 

// // {let numero = 4;
// // while( numero < 10) {
// //     document.write(numero)
// //     numero++
// // }}
// let animales = ["perro", "gato", "pato"];

// for (animal in animales){
//     document.write(animales[2] + "<br>");
// }
// for (animal of  animales){
//     document.write(animal + "<br>");
// }
//funciones 

// // function saludar(){
// // respuesta= prompt("hola! como estas?")
// // if(respuesta == "bien"){
// //         alert("me alegra")
// // }else{
// //         alert("una pena")
// //     }
// // }


// // saludar(); 

// let edad= prompt("cuantos años tienes?");

// function mayorMenor(){
//     if( edad < 18){
//         return "eres menor de edad"
//     }else{
//         return "eres mayor de edad"
//     }
// }
// let compararEdad = mayorMenor();
// document.write(comparar)
// let free=false;

// // const validarCliente = (time)=>{
// //     let edad = prompt("¿Cual es tu edad?");
// //     if(edad > 18){
// //         if(time >= 2 && time < 7 && free == false){
// //             alert("puedes pasar gratis porque eres la primera persona despues de las 2")
// //             free=true;

// //         }else{
// //             alert("puedes pasar pero debes pagar la entrada ")
           
// //         }
       
// //     }else{
// //         alert("no puedes pasar amix")
// //     }
// // }
// // validarCliente(5)

// // validarCliente(2)





// let calificacion = prompt("¿Cuantos años tienes")

// function  notaCalificaciones (){
//     if (calificacion < = 3 ){
//         document.write("tu calificacion es insuficiente") 
//     }else{
//         document.write("nooo") 
//     }
// }

// notaCalificaciones()ç

// // function nota(){
// //     let calificacion = prompt("cual es tu calificacion?")
// //     if (calificacion >0 && calificacion <= 10) {
// //          if( calificacion < 3){
// //             alert ("muy deficienta")
// //          }if ( calificacion == 3 || calificacion < 5){
// //              alert ("insuficiente")
// //          }if( calificacion == 5 || calificacion <6) {
// //              alert ("suficiente")
// //          }if( calificacion == 6 || calificacion <7) {
// //              alert ("bien")
// //          }if( calificacion == 7 || calificacion < 9) {
// //              alert ("suficiente")
// //          }
// //     }
// // }

// // nota()

// // let cantidad = prompt("Cuantos alumnos son?")
// // let alumnosTotales 

// // for (i = 0; i < cantidad; i++){
// //     alumnosTotales [i] = [prompt("Nombre del alumno " +(i+1)),0];
// // }

// // const tomarAsistencia =(nombre,p)=>{
// //     let presencia = prompt(nombre);
// //     if(presencia == "p" || presencia == "P"){
// //         alumnosTotales[p][1]++;
// //     }
// // }

// // for (i = 0; i < 30; i++) {
// //     for (alumno in alumnosTotales){
// //         tomarAsistencia(alumnosTotales[alumno][0],alumno);
// //     }
// // }
// // for(alumno in alumnosTotales) {
// //     let resultado = `${alumnosTotales [alumno][0]}:<br>
// //     presentes:<b>${alumnosTotales[alumno][1]}</b> <br>
// //     Ausencias:<b>${30 - alumnosTotales[alumno][1]}</b>`;
// //     if(30 - alumnosTotales[alumno][1] > 18){
// //     resultado+= "REPROBADO POR INASISTENCIAS";
// //     }else{
// //     resultado+= "aprobado";
// //     } 
// // }
// |CALCULADORA

// const sumar = (num1,num2)=>{
//     return parseInt(num1) + parseInt(num2)
// }
// const restar = (num1,num2)=>{
//     return parseInt(num1) - parseInt(num2)
// }
// const  dividir= (num1,num2)=>{
//     return parseInt(num1) / parseInt(num2)
// }
// const multiplicar = (num1,num2)=>{
//     return parseInt(num1) * parseInt(num2)
// }
// alert("Que operacion deseas realizar?");
// let operacion = prompt(" 1: suma, 2: resta, 3: dividir, 4: multiplicar");


// if ( operacion == 1) {
//     let num1=prompt("ingresa el primer numero");
//     let num2=prompt("ingresa el segundo numero");
//     resultado = sumar(num1,num2)
//     document.write(`tu resultado es:  ${resultado}`)
// }
// else if ( operacion == 2) {
//     let num1=prompt("ingresa el primer numero");
//     let num2=prompt("ingresa el segundo numero");
//     resultado = restar(num1,num2)
//     document.write(`tu resultado es:  ${resultado}`)
// }
// else if ( operacion == 3) {
//     let num1=prompt("ingresa el primer numero");
//     let num2=prompt("ingresa el segundo numero");
//     resultado = dividir(num1,num2)
//     document.write(`tu resultado es:  ${resultado}`)
// }
// else if ( operacion == 4) {
//     let num1=prompt("ingresa el primer numero");
//     let num2=prompt("ingresa el segundo numero");
//     resultado = multiplicar(num1,num2)
//     document.write(`tu resultado es:  ${resultado}`)
// }
// else {
//     document.write("No se ha encontrado la operacion")
// }



// // class Animal {
// //     constructor(especie,edad,color){
// //         this.especie = especie;
// //         this.edad = edad;
// //         this.color = color;
// //         this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
// //     }
// //     verInfo(){
// //         document.write(this.info + "<br>")
// //     }
// // }

// // class Perro extends Animal{
// //     constructor(especie,edad,color,raza){
// //         super(especie,edad,color)
// //         this.raza = raza;
// //     }
// //     ladrar(){
// //         alert("!waw!")
// //     }
// // }

// // const perroo = new Perro ("perro", 5, "verde","boxer");
// // const gato = new Animal ("gato", 2, "negro");
// // perroo.verInfo();
// // perroo.ladrar();
// // gato.verInfo();

class Celulares{
    constructor(color,peso,rdp,rdc,ram){
       this.color = color;
       this.peso = peso;
       this.resolucionDePantalla = rdp;
       this.resolucionDeCamara = rdc;
       this.memoriaRam = ram;
       this.encendido = false;
    }
    prende(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true
        }else{
            alert("El celular ya esta encendido")
        }
    }
    apagar(){
        if (this.encendido == true){
            alert("celular apagado");
            this.encendido = true;
        }else{
            alert("El celular ya esta apagado")
        }
    }
    verInfo(){
        document.write(`El color es ${this.color}, pesa ${this.peso} gramos, tiene ${this.resolucionDePantalla}px de resolucion de pantalla, tiene ${this.resolucionDeCamara}px resolucion de camara y cuenta con ${this.memoriaRam}GB de memoria ram`)
    }

}

const samsung = new Celulares("azul",200,400,16,32);
Celulares.verInfo();