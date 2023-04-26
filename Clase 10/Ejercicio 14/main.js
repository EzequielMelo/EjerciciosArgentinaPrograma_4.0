$("#btn-noticia1").click(function(){
    $("#noticia1").addClass("col-md-8")
    $("#noticia2").removeClass("col-md-8")
    $("#noticia3").removeClass("col-md-8")
    $("#noticia1").css("font-size", "22px")
    $("#noticia2").css("font-size", "10px")
    $("#noticia3").css("font-size", "10px")
})
$("#btn-noticia2").click(function(){
    $("#noticia2").addClass("col-md-8")
    $("#noticia1").removeClass("col-md-8")
    $("#noticia3").removeClass("col-md-8")
    $("#noticia2").css("font-size", "22px")
    $("#noticia1").css("font-size", "10px")
    $("#noticia3").css("font-size", "10px")
})
$("#btn-noticia3").click(function(){
    $("#noticia3").addClass("col-md-8")
    $("#noticia1").removeClass("col-md-8")
    $("#noticia2").removeClass("col-md-8")
    $("#noticia3").css("font-size", "22px")
    $("#noticia2").css("font-size", "10px")
    $("#noticia1").css("font-size", "10px")
})



