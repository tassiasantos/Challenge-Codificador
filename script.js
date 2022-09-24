
const inputTexto = document.querySelector(".entrada");
const mensagem = document.querySelector(".resultado-texto");



function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    document.querySelector(".resultado-texto").style.backgroundImage = "none";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado;
    document.querySelector(".resultado-texto").style.backgroundImage = "none";
}

/*As "chaves" de criptografia que são:
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"`*/


function encriptar(stringEncriptada) {
    let matrizCodigo = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"] ]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
           stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"] ]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copiarTexto() {
    let copiado = document.getElementById("texto").value;

    if(navigator.clipboard.writeText(copiado)) {
        document.getElementById("button").textContent="copiado";
    }

    setInterval(function () {
        document.getElementById("button").textContent="copiar"
    }, 3000)

}