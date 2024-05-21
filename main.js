
var texto = "Isaac Farias";
var atraso = 500;
var textoElemento = document.querySelector(".apresentacao__conteudo__titulo1");


var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();