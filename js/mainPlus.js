const number = document.querySelectorAll(".sec button")
const screen = document.querySelector(".tela")
const res = document.querySelector(".resp")
const somar = document.querySelector(".soma")
const telaRes = document.querySelector(".tela-resultado")
const del = document.querySelector(".delete")
const tooltip = document.querySelectorAll('[data-tooltip]')
const clear = document.querySelector('.clear')
let lux = 0
var num = []
 
 
 
telaRes.addEventListener("click", () => {
    console.log("works")
    screen.innerHTML = telaRes.innerHTML
    telaRes.innerHTML = " "
})
 
function mostreIndex(conteudo) {
    lux = screen.innerHTML += conteudo
    console.log(lux)
}
 
 
number.forEach((element, index) => {
    var conteudo = element.innerHTML
    element.addEventListener("click", () => {
        mostreIndex(conteudo)
        // del(conteudo)
    })
});
 
del.addEventListener("click", () => {
 
    console.log("rolou")
 
    screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1)
    console.log(screen.innerHTML)
    //mostreIndex(screen.innerHTML)
})
 
clear.addEventListener("click", () => {
    screen.innerHTML = ""
    telaRes.innerHTML = ""
 
})
 
res.addEventListener("click", () => {
    console.log(lux)
    console.log(eval(lux))
    telaRes.innerHTML = eval(lux)
})
