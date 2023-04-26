$("#p4").hide()
$("#p5").hide()
$("#p6").hide()

$("#div").click(function(){
    $("#p1").toggle(1000)
    $("#p2").toggle(1000)
    $("#p3").toggle(1000, function(){
        $("#p4").toggle(1000)
        $("#p5").toggle(1000)
        $("#p6").toggle(1000)
    })
})


