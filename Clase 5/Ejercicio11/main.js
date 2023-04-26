function centigradosAFahrenheit(centigrados)
{
    var fahrenheit;

    if(!isNaN(centigrados))
    {
        fahrenheit = (centigrados * 9/5) + 32;
    }else
    {
        fahrenheit = "Error. Ingrese un numero"
    }

    return fahrenheit;
}

btnCalcularFahrenheit.onclick = function()
{
    var centigrados;

    centigrados = document.getElementById('inputUno').value;

    document.getElementById('inputDos').value = centigradosAFahrenheit(centigrados);
}
