
let num = document.querySelector(".numero")
const btn = document.querySelector(".calcular")
const p = document.querySelector(".respuesta")


btn.addEventListener('click',armstrong)

function armstrong() {
let num2 = Number(num.value)
num = num.value
num = num.split("")
let contador = 0

for (let i = 0; i < num.length; i++) {
  contador = contador + (Number(num[i])**num.length) 
  
  
}
console.log(contador)

if (contador === num2) {
  console.log("Es un numero de armstrong")
  p.innerHTML = "Es un numero de armstrong"
  
  
}
else{
  console.log("No es un numero de armstrong")
  p.innerHTML = "No es un numero de armstrong"
}


}