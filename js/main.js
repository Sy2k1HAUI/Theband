
// var myIndex = 0;
// carousel();
// function carousel() {
// var i;
// var x = document.getElementsByClassName("myslide");
//     for (i = 0; i < x.length; i++) {
//        x[i].style.display = "none";  
//         }
//       myIndex++;
//     if (myIndex > x.length) {myIndex = 1}    
//     x[myIndex-1].style.display = "block";  
//     setTimeout(carousel, 2000); // Change image every 2 seconds
//     }             



var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
//Đóng mở menu mobile
mobileMenu.onclick = function(){
   var isClosed = header.clientHeight === headerHeight;
   if(isClosed){
       header.style.height ='auto';
   } else{
       header.style.height = null;
   }
}
//Tự động đóng khi chọn phần tử trong menu
   var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for(i=0;i<menuItems.length;i++){
         var menuItem = menuItems[i];
         menuItem.onclick = function(event){
      var isParentMenu = this.nextElementSibling  && this.nextElementSibling.classList.contains('subnav');
          if(isParentMenu){
              event.preventDefault();
          }else{
              header.style.height = null;
          }
      }
  }



const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
//hàm thêm class open vào modal
function showbuyTickets() {
 modal.classList.add('open');
      }
//hàm ẩn modal mua vé (gỡ class open của modal)
function hidebuyTickets() {
 modal.classList.remove('open')
      }
//lặp qua từng thẻ button rồi lắng nghe click
   for(const buyBtn of buyBtns){
       buyBtn.addEventListener('click', showbuyTickets)
      }
modalClose.addEventListener('click',hidebuyTickets)
modal.addEventListener('click',hidebuyTickets)
modalContainer.addEventListener('click', function(event){
  event.stopPropagation()
      })    
