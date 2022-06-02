const btnNombre = document.getElementById('empezar');

//BOTONES RADIO
let radioCheeseCake = document.getElementById('cheeseCake');
let radioTartaFrutillas = document.getElementById('tartaFrutillas');
let radioChocoOreo = document.getElementById('chocoOreo');
let radioTiramisu = document.getElementById('tiramisu');
let radioLemonPie = document.getElementById('lemonPie');

let inputEmail = document.getElementById('email');
let btnEmail = document.getElementById('recordarEmail');
let btnGuardar = document.getElementById('btn_guardar');



function saludar (nombre) {
    alert (`Hola ${nombre}! Empecemos la compra!elegi tus tortas favoritas`);
}

btnNombre.addEventListener('click', ()=>{
    let nombre = document.getElementById('nombre').value;
    saludar(nombre);
})


//email
function guardarEmail (){
    document.getElementById('email').value;
    if (btnEmail.checked){
        console.log(inputEmail.value);
    }
}

btnGuardar.addEventListener('click', () => {
    if (btnEmail.checked) {
        console.log(inputEmail.value);
        alert ('Te enviaremos informacion. Gracias por su compra');
    } else {
        alert ('Gracias por su compra');
    }
})



//funcion para cambiar fotos de tortas
function cambiarImagen(source){
    document.getElementById('fotoTortas').src=source;
}

//eventos para los radio
radioCheeseCake.addEventListener ('click',()=>{
    cambiarImagen('./img/chessecake.jpg');
})

radioChocoOreo.addEventListener ('click',()=>{
    cambiarImagen('./img/choco_oreo.jpg');
})

radioLemonPie.addEventListener ('click',()=>{
    cambiarImagen('./img/lemon_pie.jpg');
})

radioTartaFrutillas.addEventListener ('click',()=>{
    cambiarImagen('./img/tarta_frutillas.jpg');
})

radioTiramisu.addEventListener ('click',()=>{
    cambiarImagen('./img/tiramisu.jpg');
})


