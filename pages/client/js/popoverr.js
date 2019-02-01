const userr = document.querySelectorAll('.u_ser');
const pover = document.querySelector('.popoverr');
const acquire = document.querySelector('.acquire');
const close_btn = document.querySelector('.top_close');
console.log(close_btn);
console.log(close_btn);
let allHtml = '',
    printHtml = '',
    printStart = '',
    printEnd = '';
userr.forEach((item,index)=>{
    item.addEventListener('click',function (e) {
        e.stopPropagation();
        pover.style.display = 'block';
    });
    close_btn.addEventListener('click',function (e) {
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