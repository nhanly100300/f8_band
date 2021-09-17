var count =1;
setInterval(()=>{
      document.getElementById('radio-' + count).checked =true;
      count++;
      if(count>3){
        count=1;
      }
},3000)

// menu
var header = document.getElementById('header')
var mobileMenu =document.getElementById('mobile-menu')
var headerHeight = header.clientHeight
// đóng / mở menu mobile
mobileMenu.onclick= function(){
    var isClosed = header.clientHeight === headerHeight
    if(isClosed){
        header.style.height = 'auto'
    }else{
        header.style.height = null
    }
}
//Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for(var i =0 ; i<menuItems.length;i++){
    var menuItem = menuItems[i];
    menuItem.onclick = function(){
        var isParenMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav') 
        if(isParenMenu){
            event.preventDefault();
        
        }else{
            header.style.height = null
        }
    }
}
// modal
const buyBtns = document.querySelectorAll('.js-buy-ticket'); 
        const modal = document.querySelector('.js-modal');
        const modalClose = document.querySelector('.js-modal-close');
        const modalContainer = document.querySelector('.js-modal-container');
        //hàm hiển thị modal buyTickets
        function showBuyTicket(){
            modal.classList.add('open');
        }
        //Hàm ẩn modal buyTickets
        function hideBuyTicket(){
            modal.classList.remove('open');
        }
        //lặp qua từng thẻ button và nghe click
        for(const buyBtn of buyBtns ){
            buyBtn.addEventListener('click', showBuyTicket)
        }
        //nghe click để close
        modalClose.addEventListener('click', hideBuyTicket)

        modal.addEventListener('click' , hideBuyTicket)    

        modalContainer.addEventListener('click' , function(event){
            event.stopPropagation();
        })