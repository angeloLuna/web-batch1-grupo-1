// console.log('ciclos');


// let num = 11
// while (num <= 10) {
//   console.log(num);
//   num += 1
// }


// do {
//   console.log(num);
//   num += 1
// } while(num <= 10)


const nombres = ['angelo', 'Paulo', 'Alejandra', 'Mauro', 'Sam']

const palabra = 'reconocer'
const palabraNormal = prompt('ingresa un texto')
const sinEspacios = palabraNormal.replace(/ /g, "")
console.log(sinEspacios);

let esPalindromo = true

for (let i = 0; i < sinEspacios.length; i++) {
  // console.log(sinEspacios[i]);
  // console.log(sinEspacios[sinEspacios.length - i - 1]);

  if (sinEspacios[i]  != sinEspacios[sinEspacios.length -i -1]) {
    esPalindromo = false
    // console.log('es palindromo')
  }
}
 
if (esPalindromo) {
  console.log('La palabra es un palindromo')
} else {
  console.log('La palabra No es un palindromo')
}








// ciclo que comience en - 1000 e incremente de dos en dos hasta 3000

// ciclo que solo muestre los numeros pares del 0 al 100

'anita lava la tina'

// ciclo que te diga si una frase es un palindromo

