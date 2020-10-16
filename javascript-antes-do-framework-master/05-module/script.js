//(import) para trazer funções de outro arquivo.js

import { areaQuadrado, perimetroQuadrado } from "./quadrado.js";
// Após o import pode-se inserir qualquer nome mas recomenda-se o mesmo da função/objeto/const
import numeroAleatorio from "./numeroAleatorio.js";
import Circulo from "./Circulo.js";

console.log(areaQuadrado(4));
console.log(perimetroQuadrado(5));

console.log(numeroAleatorio());

console.log(Ciculo.area(5));
console.log(Ciculo.circunferencia(5));
console.log(Ciculo.aleatorio());
