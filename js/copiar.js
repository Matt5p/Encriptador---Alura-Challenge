function copiar() {
    var copiarTexto = document.querySelector("#encrypted-text");
    console.log(copiarTexto.value);
    copiarTexto.select();
    document.execCommand("copy");
    this.focus();
    console.log("Texto copiado: " + copiarTexto.value);

    textoString = String(copiarTexto);

    if (typeof textoString === "string") {
        console.log("true");
        console.log(textoString);
    } else {
        console.log("false");
    }
}

document.querySelector("#boton-copiar").addEventListener("click", copiar);
