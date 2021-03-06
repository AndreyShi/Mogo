
window.addEventListener('DOMContentLoaded',() => {
    'use strict';    
    const scrolling = (upSelector) => {
        const upElem = document.querySelector(upSelector)
        window.addEventListener('scroll', () => {
            if(document.documentElement.scrollTop > 800){
                upElem.classList.add('animated','fadeIn');
                upElem.classList.remove('fadeOut');
                upElem.style.opacity = 1;
            }else{
                upElem.classList.add('fadeOut');
                upElem.classList.remove('fadeIn');
                upElem.style.opacity = 0;
            }
        });
         //Scrolling with request animation frame 
    
        let links = document.querySelectorAll('[href^="#"]'),
            speed = 0.2;
    
        links.forEach(link => {
            link.addEventListener('click',function(event){
                event.preventDefault();
                if(this.hash){                                    
                    let widthTop = document.documentElement.scrollTop,
                    hash = this.hash,
                    toBlock = document.querySelector(hash).getBoundingClientRect().top,
                    start = null;
    
                    requestAnimationFrame(step);
    
                    function step(time){
                        if(start === null){
                         start = time;
                        }
    
                        let progress = time - start,
                        r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));
                        document.documentElement.scrollTo(0,r);
    
                        if(r != widthTop + toBlock){
                            requestAnimationFrame(step);
                        }else{
                            location.hash = hash;
                        }
                    }
                }                
            });
        });
    };


    const accordion = (triggersSelector) =>{
        const btns = document.querySelectorAll(triggersSelector);
            btns.forEach(btn =>{
            btn.addEventListener('click',function(){
                btns.forEach(btn_ =>{
                    if(btn != btn_)
                        btn_.classList.remove('active');
                });

                this.classList.toggle('active');
            });
        });
    }

    scrolling('.pageup');
    accordion('.acc_item');


});