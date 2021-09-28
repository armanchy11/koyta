$(function(){
    $(window).on('scroll',function(){
        var position =  $(window).scrollTop();
        if( position > 0){
            $("#main-menu").addClass("sticky-nav")
        }else{
            $("#main-menu").removeClass("sticky-nav")
        }


        if( position > 10){
            $('#scrtop').fadeIn(100)
        }else{
            $('#scrtop').fadeOut(100)
        }
    })

    $('#scrtop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
            
        },100)
    })
    
    $(window).on('load',function(){
        $('#preloader').fadeOut(1500)
    })
})