
$(function() {

    var winScrollTop;
    var scrollBody = $('.wrap');
    var section = $('section');
    var actView = $('.actView');
    var fixView = $('.fixView');
    var scrollHeight;
    var scrollThisTop;
    var bodyOffsetTop;
    var bodyScrollTop;
    var scrollPercent;
    var percent;
    var offsetTop = [];
    var offsetBottom = [];
    var fastIn;
    var moveOffsetTop;
    var moveThisTop; 
    var moveSpeed;
    var movePercent; 
    var moveStartValue; 
    var moveDistance; 


    function setProperty() {
        winScrollTop = $(window).scrollTop();
        scrollHeight = scrollBody.height();
        scrollThisTop = scrollHeight - winScrollTop
        bodyOffsetTop = scrollBody.offset().top;
        bodyScrollTop = winScrollTop - bodyOffsetTop;
        scrollPercent = bodyScrollTop / scrollThisTop;
        percent = scrollPercent * 100;

        fastIn = $(window).height() / 2;
        actView.each(function(index,obj) {
                offsetTop[index] = $(obj).offset().top - fastIn * 1.5;
                offsetBottom[index] = offsetTop[index] + $(obj).height() + fastIn;
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
    }
    
    function sectionActive(index) {
        if(index === 0) {
            actView.eq(0).addClass('active');
        } else if(index === 1) {
            actView.eq(1).addClass('active');
            fixView.eq(1).removeClass('active');
        } else if(index === 2) {
            actView.eq(2).addClass('active');
            fixView.eq(1).addClass('active');
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
        moveOffsetTop = section.eq(10).offset().top / 1.1;
        setProperty(moveThisTop, movePercent);
        var moveDistance1;
        moveDistance1 = Math.max(0 , Math.min(50, movePercent)); 
		
		$('.fixView02 img').css({ 
			transform : 'translateY('+ - moveDistance1 / 4 +'%) rotate(-7deg)'  
		});
	};


    function scrollFunc() { 
        setProperty();
        checkInSection();
        parallax1();
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






