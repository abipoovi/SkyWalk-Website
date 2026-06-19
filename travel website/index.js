AOS.init(
    {
        once:false,
        duration:2000,
        dealy:100,
        easing:'ease',

    
    });

const menuBtn=document.querySelector(".menu-btn");
const navlinks=document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>{
    navlinks.classList.toggle("active");
})
