
$(function() {

    var winScrollTop;
    var section = $('section');
    var scrollBody = $('.wrap');
    var projectList = $('.projectList li');
    var scrollHeight;
    var scrollThisTop;
    var bodyOffsetTop;
    var bodyScrollTop;
    var scrollPercent;
    var percent;
    var moveOffsetTop;
    var moveThisTop; 
    var moveSpeed;
    var movePercent; 
    var moveStartValue; 
    var moveDistance; 
    var offsetTop = [];
    var offsetBottom = [];
    var fastIn;


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

        moveThisTop = winScrollTop - moveOffsetTop; 
		movePercent = moveThisTop / moveSpeed * 100; 
		moveDistance = Math.max(moveStartValue - moveStartValue, Math.min(moveStartValue, moveStartValue - (moveStartValue * (movePercent/100)))); 

    };
    
    

    function moveTxt2() {
        
        moveSpeed = 3000;
        moveStartValue = 0;
        moveOffsetTop = section.eq(0).offset().top / 4;
        setProperty(moveThisTop, movePercent);
        var moveDistance2;
        moveDistance2 = Math.max(0 , Math.min(50, movePercent)) ; 
		
		$('.section03 h3').css({ 
			transform : 'translateX('+ - moveDistance2 +'%)'
		});

	};

    

   
    function moveList() {
               
        moveSpeed = 800;
        moveStartValue = 5; 
        moveOffsetTop = section.eq(0).offset().top + section.eq(0).find('h3').height() ; 
        setProperty(moveThisTop, movePercent, moveDistance);
        
        projectList.eq(0).css({ 
			transform : 'translateY('+ moveDistance * 1 +'vw)'
		});

        projectList.eq(1).css({ 
			transform : 'translateY('+ moveDistance * 1.8 +'vw)'
		});

        projectList.eq(2).css({ 
			transform : 'translateY('+ moveDistance * 3 +'vw)'
		});

        projectList.eq(3).css({ 
			transform : 'translateY('+ moveDistance * 4 +'vw)'
		});

	};


    

    function scrollFunc() { 
        setProperty();
        moveTxt2();
        moveList();

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






