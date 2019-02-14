const userr = document.querySelectorAll('.u_ser');
const pover = document.querySelector('.popoverr');
const acquire = document.querySelector('.acquire');
const close_btn = document.querySelector('.top_close');
let allHtml = '',
    printHtml = '',
    printStart = '',
    printEnd = '';
//点击用户名时出现模态框
userr.forEach((item,index)=>{
    item.addEventListener('click',function (e) {
        e.stopPropagation();
        pover.style.display = 'block';
        //发起ajax
        // $.get({
        //     url:"http://47.107.72.6:8000/background/get_social_bill_detail/订单编号/",
        //     callback : function (data) {
        //         console.log(data);
        //     }
        // });
    });
    close_btn.addEventListener('click',function (e) {
        e.stopPropagation();
        pover.style.display = 'none';
    });
});
//获取打印部分的代码并打印
acquire.addEventListener('click',function (e) {
    e.stopPropagation();
    close_btn.style.opacity = 0;
    allHtml = window.document.body.innerHTML;
    printStart = "<!--startprint-->";
    printEnd = "<!--endprint-->";
    printHtml = allHtml.substr(allHtml.indexOf(printStart)+17);
    printHtml = printHtml.substring(0,printHtml.indexOf(printEnd));
    window.document.body.innerHTML = printHtml;
    window.print();
    window.document.body.innerHTML = allHtml;
    location.reload();
});
//按esc键关闭模态框
document.onkeydown = function (e) {
    e = e || window.event;
    if(e.keyCode==27){
        pover.style.display = 'none'
    }
};