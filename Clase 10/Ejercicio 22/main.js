$("#select").change(function(){
    var text = "" 
    $( "select option:selected" ).each(function() {
        text += $( this ).text() + " ";
    });
    console.log(text)
})


