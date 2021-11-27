let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

let nomeOK = false;
let emailOK = false;
let assuntoOK = false;

let mapa = document.querySelector("#mapa");

let arrow = document.getElementById('animation');
let display = document.getElementById('about');

const button = document.querySelector('#button');

function validaNome(){
    let txtNome = document.querySelector("#txtNome");

    if(nome.value.length < 3){
        txtNome.innerHTML="Nome inválido";
        txtNome.style.color="#f21e1e";
    } else {
        txtNome.innerHTML="Nome válido";
        txtNome.style.color="#0bcf05";
        nomeOK=true
    }
} 

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail");

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value.match(regex)){
        txtEmail.innerHTML="Email Válido";
        txtEmail.style.color="#0bcf05";
        emailOK=true;
    } else {
        txtEmail.innerHTML="Email Inválido"
        txtEmail.style.color="#f21e1e"; 
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto");

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML="Texto é muito grande, digite no máximo 100 caracteres";
        txtAssunto.style.color="#f21e1e";
        txtAssunto.style.display="block";
    } else {
        txtAssunto.style.display="none"
        assuntoOK=true
    }

}

function enviar(){
    if(nomeOK==true && emailOK==true && assuntoOK==true){
        alert('Formulario enviado com sucesso!')
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}

function displayAbout(){
    arrow.classList.toggle('rotate');
    display.classList.toggle('active');
}

function mapaZoom(){
    mapa.style.width = "600px";
    mapa.style.height = "450px";
}

function mapaNormal(){
    mapa.style.width = "400px";
    mapa.style.height = "250px";
}

