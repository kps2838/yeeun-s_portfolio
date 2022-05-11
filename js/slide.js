$(function(){
    let w = window.innerWidth;
    console.log(w);
    $(window).resize(function(){
        location.reload()
    })
    let slideNum = 0;
        let position = 0;

        $('#website .prev').click(function(){
            const target = $('#works .slide .box_group .bg_box');
            target.removeClass("on"),
            void target.outerWidth(),
            target.addClass("on");
            if(slideNum > 0){
                position += w;
                $('#works .contents .slide').css('transform', `translateX(${position}px)`);
                slideNum = slideNum-1;
                $(this).find('img').attr('src', './images/prev_btn.svg');
                $('#works .next').find('img').attr('src', './images/next_btn.svg');
            }
            if(slideNum == 0){
                $('#works .contents .slide').css('transform', `0`);
                $(this).find('img').attr('src', './images/prev_btn_done.svg');
            }
        })

        $('#website .next').click(function(){
            const target = $('#works .slide .box_group .bg_box');
            target.removeClass("on"),
            void target.outerWidth(),
            target.addClass("on");
            if(slideNum < 2){
                position -= w;
                $('#works .contents .slide').css('transform', `translateX(${position}px)`);
                slideNum = slideNum+1;
                $('#works .prev').find('img').attr('src', './images/prev_btn.svg');
                $(this).find('img').attr('src', './images/next_btn.svg');

            }
            if(slideNum == 2){
                $('#works .contents .slide').css('transform', `${4 * w}`);
                $(this).find('img').attr('src', './images/next_btn_done.svg');
            }
        })

        // 모바일 작품
        $('#mobile .prev').click(function(){
            const target = $('#works .slide .box_group .bg_box');
            target.removeClass("on"),
            void target.outerWidth(),
            target.addClass("on");
            if(slideNum > 0){
                position += w;
                $('#works .contents .slide').css('transform', `translateX(${position}px)`);
                slideNum = slideNum-1;
                $(this).find('img').attr('src', './images/prev_btn.svg');
                $('#works .next').find('img').attr('src', './images/next_btn.svg');

            }
            if(slideNum == 0){
                $('#works .contents .slide').css('transform', `0`);
                $(this).find('img').attr('src', './images/prev_btn_done.svg');
            }
        })

        $('#mobile .next').click(function(){
            const target = $('#works .slide .box_group .bg_box');
            target.removeClass("on"),
            void target.outerWidth(),
            target.addClass("on");
            if(slideNum < 1){
                position -= w;
                $('#works .contents .slide').css('transform', `translateX(${position}px)`);
                slideNum = slideNum+1;
                $('#works .prev').find('img').attr('src', './images/prev_btn.svg');
                $(this).find('img').attr('src', './images/next_btn.svg');

            }
            if(slideNum == 1){
                $('#works .contents .slide').css('transform', `${4 * w}`);
                $(this).find('img').attr('src', './images/next_btn_done.svg');
            }
        })

        // 반응형 작품
        $('#responsive .prev').click(function(){
            const target = $('#works .slide .box_group .bg_box');
            target.removeClass("on"),
            void target.outerWidth(),
            target.addClass("on");
            if(slideNum > 0){
                position += w;
                $('#works .contents .slide').css('transform', `translateX(${position}px)`);
                slideNum = slideNum-1;
                $(this).find('img').attr('src', './images/prev_btn.svg');
                $('#works .next').find('img').attr('src', './images/next_btn.svg');

            }
            if(slideNum == 0){
                $('#works .contents .slide').css('transform', `0`);
                $(this).find('img').attr('src', './images/prev_btn_done.svg');
            }
        })

        $('#responsive .next').click(function(){
            const target = $('#works .slide .box_group .bg_box');
            target.removeClass("on"),
            void target.outerWidth(),
            target.addClass("on");
            if(slideNum < 1){
                position -= w;
                $('#works .contents .slide').css('transform', `translateX(${position}px)`);
                slideNum = slideNum+1;
                $('#works .prev').find('img').attr('src', './images/prev_btn.svg');
                $(this).find('img').attr('src', './images/next_btn.svg');

            }
            if(slideNum == 1){
                $('#works .contents .slide').css('transform', `${4 * w}`);
                $(this).find('img').attr('src', './images/next_btn_done.svg');
            }
        })


        // 작품 탭
        $('#works .category > button').click(function(){
        $('.category > button').removeClass('on');
        $(this).addClass('on');
        $('#works .contents .slide').css('transform', `translateX(0)`);
        slideNum=0; position = 0;
        $('#works .contents .prev').find('img').attr('src', './images/prev_btn_done.svg');
        $('#works .contents .next').find('img').attr('src', './images/next_btn.svg');
      });
      
      $('#works .category > button').eq(0).click(function(){
        $('#works .contents').removeClass('on');
        $('#responsive').addClass('on');
      })

      $('#works .category > button').eq(1).click(function(){
        $('#works .contents').removeClass('on');
        $('#website').addClass('on');
      })

      $('#works .category > button').eq(2).click(function(){
        $('#works .contents').removeClass('on');
        $('#mobile').addClass('on');
      })

})