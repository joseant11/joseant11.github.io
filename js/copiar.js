let botonCopiar = document.querySelector("#copiar");

botonCopiar.addEventListener("click", function() {
    navigator.clipboard.writeText(areaResultado.value);
});

