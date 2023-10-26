 let berger = document.querySelector('.bergerMenu')
 let nav = document.querySelector('nav')
 let lespage = document.querySelector('.lespage')  


//menu burger//
 berger.addEventListener('click',function () {
 nav.classList.toggle("menuDrop")
 lespage.classList.toggle("menuDrop")
 login.classList.toggle("menuDrop")
    
 })




/////////modals /////////////////
var modal1 = document.getElementById("modal1");
var learnMoreLinks = document.querySelectorAll(".more");
var close1 = modal1.querySelector(".close");

console.log(learnMoreLinks)

learnMoreLinks.forEach((link)=>{
  link.addEventListener('click',function () {
    modal1.style.display="block"
  })
})


close1.addEventListener('click',function(){
  modal1.style.display="none"
}  )

//form

