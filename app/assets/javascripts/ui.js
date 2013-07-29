function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('body').animate({scrollTop: aTag.offset().top - 50}, 'slow');
    return false;
}
