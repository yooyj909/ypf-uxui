
$(function() {

    var winScrollTop;
    var section = $('section');
    var changeTxt = $('.pgroup p');
    var scrollBody = $('.wrap');
    var scrollHeight;
    var scrollThisTop;
    var bodyOffsetTop;
    var bodyScrollTop;
    var scrollPercent;
    var percent;
    var offsetTop = [];
    var offsetBottom = [];
    var fastIn;
    var sectOff;


    function setProperty() {
        winScrollTop = $(window).scrollTop();
        scrollHeight = scrollBody.height();
        scrollThisTop = scrollHeight - winScrollTop
        bodyOffsetTop = scrollBody.offset().top;
        bodyScrollTop = winScrollTop - bodyOffsetTop;
        scrollPercent = bodyScrollTop / scrollThisTop;
        percent = scrollPercent * 100;

        fastIn = $(window).height() / 2;
        section.each(function(index,obj) {
            offsetTop[index] = $(obj).offset().top - fastIn * 1.1;
            offsetBottom[index] = offsetTop[index] + $(obj).height() + fastIn;
        });

       
       

    };
    
    function checkInSection() {

        if(winScrollTop >= offsetTop[0] && offsetBottom[0] > winScrollTop) {
            sectionActive(0);
        } 
        else if(winScrollTop >= offsetTop[1] && offsetBottom[1] > winScrollTop) {
            sectionActive(1);
        } 
        else if(winScrollTop >= offsetTop[2] && offsetBottom[2] > winScrollTop) {
            sectionActive(2);
        } 

       
    }
    
    function sectionActive(index) {
        if(index === 0){
            changeTxt.eq(0).addClass('active');
            section.eq(0).addClass('active');
        }else{
            changeTxt.eq(0).removeClass('active');
        }
        if(index === 1){
            changeTxt.eq(1).addClass('active');
        }else{
            changeTxt.eq(1).removeClass('active');
        }
       if(index === 2){
            changeTxt.eq(2).addClass('active');
        }else{
            changeTxt.eq(2).removeClass('active');
        }
    };
    
    function posT(){

        if($(window).width() > 768) { 
            sectOff = section.eq(0).children('div').offset().top;
            changeTxt.eq(0).css({
                top : sectOff - 10 +'px' 
            })
            changeTxt.eq(1).css({
                top : sectOff - 10 +'px' 
            })
        }
    }


    

    function scrollFunc() { 
        setProperty();
        checkInSection();
        posT();
    }

    function init() {
        scrollFunc();
    };

    $(window).scroll(function () {
        scrollFunc();

    });

    $(window).resize(function() {
        scrollFunc();
    });

    init();
    

});






