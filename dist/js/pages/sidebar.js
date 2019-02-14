$('.main-sidebar').mouseenter(function () {
    $('body').removeClass('sidebar-collapse');
});
$('.main-sidebar').mouseleave(function () {
    $('body').addClass('sidebar-collapse');
});
let in_to = document.querySelectorAll('.into'),
    conceal_o = document.querySelectorAll('.conceal_o'),
    conceal_t = document.querySelectorAll('.conceal_t');
in_to.forEach(function (item,index) {
   item.onmouseenter = function () {
      conceal_o[index].style.display = 'block';
      conceal_t[index].style.display = 'block';
   } ;
   item.onmouseleave = function () {
       conceal_o[index].style.display = 'none';
       conceal_t[index].style.display = 'none';
   }
});
