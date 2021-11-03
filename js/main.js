//font-variation-settings: "TIME" 1;

const button = document.querySelector('.icon');
const menu = document.querySelector('.header__menu');
let i = 0;
button.addEventListener('click',(e)=>{
    i++;
    e.target.classList.toggle('ia');
    if (i == 1){
        menu.style.transform = 'none';
    } else {
        menu.style.transform = 'translateY(-200%)';
        i = 0;
    }
});
window.addEventListener('resize',()=>{
    if (window.innerWidth >= 1000){
        menu.style.transform = 'none'
    } else{
        menu.style.transform = 'translateY(-200%)';
    }
})