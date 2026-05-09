
$(function() {

    var winScrollTop;
    var header = $('header');
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
    }
    
    function sectionActive(index) {
        if(index === 1) {
            header.addClass('white');
        } else {
            header.removeClass('white');
        }
    };

    function contentIn() {

        setTimeout(function(){
			section.eq(0).addClass('active');
		});

        if(percent >= 2 && percent < 108){
            section.eq(1).addClass('active');
            
        }else{
            section.eq(0).removeClass('move');
            section.eq(1).removeClass('active');
        }

        if(percent >= 300){
            section.eq(3).addClass('active');
        }else{
            section.eq(3).removeClass('active');
        }

        if(percent >= 610) {
            section.eq(2).addClass('move');
        }else{
            section.eq(2).removeClass('move');
           
        }

    } 

    function rollingTxt(){

        var allText = $('.section02 article');
    
        var dis = (((winScrollTop - section.eq(1).offset().top - 300) / 100 * 100) / ((section.eq(1).height() - $(window).height()) / 3));
        var gap = 1;
        allText.each(function(index, arr) {
            $(arr).attr(
                'style',
                '--progress:' + (Math.max(0, dis - (index * gap))) + ''
            )
        })
    }

    function moveTxt() {
       
        moveSpeed = 1000;
        moveOffsetTop = section.eq(0).offset().top / 1.3;
        setProperty(moveThisTop, movePercent);
        var moveDistance1;
        moveDistance1 = Math.min(50, movePercent) ;
        
        if($(window).width() > 768) { 		
            $('.section01 .mainCopy p').eq(0).find('span').css({ 
                transform : 'translateX('+ moveDistance1 +'%)'
            });
            $('.section01 .mainCopy p').eq(1).find('span').css({
                transform : 'translateX('+ - moveDistance1 / 10 +'%)'
            })
    
        } 
		
		
	};

    function moveTxt2() {
        
        moveSpeed = 5000;
        moveStartValue = 0;
        moveOffsetTop = section.eq(2).offset().top / 1.3;
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
        moveOffsetTop = section.eq(2).offset().top + section.eq(2).find('h3').height() ; 
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
        checkInSection();
        contentIn();
        moveTxt();
        moveTxt2();
        moveList();
        rollingTxt();

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






