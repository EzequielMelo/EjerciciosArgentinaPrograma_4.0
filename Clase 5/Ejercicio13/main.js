var numeroAAdivinar=-1;
var intentos;

btnCargarNumero.onclick = function(event)
{
    event.preventDefault();
    var auxNumero;
    auxNumero = Number(document.getElementById('inputUno').value);

    if(!isNaN(auxNumero) && auxNumero>=0 && auxNumero<=5)
    {
        numeroAAdivinar = auxNumero;
        intentos = 0;
        document.getElementById('inputTres').value = "Numero Cargado. Tiene 3 intentos"
    }
    else if(!isNaN(auxNumero) && (auxNumero<0 || auxNumero>5))
    {
        document.getElementById('inputTres').value = "Error, ingrese un numero entre 0 y 5";
    }
    else
    {
        document.getElementById('inputTres').value = "Error, ingrese un caracter numerico";
    }

    document.getElementById('inputUno').value = "";
}

btnMostrarAcierto.onclick = function(event)
{
    event.preventDefault();
    var adivinar;

    document.getElementById('inputUno').value = "";
    adivinar = document.getElementById('inputDos').value;

    if(!isNaN(adivinar) && adivinar == numeroAAdivinar && intentos<=3 && numeroAAdivinar!=-1)
    {
        document.getElementById('inputTres').value = "Ha adivinado el numero. Felicitaciones";
        numeroAAdivinar=-1;
        intentos=0;
    }
    else if(!isNaN(adivinar) && adivinar != numeroAAdivinar && intentos<2 && numeroAAdivinar!=-1)
    {
        document.getElementById('inputTres').value = "El numero es incorrecto, intente nuevamente";
        intentos++;
    }
    else if(!isNaN(adivinar) && adivinar != numeroAAdivinar && intentos>2 && numeroAAdivinar!=-1)
    {
        document.getElementById('inputTres').value = "Ha perdido";
        numeroAAdivinar=-1;
        intetos=0;
    }
    else if(!isNaN(adivinar) && adivinar != numeroAAdivinar && numeroAAdivinar==-1)
    {
        document.getElementById('inputTres').value = "Ingrese un nuevo numero para adivinar";
    }
    else
    {
        document.getElementById('inputTres').value = "Error, ingrese un caracter numerico";
    }
}
