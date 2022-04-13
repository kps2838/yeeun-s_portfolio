$(function(){

  // 스크롤 메뉴 효과
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var about_scroll = $('#about').offset().top;
        var works_scroll = $('#works').offset().top;
        var contact_scroll = $('#contact').offset().top;
        var skill_scroll = $('.profile .license').offset().top;

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
            $("#gnb > ul > li").eq(3).find('a').css('color','#ff0000')
          }

          if (scroll == skill_scroll){
            const skill = $('#skills > ul > li > .level_box .level');
            skill.removeClass("on"),
            void skill.outerWidth(),
            skill.addClass("on");
          }
      })


      // 팝업창

      $('#website .han #detail').click(function(){
        $('.workdetail .w_detail_01').addClass('on');
        $('#works .bg_black').addClass('on');
      })

      $('#website .sweet #detail').click(function(){
        $('.workdetail .w_detail_02').addClass('on');
        $('#works .bg_black').addClass('on');
      })

      $('#website .rbw #detail').click(function(){
        $('.workdetail .w_detail_03').addClass('on');
        $('#works .bg_black').addClass('on');
      })

      $('#website .uplus #detail').click(function(){
        $('.workdetail .w_detail_04').addClass('on');
        $('#works .bg_black').addClass('on');
      })

      $('#responsive .noroo #detail').click(function(){
        $('.workdetail .r_detail_01').addClass('on');
        $('#works .bg_black').addClass('on');
      })

      $('#responsive .roche #detail').click(function(){
        $('.workdetail .r_detail_02').addClass('on');
        $('#works .bg_black').addClass('on');
      })

      $('#others .nike #webpage').click(function(){
        $('.workdetail .o_detail_01').addClass('on');
      })

      $('#others .perfume #webpage').click(function(){
        $('.workdetail .o_detail_02').addClass('on');
      })

      $('#others .icecream #webpage').click(function(){
        $('.workdetail .o_detail_03').addClass('on');
      })

      $('#others .book #webpage').click(function(){
        $('.workdetail .o_detail_04').addClass('on');
      })


      $('.workdetail .close').click(function(){
        $('.workdetail > div').removeClass('on');
        $('#works .bg_black').removeClass('on');
      })

      $(document).mouseup(function (e){
        var LayerPopup = $(".workdetail > div");
        if(LayerPopup.has(e.target).length === 0){
          LayerPopup.removeClass("on");
          $('#works .bg_black').removeClass('on');
        }
      })

      $(document).mouseup(function (e){
        var LayerPopup = $(".workdetail.others > div > img");
        if(LayerPopup.has(e.target).length === 0){
          $(".workdetail.others > div").removeClass("on");
        }
      })

  
})