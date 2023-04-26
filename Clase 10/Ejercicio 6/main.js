let colores =  ["azul", "amarillo", "rojo", "verde", "café", "rosa"] ;

function mostrar(div, aMostrar)
{
    var myDiv = $("#"+div);
    var paragraph = document.createElement("p");
    paragraph.textContent = aMostrar;
    myDiv.append(paragraph);
}

btnIngresarColor.onclick = function(event)
{
    event.preventDefault();
    //document.getElementById("existeElColor").innerHTML = "";
    var colorIngresado = prompt("Ingrese un color")
    var parrafo = "";
    var existe=false;

    for(var i=0; i<colores.length; i++)
    {
        if((colores[i].localeCompare(colorIngresado, undefined, { sensitivity: 'accent' }))==0)
        {
            existe = true;
            break;
        }
    };

    if(existe==true)
    {
        parrafo = "El color "+colorIngresado.toLocaleUpperCase()+" ingresado EXISTE"
    }
    else
    {
        parrafo = "El color "+colorIngresado.toLocaleUpperCase()+" ingresado NO EXISTE"
    }

    mostrar("existeElColor", parrafo);
}

