const numero = prompt(
  "óla eu sou o robo da Tabuada!\n" + "Informe o numero que voce deseja calcular:"
);

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " *  " + fator + " = " + numero * fator + "\n";
}

alert(" Resultado da tabuada de " + numero + ":\n\n" + resultado);
