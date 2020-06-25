
//Show mobile navigation side bar and animation

function navSlide(){
    var burger = document.querySelector(".burger");
    var nav= document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll('.nav-links li');

        burger.classList.toggle("toggle");
        nav.classList.toggle("nav-active");

        navLinks.forEach((link,index) =>{
            if (link.style.animation) {
                link.style.animation =""
            }else{
                link.style.animation = `mobileNavFade 2s ease both ${index/3}s`;
                
                // console.log(index/3);
            }     
        });
}

//Hide mobile navigation side bar
function hideNav(){
    var navList = document.querySelector(".list");
    var nav= document.querySelector(".nav-links");
    var burger = document.querySelector(".burger");
    // var navLinks = document.querySelectorAll('.nav-links li');
        burger.classList.toggle("toggle");
        nav.classList.toggle("nav-active");

    // navList.addEventListener("click", () => {
        

    //     console.log("can hide sidebar");
    // });
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

//Automated Slider
var sPos = 0;   
var timer= null;

function autoSlider(){
    console.log("AUTO plau")
    timer = setInterval(function(){
        
        if(sPos <= -200) {
            sPos = 0;
        } else {
            sPos -= 100;
        }
        removeLiActive();
        
        document.getElementById('slider').style.transform = 
        `translate( ${sPos}% , 0)`;

        console.log("current position is" + sPos) 

    },1500)
}

function stopSlider(){
    clearInterval(timer); 
    console.log("can stop");
}

function moveSlider(data){ 
    sPos += data;

    if (sPos < -200){
        sPos= 0;
    } 
    if (sPos > 0){
        sPos= -200;
    }else {
        sPos;
    } 

    console.log(sPos);
    
    document.getElementById('slider').style.transform = `translate(${sPos}% , 0)`;

   
    var li = document.querySelectorAll("li");
    for (var i=0; i<li.length ; i++) {
        console.log(i);
        li[i].className='';
    }

    if (sPos === 0){
        document.getElementById("dot1").className = "active";
    } else if (sPos === -100){
        document.getElementById("dot2").className = "active";
    } else if (sPos === -200){
        document.getElementById("dot3").className = "active";
    }
    
    
}

function showSlider(Pos){
    var li = document.querySelectorAll("li");
    for (var i=0; i<li.length ; i++) {
        console.log(i);
        li[i].className='';
    }

    var target = event.srcElement.id; 
    document.getElementById(target).className = "active";

    document.getElementById('slider').style.transform = `translate(${Pos}% , 0)`;
}

function removeLiActive(){
    var li = document.querySelectorAll("li");
    for (var i=0; i<li.length ; i++) {
        console.log(i);
        li[i].className='';
    }
    if (sPos === 0){
        document.getElementById("dot1").className = "active";
    } else if (sPos === -100){
        document.getElementById("dot2").className = "active";
    } else if (sPos === -200){
        document.getElementById("dot3").className = "active";
    }
}


//Integrate firebase web platform service into website
var firebaseConfig = {
    apiKey: "AIzaSyAwGEWlBetPCO1IdyXl-zU2eXc0ovwvWbU",
    authDomain: "personal-portfo0lio.firebaseapp.com",
    databaseURL: "https://personal-portfo0lio.firebaseio.com",
    projectId: "personal-portfo0lio",
    storageBucket: "personal-portfo0lio.appspot.com",
    messagingSenderId: "78612939666",
    appId: "1:78612939666:web:903eee2ee065c0367cb74b"
  };

  firebase.initializeApp(firebaseConfig);

var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var msgInput = document.getElementById("input-message");

document.addEventListener("keydown", function(e){
    console.log(e.keyCode);
        if(e.keyCode===13){
            sendInput();
        }
})

function sendInput(){
    //output the value from the variable
    console.log(nameInput.value, emailInput.value, msgInput.value);

    if(!nameInput.value == "" && !emailInput.value == "" && !msgInput.value == ""){
        console.log("not empty");
        //upload data to firebase
        firebase.database().ref().child("newConnection").push({
            name:nameInput.value,
            email:emailInput.value,
            msg: msgInput.value,

        }, function (){
            //call back function - ES6
            console.log("SEND DONE");
            //tagret element become empty after click send
            nameInput.value="";
            emailInput.value="";
            msgInput.value="";
        })
    } else{
        console.log("is empty");
        alert("Please fill in all the fields.");
    }
}