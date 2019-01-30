const userr = document.querySelectorAll('.u_ser');
const pover = document.querySelector('.popoverr');
const closee = document.querySelector('.closee');
const acquire = document.querySelector('.acquire');
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
