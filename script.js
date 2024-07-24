let listaLetras = ['e','i','a','o','u'];

let criptografia = ['enter','imes','ai','ober','ufat'];

function criptografar(conteudoTexto){
    let novaStr = conteudoTexto.replace(new RegExp(listaLetras[0], 'g'), criptografia[0]);
    novaStr = novaStr.replace(new RegExp(listaLetras[1], 'g'), criptografia[1]);
    novaStr = novaStr.replace(new RegExp(listaLetras[2], 'g'), criptografia[2]);
    novaStr = novaStr.replace(new RegExp(listaLetras[3], 'g'), criptografia[3]);
    novaStr = novaStr.replace(new RegExp(listaLetras[4], 'g'), criptografia[4]);
    console.log(novaStr);

    let conteudoCriptografado = document.getElementById("texto_criptografado");
    conteudoCriptografado.innerHTML = novaStr;
    conteudoCriptografado.classList.add("texto_criptografado");
}

function validaTexto(){
    let textoParaCriptografar = document.getElementById("texto_criptografar");
    let conteudoTexto = textoParaCriptografar.value;
    textoParaCriptografar.value = "";

    var temMaiusculas = /[A-Z]/.test(conteudoTexto);
    var temAcentos = /[áéíóúãõâêîôûàèìòùÁÉÍÓÚÃÕÂÊÎÔÛÀÈÌÒÙ]/.test(conteudoTexto);
    var temCaracteresEspeciais = /[^a-zA-Z0-9\s]/.test(conteudoTexto);

    if (temMaiusculas) {
        console.log("O texto contém letras maiúsculas");
    }
    else if (temAcentos) {
        console.log("O texto contém acentos. ");
    } 
    else if (temCaracteresEspeciais) {
        console.log("O texto contém caracteres especiais.");
    }else{
        criptografar(conteudoTexto);
    }
}


