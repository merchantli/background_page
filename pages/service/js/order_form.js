let orders = document.querySelectorAll('.order'),
    orders_1 = document.querySelectorAll('.order_1'),
    pover = document.querySelector('.popoverr'),
    popover_1 = document.querySelector('.popover_1'),
    acquire = document.querySelector('.popoverr .acquire'),
    close_btn1 = document.querySelector('.popoverr .top_close'),
    acquire_t = document.querySelector('.popover_1 .acquire'),
    close_btn_t = document.querySelector('.popover_1 .top_close');
let allHtml = '',
    printHtml = '',
    printStart = '',
    printEnd = '';
orders_1.forEach((item,index)=>{
    item.addEventListener('click',function (e) {
        e = e || window.event;
        e.stopPropagation();
        popover_1.style.display = 'block';
    });
    close_btn_t.addEventListener('click',function (e) {
        e.stopPropagation();
        popover_1.style.display = 'none';
    });
});
orders.forEach( (item,index)=>{
    item.addEventListener('click',function (e) {
        e = e || window.event;
        e.stopPropagation();
        pover.style.display = 'block';
        //发起ajax
        //姓名user_name 性别gender 省份province 城市city 户口性质account_property 定点医院hospital
        //身份证号id_card 银行卡号bank_card 手机号码phone_number 社保账号prevent_number
        //邮箱email 邮寄地址delivery_address 加入时间join_in 最后登录时间last_login
        // $.get({
        //     url:"http://47.107.72.6:8000/background/get_user_detail/用户id/",
        //     callback : function (data) {
        //         let new_data = JSON.parse(data);
        //         for(var key in new_data){
        //             switch (key) {
        //                 case 'username':
        //                     $('#user_name').text(new_data[key]);
        //                     break;
        //                 case 'sex':
        //                      if(new_data[key] = 1){
        //                          $('#gender').text(男);
        //                      }else{
        //                          $('#gender').text(女);
        //                      }
        //
        //                     break;
        //                 case 'province':
        //                     $('#province').text(new_data[key]);
        //                     break;
        //                 case 'city':
        //                     $('#city').text(new_data[key]);
        //                     break;
        //                 case 'account_property':
        //                      if(new_data[key]='county'){
        //                          $('#account_property').text(城市户口);
        //                      }else{
        //                          $('#account_property').text(农村户口);
        //                      }
        //
        //                     break;
        //                 case 'hospital':
        //                     $('#hospital').text(new_data[key]);
        //                     break;
        //                 case 'idcard_no':
        //                     $('#id_card').text(new_data[key]);
        //                     break;
        //                 case 'bank_no':
        //                     $('#bank_card').text(new_data[key]);
        //                     break;
        //                 case 'mobile_num':
        //                     $('#phone_number').text(new_data[key]);
        //                     break;
        //                 case 'provident_fund_no':
        //                     $('#prevent_number').text(new_data[key]);
        //                     break;
        //                 case 'email':
        //                     $('#email').text(new_data[key]);
        //                     break;
        //                 case 'receive_address':
        //                     $('#delivery_address').text(new_data[key]);
        //                     break;
        //                 default :
        //                     ''
        //                     break;
        //             }
        //         }
        //     },
        //     type : 'json'
        // });
    });
    close_btn1.addEventListener('click',function (e) {
        e.stopPropagation();
        pover.style.display = 'none';
    });
} );

//获取打印部分的代码并打印
    //客户详情打印
acquire.addEventListener('click',function (e) {
    e.stopPropagation();
    close_btn1.style.opacity = 0;
    acquire.style.opacity = 0;
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
    //订单详情打印
acquire_t.addEventListener('click',function (e) {
    e.stopPropagation();
    close_btn_t.style.opacity = 0;
    acquire_t.style.opacity = 0;
    allHtml = window.document.body.innerHTML;
    printStart = "<!--orderprint-->";
    printEnd = "<!--orderend-->";
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
        pover.style.display = 'none';
        popover_1.style.display = 'none';
    }
};