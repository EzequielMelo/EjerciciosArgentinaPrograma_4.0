function pesosADolares(pesos)
{
    var dolares;

    if(!isNaN(pesos))
    {
        dolares = pesos / 300;
    }else
    {
        dolares = "Error. Ingrese un numero"
    }

    return dolares;
}

function dolaresAPesos(dolares)
{
    var pesos;

    if(!isNaN(dolares))
    {
        pesos = dolares * 300;
    }else
    {
        pesos = "Error. Ingrese un numero"
    }

    return pesos;
}

btnCalcularDolares.onclick = function()
{
    var pesos;

    pesos = document.getElementById('inputUno').value;

    document.getElementById('inputDos').value = pesosADolares(pesos);
}

btnCalcularPesos.onclick = function()
{
    var dolares;

    dolares = document.getElementById('inputTres').value;

    document.getElementById('inputCuatro').value = dolaresAPesos(dolares);
}
