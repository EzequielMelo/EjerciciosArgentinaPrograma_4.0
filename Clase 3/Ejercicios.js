//Ezequiel Melo
//----------- 1 -----------//
var dato = 210;

console.log(devolverTipoDeDato(dato));

function devolverTipoDeDato(dato)
{
    return typeof(dato);
}

//----------- 2 -----------//
var numero1 = prompt('Ingrese el primer numero:','');
var numero2 = prompt('Ingrese el segundo numero:','');

console.log(restar(numero1, numero2));

function restar(num1, num2)
{
    var resta;

    if(!isNaN(num1) && !isNaN(num2))
    {
        resta= parseInt(num1) - parseInt(num2);
    }else
    {
        resta= "Los datos ingresados no son numericos";
    }

    return resta;

}

//----------- 3 -----------//
var datoA = prompt('Ingrese el primer dato para intercambiar de posicion:','');
var datoB = prompt('Ingrese el segundo dato para intercambiar de posicion:','');

cambioDePosiciones(datoA, datoB)

function cambioDePosiciones(dato1, dato2)
{
    var auxiliar;

    if(dato1!=dato2)
    {
        console.log("El dato A es: " + dato1 + "\nY el dato B es: "+ dato2);
        auxiliar=dato1;
        dato1=dato2;
        dato2=auxiliar;
        console.log("\nEl dato A ahora es: " + dato1 + "\nY el dato B ahora es: "+ dato2);
    }else
    {
        console.log("No se pueden intercambiar los datos debido a que son iguales");
    }

}

//----------- 4 -----------//
var valor = prompt('Ingrese un valor numerico para comenzar a calcular:','');

calcularPerimetroYsuperficie(valor);

function calcularPerimetroYsuperficie(valor)
{
    var perimetro;
    var superficie;

    if(!isNaN(valor))
    {
        perimetro = parseInt(valor) * 4;
        superficie = parseInt(valor) * valor;
        console.log("El perimetro del cuadrado es: " + perimetro + "\nLa superficie del cuadrado es: "+ superficie);
    }else
    {
        console.log("Error, ingrese un dato de tipo numerico");
    }
}

//----------- 5 -----------//
var temperatura = prompt('Ingrese una temperatura en fahrenheit:','');

console.log(fahrenheitACelcius(temperatura));

function fahrenheitACelcius(temperatura)
{
    var temperaturaEnCelcius;

    if(!isNaN(temperatura))
    {
        temperaturaEnCelcius = (temperatura - 32) / 1.8;
    }else
    {
        temperaturaEnCelcius = ("Error, ingrese un dato de tipo numerico");
    }

    return temperaturaEnCelcius;
}

//----------- 6 -----------//
var aFactorizar = prompt('Ingrese un numero para factorizar:','');

console.log(factorizar(aFactorizar));

function factorizar(numero)
{
    if(!isNaN(numero) && numero<=10 && numero>0)
    {
        for(var i = numero; i > 1; i --)
        {
            numero = numero * (i - 1);
        }
    }else
    {
        numero = "Ha ingresado un numero fuera de rango (mayor a 10) o no es un caracter numerico"
    }

    return numero;
}

//----------- 7 -----------//
var palabra = prompt('Ingrese texto para saber si es un palindromo:','');

palabra = palabra.toLowerCase();

if(saberPalindromo(palabra) == 0)
{
    console.log("La palabra ingresada SI es un palindromo")
}else
{
    console.log("La palabra ingresada NO es un palindromo")
}

function saberPalindromo(palabra)
{
    var auxiliar = palabra;
    var comparacion = -1;

    if(isNaN(palabra))
    {
        auxiliar = auxiliar.split("").reverse().join("");
        comparacion = palabra.localeCompare(auxiliar);
    }

    return comparacion;
}

//----------- 8 -----------//
var palabra = prompt('Ingrese texto para convertir a mayusculas y minusculas:','');

convertirAMayusculaYMinuscula(palabra);

function convertirAMayusculaYMinuscula(palabra)
{
    if(isNaN(palabra))
    {
        palabra = palabra.toLowerCase();
        console.log("Palabra en minuscula: \n" + palabra);
        palabra = palabra.toUpperCase();
        console.log("Palabra en mayusculas: \n" + palabra);
    }else
    {
        console.log("Usted no ha ingresado una palabra: \n");
    }
}

