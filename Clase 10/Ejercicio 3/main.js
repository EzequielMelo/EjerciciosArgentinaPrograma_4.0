let numeros = [1,2,3,4,5,6];

function mostrar(div, aMostrar)
{
    var myDiv = $("#"+div);
    var paragraph = document.createElement("p");
    paragraph.textContent = aMostrar;
    myDiv.append(paragraph);
}

btnMostrarConWhile.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("numbersWhile").innerHTML = "";
    var nums = "Numeros: ";
    var i = 0;

    while(i<numeros.length)
    {
        nums += doubles[i]+" ";
        i++
    }

    mostrar("numbersWhile", nums);
}

var doubles = numeros.map(function(x)
{
    return x * 2;
})
