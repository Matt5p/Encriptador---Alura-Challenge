function copiar() {
    navigator.clipboard.writeText(
        document.getElementById("encrypted-text").value
    );
}
document.querySelector("#boton-copiar").addEventListener("click", copiar);
