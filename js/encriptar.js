function encriptar() {
    var texto = document.getElementById("input-text").value;
    // texto = texto.replace(/e/gi, "enter");
    // texto = texto.replace(/i/gi, "imes");
    // texto = texto.replace(/a/gi, "ai");
    // texto = texto.replace(/o/gi, "ober");
    // texto = texto.replace(/u/gi, "ufat");

    texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    // var encriptado = document.getElementById("encrypted-text");
    // encriptado.value = texto;

    document.getElementById("encrypted-text").value = texto;
}

var boton = document.getElementById("boton-encriptar");
boton.onclick = function () {
    console.log("TEST encriptando: ");
    encriptar();
};

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// var boton = document.getElementById("boton-encriptar");
// boton.addEventListener("click", presionar);

// function presionar() {
//     console.log("Clickeaste el boton de encriptar, qlia");
// }
