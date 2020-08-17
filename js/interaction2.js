// Navegation Menu
let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');
var activador = true;

btnMenu.addEventListener('click', (event) => {

  barIconX.classList.toggle('fa-times');

   if(activador){
     menu.style.left = '0%'; 
     menu.style.transition = '0.5s';
  
     activador = false;
   }
   else{
    activador = false;
    menu.style.left = '-100%';

    activador = true;
   }

});



//Scroll efectos

 let prevScrollPos = window.pageYOffset;
 let goTop = document.querySelector('.go-top');
 menuContent.style.borderBottom = '3px solid #FD4A03';

window.onscroll = () => {
  
  //Esconder y mostrar - Scroll menú (Función)
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
    menuContent.style.transition = '0.5s';
  }else{
    menuContent.style.top = '-60px';
    menuContent.style.transition = '0.5s';
  }
  prevScrollPos = currentScrollPos;
  
}

//Go top click
goTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});



