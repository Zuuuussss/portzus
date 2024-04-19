/*==================== SHOW MENU ====================*/
/*const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}*/


//showMenu('bx','menu-mobile');




    
    
/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
  const nav = document.querySelector('.bg-header');
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}

window.addEventListener('scroll', scrollHeader)


/*==================== GSAP ====================*/  

/*--=========== GSAP SCROLLTRIGGER ============- */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    /*--=========== TIMELINE LOADING E HERO ============- */
    var tl1 = gsap.timeline();


    tl1
    .to('.screen-loading', {
        duration: 2,
        opacity: 0, 
        delay: 4,
        ease: "power4.out",
    })
    .from(".bg-hero", {
        duration: 2, 
        opacity: 0, 
        ease: "power4.out",
    }, '-=1.5')
    .from(".logo", {
        duration: 1, 
        opacity: 0,
        y: 200,
        ease: "power4.out",
    }, '-=0.2')
    .from(".container-hero .grid-7 div", {
        duration: 2,  
        opacity: 0, 
        y: 200,
        stagger:{each: 0.1},
        ease: "power4.out",
    }, '-=1.9')
    .from(".container-hero .grid-5 div", {
        duration: 2, 
        opacity: 0, 
        y: 200,
        stagger:{each: 0.1},
        ease: "power4.out",
    }, '-=1.9')


    gsap.from("#text-creative",{
        x: 100,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#text-creative',
            start: 'top 80%',
            end: 'bottom 00%',
            scrub: 1,
        }
    });

    gsap.to("#text-uimotion",{
        x: 100,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#text-uimotion',
            start: 'top 80%',
            end: 'bottom 00%',
            scrub: 1,
        }
    });



    /////////////////////////////////
    // SECTIONS
    /////////////////////////////////
    gsap.from("#section-iam div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#section-iam',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#works div",{
        opacity: 0,
        y: 200,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.1}, 
        scrollTrigger:{
            trigger: '#works',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#texts-about div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#texts-about',
            start: 'top+=2800 80%',
            end: 'bottom 00%',
            //markers: true,
            
        }
    });

    gsap.from("#section-myskills div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#section-myskills',
            start: 'top+=2800 80%',
            end: 'bottom 00%',
            //markers: true,
        }
    });

    gsap.from("#section-courses div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#section-courses',
            start: 'top+=2800 80%',
            end: 'bottom 00%',
            //markers: true, 
        }
    });

    gsap.from("#section-letsconnect div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#section-letsconnect',
            start: 'top+=2800 80%',
            end: 'bottom 00%',
            //markers: true, 
        }
    });

    gsap.from("#section-links div div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.3}, 
        scrollTrigger:{
            trigger: '#section-links',
            start: 'top+=2800 80%',
            end: 'bottom 00%',
            //markers: true,
        }
    });



    ////////////////////////////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////

    var tl_text = gsap.timeline();

    tl_text
    .from(".text1-3d", {
        opacity: 0,
        scrollTrigger:{
            trigger: '.text1-3d',
            start: 'center 50%',
            end: 'center 00%',
            pin: true,
            scrub: true,
            //markers: true,
        },
        onStart: function(){
            gsap.to(".square-animation", {
                opacity: 1,
                rotate: 180,
                scrollTrigger:{
                    trigger: '.text1-3d',
                    start: 'center 50%',
                    end: 'center 00%',
                    pin: true,
                    scrub: true,
                    //markers: true,
                }
            })
        }
    })
    .from(".text2-3d", {
        opacity: 0,
        scrollTrigger:{
            trigger: '.text2-3d',
            start: 'center 50%',
            end: 'center 00%',
            pin: true,
            scrub: true,
            //markers: true,
        },
        onStart: function(){
            gsap.to(".square-animation", {
                opacity: 1,
                rotate: 0,
                scrollTrigger:{
                    trigger: '.text2-3d',
                    start: 'center 50%',
                    end: 'center 00%',
                    pin: true,
                    scrub: true,
                    //markers: true,
                }
            })
        }
    })
    .from(".text3-3d", {
        opacity: 0,
        scrollTrigger:{
            trigger: '.text3-3d',
            start: 'center 50%',
            end: 'center 00%',
            pin: true,
            scrub: true,
            //markers: true,
        },
        onStart: function(){
            gsap.to(".square-animation", {
                opacity: 1,
                x: -120,
                borderRadius: '0%',
                scale: 0.5,
                scrollTrigger:{
                    trigger: '.text3-3d',
                    start: 'center 50%',
                    end: 'center 00%',
                    pin: true,
                    scrub: true,
                    //markers: true,
                }
            })
        }
    })
    .from(".text4-3d", {
        opacity: 0,
        scrollTrigger:{
            trigger: '.text4-3d',
            start: 'center 50%',
            end: 'center 00%',
            pin: true,
            scrub: true,
            //markers: true,
        },
        onStart: function(){
            gsap.to(".square-animation", {
                opacity: 1,
                x: 100,
                transform: 'translate(-50%, -50%)',
                scrollTrigger:{
                    trigger: '.text4-3d',
                    start: 'center 50%',
                    end: 'center 00%',
                    pin: true,
                    scrub: true,
                    //markers: true,
                }
            })
        }
    })
    .from(".text5-3d", {
        opacity: 0,
        scrollTrigger:{
            trigger: '.text5-3d',
            start: 'center 50%',
            end: 'center 00%',
            pin: true,
            scrub: true,
            //markers: true,
        },
        onStart: function(){
            gsap.to(".square-animation", {
                opacity: 1,
                x: 0,
                scale: 1,
                rotate: 120,
                transform: 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)',
                scrollTrigger:{
                    trigger: '.text5-3d',
                    start: 'center 50%',
                    end: 'center 00%',
                    pin: true,
                    scrub: true,
                    //markers: true,
                }
            })
        }
    })
    .from(".text6-3d", {
        opacity: 0,
        scrollTrigger:{
            trigger: '.text6-3d',
            start: 'center 50%',
            end: 'center 00%',
            pin: true,
            scrub: true,
            //markers: true,
        },
        onStart: function(){
            gsap.to(".square-animation", {
                opacity: 1,
                x: 0,
                scale: 1,
                rotate: 0,
                transform: 'translate(-50%, -50%) rotateX(220deg) rotateY(10deg)',
                scrollTrigger:{
                    trigger: '.text6-3d',
                    start: 'center 50%',
                    end: 'center 00%',
                    pin: true,
                    scrub: true,
                    //markers: true,
                }
            })
        }
    })
    .from(".text7-3d", {
        opacity: 0,
        scrollTrigger:{
            trigger: '.text7-3d',
            start: 'center 50%',
            end: 'center 00%',
            pin: true,
            scrub: true,
            //markers: true,
        },
        onStart: function(){
            gsap.to(".square-animation", {
                opacity: 0,
                x: 0,
                scale: 0,
                rotate: 0,
                transform: 'translate(-50%, -50%) rotateX(240deg) rotateY(30deg)',
                scrollTrigger:{
                    trigger: '.text7-3d',
                    start: 'center 50%',
                    end: 'center 00%',
                    pin: true,
                    scrub: true,
                    //markers: true,
                }
            })
        }
    })

});

//ScrollTrigger.addEventListener("scrollStart", () => ScrollTrigger.refresh() );



    


