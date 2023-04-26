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
        nums += numeros[i]+" ";
        i++
    }

    mostrar("numbersWhile", nums);
}

btnMostrarConFor.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("numbersFor").innerHTML = "";
    var nums = "Numeros: ";

    for(var i=0; i<numeros.length; i++)
    {
        nums += numeros[i]+" ";
    }

    mostrar("numbersFor", nums);
}

btnMostrarConForEach.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("numbersForEach").innerHTML = "";
    var nums = "Numeros: ";
   
    numeros.forEach(element => {
        nums += element+" ";
    });

    mostrar("numbersForEach", nums);
}

btnMostrarConCalculos.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("numbersForEach").innerHTML = "";
    var nums = "Numeros: ";
    let newNumeros = [];
    var stringNewNumeros = "copia: ";
    promedio = 0;
   
    for(var i=0; i<numeros.length; i++)
    {
        nums += numeros[i]+1+" ";
        newNumeros[i]= numeros[i]+1;
        stringNewNumeros += newNumeros[i]+" ";
        promedio += newNumeros[i];
    }

    mostrar("numbersCalculo", nums);
    mostrar("numbersCalculo", stringNewNumeros);
    mostrar("numbersCalculo", "Promedio: "+promedio/newNumeros.length);
}

