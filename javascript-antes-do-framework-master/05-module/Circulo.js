import numeroAleatorio from "./numeroAleatorio.js";

function area(raio) {
  return Math.PI * raio * raio;
}

function circunferencia(raio) {
  return 2 * raio * Math.PI;
}

function aleatorio() {
  return numeroAleatorio();
}
//const(constante) é como se fosse uma variavel que pode colocar chaves e escrever dentro dela 
const Circulo = {
  area,
  circunferencia,
  aleatorio
};

export default Circulo;
