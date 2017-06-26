$(function(){
    $("a").on('click', function(event){
        if (this.hash !== ""){
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            })
        }
    })

    $("#mobile-nav-open").on('click', function(event){
        event.preventDefault();
        $(".mobile-nav").css("width", "250px");
    });

    $("#mobile-nav-close").on('click', function(event){
        event.preventDefault();
        $(".mobile-nav").css("width", "0px");
    })


    $("#showcase").fadeIn(2500);
});