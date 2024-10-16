
function suma (a, b) {
  return a + b
}

const resta = (a, b) => a - b


// suma(10, 20)
// suma(1, 1)
// suma(300, 200)


console.log(suma(5,5))
console.log(resta(5,5))

let texto = 'hola'

let resultado = resta(100, 5999)


// console.log( resta( resta(100, 20), resta(200, 50) ) ) 

const button = document.querySelector('#button')
const text = document.querySelector('#text')

let contador = 0

button.addEventListener('click', () => {
  contador += 1
  console.log('click', contador)
  text.innerHTML = 'click número: ' + contador
})



console.log( text )

