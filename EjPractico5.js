const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeros = [];

const solicitarNumeros = (contador = 0) => {
  if (contador < 6) {
    rl.question(`Introduce el número ${contador + 1}: `, (input) => {
      const numero = parseFloat(input);
      if (!isNaN(numero)) {
        numeros.push(numero);
        solicitarNumeros(contador + 1); 
      } else {
        console.log('Por favor, introduce un número válido.');
        solicitarNumeros(contador); 
      }
    });
  } else {
    const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    console.log('La suma de los números es:', suma);
    rl.close(); 
  }
};

solicitarNumeros();
