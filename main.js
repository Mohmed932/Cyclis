var menu = document.querySelector(".menu");
var side = document.querySelector(".side");
var clo = document.querySelector(".clo");
var link = document.querySelector(".link");
var mailadres = document.querySelector(".mailadres");
var Voorname = document.querySelector(".Voorname");
var leavetotop = document.querySelector(".leavetotop");
menu.onclick = function(){
    side.classList.add("active");
}
clo.onclick = function(){
    side.classList.remove("active");
}
link.onclick = function(){
    side.classList.remove("active");
}
mailadres.onkeyup = function(){
    if(mailadres.innerHTML = !""){
        Voorname.classList.add("play");
    }else{
        Voorname.classList.remove("play");
    }
}
window.onscroll = function(){
    if(window.scrollY>50){
        leavetotop.classList.add("can");
    }else{
        leavetotop.classList.remove("can");
    }
}
