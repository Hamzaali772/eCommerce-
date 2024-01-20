const forward=document.querySelector(".forward")
const back=document.querySelector(".back")

const slider=document.querySelector('.slider')
const slider_item=document.querySelector('.slider .slide')
const slideWidth=slider_item.offsetWidth;


let currentSlide=0;
let sliditem=1;
function slideUpdate(){
        let translateX =currentSlide * slideWidth;
        slider.style.transform=`translateX(-${translateX}px)`
}

forward.addEventListener('click',()=>{
    currentSlide +=sliditem
    if(currentSlide + sliditem >slider.children.length){
            currentSlide=0;
    }
    slideUpdate();
})

back.addEventListener('click',()=>{
    if(currentSlide - sliditem < 0){
        currentSlide = slider.children.length - sliditem 
       }else{
        currentSlide -= sliditem
    }
    slideUpdate();
})

const product_page=document.getElementById("product-page")
const shop_page=document.getElementById("shop-page")
const other_page=document.getElementById("other-page")
const product_slide=document.querySelector(".product-slide")
const shop_slide=document.querySelector(".shop-slide")
const other_slide=document.querySelector(".other-slide")
console.log(shop_slide)
product_page.addEventListener('click', (e) => {
    e.preventDefault();
    if (product_slide) {
        shop_slide.style.display = 'none';
        other_slide.style.display = 'none';
        product_slide.style.display = 'block';
    }
});

shop_page.addEventListener('click', (e) => {
    e.preventDefault();
    if (shop_slide) {
        product_slide.style.display = 'none';
        other_slide.style.display = 'none';
        shop_slide.style.display = 'block';
    }
});

other_page.addEventListener('click', (e) => {
    e.preventDefault();
    if (other_slide) {
        product_slide.style.display = 'none';
        shop_slide.style.display = 'none';
        other_slide.style.display = 'block';
    }
});
const open_nav=document.querySelector(".open-nav");
const close_nav=document.querySelector(".close-nav");
const nav_ul=document.querySelector('.nav-ul')

open_nav.addEventListener("click",()=>{
    nav_ul.style.right='0px';
})

close_nav.addEventListener("click",()=>{
    nav_ul.style.right='-110%';
})