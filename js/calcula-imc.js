
var titulo = (document.querySelector(".titulo")); // usar o . para buscar classe
titulo.addEventListener("click",mostramsg) //esculta evento

function mostramsg(){
    console.log("olaa!!")
}
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent

    var imcPaciente = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso); // true
    var alturaEhValido = validaAltura(altura);


    if (!pesoEhValido) { //ou
        imcPaciente.textContent = "ERRO! Peso inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido"); //inclui a classe paciente invalida a paciente, modificando a cor conforme o arq de css
    }
    if (!alturaEhValido) {
        imcPaciente.textContent = "ERRO! Altura inválida";
        alturaEhValido = false;
        paciente.classList.add("paciente-invalido");

    }

    if (alturaEhValido == true && pesoEhValido == true) { //and
        var totalimc = calculaImc(peso,altura);
        imcPaciente.textContent = totalimc; 
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 500){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0) {
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura*altura);

    return imc.toFixed(2)// deixando com 2 casas decimais

}



