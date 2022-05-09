$('.nav ul li').hover(function(){
    $(this).find('.navtwo').stop().slideDown(200)
    $('.nav').find('.bg').stop().animate({height:370},200);
    $('.bg').find('.bgleft').stop().animate({height:370},200);
},function(){
    $(this).find('.navtwo').stop().slideUp(200)
    $('.nav').find('.bg').stop().animate({height:0},200);
    $('.bg').find('.bgleft').stop().animate({height:0},200);
});

$('.width1').hover(function(){
    $(this).find('.width1-1').stop().slideDown(200)
    $('.nav').find('.bg').stop().animate({height:506},200);
    $('.bg').find('.bgleft').stop().animate({height:506},200);
},function(){
    $(this).find('.width1-1').stop().slideUp(200)
    $('.nav').find('.bg').stop().animate({height:0},200);
    $('.bg').find('.bgleft').stop().animate({height:0},200);
});

$('.width2').hover(function(){
    $(this).find('.width2-1').stop().slideDown(200)
    $('.nav').find('.bg').stop().animate({height:528},200);
    $('.bg').find('.bgleft').stop().animate({height:528},200);
},function(){
    $(this).find('.width2-1').stop().slideUp(200)
    $('.nav').find('.bg').stop().animate({height:0},200);
    $('.bg').find('.bgleft').stop().animate({height:0},200);
});

let banner=$('.section-visual>ul>li');
let current=0;

setInterval(function(){
    let prev=banner.eq(current);
    go(prev,1,0);
    current++;

    if(current==banner.size()) current=0;
    let next=banner.eq(current);
    go(next,0,1);
},4000);

function go(tg,start,end){
    tg.css('opacity',start).stop().animate({opacity:end},1500)
};


$('.closeBtn').click(function(){
    $('.topSlider').stop().animate({marginTop:-165},500)
})


let move=$('.imgUl')
let liWidth=$('.imgUl li').width();
let leftArrow=$('.leftbtn')
let stopArrow=$('.stopbtn')
let rightArrow=$('.rightbtn')
let timer

slide()
function slide(){
    timer=setInterval(function(){
        move.animate({left:-266},500,function(){
        $(this).children('li:first').insertAfter($(this).children('li:last')); 
        $(this).css({left:0}) 
        });
    },2000);
};
$('.body4').hover(function(){
    clearInterval(timer)
},function(){
    slide()
});

rightArrow.click(function(){
    move.stop().animate({left:-liWidth},500,function(){
        $(this).children('li:first').insertAfter($(this).children('li:last')); 
        $(this).css({left:0})
        });
});

leftArrow.click(function(){
    move.find('li:last').insertBefore(move.find('li:first'));
    move.css({left:-liWidth}).stop().animate({left:0},500);

});
stopArrow.click(function(){
    clearInterval(timer)
})

let move2=$('.mark ul')
let liWidth2=move2.find('li').width()+20
let leftBtn=$('.back')
let stopBtn=$('.stop')
let rightBtn=$('.go')
let timer2;

slide2()
function slide2(){
    timer2=setInterval(function(){
        move2.animate({left:-liWidth2},500,function(){
        $(this).children('li:first').insertAfter($(this).children('li:last'))
        $(this).css({left:0})
        });
    },3000);
}
$('.mark').hover(function(){
    clearInterval(timer2)
},function(){
    slide2()

});
rightBtn.click(function(){
    move2.stop().animate({left:-liWidth2},500,function(){
        $(this).children('li:first').insertAfter($(this).children('li:last'))
        $(this).css({left:0})
        });

});
leftBtn.click(function(){
    move2.find('li:last').insertBefore(move2.find('li:first'));
    move2.css({left:-liWidth2}).stop().animate({left:0},500);
});

stopBtn.click(function(){
    clearInterval(timer2)
});