//----------- 9 -----------//
var notaNumerica = prompt('Ingrese una nota del 0 al 10:','');

calificacionResultante(notaNumerica);

function calificacionResultante(nota)
{
    if(!isNaN(nota) && nota>=0 && nota<=10)
    {
        switch(nota)
        {
            case "0": case "1": case "2":
                console.log("Nota: " + nota + " Muy deficiente");
                break;
            case "3": case "4": case "5":
                console.log("Nota: " + nota + " Insuficiente");
                break;
            case "6":
                console.log("Nota: " + nota + " Suficiente");
                break;
            case "7":
                console.log("Nota: " + nota + " Bien");
                break;
            case "8": case "9":
                console.log("Nota: " + nota + " Notable");
                break;
            case "10":
                console.log("Nota: " + nota + " Sobresaliente");
                break;
        }
    }else
    {
        console.log("Error, ingrese un dato de tipo numerico o dentro de el rango pedido");
    }
}

//----------- 10 -----------//
var numeroDeMes = prompt('Ingrese un mes del 1 al 12:','');

devolverDiasDelMes(numeroDeMes);

function devolverDiasDelMes(numeroDeMes)
{
    if(!isNaN(numeroDeMes) && numeroDeMes>=1 && numeroDeMes<=12)
    {
        switch(numeroDeMes)
        {
            case "1": case "3": case "5": case "7": case "8": case "10": case "12":
                console.log("El mes ingresado: " + numeroDeMes + " Tiene 31 dias");
                break;
            case "4": case "6": case "9": case "11":
                console.log("El mes ingresado: " + numeroDeMes + " Tiene 30 dias");
                break;
            case "2":
                console.log("El mes ingresado: " + numeroDeMes + " Tiene 28 dias y 29 los años bisiestos");
                break;
        }
    }else
    {
        console.log("Error, ingrese un dato de tipo numerico o dentro de el rango pedido");
    }
}

//----------- 11 -----------//
var numero = prompt('Ingrese un numero del 1 al 10 para generar piramide:','');

piramide(numero);

function piramide(numero)
{
    if(!isNaN(numero) && numero>=1 && numero<=10)
    {
        for(var i = 1; i<=numero; i++)
        {
            var linea = "";
            for(var x = 1; x<=i ;x++)
            {
                linea += x;
            }
            console.log(linea);
        }
    }else
    {
        console.log("Error, ingrese un dato de tipo numerico o dentro de el rango pedido");
    }
}

//----------- 12 -----------//
var cantidadProductos = prompt('Ingrese la cantidad de productos:','');
var almacenamientoCaja = prompt('Ingrese la cantidad de productos que pueden almacenar en una caja:','');

organizarCaja(cantidadProductos, almacenamientoCaja);

function organizarCaja(productos, almacenamiento)
{
    var cajas;
    var contadorCajasLlenas = 0;
    var x = 0;

    if(!isNaN(productos) && !isNaN(almacenamiento))
    {
        for(var i=0; i<productos; i++)
        {
            x++;
            if(x == almacenamiento)
            {
                contadorCajasLlenas++;
                x=0;
            }
        }
        console.log("Cantidad de cajas llenas: " + contadorCajasLlenas + "\nBultos sueltos: " + x);
    }else
    {
        console.log("Error, ingrese un dato de tipo numerico");
    }
}

//----------- 13 -----------//
var codigoVehiculo = prompt('Ingrese el codigo del vehiculo:','');
var valorVehiculo = prompt('Ingrese el valor del vehiculo:','');

codigoVehiculo = codigoVehiculo.toLowerCase();
informarDescuento(codigoVehiculo, valorVehiculo);

function informarDescuento(codigoVehiculo, valorVehiculo)
{
    var precioFinal;

    switch(codigoVehiculo)
    {
        case "fiesta":
            precioFinal = valorVehiculo * 0.95;
            break;
        case "focus":
            precioFinal = valorVehiculo * 0.90;
            break;
        default: 
            precioFinal = valorVehiculo;
            break;
    }
    console.log("El valor del vehiculo seleccionado es: " +precioFinal);
}