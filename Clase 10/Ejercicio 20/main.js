$("#div").dblclick(function(){
    var x = $("#div").height();
    if( x == 60 ){
    $(this).css("width","250px")
    $(this).css("height","250px")
    }
    if( x == 240 ){
    $(this).css("width","800px")
    $(this).css("height","70px")
    }
})



