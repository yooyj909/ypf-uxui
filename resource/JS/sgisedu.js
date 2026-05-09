
$(function() {

    var winScrollTop;
    var header = $('header');
    var scrollBody = $('.wrap');
    var section = $('section');
    var actView = $('.actView');
    var fixView = $('.fixView');
    var scrollHeight;
    var scrollThisTop;
    var bodyOffsetTop;
    var bodyScrollTop;
    var scrollPercent;
    var offsetTop = [];
    var offsetBottom = [];
    var offsetTop2 = [];
    var offsetBottom2 = [];
    var fastIn;
    var moveOffsetTop;
    var moveThisTop; 
    var moveSpeed;
    var movePercent; 
    var moveStartValue; 


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
                offsetTop[index] = $(obj).offset().top;
                offsetBottom[index] = offsetTop[index] + $(obj).outerHeight(true);
         });

        actView.each(function(index,obj) {
            offsetTop2[index] = $(obj).offset().top - fastIn * 1.5;
            offsetBottom2[index] = offsetTop2[index] + $(obj).height() + fastIn;
        });

        moveThisTop = winScrollTop - moveOffsetTop; 
		movePercent = moveThisTop / moveSpeed * 100; 
		moveDistance = Math.max(moveStartValue - moveStartValue, Math.min(moveStartValue, moveStartValue - (moveStartValue * (movePercent/100)))); 


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
        else if(winScrollTop >= offsetTop[3] && offsetBottom[3] > winScrollTop) {
            sectionActive(3);
        } 
        else if(winScrollTop >= offsetTop[4] && offsetBottom[4] > winScrollTop) {
            sectionActive(4);
        } 
        else if(winScrollTop >= offsetTop[5] && offsetBottom[5] > winScrollTop) {
            sectionActive(5);
        } 
        else if(winScrollTop >= offsetTop[6] && offsetBottom[6] > winScrollTop) {
            sectionActive(6);
        }
        else if(winScrollTop >= offsetTop[7] && offsetBottom[7] > winScrollTop) {
            sectionActive(7);
        } 
        else if(winScrollTop >= offsetTop[8] && offsetBottom[8] > winScrollTop) {
            sectionActive(8);
        } 
        else if(winScrollTop >= offsetTop[9] && offsetBottom[9] > winScrollTop) {
            sectionActive(9);
        } 
        else if(winScrollTop >= offsetTop[10] && offsetBottom[10] > winScrollTop) {
            sectionActive(10);
        }
    }
    
    function sectionActive(index) {
        if(index === 0){
            header.addClass('white');
        }
        else if(index === 1){
            header.removeClass('white');
        }
        else if(index === 2){
            header.addClass('white');
        }
        else if(index === 6){
            header.addClass('white');
        }
        else if(index === 7){
            header.removeClass('white');
        }
        else if(index === 8){
            header.removeClass('white');
        }
        else if(index === 9){
            header.addClass('white');
        }
        else if(index === 10){
            header.removeClass('white');
        }
        
    };

    function checkInActView() {
        if(winScrollTop >= offsetTop2[0] && offsetBottom2[0] > winScrollTop) {
            actViewActive(0);
        } 
        else if(winScrollTop >= offsetTop2[1] && offsetBottom2[1] > winScrollTop) {
            actViewActive(1);
        } 
        else if(winScrollTop >= offsetTop2[2] && offsetBottom2[2] > winScrollTop) {
            actViewActive(2);
        } 
        else if(winScrollTop >= offsetTop2[3] && offsetBottom2[3] > winScrollTop) {
            actViewActive(3);
        } 
        else if(winScrollTop >= offsetTop2[4] && offsetBottom2[4] > winScrollTop) {
            actViewActive(4);
        } 
        else if(winScrollTop >= offsetTop2[5] && offsetBottom2[5] > winScrollTop) {
            actViewActive(5);
        } 
        else if(winScrollTop >= offsetTop2[6] && offsetBottom2[6] > winScrollTop) {
            actViewActive(6);
        }
        else if(winScrollTop >= offsetTop2[7] && offsetBottom2[7] > winScrollTop) {
            actViewActive(7);
        }  
    }

    function actViewActive(index) {
        if(index === 0) {
            actView.eq(0).addClass('active');
        } else if(index === 1) {
            actView.eq(1).addClass('active');
            fixView.eq(1).removeClass('active');
        } else if(index === 2) {
            actView.eq(2).addClass('active');
        } else if(index === 3) {
            actView.eq(3).addClass('active');
        } else if(index === 4) {
            actView.eq(4).addClass('active');
        } else if(index === 5) {
            actView.eq(5).addClass('active');
        } else if(index === 6) {
            actView.eq(6).addClass('active');
        } else if(index === 7) {
            actView.eq(7).addClass('active');
        }
    };

     function parallax1() {
        
        moveSpeed = 5000;
        moveStartValue = 0;
        moveOffsetTop = fixView.eq(0).offset().top / 2.5;
        setProperty(moveThisTop, movePercent);
        var moveDistance1;
        moveDistance1 = Math.max(0 , Math.min(5000, movePercent)) ; 
		
		$('.intro img').css({ 
			transform : 'translateY('+ - moveDistance1 +'%)'  
		});

	};

    function typo(){

        $('.typography ol>li').children('.swiperTypo').mouseenter(function(){
            
            $('.typography ol>li').children('.swiperTypo').css({
                opacity: 0.1
            });
            $(this).css({
                opacity: 1
            })
 
         }).mouseleave(function(){
 
            $('.typography ol>li').children('.swiperTypo').css({
                opacity: 1
            });
 
         });
    };



    function scrollFunc() { 
        setProperty();
        checkInSection();
        checkInActView();
        parallax1();
        typo();

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






