document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider(".swiper-container");
    hero.start();
    
    const cb = function (el, inview) {
        if(inview) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb);

    const inviewAnimation= function(el,inview){
        if (inview) {
            el.classList.add('inview')
        } else {
            el.classList.remove("inview");
        }
    }
    const so2 = new ScrollObserver('cover-slide', inviewAnimation);
});

