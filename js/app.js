$(function(){
    const worksSlider =  $('[data-slider="slick"]');
/*Filter*/
    let filter = $("[data-filter]");

    filter.on("click", function(event){
        event.preventDefault();
        // console.log(1);
        let cat = $(this).data('filter');
        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function(){
                let workCat = $(this).data('cat');
                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
       



    });
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
});





// document.getElementById('go_to_mnogomeda').onclick = function(event) {
//     // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
//     window.open('https://xn--80afd4abehb6o.xn--p1ai', '_blank');
// };

// document.getElementById('go_to_gilev').onclick = function(event) {
//     // window.location.href = 'https://xn--80afd4abehb6o.xn--p1ai';
//     window.open('https://gilev.pw', '_blank');
// };