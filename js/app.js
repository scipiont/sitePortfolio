$(function(){
    const worksSlider =  $('[data-slider="slick"]');
/*Filter*/
    // let filter = $("[data-filter]");

    // filter.on("click", function(event){
    //     event.preventDefault();
    //     // console.log(1);
    //     let cat = $(this).data('filter');
    //     if (cat == 'all') {
    //         $("[data-cat]").removeClass('hide');
    //     } else {
    //         $("[data-cat]").each(function(){
    //             let workCat = $(this).data('cat');
    //             if (workCat != cat) {
    //                 $(this).addClass('hide');
    //             } else {
    //                 $(this).removeClass('hide');
    //             }
    //         });
    //     }
       /*Filter*/
    let filter = $("[data-filter]");

    filter.on("click", function(event){
        event.preventDefault();
        // console.log(1);
       
        let cat = $(this).data('filter');
        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
            $("[data-cat]").removeClass('show');
        } else {
            $("[data-cat]").each(function(){
                let workCat = $(this).data('cat');
                if (workCat != cat) {
                    $(this).addClass('hide');
                    $(this).removeClass('show');
                  
                } else {
                    $(this).removeClass('hide');
                    $(this).addClass('show');
                 
                }
            });
        }
        // let port = $('.portfolio__col--onload').hasClass('hide')
    //    let port = $('.portfolio__col--onload');
    //      if  (port.hasClass('hide') === false) {
            
    //         $('.portfolio__col--onload').css('display' , 'block');
            
    //    } else if (port.hasClass('show') === false )  {
    //          $('.portfolio__col--onload').css('display' , 'none');
            
    //    } else {
    //     return
    //    }



    });
 



    // });
   /*Modal*/
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    modalCall.on("click", function(event){
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        setTimeout(function(){
            $(modalId).find(".modal__dialog").css({
                transform: "rotateY(0)"
            });
        }, 300);
    $('[data-slider="slick"]').slick('setPosition');
        

    });

    modalClose.on("click", function(event){
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "rotateY(90deg)"
        });
       
        setTimeout(function() {
             modalParent.removeClass('show');
             $("body").removeClass('no-scroll');
        }, 300);

        // $(modalParent).removeClass('show');
        // $("body").removeClass('no-scroll');
    });

    $(".modal").on("click", function(event){
        let $this = $(this);
        $this.find(".modal__dialog").css({
            transform: "rotateY(90deg)"
        });
        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
       }, 300);

        // $(this).removeClass('show');
        // $("body").removeClass('no-scroll');
    });

    $(".modal__dialog").on("click", function(event){
       event.stopPropagation();
    });


/* Slider https://kenwheeler.github.io/slick/ */
    $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $(".slickPrev").on("click", function(event){
        event.preventDefault();
        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');
        currentSlider.slick('slickPrev');
    });
    $(".slickNext").on("click", function(event){
        event.preventDefault();
        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');
        currentSlider.slick('slickNext');
    });




     /* Smooth Scroll */
     $("[data-scroll]").on("click",function(event){
        event.preventDefault();
        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        $("#nav a").removeClass("active");
       $this.addClass("active")     
          //  console.log(blockOffset);
       $("html, body").animate({
            scrollTop: blockOffset
       }, 500);
     });


 /*Load More Works*/


    //  $("#btnsm").on("click", function(event){
    //  event.preventDefault();
  
    //  let cct = $(this).data(".portfolio__col--onload");
    //  cct.addClass('active');
    //  });
    $("#btnsm").on("click", function(event) {
        event.preventDefault();
       
        // let port = $('.portfolio__col--onload')
        //  if (port.classList.contains('.hide')) {
        //      $('.portfolio__col--onload').css('display' , 'none');
            
        //  } else {
        //      $('.portfolio__col--onload').css('display' , 'block');
        //  }
       



       // $('.portfolio__col--onload').css('display' , 'block');
        $('.portfolio__col--onload').addClass('show');
        // $('#b2').css('display' , 'block');
        // $('#b3').css('display' , 'block');
        // $('#b4').css('display' , 'block');
        // $('#b5').css('display' , 'block');
        // $('#b6').css('display' , 'block');


        // $('#b1').css('display' , 'block');
        // $('#b2').css('display' , 'block');
        // $('#b3').css('display' , 'block');
        // $('#b4').css('display' , 'block');
        // $('#b5').css('display' , 'block');
        // $('#b6').css('display' , 'block');
    });
    // $('#bazkom').addClass('portfolio__col--onload');
    /*Mobile nav======================================= */
    const navToggle =  $("#navToggle");
    const nav = $("#nav");
    navToggle.on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show");
    });

   

});





 document.getElementById('go_to_mnogomeda').onclick = function(event) {
     // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
     window.open('https://xn--80afd4abehb6o.xn--p1ai', '_blank');
 };

 document.getElementById('go_to_mnogomeda1').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://xn--80afd4abehb6o.xn--p1ai', '_blank');
};
 document.getElementById('go_to_gilev').onclick = function(event) {
     // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
     window.open('https://gilev.pw', '_blank');
 };
 document.getElementById('go_to_gilev1').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://gilev.pw', '_blank');
};

document.getElementById('multiconverter').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://multiconverter.ru', '_blank');
};

document.getElementById('multiconverter1').onclick = function(event) {
   // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
   window.open('https://multiconverter.ru', '_blank');
};

document.getElementById('figma1').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://www.figma.com/file/e9JZhIE9fnoUCFzYqLRi6B/Lead-Lesson?node-id=0%3A1&t=tHdqWBXFHzvBrULf-1', '_blank');
 };

 document.getElementById('urr').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://ug-rr.ru/', '_blank');
 };

 document.getElementById('urr1').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://ug-rr.ru/news.html', '_blank');
 };
 document.getElementById('tren').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://mukonin.ru', '_blank');
 };

 document.getElementById('paseka').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://paseka-online-shop.firebaseapp.com/', '_blank');
 };

 document.getElementById('paseka1').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://paseka-online-shop.web.app/', '_blank');
 };

 document.getElementById('clock1').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://mukonin.online', '_blank');
 };

 document.getElementById('clock2').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://mukonin.online', '_blank');
 };

 document.getElementById('figma2').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://www.figma.com/file/XwV9wKSv0zSHo2Zj5MPWT7/Lead-Filter?node-id=0%3A1&t=OdDnOeJzPT9ZPoOb-1', '_blank');
 };

 document.getElementById('figma3').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://www.figma.com/file/XwV9wKSv0zSHo2Zj5MPWT7/Lead-Filter?node-id=0%3A1&t=OdDnOeJzPT9ZPoOb-1', '_blank');
 };

 document.getElementById('school1').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://project6707065.tilda.ws/', '_blank');
 };

 document.getElementById('school2').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('http://project6707065.tilda.ws/besplatno', '_blank');
 };

 document.getElementById('guess1').onclick = function(event) {
    // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
    window.open('https://GuessGame.scipiont.repl.co', '_blank');
 };

 