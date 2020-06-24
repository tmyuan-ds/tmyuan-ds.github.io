

            var burger = document.querySelector('burger');
            var nav= document.querySelector('.nav-links');
            var navLinks = document.querySelectorAll('.nav-links li');
           
            function navSlide(){
            var burger = document.querySelector(".burger");
            var nav= document.querySelector(".nav-links");
            var navLinks = document.querySelectorAll('.nav-links li');

            burger.addEventListener("click", ()=> {
                burger.classList.toggle("toggle");
                nav.classList.toggle("nav-active");

                navLinks.forEach((link,index) =>{
                    if (link.style.animation) {
                        link.style.animation =""
                    }else{
                        link.style.animation = `mobileNavFade 2s ease both ${index/3}s`;
                        
                        console.log(index/3);
                    }     
                });
            
                
            });

            }

            //Hide and show navigation bar 
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                console.log("currentScrollspos is,", currentScrollPos);
                console.log("prevScrollspos is", prevScrollpos);

                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("header").style.top = "0";
                } else {
                    document.getElementById("header").style.top = "-100px";
                }
                prevScrollpos = currentScrollPos;
            }

            //Dectect scroll movement to activate animation for every section
            var secTwo = document.getElementById("section2-about");
            var secThree = document.getElementById("section3-selectedProject");
            var secFour = document.getElementById("section4-getInTouch");

            window.addEventListener('scroll', function(){
                console.log("Sec Two:", secTwo.offsetTop, ", scroll: ", window.scrollY);
                console.log("Sec Three:", secThree.offsetTop,", scroll: ", window.scrollY);
                console.log("Sec Four:", secFour.offsetTop, ", scroll: ", window.scrollY);
                console.log("can fade")

                if (window.scrollY >= secTwo.offsetTop - 600){
                    secTwo.style.opacity =1;
                    secTwo.style.animation ="fadeInContent 2s";
                }
                if (window.scrollY >= secThree.offsetTop - 600){
                    secThree.style.opacity =1;
                    secThree.style.animation ="fadeInContent 2s";
                }
                if (window.scrollY >= secFour.offsetTop - 600){
                    secFour.style.opacity =1;
                    secFour.style.animation ="fadeInContent 2s";
                }
            })