$(document).ready(function(){

    $("#add-burger").on("click", function(){

        var burgerName = $("#burger-text").val().trim();
        console.log(burgerName);

        $.post("/addburger", {burger:burgerName}, function(res){
            console.log(res);
        })

    });

    $(".eat").on("click", function(){
        $.post("/addburger", {burger:burgerName}, function(res){
            console.log(res);
        })
        console.log($(this).attr("data-id"))
    })


});