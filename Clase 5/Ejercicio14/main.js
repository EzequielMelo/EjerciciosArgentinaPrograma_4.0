function sumarNombre(nombre) 
{
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(nombre));
    ul.appendChild(li);
}

btnSumarNombres.onclick = function(event)
{
    event.preventDefault();
    var nombre;

    nombre = document.getElementById('inputUno').value;

    sumarNombre(nombre);

    document.getElementById('inputUno').value = "";
}