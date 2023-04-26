//---------1---------//
let colores = ["Rojo", "Amarillo", "verde", "Azul", "Violeta"];

//---------2---------//
var tercerElemento = colores[2];
console.log(tercerElemento);

//---------3---------//
console.log(colores[0][0]);

//---------4---------//
mostrarNumeroRandom(1, 99)

function mostrarNumeroRandom(min, max)
{
    console.log(parseInt(Math.random() * (max - min) + min));
}

//---------5---------//
let numeros = [10];
var auxNum;

for(var i=0; i<10; i++)
{
    auxNum = prompt("Ingrese un numero","");
    if(!isNaN(auxNum))
    {
        numeros[i] = auxNum;
    }else
    {
        numeros[i]= 0 ;
    }
}

console.log(numeros);

//---------6---------//
let numbers = [10];
var min=1;
var max=99;

for(var i=0; i<10; i++)
{
    numbers[i] = parseInt(Math.random() * (max - min) + min);
}

console.log(numeros);

//---------7---------//
let copiaNumeros = [];

for(var i=0; i<numeros.length; i++)
{
    copiaNumeros[i] = numbers[i];
}

console.log(copiaNumeros);

//---------8_1---------//
var palabra;
var palabrasConcatenadas = "";
do
{
    palabra = prompt("Ingrese una palabra");
    palabra.toLowerCase();
    if(palabra!="cancelar")
    {
        palabrasConcatenadas = palabrasConcatenadas+"-"+palabra;
    }
}while(palabra!="cancelar")

console.log(palabrasConcatenadas);

//---------8_2---------//
var palabra;
var palabrasConcatenadas = [];
var i = 0;
do
{
    palabra = prompt("Ingrese una palabra");
    palabra.toLowerCase();
    if(palabra!="cancelar")
    {
        palabrasConcatenadas[i] = palabra;
        i++
    }
}while(palabra!="cancelar")

console.log(palabrasConcatenadas);