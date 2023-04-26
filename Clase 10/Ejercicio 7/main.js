let numeros =  [1,6,7,2,5,3,8,9] ;

function mostrar(div, aMostrar)
{
    var myDiv = $("#"+div);
    var paragraph = document.createElement("p");
    paragraph.textContent = aMostrar;
    myDiv.append(paragraph);
}

function devolverNumerosPares(numerosAVerificar)
{
    var numerosPares = new Object()
    numerosPares = numerosAVerificar.filter(n => n%2 == 0)
    return numerosPares;
}

btnMostrarNumeros.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("mostrarNumeros").innerHTML = "";
    var parrafo = "Numeros: ";

    numeros.forEach(element => {

        parrafo += element+" | ";
    });

    mostrar("mostrarNumeros", parrafo);

    parrafo = "Numeros pares: ";

    let numerosPares = devolverNumerosPares(numeros);

    numerosPares.forEach(element => {

        parrafo += element+" | ";
    });

    mostrar("mostrarNumeros", parrafo);
}

