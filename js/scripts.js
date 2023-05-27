window.addEventListener("DOMContentLoaded", ()=>{


    document.querySelector("#n0").addEventListener("click",()=>{
        cuenta += "0";
        mostrarNumero("0");
    });
    
    document.querySelector("#n1").addEventListener("click",()=>{
        cuenta += "1";
        mostrarNumero("1");
    });

    document.querySelector("#n2").addEventListener("click",()=>{
        cuenta += "2";
        mostrarNumero("2");
    });

    document.querySelector("#n3").addEventListener("click",()=>{
        cuenta += "3";
        mostrarNumero("3");
    });

    document.querySelector("#n4").addEventListener("click",()=>{
        cuenta += "4";
        mostrarNumero("4");
    });

    document.querySelector("#n5").addEventListener("click",()=>{
        cuenta += "5";
        mostrarNumero("5");
    });

    document.querySelector("#n6").addEventListener("click",()=>{
        cuenta += "6";
        mostrarNumero("6");
    });

    document.querySelector("#n7").addEventListener("click",()=>{
        cuenta += "7";
        mostrarNumero("7");
    });

    document.querySelector("#n8").addEventListener("click",()=>{
        cuenta += "8";
        mostrarNumero("8");
    });

    document.querySelector("#n9").addEventListener("click",()=>{
        cuenta += "9";
        mostrarNumero("9");
    });
    
    document.querySelector("#nMas").addEventListener("click",()=>{
        cuenta += "+";
        mostrarNumero("+");
    });
    
    document.querySelector("#nMenos").addEventListener("click",()=>{
        cuenta += "-";
        mostrarNumero("-");
    });
    
    document.querySelector("#nPor").addEventListener("click",()=>{
        cuenta += "*";
        mostrarNumero("x");
    });

    document.querySelector("#nDividido").addEventListener("click",()=>{
        cuenta += "/";
        mostrarNumero("/");
    });

    document.querySelector("#nPunto").addEventListener("click",()=>{
        cuenta += ".";
        mostrarNumero(".");
    });

    document.querySelector("#nIgual").addEventListener("click",()=>{
        calcular();
    });
    
    
    document.querySelector("#clear").addEventListener("click",()=>{
        document.querySelector("#result").innerHTML = "";
        cuenta = "";
    });


});