const listaLetras = ['e', 'i', 'a', 'o', 'u'];

const criptografia = ['enter', 'imes', 'ai', 'ober', 'ufat'];

function capturaTexto() {
    let textoParaCriptografar = document.getElementById("texto_criptografar");
    let conteudoTexto = textoParaCriptografar.value;
    textoParaCriptografar.value = "";

    return conteudoTexto;
}

function criptografar() {
    let conteudoTexto = capturaTexto();

    if (!validaTexto(conteudoTexto)) {
        return;
    }

    let novaStr = conteudoTexto.replace(new RegExp(listaLetras[0], 'g'), criptografia[0]);
    novaStr = novaStr.replace(new RegExp(listaLetras[1], 'g'), criptografia[1]);
    novaStr = novaStr.replace(new RegExp(listaLetras[2], 'g'), criptografia[2]);
    novaStr = novaStr.replace(new RegExp(listaLetras[3], 'g'), criptografia[3]);
    novaStr = novaStr.replace(new RegExp(listaLetras[4], 'g'), criptografia[4]);
    console.log(novaStr);

    imprimirConteudo(novaStr);
}

function descriptografar() {

    let conteudoTexto = capturaTexto();

    if (!validaTexto(conteudoTexto)) {
        return;
    }

    let novaStr = conteudoTexto.replace(new RegExp(criptografia[0], 'g'), listaLetras[0]);
    novaStr = novaStr.replace(new RegExp(criptografia[1], 'g'), listaLetras[1]);
    novaStr = novaStr.replace(new RegExp(criptografia[2], 'g'), listaLetras[2]);
    novaStr = novaStr.replace(new RegExp(criptografia[3], 'g'), listaLetras[3]);
    novaStr = novaStr.replace(new RegExp(criptografia[4], 'g'), listaLetras[4]);
    console.log(novaStr);

    imprimirConteudo(novaStr);
}

function validaTexto(conteudoTexto) {


    var temMaiusculas = /[A-Z]/.test(conteudoTexto);
    var temAcentos = /[áéíóúãõâêîôûàèìòùÁÉÍÓÚÃÕÂÊÎÔÛÀÈÌÒÙ]/.test(conteudoTexto);
    var temCaracteresEspeciais = /[^a-zA-Z0-9\s]/.test(conteudoTexto);

    if (temMaiusculas) {
        alert("O texto contém letras maiúsculas");
        return false;
    }

    if (temAcentos) {
        alert("O texto contém acentos. ");
        return false
    }

    if(typeof conteudoTexto === 'undefined' || conteudoTexto === null || conteudoTexto === ''){
        alert("Texto vazio");
        return false;
    }
    return true;
}

function imprimirConteudo(novaStr) {
    let conteudoCriptografado = document.getElementById("texto_criptografado");
    conteudoCriptografado.innerHTML = novaStr;
    conteudoCriptografado.classList.add("texto_criptografado");
}

