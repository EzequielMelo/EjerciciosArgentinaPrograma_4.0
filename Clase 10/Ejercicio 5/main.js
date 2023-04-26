let nombres =  ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

function mostrar(div, aMostrar)
{
    var myDiv = $("#"+div);
    var paragraph = document.createElement("p");
    paragraph.textContent = aMostrar;
    myDiv.append(paragraph);
}

btnMostrarTodo.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("todosLosNombres").innerHTML = "";
    var parrafo = "Todos los nombres:\n";

    nombres.forEach(element => {
        parrafo += element+" | ";
    });

    mostrar("todosLosNombres", parrafo);
}

btnMostrarConSeis.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("nombresConSeis").innerHTML = "";
    var filtro = nombres.filter(p => p.length >= 6)
    var parrafo = "Nombres con 6 letras o mas:\n";


    filtro.forEach(element => {
        parrafo += element+" | ";
    });

    mostrar("nombresConSeis", parrafo);
}

btnMostrarConM.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("nombresConM").innerHTML = "";
    var filtro = nombres.filter(p => p.startsWith("M",0))
    var parrafo = "Nombres con inicial M:\n";


    filtro.forEach(element => {
        parrafo += element+" | ";
    });

    mostrar("nombresConM", parrafo);
}

btnMostrarOrdenados.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("nombresOrdenados").innerHTML = "";
    var copiaNombres = [...nombres]
    var parrafo = "Nombres ordenados alfabeticamente:\n";

    copiaNombres.sort();
    copiaNombres.forEach(element => {
        parrafo += element+" | ";
    });

    mostrar("nombresOrdenados", parrafo);
}

btnMostrarIniciales.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("nombresIniciales").innerHTML = "";
    var parrafo = "Iniciales de cada nombre:\n";
    var inicialesNombres = nombres.map(function(n)
    {
        return n[0];
    })

    inicialesNombres.forEach(element => {
        parrafo += element+" | ";
    });

    mostrar("nombresIniciales", parrafo);
}

btnMostrarEnMayus.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("nombresEnMayus").innerHTML = "";
    var parrafo = "Nombres en mayusculas:\n";
    var nombresMayus = nombres.map(function(n)
    {
        return n.toUpperCase();
    })

    nombresMayus.forEach(element => {
        parrafo += element+" | ";
    });

    mostrar("nombresEnMayus", parrafo);
}

btnMostrarNombresConJ.onclick = function(event)
{
    event.preventDefault();
    document.getElementById("nombresConJ").innerHTML = "";
    var parrafo = "Nombres con J inicial:\n";

    nombres.forEach(element => {

        if(element[0] == "J" || element[0] == "j")
        {
            parrafo += element+" | ";
        }
    });

    mostrar("nombresConJ", parrafo);
}
