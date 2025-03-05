let ham_menu = document.querySelector(".navbar-hamburger i")
let hamburger_menu = document.getElementsByClassName("hamburger-menu")[0]
let close = document.querySelector(".close")
let contentWrapper = document.querySelectorAll(".container-wrapper");

ham_menu.addEventListener("click",()=>{
    let hamburger_menu = document.getElementsByClassName("hamburger-menu")[0]
    
    hamburger_menu.style.display = "block"; 
    close.style.display="block"
    ham_menu.style.display="none"
    contentWrapper.forEach(element => {
        element.classList.add("hidden");})

})
let ham_options = document.querySelectorAll(".ham-options li")
console.log(ham_options)
ham_options.forEach((option)=>{
    option.addEventListener("click",()=>{
        hamburger_menu.style.display = "none"; 
         close.style.display="none"
        ham_menu.style.display="block"
        contentWrapper.forEach(element => {
            element.classList.remove("hidden");})
    })
})
close.addEventListener("click",()=>{
    close.style.display="none"
    ham_menu.style.display="block"
    hamburger_menu.style.display = "none"; 
    contentWrapper.forEach(element => {
        element.classList.remove("hidden");})
})