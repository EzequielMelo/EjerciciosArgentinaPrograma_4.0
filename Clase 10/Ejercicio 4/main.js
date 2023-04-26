let numeros = [1,-4,12,0,-3,29,-150];

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
    var sumaNums = 0;
    var i = 0;
    var positives = numeros.filter(n => n> 0)


    while(i<positives.length)
    {
        nums += positives[i]+" ";
        sumaNums += parseInt(positives[i]);
        i++
    }

    mostrar("numbersWhile", nums);
    mostrar("numbersWhile", sumaNums);
}
