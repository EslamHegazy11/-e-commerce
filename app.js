let opencart = document.getElementById("open cart")
let cart = document.querySelector(" .cart")
let closed = document.getElementById("closed")

opencart.addEventListener("click" , function(){
    cart.classList.add("active")

} )
 closed.addEventListener("click" , function(){
    cart.classList.remove("active")
 })
