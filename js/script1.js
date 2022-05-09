$('.sub2.two').hide()
$('.sub1.one a').click(function(e){
    e.preventDefault();
    let th=$('.sub1.one a').next();
    if(th.is(':visible')){
        th.slideUp()
    }else{
        th.slideDown()
    };
});
$('.sub2.two2').hide()
$('.sub1.one1 a').click(function(e){
    e.preventDefault();
    let th=$(this).next();
    if(th.is(':visible')){
        th.slideUp()
    }else{
        th.slideDown()
    };
});
