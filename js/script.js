let inputUsuario = document.querySelector("#texto-entrada");
let botonEncriptar = document.querySelector("#encriptar");
let botonDesencriptar = document.querySelector("#desencriptar");
let areaResultado = document.querySelector("#area-resultado");
let figura = document.querySelector("#figura");
let prueba = document.querySelector("#prueba");
let main = document.querySelector("main");

inicio();

function inicio() {
    if(screen.width < 1024) {
        figura.classList.add("transparente");
        main.classList.remove("nowrap");
    } else {
        figura.classList.remove("transparente");
        main.classList.add("nowrap");
    }
    
    if(screen.width <= 1200) {
        inputUsuario.cols = "25";
    } else {
        inputUsuario.cols = "30";
    }
}

window.addEventListener("resize", inicio);

function validarCampos(texto) {
    if(texto.length == 0) {
        figura.classList.remove("transparente");
        prueba.classList.remove("transparente");
        areaResultado.classList.add("transparente");
        botonCopiar.classList.add("transparente");
        return true;
    } else {
        figura.classList.add("transparente");
        prueba.classList.add("transparente");
        areaResultado.classList.remove("transparente");
        botonCopiar.classList.remove("transparente");
        return false;
    }
}

botonEncriptar.addEventListener("click", function() {

    
    if(validarCampos(inputUsuario.value)) {
        alert("Debe ingresar un texto para encriptar.");
    } else {
        resultado = encriptar(inputUsuario.value);
        areaResultado.value = resultado;
    }
});

botonDesencriptar.addEventListener("click", function() {
    if(validarCampos(inputUsuario.value)) {
        alert("Debe ingresar un texto para desencriptar.");
    } else {
        resultado = desencriptar(inputUsuario.value);
        areaResultado.value = resultado;
    }
});