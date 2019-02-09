$('.main-sidebar').mouseenter(function () {
    console.log(1);
    $('body').removeClass('sidebar-collapse');
    $('body').addClass('sidebar-expanded-on-hover');
});
$('.main-sidebar').mouseleave(function () {
    $('body').removeClass('sidebar-expanded-on-hover');
    $('body').addClass('sidebar-collapse');
});