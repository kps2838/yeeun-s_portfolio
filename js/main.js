$(function(){

  // 스크롤 메뉴 효과
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var about_scroll = $('#about').offset().top;
        var works_scroll = $('#works').offset().top;
        var contact_scroll = $('#contact').offset().top;

        if (scroll < about_scroll) {
            $("#gnb > ul > li > a").css("color" , "#fff");
            $("#gnb .border").css("background-color" , "#fff");
            $("#gnb > ul > li").eq(0).find('a').css('color','#ff0000')
          }

        if (scroll >= about_scroll && scroll < works_scroll) {
          $("#gnb > ul > li > a").css("color" , "#252C65");
          $("#gnb .border").css("background-color" , "#252C65");
          $("#gnb > ul > li").eq(1).find('a').css('color','#ff0000')
        }

        if (scroll >= works_scroll && scroll < contact_scroll) {
            $("#gnb > ul > li > a").css("color" , "#fff");
            $("#gnb .border").css("background-color" , "#fff");
            $("#gnb > ul > li").eq(2).find('a').css('color','#ff0000')
          }

          if (scroll >= contact_scroll){
            $("#gnb > ul > li > a").css("color" , "#252C65");
            $("#gnb .border").css("background-color" , "#252C65");
            $("#gnb > ul > li").eq(1).find('a').css('color','#ff0000')
          }
      })


  
})