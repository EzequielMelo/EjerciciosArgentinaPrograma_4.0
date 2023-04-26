function oracionFinal(palabraUno, palabraDos, palabraTres, oracionUno)
{
    var oracionFinal;

    if(isNaN(palabraUno) && isNaN(palabraDos) && isNaN(palabraTres) && isNaN(oracionUno))
    {
        oracionFinal = palabraUno+" ha pedido una caja de "+palabraDos+" con unas dimensiones "+palabraTres+". "+ oracionUno;
    }else
    {
        oracionFinal = "Error. Ingrese caracteres validos";
    }

    return oracionFinal;
}

btnEnviar.onclick = function()
{
    var nombre = "";
    var material = "";
    var dimension = "";
    var comentario = "";

    nombre = document.getElementById('inputUno').value;
    material = document.getElementById('cajas').value;
    dimension = document.querySelector('input[name="tamCaja"]:checked').value;
    comentario = document.getElementById('comentarioUsuario').value;

    document.getElementById('inputDos').value = oracionFinal(nombre, material, dimension, comentario);
}
