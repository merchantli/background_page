const userr = document.querySelectorAll('.u_ser');
const pover = document.querySelector('.popoverr');
const closee = document.querySelector('.closee');
const acquire = document.querySelector('.acquire');
let allHtml = '',
    printHtml = '',
    printStart = '',
    printEnd = '';
userr.forEach((item,index)=>{
    item.addEventListener('click',function (e) {
        e.stopPropagation();
        pover.style.display = 'block';
    });
    closee.addEventListener('click',function (e) {
        e.stopPropagation();
        pover.style.display = 'none';
    });
});
acquire.addEventListener('click',function (e) {
    e.stopPropagation();
    allHtml = window.document.body.innerHTML;
    printStart = "<!--startprint-->";
    printEnd = "<!--endprint-->";
    printHtml = allHtml.substr(allHtml.indexOf(printStart)+17);
    printHtml = printHtml.substring(0,printHtml.indexOf(printEnd));
    window.document.body.innerHTML = printHtml;
    window.print();
    window.document.body.innerHTML = allHtml;
});