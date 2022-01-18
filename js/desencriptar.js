function desencriptar() {
    var texto = document.querySelector("#input-text").value;

    var result = texto.replace(/enter/g, "e");
    result = result.replace(/imes/g, "i");
    result = result.replace(/ai/g, "a");
    result = result.replace(/ober/g, "o");
    result = result.replace(/ufat/g, "u");

    console.log(result);

    var encriptado = document.getElementById("encrypted-text");

    encriptado.value = result;
}

var boton = document.getElementById("boton-desencriptar");
boton.onclick = function () {
    console.log("TEST desencriptando");
    desencriptar();
};
