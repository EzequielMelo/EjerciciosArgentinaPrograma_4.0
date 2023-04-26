let numeros = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

btnGenerar.onclick = function(event)
{
    event.preventDefault();
    var myDiv = $("#numbers");
    var paragraph = document.createElement("p");
    var numDesordenados;

    numDesordenados = "Numeros: ";
    for(var i=0; i<10; i++)
    {
        numeros[i] = getRandomInt(11);

        numDesordenados += numeros[i]+" ";
    }
    paragraph.textContent = numDesordenados;
    myDiv.append(paragraph);


}

btnMostrar.onclick = function(event)
{
    event.preventDefault();

    list.innerHTML = "";

    numeros.sort((a, b) => a - b);

    for(i = 0; i < numeros.length; i++)
    {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(numeros[i]));
        ul.appendChild(li);
    }
}
