(function(){

const carouselBtnLeft = document.querySelector('.carousel_btn--left');
const carouselBtnRight = document.querySelector('.carousel_btn--right');
const carouselContents = document.querySelectorAll('.carousel_content');
const carouselNavPointers = document.querySelectorAll('.carousel_nav-pointer');

carouselContents.forEach(content => content.style.display = 'none');

// carousel navigation fuction
function carouselRemove(value){
    carouselContents[value].style.display = 'none' ;
    carouselNavPointers[value].classList.remove('pointer-active');
}

function carouselAdd(value){
    carouselNavPointers[value].classList.add('pointer-active');
    carouselContents[value].style.display = 'flex' ;  

}



// display carousel first item function *autostart
(function carouselFirstDisplay(){
    carouselNavPointers[0].classList.add('pointer-active');
    carouselContents[0].style.display = 'flex' ;
})()






let number = 1;

carouselBtnRight.addEventListener('click', ()=>{ 
    if(number < carouselContents.length){
        carouselRemove(number-1) ;
        carouselAdd(number) ;
        number++ ;
        
    }else{
        number = 0;
        carouselAdd(number) ;
        carouselRemove(carouselContents.length-1) ;
        number++ ;
    }  
})

carouselBtnLeft.addEventListener('click', ()=>{ 
    if(number > 1 ){
        number -=1 ;
        carouselRemove(number) ;
        carouselAdd(number-1) ;
        
    }else{
        carouselRemove(0) ;
        carouselAdd(carouselContents.length -1 ) ;
        number = carouselContents.length 
    }
})










})()