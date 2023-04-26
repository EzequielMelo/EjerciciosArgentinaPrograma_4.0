var palabras =  ["palabras","ejercicio","numero","ocho","array","vocales","internet"] ;

function mostrar(div, aMostrar)
{
    var myDiv = $("#"+div);
    var paragraph = document.createElement("p");
    paragraph.textContent = aMostrar;
    myDiv.append(paragraph);
}


btnMostrarNumeros.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("mostrarNumeros").innerHTML = "";
    var parrafo = "Palabras: ";

    palabras.forEach(element => {

        parrafo += element+" | ";
    });

    mostrar("mostrarNumeros", parrafo);

    indice1 = 2;
    indice2 = 4;
    var aux;

    for(var i=0; i<palabras.length; i++)
    {
        for(var j = i+1; j<palabras.length; j++)
        {
            if(i==indice1 && j==indice2)
            {
                aux=palabras[i]
                palabras[i]=palabras[j]
                palabras[j]=aux;
                break;
            }
        }
    }

    var parrafo = "Cambio: ";
    palabras.forEach(element => {

        parrafo += element+" | ";
    });

    mostrar("mostrarNumeros", parrafo);

}

