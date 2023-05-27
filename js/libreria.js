let cuenta = ""

function mostrarNumero(digito){
    document.querySelector("#result").innerHTML += digito;
}

function calcular(){
    document.querySelector("#result").innerHTML = eval(cuenta);
}