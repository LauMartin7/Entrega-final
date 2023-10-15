
class Usuario{

    constructor( nombre , mail, asunto, mje){
        this.nombre = nombre;
        this.mail = mail;
        this.asunto = asunto;
        this.mje = mje;
    }
}


//evenhandler del boton enviar
let arregloMje = [];

function enviarMje(){
    let nombre = document.getElementById("nombre").value;
    let mail = document.getElementById("mail").value;
    let asunto = document.getElementById("montoPF").value
    let mje = document.getElementById("mje").value;

    let usuario = new Usuario(nombre, mail, asunto, mje);
    arregloMje.push(usuario);
    
    document.getElementById("nombre").value = "";
    document.getElementById("mail").value ="";
    document.getElementById("asunto").value ="";
    document.getElementById("mje").value ="";
}

//evento btn calcular
let btnEnviar = document.getElementById("botonEnviar");

btnEnviar.addEventListener("click", enviarMje)

