const bar =document.querySelector("#bar")
let nav = document.querySelector("#navbar")
let close = document.querySelector("#close")

console.log("hello");
if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active")
    })
}
else{
    close.addEventListener("click",()=>{
        nav.classList.remove("active")
    })
}
