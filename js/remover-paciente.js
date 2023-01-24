
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove(); 
   }, 400);

});

    //parentNode seleciona pai de elemento
    //target aponta qual elemento teve o evento