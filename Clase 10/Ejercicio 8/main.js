let palabras =  ["palabras","ejercicio","numero","ocho","array","vocales","internet"] ;

function mostrar(div, aMostrar)
{
    var myDiv = $("#"+div);
    var paragraph = document.createElement("p");
    paragraph.textContent = aMostrar;
    myDiv.append(paragraph);
}

function devolverVocalesPalabras(palabraAVerificar)
{
    var vocalesPalabras = new Object()
    vocalesPalabras = palabraAVerificar.filter(n => n.startsWith("a",0) || n.startsWith("e",0) || n.startsWith("i",0) || n.startsWith("o",0) || n.startsWith("u",0))
    return vocalesPalabras;
}

btnMostrarNumeros.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("mostrarNumeros").innerHTML = "";
    var parrafo = "Palabras: ";
    var existe=false;

    palabras.forEach(element => {

        parrafo += element+" | ";
    });

    mostrar("mostrarNumeros", parrafo);

    parrafo = "Palabras que comienzan con vocal: ";

    let numerosPares = devolverVocalesPalabras(palabras);

    numerosPares.forEach(element => {

        parrafo += element+" | ";
    });

    mostrar("mostrarNumeros", parrafo);
}

