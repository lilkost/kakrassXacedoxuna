// включение бегущей строки
new Marquee('marquee', {
    speed: 1,
    loops: true,
    process: .45// default: .5
});
// активация модалок с видео
Fancybox.bind("[data-fancybox]", {
    // Ваши настраиваемые параметры
  });
// активация слайдера
const swiper = new Swiper('.rewiew__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: false,

    breakpoints: {
        481: {
            slidesPerView: 4,
            spaceBetween: 20,
            centeredSlides: false
        },
        280:{
            loop: true,
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 15,
            initialSlide: 2,
        }
    }
});
// открытие/скрытие аккардеона
if(document.querySelector(".program__accordion")) {
    const accordion = document.querySelectorAll('.program__accordion');

    accordion.forEach(acc=> {
        const top = acc.querySelector('.program__accordion-top');

        top.addEventListener("click", ()=>{
            acc.classList.toggle("is-active")
        })
    })
}
// бургер меню
if(document.querySelector('.burger-btn')) {
    const burgerBtn = document.querySelector(".burger-btn");
    const header = document.querySelector(".header");

    burgerBtn.addEventListener("click", ()=> {
        header.classList.toggle("is-active");
        document.querySelector("body").classList.toggle("is-hidden");
    })
}

// позиционирование бегущей строки
if(document.querySelector(".top__box")) {
    document.addEventListener("DOMContentLoaded", ()=> {
        const topBox = document.querySelector(".top__box");
        const textNode = document.querySelector(".top__texts");
        const paragraphNodes = textNode.querySelectorAll('p');
        const marquee = document.querySelector(".top__marquee");
    
        const setPositionBLock = () => {
            const size = {
                parent: topBox.clientHeight,
                last: paragraphNodes[paragraphNodes.length - 1].clientHeight
            }
    
            let posY = size.parent - size.last;
    
            marquee.style = ` --posY: ${posY}px; overflow: hidden;`;
        }
    
        setPositionBLock();

        setTimeout(()=>{ 
            setPositionBLock();
        },300)
    
        window.addEventListener("resize", ()=> {
            setPositionBLock();
        })
    })
}

if(document.querySelector(".header__nav-item")) {
    const links = document.querySelectorAll(".header__nav-item a");

    links.forEach(link=> {
        link.addEventListener("click", ()=> {
            document.querySelector(".header").classList.remove("is-active");
            document.querySelector("body").classList.remove("is-hidden");
        })
    })
}
